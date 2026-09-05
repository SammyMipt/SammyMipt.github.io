/* Секториальная скорость — перерисовка tikz-иллюстрации конспекта
   (pics/sectorial_speed): радиус-вектор из центра силы O к точке орбиты,
   малое перемещение ds (--fig-a), заметённый треугольник dσ. */
window.FIGS = window.FIGS || {};
window.FIGS['sektorialnaya-skorost'] = String.raw`
<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Эллиптическая орбита; радиус-вектор из центра силы O и малое перемещение ds заметают элементарный треугольник площадью d-сигма">
  <!-- орбита -->
  <ellipse cx="260" cy="160" rx="240" ry="144" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <!-- заметённый треугольник -->
  <polygon points="116,160 452,73.6 413.6,49.6" fill="currentColor" opacity="0.14"/>
  <!-- радиус-вектор r -->
  <line x1="116" y1="160" x2="444.3" y2="75.6" stroke="currentColor" stroke-width="2.6"/>
  <polygon points="452,73.6 439.5,77.1 442.2,88.2" fill="currentColor"/>
  <!-- второй радиус-вектор (к концу перемещения) -->
  <line x1="116" y1="160" x2="406.4" y2="52.3" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="413.6,49.6 401.4,53.4 405.2,63.9" fill="currentColor"/>
  <!-- продолжение r за точку орбиты -->
  <line x1="452" y1="73.6" x2="500" y2="61.3" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 7" opacity="0.55"/>
  <!-- перемещение ds -->
  <line x1="452" y1="73.6" x2="420.4" y2="53.8" stroke="var(--fig-a, #1f8a9d)" stroke-width="3"/>
  <polygon points="413.6,49.6 419.3,60.6 425.2,50.5" fill="var(--fig-a, #1f8a9d)"/>
  <!-- центр силы -->
  <circle cx="116" cy="160" r="5.5" fill="var(--fig-b, #c2571a)"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21">
    <text x="112" y="146" text-anchor="end" font-style="normal" fill="currentColor">O</text>
    <text x="286" y="134" fill="currentColor">r</text>
    <text x="416" y="34" text-anchor="middle" fill="var(--fig-a, #1f8a9d)">ds</text>
    <text x="330" y="100" fill="currentColor">d&#963;</text>
    <text x="459" y="56" fill="currentColor">&#945;</text>
  </g>
</svg>`;
