/* Сессия LMS на страницах статики: vanilla, без сборки.

   С 26.10 вход живёт в куке __Host-lms_session на хосте LMS: её ставит и гасит
   сервер, она HttpOnly, и скрипты страницы её не видят. Витрина и LMS —
   один сайт (invariant.academy и lms.invariant.academy), поэтому браузер
   отправляет куку с запросами отсюда, если они сделаны с credentials:
   'include'. Контракт общий с модулем нового стека
   (platform/app/src/lib/session.ts):

   - каждый запрос к LMS с credentials: 'include' и заголовком
     X-Requested-With: invariant (без него сервер отвечает 403 на POST);
   - кто вошёл, говорит /api/auth/me, 401 — гость;
   - токена в браузере нет, ключи token и user прошлых версий стираются;
   - на зеркале sammymipt.github.io кука не ходит: там гость и вход на
     основном адресе (cookieReaches, mainLoginUrl).

   Ошибки API статику не роняют: нет сети, CORS, протухший вход —
   страница живёт гостевой, в консоли warning. */

(function (global) {
  'use strict';

  var cfg = global.PLATFORM_CONFIG || {};
  var sessionPromise = null; /* кэш на страницу: /auth/me зовём один раз */

  /* Основной адрес витрины: на нём вход работает. */
  var MAIN_SITE = 'https://invariant.academy';
  var LEGACY_KEYS = ['token', 'user'];
  /* Метка «в этом браузере входили» ('1'), общая с session.ts. */
  var WAS_IN_KEY = 'lmsSignedIn';

  function storages() {
    var out = [];
    try { if (global.localStorage) out.push(global.localStorage); } catch (e) { /* песочница */ }
    try { if (global.sessionStorage) out.push(global.sessionStorage); } catch (e) { /* песочница */ }
    return out;
  }

  /* Токен и пользователь прошлых версий: токен там ещё может быть живым. */
  function forgetOldVersions() {
    storages().forEach(function (s) {
      LEGACY_KEYS.forEach(function (k) {
        try { s.removeItem(k); } catch (e) { /* приватный режим */ }
      });
    });
  }
  forgetOldVersions();

  function markSignedIn(yes) {
    try {
      if (yes) global.localStorage.setItem(WAS_IN_KEY, '1');
      else global.localStorage.removeItem(WAS_IN_KEY);
    } catch (e) { /* приватный режим */ }
  }

  function isUser(v) {
    return v !== null && typeof v === 'object' && !Array.isArray(v) &&
      typeof v.role === 'string' && v.role !== '';
  }

  /* Сайт хоста: две последние метки имени, у localhost и адресов всё имя. */
  function siteOf(host) {
    var h = String(host || '').toLowerCase().replace(/\.$/, '');
    if (h.indexOf('.') < 0 || /^[\d.]+$/.test(h) || h.indexOf(':') >= 0 || h.charAt(0) === '[') {
      return h;
    }
    return h.split('.').slice(-2).join('.');
  }

  /* Дойдёт ли кука LMS до запросов этой страницы: страница и LMS на одном
     сайте. На зеркале и без адреса LMS — нет. */
  function cookieReaches() {
    var page = global.location && global.location.hostname;
    var m = /^[a-z][a-z0-9+.-]*:\/\/(\[[^\]]*\]|[^\/:?#]+)/i.exec(cfg.lmsApi || '');
    return !!page && !!m && siteOf(page) === siteOf(m[1]);
  }

  /* Вход на основном адресе; next — путь на нём, куда вернуться. */
  function mainLoginUrl(next) {
    return MAIN_SITE + '/login' + (next ? '?next=' + encodeURIComponent(next) : '');
  }

  /* fetch к API LMS по куке; path — от корня, '/api/...' */
  function authFetch(path, opts) {
    if (!cfg.lmsApi) {
      return Promise.reject(new Error('PLATFORM_CONFIG.lmsApi не задан'));
    }
    opts = opts || {};
    var headers = {};
    for (var k in (opts.headers || {})) headers[k] = opts.headers[k];
    headers['X-Requested-With'] = 'invariant';
    if (opts.body && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }
    var merged = {};
    for (var o in opts) merged[o] = opts[o];
    merged.headers = headers;
    merged.credentials = 'include';
    /* Ответ зависит от того, кто вошёл, — кешировать его нельзя ни на
       секунду: после смены роли браузер отдал бы старое. */
    merged.cache = 'no-store';
    return fetch(cfg.lmsApi + path, merged);
  }

  /* Сессия: вошёл — объект пользователя из /api/auth/me, иначе null. 401
     значит гость (вход погашен или его не было). Сетевые ошибки дают null
     с предупреждением в консоли: LMS могла быть просто выключена. На
     зеркале кука не ходит, туда и не спрашиваем. */
  function getSession() {
    if (sessionPromise) return sessionPromise;
    if (!cookieReaches()) return Promise.resolve(null);
    sessionPromise = authFetch('/api/auth/me')
      .then(function (r) {
        if (r.status === 401) {
          markSignedIn(false);
          return null;
        }
        if (!r.ok) throw new Error('auth/me: HTTP ' + r.status);
        return r.json().then(function (user) {
          if (!isUser(user)) throw new Error('auth/me: неожиданный ответ');
          markSignedIn(true);
          return user;
        });
      })
      .catch(function (e) {
        if (global.console && console.warn) {
          console.warn('[auth] сессия недоступна, страница гостевая:', e.message || e);
        }
        sessionPromise = null; /* не кэшируем сетевую ошибку */
        return null;
      });
    return sessionPromise;
  }

  /* Тексты ошибок входа. Ответила ли сама система курса, видно по телу: её
     отказы всегда приходят объектом с полем detail. Остальное пришло не от
     неё: сеть не довела запрос, прокси площадки или фильтр сети университета
     ответили своей страницей. До 29.09 такой отказ показывался как «HTTP 403»
     или сырое «Failed to fetch» (WORK.md, лог решений 29.09). Тексты те же,
     что у кабинета LMS: lms/web/frontend/src/utils/errors.js.

     Витрина ходит в API с чужого origin, и ответ без заголовков CORS браузер
     ей не показывает: отказ прокси, 502 контейнера и необработанный 500 LMS
     приходят сюда так же, как обрыв связи, TypeError без кода. Различает их
     контрольный запрос в режиме no-cors: если сервер ответил хоть чем-то, он
     проходит, если связи нет, падает. */
  /* С 23.10 из России без VPN, из-за рубежа через VPN университета; см.
     lms/web/frontend/src/utils/errors.js. */
  var TEXT_OFFLINE = 'Нет связи с системой курса. Из России она открывается ' +
    'без VPN, из-за рубежа только через VPN университета. Если включён другой ' +
    'VPN, выключите его или попробуйте другую сеть.';
  var TEXT_TIMEOUT = 'Система курса не ответила за 30 секунд. Попробуйте ещё ' +
    'раз через минуту.';
  var TEXT_BROKEN_ANSWER = 'Система курса прислала неполный или чужой ответ. ' +
    'Попробуйте ещё раз; если повторится, смените сеть или переподключите VPN ' +
    'университета.';
  /* Код принят, а проверка /me сразу после входа ответила 401: браузер не
     принял куку входа. */
  var TEXT_NOT_SAVED = 'Код принят, но браузер не сохранил вход: похоже, он ' +
    'не принимает cookie этого сайта. Разрешите cookie и запросите новый код.';
  /* Только для витрины: код ответа отсюда не виден, а в кабинете виден. */
  var TEXT_HIDDEN_REFUSAL = 'Система курса или прокси по дороге к ней ответили ' +
    'отказом, но браузер не показывает его этой странице. Попробуйте ещё раз ' +
    'через несколько минут или войдите через кабинет курса: там будет виден ' +
    'код ошибки.';
  var TIMEOUT_MS = 30000;
  var PROBE_TIMEOUT_MS = 5000;

  function statusText(status) {
    if (status === 403) {
      return 'Сеть или прокси не пропустили запрос к системе курса (ошибка ' +
        '403). Попробуйте другую сеть или VPN университета.';
    }
    if (status === 429) {
      return 'Сеть или прокси ограничили число запросов (ошибка 429). ' +
        'Подождите несколько минут и попробуйте снова.';
    }
    if (status >= 500) {
      return 'Система курса сейчас недоступна (ошибка ' + status + '). ' +
        'Попробуйте через несколько минут.';
    }
    return 'Запрос к системе курса не прошёл (ошибка ' + status + ').';
  }

  function isObject(data) {
    return data !== null && typeof data === 'object' && !Array.isArray(data);
  }

  /* Ошибка с готовым текстом для человека; loginError отличает её от сырых
     ошибок браузера, которые ещё предстоит разобрать. */
  function requestError(text, status, extra) {
    var err = new Error(text);
    err.loginError = true;
    if (status) err.status = status;
    for (var k in (extra || {})) err[k] = extra[k];
    return err;
  }

  /* Без таймаута fetch ждёт ответа сколько угодно, и форма висит молча. */
  function timeoutSignal(ms) {
    try {
      return typeof AbortSignal !== 'undefined' && AbortSignal.timeout
        ? AbortSignal.timeout(ms) : undefined;
    } catch (e) {
      return undefined;
    }
  }

  function isTimeout(e) {
    var name = e && e.name;
    return name === 'TimeoutError' || name === 'AbortError';
  }

  /* Ответил ли сервер хоть чем-то: true, false. */
  function serverAnswers() {
    var url = cfg.lmsApi + '/api/health';
    return fetch(url, { mode: 'no-cors', cache: 'no-store', signal: timeoutSignal(PROBE_TIMEOUT_MS) })
      .then(function () { return true; }, function () { return false; });
  }

  /* Обрыв без кода. Живой сервер значит, что отказ скрыл браузер. */
  function hiddenOrOffline() {
    return serverAnswers().then(function (alive) {
      return alive
        ? requestError(TEXT_HIDDEN_REFUSAL, 0, { cabinet: cfg.lmsCabinet || '' })
        : requestError(TEXT_OFFLINE);
    });
  }

  /* Таймаут запроса. Адрес системы снаружи кампуса молча глотает соединения,
     и на Mac, Linux и телефонах браузер ждёт дольше 30 секунд: без проверки
     студент без VPN читал бы «не ответила», а не подсказку про VPN. */
  function slowOrOffline() {
    return serverAnswers().then(function (alive) {
      return requestError(alive ? TEXT_TIMEOUT : TEXT_OFFLINE);
    });
  }

  function postJson(path, payload) {
    return authFetch(path, {
      method: 'POST',
      body: JSON.stringify(payload),
      signal: timeoutSignal(TIMEOUT_MS)
    }).then(function (r) {
      return r.json().catch(function (e) {
        /* Не JSON — значит, тело чужое. Обрыв или таймаут на середине тела
           разбираются ниже как ошибки связи. */
        if (e && e.name === 'SyntaxError') return null;
        if (isTimeout(e)) throw requestError(TEXT_TIMEOUT);
        throw requestError(TEXT_BROKEN_ANSWER, r.status);
      }).then(function (data) {
        if (!r.ok) {
          if (isObject(data) && 'detail' in data) {
            var detail = typeof data.detail === 'string' ? data.detail.trim() : '';
            throw requestError(detail || ('Система курса отклонила запрос (ошибка ' +
              r.status + ').'), r.status);
          }
          throw requestError(statusText(r.status), r.status);
        }
        /* Успешный код без объекта: иначе форма решила бы, что код
           отправлен, или впустила бы пользователя «undefined». */
        if (!isObject(data)) throw requestError(TEXT_BROKEN_ANSWER, r.status);
        return data;
      });
    }, function (e) {
      if (e && e.message === 'PLATFORM_CONFIG.lmsApi не задан') throw e;
      var check = isTimeout(e) ? slowOrOffline() : hiddenOrOffline();
      return check.then(function (err) { throw err; });
    });
  }

  /* Ответ, выдавший сессию: куку LMS уже поставила, пользователь в теле.
     Через /me проверяем, что браузер куку принял. Код к этому моменту уже
     погашен, и отказ браузера нельзя показывать как неверный код. Нет
     связи на проверке — верим ответу входа. */
  function confirmLogin(data) {
    if (!isUser(data.user)) throw requestError(TEXT_BROKEN_ANSWER);
    sessionPromise = null;
    return authFetch('/api/auth/me', { signal: timeoutSignal(TIMEOUT_MS) })
      .then(function (r) {
        if (r.status === 401) {
          markSignedIn(false);
          throw requestError(TEXT_NOT_SAVED);
        }
        if (!r.ok) return data.user;
        return r.json().then(function (me) {
          if (!isUser(me)) return data.user;
          var user = {};
          for (var k in data.user) user[k] = data.user[k];
          for (var j in me) user[j] = me[j];
          return user;
        }, function () { return data.user; });
      }, function () {
        return data.user;
      })
      .then(function (user) {
        markSignedIn(true);
        return user;
      });
  }

  /* Шаг 1: код на почту. Ответ API включает totp_enabled — тогда код
     ждём из приложения-аутентификатора, письмо не отправлялось. */
  function requestCode(email, fallback) {
    return postJson('/api/auth/email/request', {
      email: String(email),
      fallback: !!fallback
    });
  }

  /* Шаг 2: код из письма -> кука входа от LMS. «Запомнить» решает сервер:
     с ним кука живёт 28 дней, без него до закрытия браузера. */
  function verify(email, code, remember) {
    return postJson('/api/auth/email/verify', {
      email: String(email),
      code: String(code),
      remember: remember !== false
    }).then(confirmLogin);
  }

  /* Шаг 2 для тех, у кого настроен аутентификатор. */
  function verifyTotp(email, code, remember) {
    return postJson('/api/auth/totp/verify', {
      email: String(email),
      code: String(code),
      remember: remember !== false
    }).then(confirmLogin);
  }

  /* Вход без кода: работает, только пока API поднят с APP_ENV=dev — в другом
     режиме эндпоинта просто нет и запрос вернёт 404. Нужен на стенде, где
     письма никуда не уходят, а посмотреть систему надо всеми ролями сразу. */
  function devLogin(email) {
    return postJson('/api/auth/dev-login', {
      email: String(email)
    }).then(confirmLogin);
  }

  /* Режим стенда подтверждает сам API: статику можно открыть и с боевого
     домена, и с локальной сборки, по адресу об этом не догадаешься. */
  function isDev() {
    return authFetch('/api/health')
      .then(function (r) { return r.json(); })
      .then(function (d) { return !!d && d.app_env === 'dev'; })
      .catch(function () { return false; });
  }

  /* Выход на этом устройстве: сервер гасит вход и стирает куку, кабинет
     читает ту же куку, так что выходит и он. Стереть куку отсюда нельзя
     (HttpOnly), поэтому без ответа сервера выхода нет: промис даёт false,
     и страница говорит об этом. Ждём не дольше LOGOUT_TIMEOUT_MS. 401
     значит, что входа на сервере уже нет. */
  var LOGOUT_TIMEOUT_MS = 5000;

  function logout() {
    var done = function () {
      markSignedIn(false);
      sessionPromise = null;
      return true;
    };
    if (!cfg.lmsApi || !cookieReaches()) return Promise.resolve(done());
    return authFetch('/api/auth/logout', {
      method: 'POST',
      signal: timeoutSignal(LOGOUT_TIMEOUT_MS)
    }).then(function (r) {
      return (r.ok || r.status === 401) ? done() : false;
    }, function () {
      return false;
    });
  }

  /* Роль LMS -> роль страниц (blocks-runtime): владелец видит материалы
     преподавателя, у неизвестной роли гостевой доступ. */
  function pageRole(user) {
    if (!user) return 'гость';
    if (user.role === 'student') return 'студент';
    if (user.role === 'teacher' || user.role === 'owner') return 'преподаватель';
    return 'гость';
  }

  /* Подпись роли для шапки. */
  function roleLabel(user) {
    if (!user) return '';
    return { student: 'студент', teacher: 'преподаватель', owner: 'владелец' }[user.role] || user.role;
  }

  global.PlatformAuth = {
    config: cfg,
    MAIN_SITE: MAIN_SITE,
    cookieReaches: cookieReaches,
    mainLoginUrl: mainLoginUrl,
    getSession: getSession,
    authFetch: authFetch,
    requestCode: requestCode,
    verify: verify,
    verifyTotp: verifyTotp,
    devLogin: devLogin,
    isDev: isDev,
    logout: logout,
    pageRole: pageRole,
    roleLabel: roleLabel
  };
})(window);
