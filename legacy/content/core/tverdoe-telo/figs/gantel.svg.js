/* Гантель под углом к оси вращения — перерисовка tikz-иллюстрации конспекта
   (pics/2_point_mass): две массы m на концах штанги, ось z, вектор момента
   импульса L, его проекция L_z и конус прецессии. Контуры — currentColor,
   момент импульса — токен --fig-a, угловая скорость — --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['gantel'] = String.raw`
<svg viewBox="0 0 268 378" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Гантель из двух масс вращается вокруг оси z под углом к ней; вектор момента импульса наклонён к оси, описывает конус, его проекция на ось постоянна">
  <!-- ось z -->
  <line x1="122" y1="320" x2="122" y2="91" stroke="currentColor" stroke-width="1.8" opacity="0.7"/>
  <polygon points="122,80 126.5,91 117.5,91" fill="currentColor" opacity="0.7"/>
  <!-- угловая скорость (вдоль оси, выше) -->
  <line x1="122" y1="74" x2="122" y2="31" stroke="var(--fig-b, #c2571a)" stroke-width="2.6"/>
  <polygon points="122,20 126.5,31 117.5,31" fill="var(--fig-b, #c2571a)"/>
  <!-- стрелка направления вращения вокруг оси -->
  <path d="M 127.8 64.8 A 30 15 0 1 0 117.4 64.8" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2"/>
  <polygon points="117.4,64.8 106,68.3 106.8,59.3" fill="var(--fig-b, #c2571a)"/>
  <!-- штанга: два радиус-вектора из точки O к массам -->
  <line x1="122" y1="290" x2="199" y2="238.5" stroke="currentColor" stroke-width="2.2"/>
  <polygon points="208.3,232.5 201.6,242.3 196.6,234.8" fill="currentColor"/>
  <line x1="122" y1="290" x2="45" y2="341.5" stroke="currentColor" stroke-width="2.2"/>
  <polygon points="35.7,347.5 42.4,337.7 47.4,345.1" fill="currentColor"/>
  <!-- массы -->
  <circle cx="212" cy="230" r="5" fill="currentColor"/>
  <circle cx="32" cy="350" r="5" fill="currentColor"/>
  <!-- точка O -->
  <circle cx="122" cy="290" r="2.6" fill="currentColor"/>
  <!-- конус прецессии вектора L -->
  <ellipse cx="122" cy="155" rx="60" ry="15" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="1.4" stroke-dasharray="5 4" opacity="0.75"/>
  <!-- вектор момента импульса L -->
  <line x1="122" y1="290" x2="178" y2="164" stroke="var(--fig-a, #1f8a9d)" stroke-width="3"/>
  <polygon points="182,155 181.6,166.9 173.4,163.2" fill="var(--fig-a, #1f8a9d)"/>
  <!-- проекция L_z (пунктир вдоль оси) -->
  <line x1="122" y1="290" x2="122" y2="166" stroke="var(--fig-a, #1f8a9d)" stroke-width="2" stroke-dasharray="6 4"/>
  <polygon points="122,155 126.5,166 117.5,166" fill="var(--fig-a, #1f8a9d)"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19">
    <text x="130" y="95" fill="currentColor" opacity="0.8">z</text>
    <text x="130" y="30" fill="var(--fig-b, #c2571a)">&#969;</text>
    <text x="188" y="152" fill="var(--fig-a, #1f8a9d)">L</text>
    <text x="114" y="162" text-anchor="end" fill="var(--fig-a, #1f8a9d)">L<tspan dy="5" font-size="14">z</tspan></text>
    <text x="222" y="236" fill="currentColor">m</text>
    <text x="22" y="356" text-anchor="end" fill="currentColor">m</text>
    <text x="172" y="274" fill="currentColor" opacity="0.8">r</text>
    <text x="66" y="330" fill="currentColor" opacity="0.8">r</text>
    <text x="130" y="304" fill="currentColor" opacity="0.8">O</text>
  </g>
</svg>
`;
