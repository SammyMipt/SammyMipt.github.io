/* Баланс потоков в элементарном объёме — собственный рисунок недели
   (в конспекте пустая заготовка figure «Схема потоков через
   элементарный объем»). Объём — ящик между x и x+dx, сечение S
   выделено токеном --fig-a, потоки — --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['balans-potokov'] = String.raw`
<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ящик между координатами x и x плюс dx; слева входит поток j от x, справа выходит поток j от x плюс dx, левая грань площади S выделена">
  <!-- левая грань (сечение S) -->
  <polygon points="210,90 244,66 244,186 210,210" fill="var(--fig-a, #1f8a9d)" opacity="0.25"/>
  <!-- корпус ящика -->
  <g stroke="currentColor" stroke-width="2" fill="none">
    <rect x="210" y="90" width="90" height="120"/>
    <polyline points="210,90 244,66 334,66 300,90"/>
    <polyline points="334,66 334,186 300,210"/>
  </g>
  <line x1="210" y1="210" x2="244" y2="186" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.6"/>
  <line x1="244" y1="186" x2="334" y2="186" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.6"/>
  <line x1="244" y1="186" x2="244" y2="66" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.6"/>

  <!-- входящий и выходящий потоки -->
  <line x1="100" y1="142" x2="196" y2="142" stroke="var(--fig-b, #c2571a)" stroke-width="3.4"/>
  <polygon points="204,142 190,136 190,148" fill="var(--fig-b, #c2571a)"/>
  <line x1="308" y1="128" x2="404" y2="128" stroke="var(--fig-b, #c2571a)" stroke-width="3.4"/>
  <polygon points="412,128 398,122 398,134" fill="var(--fig-b, #c2571a)"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="var(--fig-b, #c2571a)">
    <text x="118" y="128">j(x)</text>
    <text x="330" y="112">j(x+dx)</text>
  </g>
  <text x="222" y="146" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" fill="var(--fig-a, #1f8a9d)">S</text>

  <!-- ось x с отметками -->
  <line x1="80" y1="258" x2="450" y2="258" stroke="currentColor" stroke-width="1.6" opacity="0.6"/>
  <polygon points="450,258 439,253 439,263" fill="currentColor" opacity="0.6"/>
  <text x="456" y="264" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor" opacity="0.8">x</text>
  <g stroke="currentColor" stroke-width="1.2" opacity="0.45" stroke-dasharray="4 4">
    <line x1="210" y1="210" x2="210" y2="258"/>
    <line x1="300" y1="210" x2="300" y2="258"/>
  </g>
  <g stroke="currentColor" stroke-width="1.6" opacity="0.7">
    <line x1="210" y1="253" x2="210" y2="263"/>
    <line x1="300" y1="253" x2="300" y2="263"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor" text-anchor="middle">
    <text x="210" y="284">x</text>
    <text x="300" y="284">x+dx</text>
  </g>
</svg>`;
