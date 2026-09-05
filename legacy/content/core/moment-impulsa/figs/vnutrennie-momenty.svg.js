/* Нулевой момент внутренних сил — перерисовка tikz-иллюстрации конспекта
   (pics/inner_fotce_moment): точки 1 и 2 на одной прямой, силы F12 и F21
   вдоль неё (--fig-b), общее плечо r⊥ (--fig-a) от полюса O. */
window.FIGS = window.FIGS || {};
window.FIGS['vnutrennie-momenty'] = String.raw`
<svg viewBox="0 0 470 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Две точки на одной прямой с силами взаимодействия навстречу друг другу; у моментов сил общее плечо — перпендикуляр из полюса O">
  <!-- линия действия внутренних сил -->
  <line x1="56" y1="60" x2="440" y2="60" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 7" opacity="0.55"/>
  <!-- радиус-векторы точек -->
  <line x1="200" y1="300" x2="293" y2="67.5" stroke="currentColor" stroke-width="2.4"/>
  <polygon points="296,60 285.6,68.3 296.9,72.8" fill="currentColor"/>
  <line x1="200" y1="300" x2="153.6" y2="68" stroke="currentColor" stroke-width="2.4"/>
  <polygon points="152,60 148.3,72.7 159.1,70.5" fill="currentColor"/>
  <!-- общее плечо r perp -->
  <line x1="200" y1="300" x2="200" y2="68" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.8"/>
  <polygon points="200,60 194.5,72 205.5,72" fill="var(--fig-a, #1f8a9d)"/>
  <!-- точки 1 и 2 -->
  <circle cx="152" cy="60" r="5.5" fill="var(--fig-b, #c2571a)"/>
  <circle cx="296" cy="60" r="5.5" fill="var(--fig-b, #c2571a)"/>
  <!-- силы: F12 на точку 1 (к точке 2), F21 на точку 2 (к точке 1) -->
  <line x1="152" y1="60" x2="192" y2="60" stroke="var(--fig-b, #c2571a)" stroke-width="2.8"/>
  <polygon points="200,60 188,54.5 188,65.5" fill="var(--fig-b, #c2571a)"/>
  <line x1="296" y1="60" x2="256" y2="60" stroke="var(--fig-b, #c2571a)" stroke-width="2.8"/>
  <polygon points="248,60 260,54.5 260,65.5" fill="var(--fig-b, #c2571a)"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21">
    <text x="146" y="46" text-anchor="end" font-style="normal" fill="currentColor">1</text>
    <text x="302" y="46" font-style="normal" fill="currentColor">2</text>
    <text x="176" y="44" text-anchor="middle" fill="var(--fig-b, #c2571a)">F<tspan dy="6" font-size="14">12</tspan></text>
    <text x="272" y="44" text-anchor="middle" fill="var(--fig-b, #c2571a)">F<tspan dy="6" font-size="14">21</tspan></text>
    <text x="160" y="196" text-anchor="end" fill="currentColor">r<tspan dy="6" font-size="14">1</tspan></text>
    <text x="264" y="196" fill="currentColor">r<tspan dy="6" font-size="14">2</tspan></text>
    <text x="210" y="188" fill="var(--fig-a, #1f8a9d)">r<tspan dy="6" font-size="15" font-style="normal">&#8869;</tspan></text>
    <text x="192" y="322" text-anchor="end" font-style="normal" fill="currentColor">O</text>
  </g>
</svg>`;
