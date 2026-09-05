/* Пери- и апоцентр эллиптической орбиты — перерисовка tikz-иллюстрации
   конспекта (pics/ellyps_2): расстояния r_min (--fig-a) и r_max (--fig-b)
   от фокуса F1, полуоси a и b, расстояние x от центра до фокуса. */
window.FIGS = window.FIGS || {};
window.FIGS['ellips-orbita'] = String.raw`
<svg viewBox="0 0 520 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Эллипс с фокусами F1 и F2; от фокуса F1 отложены перицентрическое расстояние r_min и апоцентрическое r_max, показаны полуоси a и b и расстояние x от центра до фокуса">
  <ellipse cx="260" cy="170" rx="240" ry="144" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <!-- r_min: от левой вершины до фокуса F1 -->
  <line x1="28" y1="170" x2="108" y2="170" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <polygon points="20,170 32,164.5 32,175.5" fill="var(--fig-a, #1f8a9d)"/>
  <polygon points="116,170 104,164.5 104,175.5" fill="var(--fig-a, #1f8a9d)"/>
  <!-- r_max: от фокуса F1 до правой вершины -->
  <line x1="124" y1="170" x2="492" y2="170" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <polygon points="116,170 128,164.5 128,175.5" fill="var(--fig-b, #c2571a)"/>
  <polygon points="500,170 488,164.5 488,175.5" fill="var(--fig-b, #c2571a)"/>
  <!-- полуось b и стороны a до верхней точки малой оси -->
  <line x1="260" y1="170" x2="260" y2="26" stroke="currentColor" stroke-width="2"/>
  <line x1="116" y1="170" x2="260" y2="26" stroke="currentColor" stroke-width="2"/>
  <line x1="404" y1="170" x2="260" y2="26" stroke="currentColor" stroke-width="2"/>
  <!-- расстояние x от центра до фокуса -->
  <g stroke="currentColor" stroke-width="1.6" opacity="0.75">
    <line x1="120" y1="188" x2="256" y2="188"/>
    <line x1="116" y1="182" x2="116" y2="194"/>
    <line x1="260" y1="182" x2="260" y2="194"/>
  </g>
  <!-- фокусы -->
  <circle cx="116" cy="170" r="5.5" fill="currentColor"/>
  <circle cx="404" cy="170" r="5.5" fill="currentColor"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21">
    <text x="104" y="152" text-anchor="end" fill="currentColor">F<tspan dy="6" font-size="14">1</tspan></text>
    <text x="404" y="196" text-anchor="middle" fill="currentColor">F<tspan dy="6" font-size="14">2</tspan></text>
    <text x="66" y="152" text-anchor="middle" fill="var(--fig-a, #1f8a9d)">r<tspan dy="6" font-size="14">min</tspan></text>
    <text x="330" y="156" text-anchor="middle" fill="var(--fig-b, #c2571a)">r<tspan dy="6" font-size="14">max</tspan></text>
    <text x="268" y="104" fill="currentColor">b</text>
    <text x="174" y="94" text-anchor="end" fill="currentColor">a</text>
    <text x="346" y="94" fill="currentColor">a</text>
    <text x="188" y="212" text-anchor="middle" fill="currentColor">x</text>
  </g>
</svg>`;
