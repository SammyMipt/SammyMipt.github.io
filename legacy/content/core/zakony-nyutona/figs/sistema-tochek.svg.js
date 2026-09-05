/* Система материальных точек с внутренними и внешними силами: перерисовка
   tikz-иллюстрации конспекта (point_system). Индексы сил приведены к
   конвенции текста: F_ik — сила на i-ю точку со стороны k-й. Внутренние
   силы — currentColor, внешние — токен --fig-b. Ради читаемости подписаны
   силы точки 1, парная F_21 и все внешние; остальные стрелки те же. */
window.FIGS = window.FIGS || {};
window.FIGS['sistema-tochek'] = String.raw`
<svg viewBox="0 0 700 490" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Четыре материальные точки с внутренними силами между ними и внешними силами">
  <defs>
    <marker id="zn-st-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
    <marker id="zn-st-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-b, #c2571a)"/>
    </marker>
  </defs>

  <!-- внутренние силы: стрелки от каждой точки к остальным -->
  <g fill="none" stroke="currentColor" stroke-width="2.2" marker-end="url(#zn-st-c)">
    <line x1="90" y1="420" x2="174" y2="378"/>
    <line x1="90" y1="420" x2="153" y2="315"/>
    <line x1="90" y1="420" x2="237" y2="399"/>
    <line x1="370" y1="280" x2="286" y2="322"/>
    <line x1="370" y1="280" x2="349" y2="217"/>
    <line x1="370" y1="280" x2="433" y2="301"/>
    <line x1="300" y1="70" x2="237" y2="175"/>
    <line x1="300" y1="70" x2="321" y2="133"/>
    <line x1="300" y1="70" x2="384" y2="154"/>
    <line x1="580" y1="350" x2="433" y2="371"/>
    <line x1="580" y1="350" x2="517" y2="329"/>
    <line x1="580" y1="350" x2="496" y2="266"/>
  </g>

  <!-- внешние силы -->
  <g fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.6" marker-end="url(#zn-st-b)">
    <line x1="90" y1="420" x2="55" y2="350"/>
    <line x1="370" y1="280" x2="405" y2="350"/>
    <line x1="300" y1="70" x2="230" y2="105"/>
    <line x1="580" y1="350" x2="650" y2="315"/>
  </g>

  <!-- точки -->
  <g fill="currentColor">
    <circle cx="90" cy="420" r="5"/>
    <circle cx="370" cy="280" r="5"/>
    <circle cx="300" cy="70" r="5"/>
    <circle cx="580" cy="350" r="5"/>
  </g>

  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" fill="currentColor">
    <g font-size="22">
      <text x="68" y="446">1</text>
      <text x="384" y="266">2</text>
      <text x="282" y="56">3</text>
      <text x="596" y="376">n</text>
    </g>
    <!-- подписи внутренних сил точки 1 и парной силы F_21 -->
    <g font-size="19">
      <text x="184" y="366">F<tspan font-size="13" dy="5">12</tspan></text>
      <text x="112" y="300">F<tspan font-size="13" dy="5">13</tspan></text>
      <text x="243" y="424">F<tspan font-size="13" dy="5">1n</tspan></text>
      <text x="248" y="348">F<tspan font-size="13" dy="5">21</tspan></text>
    </g>
    <!-- подписи внешних сил -->
    <g font-size="19" fill="var(--fig-b, #c2571a)">
      <text x="24" y="336">F<tspan font-size="13" dy="5">1</tspan><tspan font-size="12" dy="-13">(e)</tspan></text>
      <text x="412" y="374">F<tspan font-size="13" dy="5">2</tspan><tspan font-size="12" dy="-13">(e)</tspan></text>
      <text x="172" y="94">F<tspan font-size="13" dy="5">3</tspan><tspan font-size="12" dy="-13">(e)</tspan></text>
      <text x="622" y="294">F<tspan font-size="13" dy="5">n</tspan><tspan font-size="12" dy="-13">(e)</tspan></text>
    </g>
  </g>
</svg>`;
