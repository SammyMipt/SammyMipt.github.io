/* Задача двух тел: перерисовка tikz-иллюстрации конспекта (two_body).
   Подписи сил приведены к конвенции формул: F_12 приложена к точке 1,
   F_21 — к точке 2. Вектор r — токен --fig-a, силы — --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['dva-tela'] = String.raw`
<svg viewBox="0 0 560 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Две точки с радиус-векторами, соединяющим вектором r и парой сил">
  <defs>
    <marker id="zn-dt-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
    <marker id="zn-dt-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-a, #1f8a9d)"/>
    </marker>
    <marker id="zn-dt-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-b, #c2571a)"/>
    </marker>
  </defs>

  <!-- радиус-векторы из начала координат -->
  <g fill="none" stroke="currentColor" stroke-width="2.6" marker-end="url(#zn-dt-c)">
    <line x1="60" y1="250" x2="248" y2="62"/>
    <line x1="60" y1="250" x2="443" y2="314"/>
  </g>
  <!-- вектор r = r2 - r1 -->
  <line x1="255" y1="55" x2="444" y2="307" fill="none"
        stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6" marker-end="url(#zn-dt-a)"/>
  <!-- силы: F_12 у точки 1, F_21 у точки 2 -->
  <g fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.8" marker-end="url(#zn-dt-b)">
    <line x1="255" y1="55" x2="313" y2="133"/>
    <line x1="450" y1="315" x2="391" y2="237"/>
  </g>

  <g fill="currentColor">
    <circle cx="255" cy="55" r="5"/>
    <circle cx="450" cy="315" r="5"/>
  </g>

  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" fill="currentColor">
    <g font-size="22">
      <text x="38" y="262">O</text>
      <text x="232" y="48">1</text>
      <text x="466" y="326">2</text>
    </g>
    <g font-size="20">
      <text x="118" y="150">r<tspan font-size="14" dy="5">1</tspan></text>
      <text x="238" y="304">r<tspan font-size="14" dy="5">2</tspan></text>
      <text x="366" y="168" fill="var(--fig-a, #1f8a9d)">r = r<tspan font-size="14" dy="5">2</tspan><tspan dy="-5"> &#8722; r</tspan><tspan font-size="14" dy="5">1</tspan></text>
      <text x="316" y="106" fill="var(--fig-b, #c2571a)">F<tspan font-size="14" dy="5">12</tspan></text>
      <text x="342" y="266" fill="var(--fig-b, #c2571a)">F<tspan font-size="14" dy="5">21</tspan></text>
    </g>
  </g>
  <!-- стрелки над буквами векторов -->
  <g fill="none" stroke-width="1.4">
    <g stroke="currentColor" marker-end="url(#zn-dt-c)">
      <line x1="116" y1="132" x2="130" y2="132"/>
      <line x1="236" y1="286" x2="250" y2="286"/>
    </g>
    <line x1="364" y1="150" x2="378" y2="150" stroke="var(--fig-a, #1f8a9d)" marker-end="url(#zn-dt-a)"/>
  </g>
</svg>`;
