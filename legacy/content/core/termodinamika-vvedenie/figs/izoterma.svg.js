/* Изотерма на PV-диаграмме: перерисовка tikz-иллюстрации конспекта
   (isothermal_pic.tex). Гипербола P = νRT/V, площадь под кривой между
   V1 и V2 — работа газа A (полупрозрачная заливка вместо штриховки tikz;
   добавлены штриховые границы области). Контуры — currentColor,
   заливка и буква A — токен --fig-a: тема красит рисунок сама. */
window.FIGS = window.FIGS || {};
window.FIGS['izoterma'] = String.raw`
<svg viewBox="0 0 470 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Изотерма идеального газа: гипербола в координатах P V, площадь под кривой между V1 и V2 равна работе A">
  <!-- область работы под кривой -->
  <path d="M 120 129 C 155 165 200 190 250 203 C 295 214 330 219 360 222 L 360 255 L 120 255 Z"
        fill="var(--fig-a, #1f8a9d)" opacity=".18"/>
  <!-- оси P, V -->
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <line x1="55" y1="255" x2="440" y2="255"/>
    <line x1="55" y1="255" x2="55" y2="38"/>
  </g>
  <g fill="currentColor">
    <path d="M 446 255 l -10 -4 v 8 z"/>
    <path d="M 55 32 l -4 10 h 8 z"/>
  </g>
  <!-- изотерма: гипербола -->
  <path d="M 95 55 C 105 95 120 129 120 129 C 155 165 200 190 250 203 C 295 214 330 219 360 222 C 385 224.4 410 226 430 227.4"
        fill="none" stroke="currentColor" stroke-width="2.4"/>
  <!-- границы области: V1 и V2 -->
  <g fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity=".65">
    <line x1="120" y1="255" x2="120" y2="129"/>
    <line x1="360" y1="255" x2="360" y2="222"/>
  </g>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21" fill="currentColor">
    <text x="447" y="262">V</text>
    <text x="63" y="48">P</text>
    <text x="112" y="278">V</text>
    <text x="127" y="283" font-size="14">1</text>
    <text x="352" y="278">V</text>
    <text x="367" y="283" font-size="14">2</text>
    <text x="228" y="238" font-size="24" fill="var(--fig-a, #1f8a9d)">A</text>
  </g>
</svg>`;
