/* Перерисовка pics/karno_cycle.tex: цикл Карно на диаграмме P-V. Точки
   1-4 добавлены к tikz-эскизу (там они закомментированы), чтобы номера
   на схеме совпадали с нумерацией шагов в тексте вывода. Кривые
   посчитаны честно: изотермы P = 5/V и P = 2/V (var(--fig-a)), адиабаты
   P = 12/V² и P = 5/V² (var(--fig-b), gamma = 2 для наглядности);
   в этих осях цикл замыкается точно. Обход по часовой стрелке. */
window.FIGS = window.FIGS || {};
window.FIGS['cikl-karno'] = String.raw`
<svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Цикл Карно на диаграмме P-V: изотерма 1-2 при T H, адиабата 2-3, изотерма 3-4 при T X, адиабата 4-1">
  <!-- оси -->
  <line x1="40" y1="300" x2="440" y2="300" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 448 300 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="40" y1="300" x2="40" y2="40" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 40 32 l -4.5 11 h 9 z" fill="currentColor"/>
  <!-- изотерма 1-2 при T_H -->
  <path d="M 96 60 L 98.8 71.4 L 101.6 81.8 L 107.2 100 L 115.6 122.2 L 124 140 L 135.2 158.8 L 146.4 173.7 L 157.6 185.7 L 174.4 200"
        fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6"/>
  <path d="M 146.4 173.7 L 136.2 167.6 L 143.4 162.2 Z" fill="var(--fig-a, #1f8a9d)"/>
  <!-- адиабата 2-3 -->
  <path d="M 174.4 200 L 191.2 221 L 208 236 L 230.4 250.2 L 252.8 260.1 L 280.8 268.8 L 308.8 275 L 342.4 280.2 L 376 284"
        fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.6"/>
  <path d="M 280.8 268.8 L 269 269.8 L 271.6 261.2 Z" fill="var(--fig-b, #c2571a)"/>
  <!-- изотерма 3-4 при T_X -->
  <path d="M 376 284 L 342.4 282.2 L 308.8 280 L 275.2 277.1 L 241.6 273.3 L 213.6 269 L 196.8 265.7 L 180 261.6"
        fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6"/>
  <path d="M 241.6 273.3 L 253 270 L 252 279 Z" fill="var(--fig-a, #1f8a9d)"/>
  <!-- адиабата 4-1 -->
  <path d="M 180 261.6 L 168.8 254.6 L 157.6 245.6 L 146.4 233.5 L 135.2 217 L 124 193.3 L 115.6 168.4 L 107.2 133.3 L 101.6 101.6 L 98.8 82.3 L 96 60"
        fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.6"/>
  <path d="M 124 193.3 L 132.8 201.3 L 124.6 205.1 Z" fill="var(--fig-b, #c2571a)"/>
  <!-- точки цикла -->
  <g fill="currentColor">
    <circle cx="96" cy="60" r="4"/>
    <circle cx="174.4" cy="200" r="4"/>
    <circle cx="376" cy="284" r="4"/>
    <circle cx="180" cy="261.6" r="4"/>
  </g>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="26" y="48">P</text>
    <text x="432" y="324">V</text>
    <text x="78" y="56">1</text>
    <text x="185" y="192">2</text>
    <text x="384" y="304">3</text>
    <text x="163" y="284">4</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19">
    <text x="146" y="122" fill="var(--fig-a, #1f8a9d)">T<tspan font-size="14" dy="4">H</tspan></text>
    <text x="296" y="260" fill="var(--fig-a, #1f8a9d)">T<tspan font-size="14" dy="4">X</tspan></text>
    <text x="288" y="240" fill="var(--fig-b, #c2571a)">&#948;Q = 0</text>
    <text x="48" y="190" fill="var(--fig-b, #c2571a)">&#948;Q = 0</text>
  </g>
</svg>`;
