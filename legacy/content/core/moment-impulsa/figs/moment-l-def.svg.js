/* Определение момента импульса — перерисовка tikz-иллюстрации конспекта
   (pics/L_def): разложение радиус-вектора r на r∥ и r⊥ относительно
   скорости v точки m; момент L направлен за плоскость рисунка (крестик
   в кружке у полюса O). Скорость и точка — --fig-b, знак L — --fig-a. */
window.FIGS = window.FIGS || {};
window.FIGS['moment-l-def'] = String.raw`
<svg viewBox="0 0 460 370" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Радиус-вектор r разложен на параллельную и перпендикулярную составляющие относительно скорости v; момент импульса L направлен за плоскость рисунка">
  <!-- прямая, по которой летит точка -->
  <line x1="32" y1="76" x2="320" y2="76" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 7" opacity="0.55"/>
  <!-- продолжение радиус-вектора за точку m -->
  <line x1="176" y1="76" x2="195" y2="28" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 7" opacity="0.55"/>
  <!-- перпендикуляр из m на основание -->
  <line x1="176" y1="76" x2="176" y2="316" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 7" opacity="0.55"/>
  <!-- вектор r -->
  <line x1="80" y1="316" x2="172.5" y2="84.7" stroke="currentColor" stroke-width="2.8"/>
  <polygon points="176,76 165.5,84.1 176.9,88.7" fill="currentColor"/>
  <!-- вектор r parallel -->
  <line x1="80" y1="316" x2="168" y2="316" stroke="currentColor" stroke-width="2.8"/>
  <polygon points="176,316 164,310.5 164,321.5" fill="currentColor"/>
  <!-- вектор r perp -->
  <line x1="80" y1="316" x2="80" y2="84" stroke="currentColor" stroke-width="2.8"/>
  <polygon points="80,76 74.5,88 85.5,88" fill="currentColor"/>
  <!-- точка m и скорость v -->
  <circle cx="176" cy="76" r="5.5" fill="var(--fig-b, #c2571a)"/>
  <line x1="176" y1="76" x2="264" y2="76" stroke="var(--fig-b, #c2571a)" stroke-width="2.8"/>
  <polygon points="272,76 260,70.5 260,81.5" fill="var(--fig-b, #c2571a)"/>
  <!-- угол между r и v -->
  <path d="M 198 76 A 22 22 0 0 0 185.3 56.1" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <!-- полюс O и момент L (крестик: вектор за плоскость рисунка) -->
  <circle cx="80" cy="316" r="10" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <line x1="73" y1="309" x2="87" y2="323" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <line x1="87" y1="309" x2="73" y2="323" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21">
    <text x="146" y="192" fill="currentColor">r</text>
    <text x="122" y="342" text-anchor="middle" fill="currentColor">r<tspan dy="6" font-size="15" font-style="normal">&#8741;</tspan></text>
    <text x="66" y="200" text-anchor="end" fill="currentColor">r<tspan dy="6" font-size="15" font-style="normal">&#8869;</tspan></text>
    <text x="270" y="62" text-anchor="middle" fill="var(--fig-b, #c2571a)">v</text>
    <text x="166" y="62" text-anchor="end" fill="var(--fig-b, #c2571a)">m</text>
    <text x="208" y="58" fill="currentColor">&#945;</text>
    <text x="60" y="310" text-anchor="end" font-style="normal" fill="currentColor">O</text>
    <text x="94" y="343" fill="var(--fig-a, #1f8a9d)">L</text>
  </g>
</svg>`;
