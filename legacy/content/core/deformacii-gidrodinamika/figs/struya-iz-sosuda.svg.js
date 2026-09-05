/* Сосуд с отверстием в боковой стенке — рисунок задачи о реактивной силе
   (tasks.tex недели 08, задача 2). По tikz-исходнику: сосуд на столе,
   вода до уровня h₂, отверстие на высоте h₁, струя со скоростью v.
   В tikz верх сосуда прочерчен закрытым — здесь сосуд открыт сверху:
   решение пользуется атмосферным давлением на свободной поверхности.
   Струя и уровень — токен --fig-b и --fig-a. Рисунок не в масштабе,
   как и исходник. */
window.FIGS = window.FIGS || {};
window.FIGS['struya-iz-sosuda'] = String.raw`
<svg viewBox="0 0 430 312" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Цилиндрический сосуд с водой на столе; из отверстия в боковой стенке на высоте h1 бьёт горизонтальная струя, уровень воды h2">
  <defs>
    <marker id="fig-arr-dg-ss" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
    <marker id="fig-arr-dg-ss-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-b, #c2571a)"/>
    </marker>
  </defs>
  <!-- вода -->
  <rect x="30" y="56" width="160" height="224" fill="var(--fig-a, #0f7a8a)" fill-opacity="0.18"/>
  <line x1="30" y1="56" x2="190" y2="56" stroke="var(--fig-a, #0f7a8a)" stroke-width="2.2"/>
  <!-- стенки сосуда: справа отверстие на высоте h1 -->
  <line x1="30" y1="280" x2="30" y2="40" stroke="currentColor" stroke-width="2.6"/>
  <line x1="190" y1="280" x2="190" y2="208" stroke="currentColor" stroke-width="2.6"/>
  <line x1="190" y1="192" x2="190" y2="40" stroke="currentColor" stroke-width="2.6"/>
  <!-- стол -->
  <line x1="6" y1="280" x2="360" y2="280" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.1" opacity="0.5">
    <line x1="30" y1="292" x2="18" y2="302"/>
    <line x1="70" y1="292" x2="58" y2="302"/>
    <line x1="110" y1="292" x2="98" y2="302"/>
    <line x1="150" y1="292" x2="138" y2="302"/>
    <line x1="190" y1="292" x2="178" y2="302"/>
    <line x1="230" y1="292" x2="218" y2="302"/>
    <line x1="270" y1="292" x2="258" y2="302"/>
    <line x1="310" y1="292" x2="298" y2="302"/>
  </g>
  <!-- струя -->
  <line x1="196" y1="200" x2="308" y2="200" stroke="var(--fig-b, #c2571a)" stroke-width="2.6" marker-end="url(#fig-arr-dg-ss-b)"/>
  <text x="252" y="188" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="var(--fig-b, #c2571a)" text-anchor="middle">v</text>
  <!-- размеры -->
  <g stroke="currentColor" stroke-width="1.3">
    <line x1="345" y1="276" x2="345" y2="204" marker-start="url(#fig-arr-dg-ss)" marker-end="url(#fig-arr-dg-ss)"/>
    <line x1="345" y1="196" x2="345" y2="60" marker-start="url(#fig-arr-dg-ss)" marker-end="url(#fig-arr-dg-ss)"/>
  </g>
  <g stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.55">
    <line x1="318" y1="200" x2="345" y2="200"/>
    <line x1="190" y1="56" x2="345" y2="56"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor">
    <text x="356" y="246">h<tspan baseline-shift="sub" font-size="13">1</tspan></text>
    <text x="356" y="134">h<tspan baseline-shift="sub" font-size="13">2</tspan> &#8722; h<tspan baseline-shift="sub" font-size="13">1</tspan></text>
  </g>
</svg>`;
