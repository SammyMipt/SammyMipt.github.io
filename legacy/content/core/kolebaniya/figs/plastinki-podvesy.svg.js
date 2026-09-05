/* Два подвеса квадратной пластинки — перерисовка tikz-рисунка методички
   (_inputs/pictures/week_7_task_2): слева нити сходятся к одной точке,
   справа нити параллельны. Добавлены размерные подписи a (длина нити
   и сторона квадрата равны по условию) — токен --fig-a. */
window.FIGS = window.FIGS || {};
window.FIGS['plastinki-podvesy'] = String.raw`
<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Квадратная пластинка на нитях двумя способами: слева нити сходятся в одну точку, справа нити параллельны; расстояние от подвеса до верхней стороны равно стороне квадрата">
  <defs>
    <pattern id="fig-hatch-kol-plast" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" stroke-width="1.1" opacity="0.5"/>
    </pattern>
  </defs>
  <!-- потолок -->
  <rect x="40" y="30" width="400" height="10" fill="url(#fig-hatch-kol-plast)"/>
  <line x1="40" y1="40" x2="440" y2="40" stroke="currentColor" stroke-width="2.4"/>
  <!-- слева: нити сходятся в одну точку -->
  <circle cx="130" cy="40" r="3.5" fill="currentColor"/>
  <line x1="130" y1="40" x2="75" y2="130" stroke="currentColor" stroke-width="1.8"/>
  <line x1="130" y1="40" x2="185" y2="130" stroke="currentColor" stroke-width="1.8"/>
  <rect x="75" y="130" width="110" height="110" fill="currentColor" opacity="0.08"/>
  <rect x="75" y="130" width="110" height="110" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <line x1="130" y1="40" x2="130" y2="130" stroke="var(--fig-a, #1f8a9d)" stroke-width="1.5" stroke-dasharray="5 5"/>
  <text x="120" y="92" text-anchor="end" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="var(--fig-a, #1f8a9d)">a</text>
  <!-- справа: нити параллельны -->
  <line x1="290" y1="40" x2="290" y2="130" stroke="currentColor" stroke-width="1.8"/>
  <line x1="400" y1="40" x2="400" y2="130" stroke="currentColor" stroke-width="1.8"/>
  <rect x="290" y="130" width="110" height="110" fill="currentColor" opacity="0.08"/>
  <rect x="290" y="130" width="110" height="110" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <text x="280" y="92" text-anchor="end" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="var(--fig-a, #1f8a9d)">a</text>
  <!-- сторона квадрата -->
  <g stroke="var(--fig-a, #1f8a9d)" stroke-width="1.6">
    <line x1="290" y1="262" x2="400" y2="262"/>
    <line x1="290" y1="256" x2="290" y2="268"/>
    <line x1="400" y1="256" x2="400" y2="268"/>
  </g>
  <text x="345" y="286" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="var(--fig-a, #1f8a9d)">a</text>
</svg>`;
