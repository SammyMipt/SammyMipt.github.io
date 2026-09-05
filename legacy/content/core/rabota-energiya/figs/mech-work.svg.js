/* Работа вдоль криволинейной траектории — перерисовка tikz-иллюстрации
   конспекта (pics/mech_work): ломаная из малых перемещений между точками
   1 и 2, выделенный участок ds_i и сила F_i под углом alpha_i к нему.
   Контуры — currentColor, акценты — токены --fig-a/--fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['mech-work'] = String.raw`
<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Криволинейная траектория из точки 1 в точку 2, разбитая на малые перемещения; на выделенном участке показаны вектор перемещения и вектор силы под углом">
  <!-- оси координат -->
  <g stroke="currentColor" stroke-width="1.6" opacity="0.55">
    <line x1="95" y1="230" x2="248.6" y2="230"/>
    <line x1="95" y1="230" x2="95" y2="76.4"/>
    <line x1="95" y1="230" x2="13.4" y2="311.6"/>
  </g>
  <g fill="currentColor" opacity="0.55">
    <polygon points="248.6,230 241.3,233.3 241.3,226.7"/>
    <polygon points="95,76.4 98.3,83.7 91.7,83.7"/>
    <polygon points="13.4,311.6 16.3,304.1 20.9,308.7"/>
  </g>
  <g fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" opacity="0.75">
    <text x="254" y="246">x</text>
    <text x="82" y="82" text-anchor="end">y</text>
    <text x="30" y="302" text-anchor="end">z</text>
  </g>
  <!-- ломаная траектория: цепочка малых перемещений -->
  <g stroke="currentColor" stroke-width="2.2">
    <line x1="143" y1="182" x2="167" y2="172.4"/>
    <line x1="167" y1="172.4" x2="191" y2="162.8"/>
    <line x1="191" y1="162.8" x2="215" y2="153.2"/>
    <line x1="215" y1="153.2" x2="239" y2="148.4"/>
    <line x1="263" y1="138.8" x2="287" y2="134"/>
    <line x1="287" y1="134" x2="311" y2="129.2"/>
    <line x1="311" y1="129.2" x2="335" y2="124.4"/>
    <line x1="335" y1="124.4" x2="359" y2="119.6"/>
    <line x1="359" y1="119.6" x2="383" y2="124.4"/>
    <line x1="383" y1="124.4" x2="407" y2="129.2"/>
    <line x1="407" y1="129.2" x2="431" y2="134"/>
    <line x1="431" y1="134" x2="455" y2="138.8"/>
    <line x1="455" y1="138.8" x2="479" y2="143.6"/>
  </g>
  <g fill="currentColor">
    <polygon points="167.0,172.4 162.1,177.4 160.0,172.1"/>
    <polygon points="191.0,162.8 186.1,167.8 184.0,162.5"/>
    <polygon points="215.0,153.2 210.1,158.2 208.0,152.9"/>
    <polygon points="239.0,148.4 233.3,152.5 232.2,146.9"/>
    <polygon points="287.0,134.0 281.3,138.1 280.2,132.5"/>
    <polygon points="311.0,129.2 305.3,133.3 304.2,127.7"/>
    <polygon points="335.0,124.4 329.3,128.5 328.2,122.9"/>
    <polygon points="359.0,119.6 353.3,123.7 352.2,118.1"/>
    <polygon points="383.0,124.4 376.2,125.9 377.3,120.3"/>
    <polygon points="407.0,129.2 400.2,130.7 401.3,125.1"/>
    <polygon points="431.0,134.0 424.2,135.5 425.3,129.9"/>
    <polygon points="455.0,138.8 448.2,140.3 449.3,134.7"/>
    <polygon points="479.0,143.6 472.2,145.1 473.3,139.5"/>
  </g>
  <!-- выделенный участок ds_i -->
  <line x1="239" y1="148.4" x2="263" y2="138.8" stroke="var(--fig-a, #1f8a9d)" stroke-width="3.4"/>
  <polygon points="263.0,138.8 258.1,143.8 256.0,138.5" fill="var(--fig-a, #1f8a9d)"/>
  <!-- сила F_i из начала выделенного участка -->
  <line x1="239" y1="148.4" x2="279.7" y2="53.4" stroke="var(--fig-b, #c2571a)" stroke-width="3"/>
  <polygon points="279.7,53.4 279.8,62.4 273.1,59.5" fill="var(--fig-b, #c2571a)"/>
  <!-- угол между ними -->
  <path d="M 263.1 138.7 A 26 26 0 0 0 249.2 124.5" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <!-- точки 1 и 2 -->
  <circle cx="143" cy="182" r="5" fill="currentColor"/>
  <circle cx="479" cy="143.6" r="5" fill="currentColor"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="21">
    <text x="133" y="178" text-anchor="end" fill="currentColor">1</text>
    <text x="487" y="138" fill="currentColor">2</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20">
    <text x="252" y="168" text-anchor="middle" fill="var(--fig-a, #1f8a9d)">ds&#7522;</text>
    <text x="245" y="100" text-anchor="end" fill="var(--fig-b, #c2571a)">F&#7522;</text>
    <text x="270" y="122" fill="currentColor">&#945;&#7522;</text>
  </g>
</svg>`;
