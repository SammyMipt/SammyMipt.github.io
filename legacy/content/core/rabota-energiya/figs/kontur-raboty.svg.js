/* Условие консервативности — перерисовка tikz-иллюстрации конспекта
   (pics/cycle_for_work): две дуги I и II между точками 1 и 2, обе
   направлены из 1 в 2. Пути выделены токенами --fig-a/--fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['kontur-raboty'] = String.raw`
<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Две дуги между точками 1 и 2: верхний путь I и нижний путь II">
  <path d="M 60 110 Q 210 20 360 110" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="3"/>
  <polygon points="360,110 352.1,109.0 355.4,103.4" fill="var(--fig-a, #1f8a9d)"/>
  <path d="M 60 110 Q 210 200 360 110" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="3"/>
  <polygon points="360,110 355.4,116.6 352.1,111.0" fill="var(--fig-b, #c2571a)"/>
  <circle cx="60" cy="110" r="5.5" fill="currentColor"/>
  <circle cx="360" cy="110" r="5.5" fill="currentColor"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="22">
    <text x="44" y="117" text-anchor="end" fill="currentColor">1</text>
    <text x="376" y="117" fill="currentColor">2</text>
    <text x="210" y="50" text-anchor="middle" fill="var(--fig-a, #1f8a9d)">I</text>
    <text x="210" y="184" text-anchor="middle" fill="var(--fig-b, #c2571a)">II</text>
  </g>
</svg>`;
