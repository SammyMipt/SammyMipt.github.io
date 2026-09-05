/* Перерисовка pics/karno_prove_2.tex: цикл Карно и произвольный цикл в
   координатах T-S. Прямоугольник Карно: горячая изотерма T_H —
   var(--fig-b), холодная T_X — var(--fig-a), адиабаты вертикальны.
   Произвольный обратимый цикл (штриховка) вписан в прямоугольник, его
   площадь — работа A. Штриховка — SVG-паттерн на currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['cikl-ts'] = String.raw`
<svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Цикл Карно в координатах T-S: прямоугольник между уровнями T H и T X, внутрь вписан произвольный цикл, его площадь равна работе A">
  <defs>
    <pattern id="hatch-cikl-ts" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" stroke-width="1.2" opacity=".45"/>
    </pattern>
  </defs>
  <!-- оси -->
  <line x1="40" y1="300" x2="440" y2="300" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 448 300 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="40" y1="300" x2="40" y2="40" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 40 32 l -4.5 11 h 9 z" fill="currentColor"/>
  <!-- уровни температур -->
  <line x1="40" y1="80" x2="388" y2="80" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 6" opacity=".55"/>
  <line x1="40" y1="212" x2="388" y2="212" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 6" opacity=".55"/>
  <!-- произвольный цикл внутри (штриховка) -->
  <path d="M 82 168 C 88 132, 104 96, 124 84 C 150 76, 216 98, 250 124 C 268 138, 284 152, 288 168 C 292 186, 244 198, 208 210 C 182 218, 142 212, 124 190 C 112 176, 92 184, 82 168 Z"
        fill="url(#hatch-cikl-ts)" stroke="currentColor" stroke-width="1.6"/>
  <!-- прямоугольник Карно -->
  <line x1="82" y1="80" x2="281" y2="80" stroke="var(--fig-b, #c2571a)" stroke-width="2.8"/>
  <path d="M 292 80 l -11 -4.5 v 9 z" fill="var(--fig-b, #c2571a)"/>
  <line x1="292" y1="212" x2="93" y2="212" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.8"/>
  <path d="M 82 212 l 11 -4.5 v 9 z" fill="var(--fig-a, #1f8a9d)"/>
  <line x1="82" y1="212" x2="82" y2="91" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 82 80 l -4.5 11 h 9 z" fill="currentColor"/>
  <line x1="292" y1="80" x2="292" y2="201" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 292 212 l -4.5 -11 h 9 z" fill="currentColor"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="26" y="48">T</text>
    <text x="432" y="324">S</text>
    <text x="396" y="87">T<tspan font-size="15" dy="5">H</tspan></text>
    <text x="396" y="219">T<tspan font-size="15" dy="5">X</tspan></text>
    <text x="162" y="154">A</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor">
    <text x="74" y="152" text-anchor="end">&#948;Q = 0</text>
    <text x="300" y="152">&#948;Q = 0</text>
  </g>
</svg>`;
