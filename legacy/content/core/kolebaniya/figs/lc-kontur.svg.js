/* LC-контур — перерисовка circuitikz-иллюстрации конспекта
   (inputs/06/pics/LC-countur): замкнутый контур из катушки
   индуктивности L и конденсатора C. Контуры — currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['lc-kontur'] = String.raw`
<svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Замкнутый электрический контур из катушки индуктивности L и конденсатора C">
  <g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
    <!-- нижняя и боковые стороны контура -->
    <path d="M 60 60 L 60 180 L 360 180 L 360 60"/>
    <!-- верхняя сторона до катушки -->
    <line x1="60" y1="60" x2="110" y2="60"/>
    <!-- катушка: четыре витка -->
    <path d="M 110 60 A 12.5 14 0 0 1 135 60"/>
    <path d="M 135 60 A 12.5 14 0 0 1 160 60"/>
    <path d="M 160 60 A 12.5 14 0 0 1 185 60"/>
    <path d="M 185 60 A 12.5 14 0 0 1 210 60"/>
    <!-- участок между катушкой и конденсатором -->
    <line x1="210" y1="60" x2="273" y2="60"/>
    <!-- обкладки конденсатора -->
    <line x1="273" y1="34" x2="273" y2="86"/>
    <line x1="291" y1="34" x2="291" y2="86"/>
    <!-- участок после конденсатора -->
    <line x1="291" y1="60" x2="360" y2="60"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21" fill="currentColor">
    <text x="160" y="30" text-anchor="middle">L</text>
    <text x="282" y="22" text-anchor="middle">C</text>
  </g>
</svg>`;
