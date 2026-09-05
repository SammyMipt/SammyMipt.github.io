/* Перерисовка pics/molecular_interaction.tex: эффективная потенциальная
   энергия взаимодействия двух нейтральных молекул. Кривая посчитана
   честно по формуле tikz-исходника U(r) = 2/r² − 4/r (те же условные
   оси): минимум ровно в r = 1, U = −2, ноль в r = 0,5. Подписи
   «Отталкивание»/«Притяжение», точка минимума, пунктирные отсчёты
   r_min и E_0 — как в tikz. */
window.FIGS = window.FIGS || {};
window.FIGS['potencial-vzaimodejstviya'] = String.raw`
<svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Потенциальная энергия взаимодействия молекул: отталкивание на малых расстояниях, притяжение на больших, минимум E0 при r min">
  <!-- оси: r вправо, U вверх; ось r проходит через U = 0 -->
  <line x1="44" y1="200" x2="440" y2="200" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 448 200 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="44" y1="310" x2="44" y2="40" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 44 32 l -4.5 11 h 9 z" fill="currentColor"/>
  <!-- кривая U(r) = 2/r² − 4/r -->
  <path d="M 65.5 48.1 L 65.8 57.4 L 66.4 75.1 L 67.2 96.7 L 68.1 119.9 L 69.2 142.9 L 70.5 164.7 L 71.8 184.6 L 73.3 202.2 L 75.0 216.4 L 76.7 228.5 L 78.5 238.7 L 80.5 247.1 L 82.5 254.0 L 84.6 259.5 L 86.8 263.9 L 89.2 267.2 L 91.6 269.6 L 94.1 271.4 L 96.6 272.5 L 99.3 273.1 L 102.0 273.3 L 104.9 273.2 L 107.8 272.8 L 110.7 272.1 L 113.8 271.3 L 116.9 270.4 L 120.1 269.3 L 123.4 268.1 L 126.7 266.9 L 130.1 265.6 L 133.6 264.4 L 137.1 263.0 L 140.7 261.7 L 144.4 260.4 L 148.2 259.1 L 152.0 257.8 L 155.9 256.5 L 159.8 255.2 L 163.8 254.0 L 167.9 252.7 L 172.0 251.6 L 176.2 250.4 L 180.4 249.3 L 184.7 248.1 L 189.1 247.1 L 193.5 246.0 L 198.0 245.0 L 202.5 244.0 L 207.1 243.0 L 211.8 242.1 L 216.5 241.2 L 221.2 240.3 L 226.0 239.4 L 230.9 238.6 L 235.8 237.8 L 240.8 237.0 L 245.9 236.2 L 250.9 235.5 L 256.1 234.7 L 261.3 234.0 L 266.5 233.4 L 271.8 232.7 L 277.2 232.1 L 282.6 231.4 L 288.0 230.8 L 293.5 230.2 L 299.1 229.7 L 304.7 229.1 L 310.3 228.6 L 316.0 228.0 L 321.8 227.5 L 327.6 227.0 L 333.4 226.5 L 339.3 226.1 L 345.3 225.6 L 351.2 225.2 L 357.3 224.7 L 363.4 224.3 L 369.5 223.9 L 375.7 223.5 L 381.9 223.1 L 388.2 222.7 L 394.5 222.3 L 400.9 222.0 L 407.3 221.6 L 413.7 221.3 L 420.2 220.9 L 426.8 220.6 L 433.4 220.3 L 440.0 220.0"
        fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6"/>
  <!-- отсчёты минимума -->
  <line x1="44" y1="273.3" x2="102" y2="273.3" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 5"/>
  <line x1="102" y1="200" x2="102" y2="273.3" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 5"/>
  <circle cx="102" cy="273.3" r="4" fill="currentColor"/>
  <!-- подписи механизмов -->
  <g font-family="Georgia, 'Times New Roman', serif" font-size="18" fill="currentColor">
    <text x="96" y="86">Отталкивание</text>
    <text x="292" y="258">Притяжение</text>
  </g>
  <!-- подписи осей и отметок -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="26" y="48">U</text>
    <text x="433" y="192">r</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor">
    <text x="106" y="220">r<tspan font-size="14" dy="4">min</tspan></text>
    <text x="14" y="280">E<tspan font-size="14" dy="4">0</tspan></text>
  </g>
</svg>`;
