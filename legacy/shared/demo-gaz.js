/* DemoGaz — газ твёрдых шаров событийным счётом, общий для демок девятой
   недели «Газ из молекул», «Поршень и молекулы» и «Два газа через стенку».

   Бриф производства briefs/proizvodstvo09.md, раздел «Демки», исполнитель 1;
   карточки 1, 2 и 6 описи briefs/lekciya09_demki_minuty.md §1.4. Схему
   описи (шаг по времени, briefs/lekciya09_skripty/md09.py) здесь сменил
   событийный счёт: время прыгает от удара к удару, и ни один удар не
   теряется и не находится с опозданием на шаг.

   ПОДКЛЮЧЕНИЕ. После demo-core.js, до кода демки. От ядра файл не зависит
   и работает в node (globalThis.window = globalThis, затем eval файла).

       <script src="../shared/demo-core.js"></script>
       <script src="../shared/demo-gaz.js"></script>

   Регистрирует один глобальный объект window.DemoGaz. В него не пишут.

   ══ МОДЕЛЬ ══

   Шары диаметра d и массы m. Ящик задан для центров шаров:
   0 ≤ x ≤ X, 0 ≤ y ≤ Ly, 0 ≤ z ≤ Lz; настоящая стенка стоит на d/2 дальше,
   и рисовать её надо там. Поэтому концентрация n = N/(X·Ly·Lz) и давление
   на стенку x есть импульс, отданный ей, делённый на Ly·Lz и на время: у
   точечного газа это ровно (1/3)nm<v²>, и размер шаров входит только
   через удары шаров друг о друга.
   Удар двух шаров упругий: сближающаяся пара на расстоянии d обменивается
   составляющими скорости вдоль линии центров, J = −2μ(r·v)/r² · r,
   μ = m₁m₂/(m₁ + m₂). Импульс и энергия пары сохраняются точно, до
   округления. Стенки зеркальные; «тёплая» стенка отражает диффузно:
   нормальная составляющая выбирается с весом потока, √(kT/m)·√(−2 ln ξ),
   касательные по Гауссу, и отданная ею энергия идёт в счётчик теплоты Q.
   Правая стенка x = X может быть поршнем, который уходит с постоянной
   скоростью u до X_кон: удар упругий в системе поршня, v_x′ = 2u − v_x,
   поршень получает работу ½m(v_x² − v_x′²) = 2mu(v_x − u). Молекула
   медленнее поршня его не догоняет. Поршень всегда зеркальный, тёплым
   бывает только неподвижное.

   ══ СЧЁТ ══

   Положение каждого шара хранится на момент его последнего удара (tp[i]),
   текущее есть x + v(t − tp). У каждого шара одно ближайшее событие:
   удар о соседа, о стенку или переход в соседнюю ячейку сетки. Время
   удара пары — меньший корень |Δr + Δv τ| = d, в устойчивой записи
   τ = (Δr² − d²)/(−b + √(b² − Δv²(Δr² − d²))), b = Δr·Δv < 0. Соседей
   ищем в 27 ячейках вокруг; ячейка не меньше d и в среднем на два шара.
   События лежат в двоичной куче по времени. Удар меняет счётчик шара, и
   чужое событие с ним, предсказанное раньше, при извлечении узнаётся по
   несовпавшему счётчику и пересчитывается (ленивая отмена). Событие
   поршня (остановка) общее и стоит вне кучи. Энергия сохраняется до
   округления: проверка E − E₀ + W − Q (работа поршню, теплота от
   стенок) в прогонах до 4·10⁵ событий не превышала 6·10⁻¹⁵ от E₀.
   Пластина между ударами точно поворачивается по фазе осциллятора,
   ξ = ξ₀cos ωs + (U₀/ω)sin ωs. Момент удара шара о неё ищется шагами,
   которые не перескакивают корень: зазор f(τ) не меньше f + f′τ − ½aτ²,
   a = ω²A — наибольшее ускорение пластины, и шаг до корня этой параболы
   безопасен; у корня шаг становится ньютоновским. Удар о пластину есть
   упругий удар двух тел вдоль x. После него пластина движется иначе, и
   пересчитываются все шары, которые по той же оценке могут дойти до неё
   раньше своего события; остальные узнают о новой пластине по счётчику.

   ══ API ══

   DemoGaz.create(o) → газ g. Поля o:
     N              число шаров;
     d или eta      диаметр, или доля объёма N·πd³/6 от X·Ly·Lz начального;
     X, Ly, Lz      ящик центров (по умолчанию 1, 1, 1);
     Xmax           до куда может уйти поршень (по умолчанию X);
     m              масса: число, массив длины N или функция m(i);
     kT             начальная температура в энергетических единицах (1);
     start          'maxwell' (по умолчанию), 'vdolX' (все ±v вдоль x),
                    'odna' (одна скорость, направления изотропно),
                    'shest' (шесть направлений ±x, ±y, ±z поровну); у всех
                    <v²> = 3kT/m, у 'maxwell' снят импульс центра масс;
     collisions     удары шаров друг о друга (true);
     warm           неподвижные стенки тёплые (false), kTwall их температура;
     seed           зерно датчика случайных чисел (иначе случайное);
     plate          пластина на пружине поперёк x (демка «Два газа»):
                    { X0, M, K, fixed } — равновесное место, масса, жёсткость;
                    fixed: true делает её неподвижной стенкой. Молекулы
                    стороны 0 живут в 0 ≤ x ≤ X_пл, стороны 1 в X_пл ≤ x ≤ X;
                    N1 — сколько первых шаров слева (по умолчанию половина);
                    шары разных сторон друг друга не видят;
     kT             может быть и функцией kT(i): своя температура у каждой
                    стороны;
     onHit          function(стенка, i, импульс удара, a, b) — по желанию:
                    a, b — касательные координаты места удара (у стенок x
                    это y и z, у стенок y это x и z, у стенок z это x и y).
   Стенки: 0 и 1 — x = 0 и x = X (поршень), 2 и 3 — y, 4 и 5 — z.

   g.advance(dt)    продвинуть время на dt; возвращает число событий.
   g.pos(out)       текущие координаты в Float64Array(3N) (x, y, z подряд),
                    без сдвига внутреннего состояния.
   g.vx, g.vy, g.vz скорости (Float64Array), g.m массы, g.t время.
   g.imp[6], g.hits[6]  импульс, отданный каждой стенке, и число ударов о
                    неё с начала; g.W работа над поршнем, g.Q теплота от
                    тёплых стенок, g.nColl ударов шаров, g.vir Σ J·r (вириал).
   g.energy()       кинетическая энергия; g.E0 начальная.
   g.drift()        (E − E₀ + W − Q)/E₀ — проверка учёта энергии.
   g.Xp()           где сейчас поршень; g.volume() объём ящика центров.
   g.startPiston(u, Xend)  пустить поршень с нынешнего X до Xend.
   g.plate()        { xi, U, X, A, E } пластины: смещение, скорость, место,
                    амплитуда, энергия ½MU² + ½Kξ²; g.side[i] сторона шара;
                    g.plateHits ударов о пластину, g.plateE[0], g.plateE[1]
                    энергия, отданная пластине молекулами каждой стороны.
   g.setCollisions(on), g.setWarm(on)  переключить на ходу.
   DemoGaz.zCS(eta)       Z = PV/NkT твёрдых шаров по Карнахану–Старлингу.
   DemoGaz.chi(eta)       множитель Энскога (1 − η/2)/(1 − η)³ к частоте ударов.

   ══ ТОЧНОСТЬ ══ проверена 23.10 прогоном в node, числа в отчёте
   briefs/proizvodstvo09_demki-1_REPORT.md и в шапках демок. */

