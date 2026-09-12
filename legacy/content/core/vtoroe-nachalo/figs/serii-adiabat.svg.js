/* Перерисовка pics/several_adiabat.tex: серия непересекающихся адиабат
   идеального газа на диаграмме P-V. Кривые посчитаны по P = c/V^1,3 при
   c = 6,48; 5,48; 4,48 — как в tikz-исходнике. Адиабаты — var(--fig-b),
   оси — currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['serii-adiabat'] = String.raw`
<svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Диаграмма P-V с тремя непересекающимися адиабатами">
  <!-- оси -->
  <line x1="50" y1="280" x2="420" y2="280" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 428 280 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="50" y1="280" x2="50" y2="40" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 50 32 l -4.5 11 h 9 z" fill="currentColor"/>
  <!-- три адиабаты -->
  <g fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.6">
    <path d="M 350 251.2 L 290 241.5 L 230 224.1 L 170 185.2 L 140 142.3 L 110 46.7"/>
    <path d="M 350 255.7 L 290 247.5 L 230 232.7 L 170 199.9 L 140 163.6 L 110 82.7"/>
    <path d="M 350 260.1 L 290 253.4 L 230 241.3 L 170 214.5 L 140 184.8 L 110 118.7"/>
  </g>
  <g fill="var(--fig-b, #c2571a)">
    <path d="M 110 46.7 l 0.2 12 l 7.4 -3.2 z"/>
    <path d="M 110 82.7 l 0.6 12 l 7.3 -3.5 z"/>
    <path d="M 110 118.7 l 1 12 l 7.2 -3.8 z"/>
  </g>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="34" y="48">P</text>
    <text x="412" y="304">V</text>
  </g>
  <text x="212" y="152" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="var(--fig-b, #c2571a)">&#948;Q = 0</text>
</svg>`;
