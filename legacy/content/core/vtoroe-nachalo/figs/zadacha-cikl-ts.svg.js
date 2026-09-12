/* Перерисовка _inputs/pictures/week_10_task_3.tex: обратимый цикл 1-2-3-4
   в координатах T-S для задачи о КПД. Наклонные участки 1-2 и 3-4,
   вертикальные адиабаты 2-3 и 4-1 (стрелки — направление обхода).
   К tikz добавлены подписи S1 и S2 у пунктирных вертикалей — теми же
   символами ведётся решение. */
window.FIGS = window.FIGS || {};
window.FIGS['zadacha-cikl-ts'] = String.raw`
<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Цикл в координатах T-S: наклонная 1-2 вверх, вертикаль 2-3 вниз, наклонная 3-4 вниз, вертикаль 4-1 вверх">
  <!-- оси -->
  <line x1="40" y1="260" x2="392" y2="260" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 400 260 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="40" y1="260" x2="40" y2="40" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 40 32 l -4.5 11 h 9 z" fill="currentColor"/>
  <!-- пунктирные вертикали к значениям энтропии -->
  <line x1="136" y1="260" x2="136" y2="204" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 6" opacity=".55"/>
  <line x1="296" y1="260" x2="296" y2="134" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 6" opacity=".55"/>
  <!-- цикл -->
  <line x1="136" y1="106" x2="296" y2="78" stroke="currentColor" stroke-width="2.4"/>
  <line x1="296" y1="78" x2="296" y2="123" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 296 134 l -4.5 -11 h 9 z" fill="currentColor"/>
  <line x1="136" y1="204" x2="296" y2="134" stroke="currentColor" stroke-width="2.4"/>
  <line x1="136" y1="204" x2="136" y2="117" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 136 106 l -4.5 11 h 9 z" fill="currentColor"/>
  <!-- точки -->
  <g fill="currentColor">
    <circle cx="136" cy="106" r="3.6"/>
    <circle cx="296" cy="78" r="3.6"/>
    <circle cx="296" cy="134" r="3.6"/>
    <circle cx="136" cy="204" r="3.6"/>
  </g>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="26" y="48">T</text>
    <text x="384" y="284">S</text>
    <text x="116" y="102">1</text>
    <text x="304" y="72">2</text>
    <text x="308" y="142">3</text>
    <text x="114" y="212">4</text>
    <text x="128" y="284">S<tspan font-size="15" dy="5">1</tspan></text>
    <text x="288" y="284">S<tspan font-size="15" dy="5">2</tspan></text>
  </g>
</svg>`;