(function (global) {
  'use strict';

  var INF = Infinity;

  /* Датчик mulberry32: свой, чтобы прогон в node повторялся по зерну. */
  function rngMake(seed) {
    var s = (seed >>> 0) || 1;
    return function () {
      s = (s + 0x6D2B79F5) >>> 0;
      var q = s;
      q = Math.imul(q ^ (q >>> 15), q | 1);
      q ^= q + Math.imul(q ^ (q >>> 7), q | 61);
      return ((q ^ (q >>> 14)) >>> 0) / 4294967296;
    };
  }
  function gaussMake(r) {
    var spare = null;
    return function () {
      if (spare !== null) { var s0 = spare; spare = null; return s0; }
      var a, b, q;
      do { a = 2 * r() - 1; b = 2 * r() - 1; q = a * a + b * b; } while (q >= 1 || q === 0);
      var f = Math.sqrt(-2 * Math.log(q) / q);
      spare = b * f;
      return a * f;
    };
  }

  function zCS(eta) { return (1 + eta + eta * eta - eta * eta * eta) / Math.pow(1 - eta, 3); }
  function chi(eta) { return (1 - eta / 2) / Math.pow(1 - eta, 3); }

  function create(o) {
    o = o || {};
    var N = o.N | 0;
    var X0 = o.X || 1, Ly = o.Ly || 1, Lz = o.Lz || 1;
    var Xmax = Math.max(o.Xmax || X0, X0);
    var kTf = typeof o.kT === 'function' ? o.kT : null;
    var kT = kTf ? kTf(0) : (o.kT != null ? o.kT : 1);
    var d = o.d != null ? o.d : (o.eta ? Math.cbrt(6 * o.eta * X0 * Ly * Lz / (Math.PI * N)) : 0);
    var seed = o.seed != null ? o.seed : (Math.random() * 4294967296) >>> 0;
    var rnd = rngMake(seed), gauss = gaussMake(rnd);

    var m = new Float64Array(N), i, k;
    for (i = 0; i < N; i++) m[i] = typeof o.m === 'function' ? o.m(i) : (o.m && o.m.length ? o.m[i] : (o.m || 1));

    var x = new Float64Array(N), y = new Float64Array(N), z = new Float64Array(N);
    var vx = new Float64Array(N), vy = new Float64Array(N), vz = new Float64Array(N);
    var tp = new Float64Array(N), cnt = new Float64Array(N);
    var eT = new Float64Array(N), eK = new Int8Array(N), eP = new Int32Array(N), eC = new Float64Array(N);
    var heap = new Int32Array(N), hpos = new Int32Array(N);
    var cx = new Int32Array(N), cy = new Int32Array(N), cz = new Int32Array(N);
    var nxt = new Int32Array(N), prv = new Int32Array(N);

    var g = {
      N: N, d: d, Ly: Ly, Lz: Lz, Xmax: Xmax, kT0: kT, seed: seed,
      m: m, vx: vx, vy: vy, vz: vz, t: 0,
      imp: new Float64Array(6), hits: new Float64Array(6),
      W: 0, Q: 0, nColl: 0, vir: 0, nEv: 0, E0: 0,
      collisions: o.collisions !== false && d > 0,
      warm: !!o.warm, kTwall: o.kTwall != null ? o.kTwall : kT,
      onHit: o.onHit || null
    };

    /* пластина на пружине: ξ(t) от равновесного места plX, скорость U */
    var pl = o.plate || null, side = new Int8Array(N);
    var N1 = o.N1 != null ? o.N1 : N >> 1;
    if (pl) for (i = 0; i < N; i++) side[i] = i < N1 ? 0 : 1;
    var plX = pl ? (pl.X0 != null ? pl.X0 : X0 / 2) : 0, plM = pl ? pl.M : 1, plK = pl ? pl.K : 0;
    var plFixed = pl ? !!pl.fixed : true, plW = pl && !plFixed ? Math.sqrt(plK / plM) : 0;
    var plXi0 = 0, plU0 = 0, plT0 = 0, plA = 0, plAcc = 0, plEp = 0;
    function plXi(t) { if (!plW) return 0; var s = (t - plT0) * plW; return plXi0 * Math.cos(s) + plU0 / plW * Math.sin(s); }
    function plU(t) { if (!plW) return 0; var s = (t - plT0) * plW; return plU0 * Math.cos(s) - plXi0 * plW * Math.sin(s); }
    function plSet() { plA = plW ? Math.sqrt(plXi0 * plXi0 + plU0 * plU0 / (plW * plW)) : 0; plAcc = plW * plW * plA; }
    g.side = side; g.plateHits = 0; g.plateE = [0, 0];
    g.plate = function () {
      var xi = plXi(g.t), U = plU(g.t);
      return { xi: xi, U: U, X: plX + xi, A: plA, E: 0.5 * plM * U * U + 0.5 * plK * xi * xi, M: plM, K: plK, fixed: plFixed };
    };

    /* поршень: X(t) = pX0 + pu·(t − pt0), пока не дошёл до pXend */
    var pX0 = X0, pt0 = 0, pu = 0, pXend = X0, pStop = INF;
    function Xp(t) { return pu > 0 ? pX0 + pu * (t - pt0) : pX0; }
    g.Xp = function () { return Xp(g.t); };
    g.volume = function () { return Xp(g.t) * Ly * Lz; };

    /* ── сетка ячеек ── */
    var ncx = 1, ncy = 1, ncz = 1, sx = Xmax, sy = Ly, sz = Lz, head = new Int32Array(1);
    function gridBuild() {
      if (g.collisions) {
        var s = Math.max(d, Math.cbrt(X0 * Ly * Lz * 2 / N));
        ncx = Math.max(1, Math.floor(Xmax / s));
        ncy = Math.max(1, Math.floor(Ly / s));
        ncz = Math.max(1, Math.floor(Lz / s));
      } else { ncx = ncy = ncz = 1; }
      sx = Xmax / ncx; sy = Ly / ncy; sz = Lz / ncz;
      head = new Int32Array(ncx * ncy * ncz).fill(-1);
      for (var j = 0; j < N; j++) {
        cx[j] = Math.min(ncx - 1, Math.max(0, Math.floor(x[j] / sx)));
        cy[j] = Math.min(ncy - 1, Math.max(0, Math.floor(y[j] / sy)));
        cz[j] = Math.min(ncz - 1, Math.max(0, Math.floor(z[j] / sz)));
        link(j);
      }
    }
    function cid(j) { return (cx[j] * ncy + cy[j]) * ncz + cz[j]; }
    function link(j) {
      var c = cid(j);
      prv[j] = -1; nxt[j] = head[c];
      if (head[c] >= 0) prv[head[c]] = j;
      head[c] = j;
    }
    function unlink(j) {
      if (prv[j] >= 0) nxt[prv[j]] = nxt[j]; else head[cid(j)] = nxt[j];
      if (nxt[j] >= 0) prv[nxt[j]] = prv[j];
    }

    /* ── куча событий ── */
    function less(a, b) { return eT[heap[a]] < eT[heap[b]]; }
    function swap(a, b) {
      var p = heap[a]; heap[a] = heap[b]; heap[b] = p;
      hpos[heap[a]] = a; hpos[heap[b]] = b;
    }
    function up(k0) { var k1 = k0; while (k1 > 0) { var p = (k1 - 1) >> 1; if (!less(k1, p)) break; swap(k1, p); k1 = p; } return k1; }
    function down(k0) {
      var k1 = k0;
      for (;;) {
        var l = 2 * k1 + 1, r = l + 1, s = k1;
        if (l < N && less(l, s)) s = l;
        if (r < N && less(r, s)) s = r;
        if (s === k1) return;
        swap(k1, s); k1 = s;
      }
    }
    function update(j) { down(up(hpos[j])); }

    /* ── предсказание ближайшего события шара j ── */
    function predict(j) {
      var t = g.t, dt0 = t - tp[j];
      var xj = x[j] + vx[j] * dt0, yj = y[j] + vy[j] * dt0, zj = z[j] + vz[j] * dt0;
      var best = INF, kind = 0, par = -1, pc = 0, tw;
      /* стенки */
      var sj = pl ? side[j] : -1;
      if (vx[j] < 0 && sj !== 1) { tw = -xj / vx[j]; if (tw < best) { best = tw; kind = 2; par = 0; } }
      if (sj === 0) { /* у левых шаров справа пластина, она ниже */ }
      else if (pu > 0) {
        var rel = vx[j] - pu;
        if (rel > 0) { tw = (Xp(t) - xj) / rel; if (tw < best) { best = tw; kind = 2; par = 1; } }
      } else if (vx[j] > 0) { tw = (pX0 - xj) / vx[j]; if (tw < best) { best = tw; kind = 2; par = 1; } }
      if (vy[j] < 0) { tw = -yj / vy[j]; if (tw < best) { best = tw; kind = 2; par = 2; } }
      else if (vy[j] > 0) { tw = (Ly - yj) / vy[j]; if (tw < best) { best = tw; kind = 2; par = 3; } }
      if (vz[j] < 0) { tw = -zj / vz[j]; if (tw < best) { best = tw; kind = 2; par = 4; } }
      else if (vz[j] > 0) { tw = (Lz - zj) / vz[j]; if (tw < best) { best = tw; kind = 2; par = 5; } }
      if (g.collisions) {
        /* переходы в соседнюю ячейку */
        if (vx[j] > 0 && cx[j] < ncx - 1) { tw = ((cx[j] + 1) * sx - xj) / vx[j]; if (tw < best) { best = tw; kind = 3; par = 1; } }
        else if (vx[j] < 0 && cx[j] > 0) { tw = (cx[j] * sx - xj) / vx[j]; if (tw < best) { best = tw; kind = 3; par = 0; } }
        if (vy[j] > 0 && cy[j] < ncy - 1) { tw = ((cy[j] + 1) * sy - yj) / vy[j]; if (tw < best) { best = tw; kind = 3; par = 3; } }
        else if (vy[j] < 0 && cy[j] > 0) { tw = (cy[j] * sy - yj) / vy[j]; if (tw < best) { best = tw; kind = 3; par = 2; } }
        if (vz[j] > 0 && cz[j] < ncz - 1) { tw = ((cz[j] + 1) * sz - zj) / vz[j]; if (tw < best) { best = tw; kind = 3; par = 5; } }
        else if (vz[j] < 0 && cz[j] > 0) { tw = (cz[j] * sz - zj) / vz[j]; if (tw < best) { best = tw; kind = 3; par = 4; } }
        /* соседи в 27 ячейках */
        var d2 = d * d;
        var ax0 = Math.max(0, cx[j] - 1), ax1 = Math.min(ncx - 1, cx[j] + 1);
        var ay0 = Math.max(0, cy[j] - 1), ay1 = Math.min(ncy - 1, cy[j] + 1);
        var az0 = Math.max(0, cz[j] - 1), az1 = Math.min(ncz - 1, cz[j] + 1);
        for (var a = ax0; a <= ax1; a++) for (var b = ay0; b <= ay1; b++) for (var c = az0; c <= az1; c++) {
          for (var q = head[(a * ncy + b) * ncz + c]; q >= 0; q = nxt[q]) {
            if (q === j || (pl && side[q] !== sj)) continue;
            var dq = t - tp[q];
            var rx = xj - (x[q] + vx[q] * dq), ry = yj - (y[q] + vy[q] * dq), rz = zj - (z[q] + vz[q] * dq);
            var ux = vx[j] - vx[q], uy = vy[j] - vy[q], uz = vz[j] - vz[q];
            var bb = rx * ux + ry * uy + rz * uz;
            if (bb >= 0) continue;
            var u2 = ux * ux + uy * uy + uz * uz;
            var c0 = rx * rx + ry * ry + rz * rz - d2;
            var disc = bb * bb - u2 * c0;
            if (disc <= 0) continue;
            tw = c0 <= 0 ? 0 : c0 / (-bb + Math.sqrt(disc));
            if (tw < best) { best = tw; kind = 1; par = q; pc = cnt[q]; }
          }
        }
      }
      if (pl) {
        tw = plateTime(j, xj, best);
        if (tw < best) { best = tw; kind = plTimeKind; par = 0; pc = plEp; }
      }
      if (best < 0) best = 0;
      eT[j] = t + best; eK[j] = best === INF ? 0 : kind; eP[j] = par; eC[j] = pc;
    }

    /* Ближайший удар шара j о пластину не позже horizon. Зазор f(τ) и его
       производная; шаг до корня нижней параболы f + f′τ − ½aτ² не
       перескакивает удар. Если за 100 шагов корень не найден, шар
       получает событие «пересчитать» (вид 5) в достигнутый момент: там
       он ещё по свою сторону. */
    var plTimeKind = 4;
    function plGap(j, x0, tau) {
      var sg = side[j] === 0 ? 1 : -1, T = g.t + tau;
      return [sg * (plX + plXi(T) - x0 - vx[j] * tau) - d / 2, sg * (plU(T) - vx[j])];
    }
    function plLow(f, fp) {
      if (f < 0) f = 0;
      if (plAcc > 0) return (fp + Math.sqrt(fp * fp + 2 * plAcc * f)) / plAcc;
      return fp < 0 ? -f / fp : INF;
    }
    function plateTime(j, x0, horizon) {
      var tau = 0;
      plTimeKind = 4;
      for (var it = 0; it < 100; it++) {
        var ff = plGap(j, x0, tau);
        if (ff[0] <= 1e-12 && ff[1] < 0) return tau;
        var st = plLow(ff[0], ff[1]);
        if (st < 1e-13) st = 1e-13;
        tau += st;
        if (tau >= horizon) return INF;
      }
      plTimeKind = 5;
      return tau;
    }

    function bring(j) {
      var dt0 = g.t - tp[j];
      if (dt0 !== 0) { x[j] += vx[j] * dt0; y[j] += vy[j] * dt0; z[j] += vz[j] * dt0; tp[j] = g.t; }
    }

    /* диффузное отражение тёплой стенкой: ось ax (0, 1, 2), знак нормали sg */
    function thermal(j, ax, sg) {
      var s = Math.sqrt(g.kTwall / m[j]);
      var vn = s * Math.sqrt(-2 * Math.log(1 - rnd())), t1 = s * gauss(), t2 = s * gauss();
      if (ax === 0) { vx[j] = sg * vn; vy[j] = t1; vz[j] = t2; }
      else if (ax === 1) { vy[j] = sg * vn; vx[j] = t1; vz[j] = t2; }
      else { vz[j] = sg * vn; vx[j] = t1; vy[j] = t2; }
    }

    function wallHit(j, w) {
      bring(j);
      var mj = m[j], e0 = vx[j] * vx[j] + vy[j] * vy[j] + vz[j] * vz[j], vn0, vn1;
      if (w === 1) {
        x[j] = Xp(g.t);
        vn0 = vx[j]; vn1 = 2 * pu - vn0; vx[j] = vn1;
        g.W += 0.5 * mj * (vn0 * vn0 - vn1 * vn1);
        g.imp[1] += mj * (vn0 - vn1);
      } else {
        var ax = w >> 1, lo = (w & 1) === 0;
        var arr = ax === 0 ? vx : ax === 1 ? vy : vz;
        if (ax === 0) x[j] = 0; else if (ax === 1) y[j] = lo ? 0 : Ly; else z[j] = lo ? 0 : Lz;
        vn0 = arr[j];
        if (g.warm) {
          thermal(j, ax, lo ? 1 : -1);
          g.Q += 0.5 * mj * (vx[j] * vx[j] + vy[j] * vy[j] + vz[j] * vz[j] - e0);
        } else arr[j] = -vn0;
        vn1 = arr[j];
        g.imp[w] += mj * Math.abs(vn1 - vn0);
      }
      g.hits[w] += 1;
      cnt[j] += 1;
      if (g.onHit) {
        /* место удара на стенке: две касательные координаты */
        var ax2 = w >> 1;
        g.onHit(w, j, mj * Math.abs(vn1 - vn0), ax2 === 0 ? y[j] : x[j], ax2 === 2 ? y[j] : z[j]);
      }
      predict(j); update(j);
    }

    function pairHit(j) {
      var q = eP[j];
      if (cnt[q] !== eC[j]) { predict(j); update(j); return; }
      bring(j); bring(q);
      var rx = x[j] - x[q], ry = y[j] - y[q], rz = z[j] - z[q];
      var ux = vx[j] - vx[q], uy = vy[j] - vy[q], uz = vz[j] - vz[q];
      var bb = rx * ux + ry * uy + rz * uz;
      if (bb < 0) {
        var r2 = rx * rx + ry * ry + rz * rz;
        var mu = m[j] * m[q] / (m[j] + m[q]);
        var f = -2 * mu * bb / r2;                 /* J = f·r — импульс, полученный шаром j */
        vx[j] += f * rx / m[j]; vy[j] += f * ry / m[j]; vz[j] += f * rz / m[j];
        vx[q] -= f * rx / m[q]; vy[q] -= f * ry / m[q]; vz[q] -= f * rz / m[q];
        g.vir += f * r2;
        g.nColl += 1;
        cnt[j] += 1; cnt[q] += 1;
      }
      predict(j); update(j);
      predict(q); update(q);
    }

    function plateHit(j) {
      if (eC[j] !== plEp) { predict(j); update(j); return; }
      bring(j);
      var t = g.t, xi = plXi(t), U = plU(t), sg = side[j] === 0 ? 1 : -1, v = vx[j], mj = m[j], v1;
      x[j] = plX + xi - sg * d / 2;
      if (plFixed) v1 = -v;
      else {
        v1 = ((mj - plM) * v + 2 * plM * U) / (mj + plM);
        plXi0 = xi; plU0 = ((plM - mj) * U + 2 * mj * v) / (mj + plM); plT0 = t; plSet();
        plEp += 1;
      }
      vx[j] = v1;
      g.plateHits += 1; g.plateE[side[j]] += 0.5 * mj * (v * v - v1 * v1);
      cnt[j] += 1;
      predict(j); update(j);
      if (plFixed) return;
      /* пластина пошла иначе: пересчитать всех, кто может дойти до неё
         раньше своего события */
      for (var q = 0; q < N; q++) {
        if (q === j) continue;
        var dq = t - tp[q], ff = plGap(q, x[q] + vx[q] * dq, 0);
        if (t + plLow(ff[0], ff[1]) < eT[q]) { predict(q); update(q); }
      }
    }

    function cross(j) {
      bring(j);
      unlink(j);
      var w = eP[j], s = (w & 1) ? 1 : -1;
      if ((w >> 1) === 0) cx[j] += s; else if ((w >> 1) === 1) cy[j] += s; else cz[j] += s;
      link(j);
      predict(j); update(j);
    }

    function predictAll() {
      for (var j = 0; j < N; j++) { predict(j); heap[j] = j; hpos[j] = j; }
      for (var k2 = (N >> 1) - 1; k2 >= 0; k2--) down(k2);
    }
    function syncAll() { for (var j = 0; j < N; j++) bring(j); }

    g.advance = function (dt) {
      var tEnd = g.t + dt, n = 0;
      while (n < 3000000) {
        var j = N ? heap[0] : -1, te = j >= 0 ? eT[j] : INF;
        if (pStop <= te && pStop <= tEnd) {
          g.t = pStop; syncAll();
          pX0 = pXend; pu = 0; pStop = INF;
          predictAll(); n++;
          continue;
        }
        if (te > tEnd) break;
        g.t = te; n++;
        var kd = eK[j];
        if (kd === 1) pairHit(j);
        else if (kd === 2) wallHit(j, eP[j]);
        else if (kd === 3) cross(j);
        else if (kd === 4) plateHit(j);
        else if (kd === 5) { predict(j); update(j); }
        else { eT[j] = INF; update(j); }
      }
      g.t = tEnd; g.nEv += n;
      return n;
    };

    g.pos = function (out) {
      out = out || new Float64Array(3 * N);
      for (var j = 0; j < N; j++) {
        var dt0 = g.t - tp[j];
        out[3 * j] = x[j] + vx[j] * dt0; out[3 * j + 1] = y[j] + vy[j] * dt0; out[3 * j + 2] = z[j] + vz[j] * dt0;
      }
      return out;
    };
    g.energy = function () {
      var e = 0;
      for (var j = 0; j < N; j++) e += 0.5 * m[j] * (vx[j] * vx[j] + vy[j] * vy[j] + vz[j] * vz[j]);
      return e;
    };
    g.drift = function () { return (g.energy() + (pl ? g.plate().E : 0) - g.E0 + g.W - g.Q) / g.E0; };

    g.startPiston = function (u, Xend) {
      syncAll();
      pX0 = Xp(g.t); pt0 = g.t; pXend = Math.min(Xend, Xmax);
      if (u > 0 && pXend > pX0) { pu = u; pStop = g.t + (pXend - pX0) / u; }
      else { pu = 0; pStop = INF; }
      predictAll();
    };
    g.pistonMoving = function () { return pu > 0; };
    g.pistonU = function () { return pu; };

    g.setCollisions = function (on) {
      syncAll();
      g.collisions = !!on && d > 0;
      gridBuild();
      for (var j = 0; j < N; j++) cnt[j] += 1;
      predictAll();
    };
    g.setWarm = function (on) { g.warm = !!on; };

    /* ── начальное состояние ── */
    (function place() {
      var r0 = 0, cell = Math.max(d, 1e-9), gx, gy, gz, grid, tries = 0, j, a, b, c, q;
      gx = Math.max(1, Math.floor(X0 / cell)); gy = Math.max(1, Math.floor(Ly / cell)); gz = Math.max(1, Math.floor(Lz / cell));
      grid = {};
      for (j = 0; j < N; j++) {
        for (;;) {
          if (++tries > 2000000) throw new Error('DemoGaz: шары не расставились');
          var xa = 0, xb = X0;
          if (pl) { if (side[j] === 0) xb = plX - 0.51 * d; else xa = plX + 0.51 * d; }
          var px = r0 + xa + rnd() * (xb - xa), py = rnd() * Ly, pz = rnd() * Lz, ok = true;
          if (d > 0) {
            var ix = Math.min(gx - 1, Math.floor(px / X0 * gx)), iy = Math.min(gy - 1, Math.floor(py / Ly * gy)), iz = Math.min(gz - 1, Math.floor(pz / Lz * gz));
            for (a = ix - 1; a <= ix + 1 && ok; a++) for (b = iy - 1; b <= iy + 1 && ok; b++) for (c = iz - 1; c <= iz + 1 && ok; c++) {
              var lst = grid[a + ',' + b + ',' + c];
              if (!lst) continue;
              for (q = 0; q < lst.length; q++) {
                var o2 = lst[q], dx = px - x[o2], dy = py - y[o2], dz = pz - z[o2];
                if (dx * dx + dy * dy + dz * dz < d * d) { ok = false; break; }
              }
            }
            if (ok) { var key = ix + ',' + iy + ',' + iz; (grid[key] || (grid[key] = [])).push(j); }
          }
          if (ok) { x[j] = px; y[j] = py; z[j] = pz; break; }
        }
      }
    })();

    (function speeds() {
      var mode = o.start || 'maxwell', j, s;
      function kTi(i2) { return kTf ? kTf(i2) : kT; }
      for (j = 0; j < N; j++) {
        var v = Math.sqrt(3 * kTi(j) / m[j]);
        if (mode === 'vdolX') { vx[j] = rnd() < 0.5 ? v : -v; vy[j] = 0; vz[j] = 0; }
        else if (mode === 'odna') {
          var cth = 2 * rnd() - 1, sth = Math.sqrt(1 - cth * cth), ph = 2 * Math.PI * rnd();
          vx[j] = v * sth * Math.cos(ph); vy[j] = v * sth * Math.sin(ph); vz[j] = v * cth;
        } else if (mode === 'shest') {
          /* поровну по шести направлениям: шар j летит по оси j mod 3 */
          var ax = j % 3, sg = (Math.floor(j / 3) % 2) ? -1 : 1;
          vx[j] = ax === 0 ? sg * v : 0; vy[j] = ax === 1 ? sg * v : 0; vz[j] = ax === 2 ? sg * v : 0;
        } else {
          s = Math.sqrt(kTi(j) / m[j]);
          vx[j] = s * gauss(); vy[j] = s * gauss(); vz[j] = s * gauss();
        }
      }
      if (mode === 'maxwell' && N > 1) {
        /* снять импульс центра масс и подогнать <mv²> ровно к 3kT, у
           пластины для каждой стороны отдельно */
        for (var gr = 0; gr < (pl ? 2 : 1); gr++) {
          var M = 0, px = 0, py = 0, pz = 0, e = 0, e3 = 0;
          for (j = 0; j < N; j++) if (!pl || side[j] === gr) { M += m[j]; px += m[j] * vx[j]; py += m[j] * vy[j]; pz += m[j] * vz[j]; }
          for (j = 0; j < N; j++) if (!pl || side[j] === gr) {
            vx[j] -= px / M; vy[j] -= py / M; vz[j] -= pz / M;
            e += m[j] * (vx[j] * vx[j] + vy[j] * vy[j] + vz[j] * vz[j]); e3 += 3 * kTi(j);
          }
          s = Math.sqrt(e3 / e);
          for (j = 0; j < N; j++) if (!pl || side[j] === gr) { vx[j] *= s; vy[j] *= s; vz[j] *= s; }
        }
      }
    })();

    gridBuild();
    g.E0 = g.energy();
    predictAll();
    return g;
  }

  global.DemoGaz = { create: create, zCS: zCS, chi: chi, rng: rngMake };
})(typeof window !== 'undefined' ? window : globalThis);
