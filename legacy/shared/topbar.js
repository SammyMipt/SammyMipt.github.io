/* Сквозная шапка статики: одна на всех страницах, подключается script-тегом
   после config.js и auth.js (по образцу analytics.js).

   Гость видит «Войти», вошедший — имя с ролью, ссылку в кабинет LMS
   и «Выйти». Вход живёт в куке LMS (auth.js), кабинет читает ту же куку,
   поэтому ссылка в кабинет обычная. На зеркале, куда кука не ходит,
   «Войти» ведёт на основной адрес. */

(function (global) {
  'use strict';

  var Auth = global.PlatformAuth;
  if (!Auth) return;

  /* Корень платформы из адреса самого скрипта: .../shared/topbar.js */
  var me = document.currentScript && document.currentScript.src;
  var root = me ? me.replace(/shared\/topbar\.js.*$/, '') : '../';

  var bar = document.createElement('div');
  bar.className = 'topbar';
  var inner = document.createElement('div');
  inner.className = 'topbar-inner';
  bar.appendChild(inner);

  var home = document.createElement('a');
  home.className = 'topbar-home';
  home.href = root + 'site/index.html';
  home.textContent = 'Физика 1';
  inner.appendChild(home);

  var right = document.createElement('span');
  right.className = 'topbar-right';
  inner.appendChild(right);

  function renderGuest() {
    var login = document.createElement('a');
    login.className = 'topbar-btn';
    login.href = Auth.cookieReaches()
      ? root + 'site/login.html?next=' + encodeURIComponent(location.href)
      : Auth.mainLoginUrl();
    login.textContent = 'Войти';
    right.appendChild(login);
  }

  function renderUser(user) {
    var who = document.createElement('span');
    who.className = 'topbar-user';
    who.textContent = (user.name || user.id) + ' · ' + Auth.roleLabel(user);
    right.appendChild(who);

    var cab = Auth.config.lmsCabinet;
    if (cab) {
      var link = document.createElement('a');
      link.className = 'topbar-btn';
      link.textContent = 'Кабинет';
      link.href = cab + '/';
      right.appendChild(link);
    }

    var out = document.createElement('button');
    out.className = 'topbar-btn topbar-logout';
    out.type = 'button';
    out.textContent = 'Выйти';
    /* Без ответа сервера кука жива и выхода не было: так и говорим. */
    out.addEventListener('click', function () {
      out.disabled = true;
      Auth.logout().then(function (ok) {
        if (ok) {
          location.reload();
          return;
        }
        out.disabled = false;
        who.textContent = 'Выйти не получилось: нет связи с системой курса';
      });
    });
    right.appendChild(out);
  }

  function mount() {
    document.body.insertBefore(bar, document.body.firstChild);
    Auth.getSession().then(function (user) {
      if (user) renderUser(user);
      else renderGuest();
    });
  }

  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})(window);
