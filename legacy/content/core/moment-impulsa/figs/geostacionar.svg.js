/* Задача о геостационарном спутнике — перерисовка tikz-рисунка методички
   (_inputs/pictures/week_5_task_1): планета радиуса R0, низкая орбита
   (--fig-a) и геостационарная орбита радиуса R (--fig-b) со стрелками
   направления обращения. */
window.FIGS = window.FIGS || {};
window.FIGS['geostacionar'] = String.raw`
<svg viewBox="0 0 500 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Планета с двумя круговыми орбитами: низкой у поверхности и далёкой геостационарной радиуса R">
  <!-- планета -->
  <circle cx="235" cy="245" r="60" fill="currentColor" opacity="0.14"/>
  <circle cx="235" cy="245" r="60" fill="none" stroke="currentColor" stroke-width="2"/>
  <!-- геостационарная орбита -->
  <circle cx="235" cy="245" r="180" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.2" stroke-dasharray="10 7"/>
  <circle cx="415" cy="245" r="6" fill="var(--fig-b, #c2571a)"/>
  <path d="M 408.9 198.4 A 180 180 0 0 0 296.6 75.9" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.6"/>
  <polygon points="287.2,72.5 298.5,70.7 294.7,81.1" fill="var(--fig-b, #c2571a)"/>
  <!-- низкая орбита -->
  <circle cx="235" cy="245" r="78" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.2" stroke-dasharray="10 7"/>
  <circle cx="157" cy="245" r="5.5" fill="var(--fig-a, #1f8a9d)"/>
  <path d="M 325.2 212.2 A 96 96 0 0 0 235 149" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6"/>
  <polygon points="225,149 235,143.5 235,154.5" fill="var(--fig-a, #1f8a9d)"/>
  <!-- радиусы -->
  <line x1="235" y1="245" x2="295" y2="245" stroke="currentColor" stroke-width="2.2"/>
  <line x1="235" y1="245" x2="235" y2="425" stroke="currentColor" stroke-width="2.2"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="18">
    <text x="235" y="230" text-anchor="middle" fill="currentColor">Планета</text>
    <text x="265" y="266" text-anchor="middle" font-style="italic" fill="currentColor">R<tspan dy="6" font-size="13">0</tspan></text>
    <text x="245" y="392" font-style="italic" fill="currentColor">R</text>
    <text x="425" y="230" text-anchor="end" fill="var(--fig-b, #c2571a)">Геостац.</text>
    <text x="148" y="228" text-anchor="middle" fill="var(--fig-a, #1f8a9d)">Низкая</text>
  </g>
</svg>`;
