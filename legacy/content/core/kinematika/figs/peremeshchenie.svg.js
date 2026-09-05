/* Перемещение как разность радиус-векторов: перерисовка tikz-иллюстрации
   конспекта (displacement.tex). Тот же псевдо-3D базис, что у рисунка
   radius-vektor; единичные векторы осей опущены ради читаемости хорды.
   Контуры — currentColor, радиус-векторы — --fig-a, перемещение — --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['peremeshchenie'] = String.raw`
<svg viewBox="0 0 470 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Радиус-векторы двух моментов времени и вектор перемещения между точками A и B">
  <!-- оси x, y, z -->
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <line x1="150" y1="250" x2="430" y2="250"/>
    <line x1="150" y1="250" x2="150" y2="52"/>
    <line x1="150" y1="250" x2="62" y2="308"/>
  </g>
  <g fill="currentColor">
    <path d="M 430 250 l -10 -4 v 8 z"/>
    <path d="M 150 52 l -4 10 h 8 z"/>
    <path d="M 62 308 l 10.5 -1.5 -4.5 -6.9 z"/>
  </g>
  <!-- траектория через A и B -->
  <path d="M 150 250 C 185 150 220 118 268 144 C 300 161 305 158 319 164 C 348 176 368 158 390 132"
        fill="none" stroke="currentColor" stroke-width="2.4"/>
  <!-- радиус-вектор r(t): O -> A -->
  <line x1="150" y1="250" x2="261" y2="150" stroke="var(--fig-a, #1f8a9d)" stroke-width="3"/>
  <path d="M 268 144 l -11.4 2.2 5.2 6.6 z" fill="var(--fig-a, #1f8a9d)"/>
  <!-- радиус-вектор r(t+Δt): O -> B -->
  <line x1="150" y1="250" x2="311" y2="168" stroke="var(--fig-a, #1f8a9d)" stroke-width="3"/>
  <path d="M 319 164 l -11.6 0.7 3.9 7.4 z" fill="var(--fig-a, #1f8a9d)"/>
  <!-- перемещение Δr: A -> B -->
  <line x1="268" y1="144" x2="312" y2="161.3" stroke="var(--fig-b, #c2571a)" stroke-width="3.4"/>
  <path d="M 319 164 l -9.3 -7 -2.9 7.6 z" fill="var(--fig-b, #c2571a)"/>
  <circle cx="268" cy="144" r="4" fill="currentColor"/>
  <circle cx="319" cy="164" r="4" fill="currentColor"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21" fill="currentColor">
    <text x="437" y="256">x</text>
    <text x="158" y="62">y</text>
    <text x="48" y="322">z</text>
    <text x="253" y="130">A</text>
    <text x="328" y="178">B</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="var(--fig-a, #1f8a9d)">
    <text x="155" y="185">r(t)</text>
    <text x="212" y="235">r(t+&#916;t)</text>
  </g>
  <g fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="1.5">
    <path d="M 157 167 h 12 m 0 0 l -4 -3 m 4 3 l -4 3"/>
    <path d="M 214 217 h 12 m 0 0 l -4 -3 m 4 3 l -4 3"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="var(--fig-b, #c2571a)">
    <text x="276" y="122">&#916;r</text>
  </g>
  <g fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="1.5">
    <path d="M 291 105 h 12 m 0 0 l -4 -3 m 4 3 l -4 3"/>
  </g>
</svg>`;
