/* Колесо, катящееся без проскальзывания, — перерисовка tikz-иллюстрации
   конспекта (pics/wheel): мгновенная ось в точке касания A, распределение
   скоростей по вертикальному диаметру и на ободе. Скорости — токен --fig-b,
   угловая скорость — --fig-a, контуры — currentColor. Пунктир из A через
   концы векторов скоростей показывает линейный рост скорости с расстоянием
   от мгновенной оси. */
window.FIGS = window.FIGS || {};
window.FIGS['koleso'] = String.raw`
<svg viewBox="0 0 310 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Колесо касается дороги в точке A — мгновенной оси; центр движется со скоростью v0, верхняя точка B вдвое быстрее, скорость точки обода перпендикулярна отрезку до A">
  <!-- дорога -->
  <line x1="51" y1="221.5" x2="267" y2="221.5" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="currentColor" stroke-width="1.1" opacity="0.45">
    <line x1="66" y1="221.5" x2="58" y2="231"/>
    <line x1="90" y1="221.5" x2="82" y2="231"/>
    <line x1="114" y1="221.5" x2="106" y2="231"/>
    <line x1="138" y1="221.5" x2="130" y2="231"/>
    <line x1="162" y1="221.5" x2="154" y2="231"/>
    <line x1="186" y1="221.5" x2="178" y2="231"/>
    <line x1="210" y1="221.5" x2="202" y2="231"/>
    <line x1="234" y1="221.5" x2="226" y2="231"/>
    <line x1="258" y1="221.5" x2="250" y2="231"/>
  </g>
  <!-- колесо -->
  <circle cx="159" cy="131.5" r="90" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <!-- вертикальный диаметр AB -->
  <line x1="159" y1="41.5" x2="159" y2="221.5" stroke="currentColor" stroke-width="1.1" stroke-dasharray="5 4" opacity="0.6"/>
  <!-- пунктир из A через концы векторов скоростей на диаметре -->
  <line x1="159" y1="221.5" x2="213" y2="41.5" stroke="currentColor" stroke-width="1.1" stroke-dasharray="5 4" opacity="0.6"/>
  <!-- пунктир из A к точке обода -->
  <line x1="159" y1="221.5" x2="249" y2="131.5" stroke="currentColor" stroke-width="1.1" stroke-dasharray="5 4" opacity="0.6"/>
  <!-- скорость центра v0 -->
  <line x1="159" y1="131.5" x2="177" y2="131.5" stroke="var(--fig-b, #c2571a)" stroke-width="3"/>
  <polygon points="186,131.5 175,127 175,136" fill="var(--fig-b, #c2571a)"/>
  <!-- скорость верхней точки 2v0 -->
  <line x1="159" y1="41.5" x2="204" y2="41.5" stroke="var(--fig-b, #c2571a)" stroke-width="3"/>
  <polygon points="213,41.5 202,37 202,46" fill="var(--fig-b, #c2571a)"/>
  <!-- скорость точки обода: перпендикулярна отрезку из A -->
  <line x1="249" y1="131.5" x2="269" y2="151.5" stroke="var(--fig-b, #c2571a)" stroke-width="3"/>
  <polygon points="276,158.5 265,153.9 271.4,147.5" fill="var(--fig-b, #c2571a)"/>
  <!-- угловая скорость -->
  <path d="M 51 131.5 A 108 108 0 0 1 140.3 25.1" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <polygon points="140.3,25.1 130.3,31.6 128.7,22.8" fill="var(--fig-a, #1f8a9d)"/>
  <!-- точки -->
  <circle cx="159" cy="221.5" r="3.2" fill="currentColor"/>
  <circle cx="159" cy="131.5" r="3.2" fill="currentColor"/>
  <circle cx="159" cy="41.5" r="3.2" fill="currentColor"/>
  <circle cx="249" cy="131.5" r="3.2" fill="currentColor"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18">
    <text x="170" y="242" fill="currentColor">A</text>
    <text x="147" y="33" text-anchor="end" fill="currentColor">B</text>
    <text x="146" y="150" text-anchor="end" fill="currentColor" opacity="0.8">O</text>
    <text x="163" y="122" fill="var(--fig-b, #c2571a)">v<tspan dy="4" font-size="13">0</tspan></text>
    <text x="176" y="31" fill="var(--fig-b, #c2571a)">2v<tspan dy="4" font-size="13">0</tspan></text>
    <text x="277" y="143" fill="var(--fig-b, #c2571a)">v</text>
    <text x="44" y="118" text-anchor="end" fill="var(--fig-a, #1f8a9d)">&#969;</text>
  </g>
</svg>
`;
