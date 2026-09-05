/* Три случая протягивания катушки за нить — перерисовка tikz-иллюстрации
   конспекта (pics/3wheels): сила под малым углом (катится к тяге), линия
   действия через точку касания (не вращается), сила круче критического
   угла (откатывается назад). Сила — токен --fig-b, вращение — --fig-a,
   контуры — currentColor. Пунктир — линия действия силы. */
window.FIGS = window.FIGS || {};
window.FIGS['katushka'] = String.raw`
<svg viewBox="0 0 600 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Три катушки на поверхности: нить тянут под разными углами; направление вращения зависит от того, по какую сторону от точки касания проходит линия действия силы">
  <!-- поверхность -->
  <line x1="40" y1="158.1" x2="536" y2="158.1" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="currentColor" stroke-width="1.1" opacity="0.45">
    <line x1="64" y1="158.1" x2="56" y2="167"/>
    <line x1="112" y1="158.1" x2="104" y2="167"/>
    <line x1="160" y1="158.1" x2="152" y2="167"/>
    <line x1="208" y1="158.1" x2="200" y2="167"/>
    <line x1="256" y1="158.1" x2="248" y2="167"/>
    <line x1="304" y1="158.1" x2="296" y2="167"/>
    <line x1="352" y1="158.1" x2="344" y2="167"/>
    <line x1="400" y1="158.1" x2="392" y2="167"/>
    <line x1="448" y1="158.1" x2="440" y2="167"/>
    <line x1="496" y1="158.1" x2="488" y2="167"/>
  </g>
  <!-- катушка 1: малый угол, катится к тяге -->
  <circle cx="102" cy="96.1" r="62" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="102" cy="96.1" r="31" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="71" y1="158.1" x2="176.4" y2="83.5" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.55"/>
  <line x1="126.8" y1="120.7" x2="167.6" y2="90.1" stroke="var(--fig-b, #c2571a)" stroke-width="3"/>
  <polygon points="176.4,83.5 170.3,93.7 164.9,86.5" fill="var(--fig-b, #c2571a)"/>
  <circle cx="102" cy="158.1" r="3" fill="currentColor"/>
  <path d="M 27.6 96.1 A 74.4 74.4 0 0 1 89.1 28.8" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.2"/>
  <polygon points="89.1,28.8 79.1,35.3 77.5,26.5" fill="var(--fig-a, #1f8a9d)"/>
  <!-- катушка 2: линия действия через A, не вращается -->
  <circle cx="288" cy="96.1" r="62" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="288" cy="96.1" r="31" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="288" y1="158.1" x2="350" y2="55" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.55"/>
  <line x1="317" y1="113.1" x2="344.6" y2="64.6" stroke="var(--fig-b, #c2571a)" stroke-width="3"/>
  <polygon points="350,55 348.5,66.8 340.7,62.4" fill="var(--fig-b, #c2571a)"/>
  <circle cx="288" cy="158.1" r="3" fill="currentColor"/>
  <!-- катушка 3: крутой угол, откатывается назад -->
  <circle cx="474" cy="96.1" r="62" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="474" cy="96.1" r="31" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="505" y1="158.1" x2="505" y2="96.1" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.55"/>
  <line x1="505" y1="96.1" x2="505" y2="51.1" stroke="var(--fig-b, #c2571a)" stroke-width="3"/>
  <polygon points="505,40.1 500.5,51.1 509.5,51.1" fill="var(--fig-b, #c2571a)"/>
  <circle cx="474" cy="158.1" r="3" fill="currentColor"/>
  <path d="M 399.6 96.1 A 74.4 74.4 0 0 1 461.1 28.8" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.2"/>
  <polygon points="399.6,96.1 395.1,85.1 404.1,85.1" fill="var(--fig-a, #1f8a9d)"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18">
    <text x="96" y="177" fill="currentColor">A</text>
    <text x="282" y="177" fill="currentColor">A</text>
    <text x="468" y="177" fill="currentColor">A</text>
    <text x="181" y="79" fill="var(--fig-b, #c2571a)">F</text>
    <text x="355" y="51" fill="var(--fig-b, #c2571a)">F</text>
    <text x="512" y="47" fill="var(--fig-b, #c2571a)">F</text>
    <text x="14" y="103" fill="var(--fig-a, #1f8a9d)">&#969;</text>
    <text x="288" y="22" text-anchor="middle" fill="var(--fig-a, #1f8a9d)">&#969; = 0</text>
    <text x="391" y="119" text-anchor="end" fill="var(--fig-a, #1f8a9d)">&#969;</text>
  </g>
</svg>
`;
