/* Траектория броуновской частицы — перерисовка по пустой заготовке
   figure конспекта (12_6). Ломаная из случайных звеньев — currentColor,
   старт — --fig-a, конец — --fig-b, смещение Δr — пунктирная хорда. */
window.FIGS = window.FIGS || {};
window.FIGS['brounovskaya-traektoriya'] = String.raw`
<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ломаная траектория броуновской частицы из случайных звеньев; пунктирная хорда соединяет начало и конец — смещение много короче пути">
  <path d="M 150.0 185.0 L 171.7 170.4 L 175.0 138.9 L 173.4 163.8 L 198.9 146.5 L 187.0 140.6 L 158.3 158.5 L 171.8 168.7 L 191.1 162.5 L 195.4 178.8 L 210.0 169.4 L 187.8 180.3 L 195.1 160.3 L 215.5 171.7 L 226.6 174.2 L 236.2 198.7 L 230.7 224.4 L 236.9 234.6 L 263.3 238.5 L 272.4 227.2 L 273.2 236.5 L 263.0 223.5 L 279.5 242.6 L 263.1 230.7 L 277.4 251.2 L 258.8 244.4 L 275.2 272.1 L 292.4 252.2 L 315.9 251.6 L 309.2 261.5 L 292.0 247.7 L 260.9 260.9 L 267.2 250.8 L 274.0 244.8 L 264.2 231.1 L 260.0 198.5 L 232.5 193.2 L 256.7 201.8 L 271.7 215.5 L 266.3 224.9 L 266.1 213.6 L 265.6 224.7 L 256.9 210.6 L 291.4 178.2 L 322.8 160.9 L 341.5 172.4 L 356.1 149.8 L 383.9 141.2 L 371.3 118.6 L 395.2 104.9" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" opacity="0.85"/>

  <!-- смещение за время наблюдения -->
  <line x1="150" y1="185" x2="395.2" y2="104.9" stroke="var(--fig-b, #c2571a)" stroke-width="1.6" stroke-dasharray="7 6" opacity="0.9"/>
  <text x="268" y="128" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="var(--fig-b, #c2571a)">&#916;r</text>

  <!-- старт и конец -->
  <circle cx="150" cy="185" r="6" fill="var(--fig-a, #1f8a9d)"/>
  <circle cx="395.2" cy="104.9" r="6" fill="var(--fig-b, #c2571a)"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="16">
    <text x="102" y="206" fill="var(--fig-a, #1f8a9d)">старт</text>
    <text x="408" y="98" fill="var(--fig-b, #c2571a)">финиш</text>
  </g>
</svg>`;
