/* Стержень как физический маятник — перерисовка tikz-рисунка методички
   (_inputs/pictures/week_7_task_3): стержень длиной l, отклонённый
   на угол φ от вертикали; два отверстия — точка подвеса и середина.
   Угол — токен --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['sterzhen-podves'] = String.raw`
<svg viewBox="0 0 330 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Однородный стержень длиной l, подвешенный за отверстие между серединой и концом, отклонён от вертикали на угол фи">
  <!-- вертикаль -->
  <line x1="160" y1="30" x2="160" y2="350" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 6" opacity="0.6"/>
  <!-- стержень (наклон 30° от вертикали), подвес выше середины -->
  <path d="M 135.8 20.1 L 285.8 279.9 L 270.2 288.9 L 120.2 29.1 Z"
        fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
  <!-- отверстия: точка подвеса и середина стержня -->
  <circle cx="160" cy="80" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="203" cy="154.5" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/>
  <!-- длина стержня -->
  <text x="222" y="152" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor">l</text>
  <!-- угол отклонения -->
  <path d="M 160 190 A 110 110 0 0 0 215 175.3" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.2"/>
  <text x="184" y="212" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="var(--fig-b, #c2571a)">&#966;</text>
</svg>`;
