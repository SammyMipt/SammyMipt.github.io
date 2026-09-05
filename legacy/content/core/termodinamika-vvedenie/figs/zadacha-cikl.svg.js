/* Цикл задачи о КПД: перерисовка tikz-иллюстрации методички
   (week_9_task_4.tex). Изобара 1-2, изохора 2-3, адиабата 3-1 (кривая 3/x
   из tikz). Добавлены против tikz стрелки направления обхода — по ним
   видно, что сжатие изобарное, а расширение адиабатное. Линии цикла —
   токен --fig-a, оси и подписи — currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['zadacha-cikl'] = String.raw`
<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Цикл в координатах P V: изобарное сжатие 1-2, изохорный нагрев 2-3, адиабатное расширение 3-1">
  <!-- оси P, V -->
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <line x1="70" y1="250" x2="360" y2="250"/>
    <line x1="70" y1="250" x2="70" y2="38"/>
  </g>
  <g fill="currentColor">
    <path d="M 366 250 l -10 -4 v 8 z"/>
    <path d="M 70 32 l -4 10 h 8 z"/>
  </g>
  <!-- цикл: изобара 1-2, изохора 2-3, адиабата 3-1 -->
  <g fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6">
    <line x1="235" y1="195" x2="125" y2="195"/>
    <line x1="125" y1="195" x2="125" y2="85"/>
    <path d="M 125 85 C 136 112.5 143 130 152.5 140 C 166 154.5 186 174 235 195"
          fill="none"/>
  </g>
  <!-- стрелки направления обхода -->
  <g fill="var(--fig-a, #1f8a9d)">
    <path d="M 172 195 l 11 -4.4 v 8.8 z"/>
    <path d="M 125 132 l -4.4 11 h 8.8 z"/>
    <path d="M 207 186.5 L 194.9 186.8 L 198.8 177.6 z"/>
  </g>
  <!-- вершины цикла -->
  <g fill="currentColor">
    <circle cx="235" cy="195" r="4"/>
    <circle cx="125" cy="195" r="4"/>
    <circle cx="125" cy="85" r="4"/>
  </g>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21" fill="currentColor">
    <text x="367" y="257">V</text>
    <text x="78" y="48">P</text>
    <text x="243" y="215">1</text>
    <text x="103" y="215">2</text>
    <text x="107" y="76">3</text>
  </g>
</svg>`;
