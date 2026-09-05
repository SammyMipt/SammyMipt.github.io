/* Разбиение стержня для перехода от суммы к интегралу: перерисовка
   tikz-иллюстрации конспекта (mass_center). Столбики — сумма x_i * dx,
   выделенный столбик — токен --fig-a, штриховая линия ведёт к значению
   x_i на вертикальной оси. */
window.FIGS = window.FIGS || {};
window.FIGS['razbienie-sterzhnya'] = String.raw`
<svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ступенчатое разбиение под прямой y = x: столбики ширины дельта x">
  <defs>
    <marker id="zn-rs-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>

  <!-- столбики разбиения: высота столбика равна x в его середине -->
  <g fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-opacity="0.35" stroke-width="1">
    <rect x="50" y="361.5" width="17" height="8.5"/>
    <rect x="67" y="344.5" width="17" height="25.5"/>
    <rect x="84" y="327.5" width="17" height="42.5"/>
    <rect x="101" y="310.5" width="17" height="59.5"/>
    <rect x="118" y="293.5" width="17" height="76.5"/>
    <rect x="135" y="276.5" width="17" height="93.5"/>
    <rect x="152" y="259.5" width="17" height="110.5"/>
    <rect x="169" y="242.5" width="17" height="127.5"/>
    <rect x="186" y="225.5" width="17" height="144.5"/>
    <rect x="203" y="208.5" width="17" height="161.5"/>
    <rect x="220" y="191.5" width="17" height="178.5"/>
    <rect x="237" y="174.5" width="17" height="195.5"/>
    <rect x="254" y="157.5" width="17" height="212.5"/>
    <rect x="271" y="140.5" width="17" height="229.5"/>
    <rect x="305" y="106.5" width="17" height="263.5"/>
    <rect x="322" y="89.5" width="17" height="280.5"/>
    <rect x="339" y="72.5" width="17" height="297.5"/>
    <rect x="356" y="55.5" width="17" height="314.5"/>
    <rect x="373" y="38.5" width="17" height="331.5"/>
  </g>
  <!-- выделенный столбик от x_i до x_i + dx -->
  <rect x="288" y="123.5" width="17" height="246.5"
        fill="var(--fig-a, #1f8a9d)" fill-opacity="0.35"
        stroke="var(--fig-a, #1f8a9d)" stroke-width="1.6"/>
  <!-- штриховая линия от вершины выделенного столбика к оси y -->
  <line x1="288" y1="123.5" x2="50" y2="123.5" stroke="currentColor"
        stroke-width="1.4" stroke-dasharray="5 6"/>

  <!-- прямая y = x -->
  <line x1="50" y1="370" x2="390" y2="30" stroke="currentColor" stroke-width="2.4"/>

  <!-- оси -->
  <g fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#zn-rs-c)">
    <line x1="34" y1="370" x2="532" y2="370"/>
    <line x1="50" y1="386" x2="50" y2="38"/>
  </g>

  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21" fill="currentColor">
    <text x="536" y="392">x</text>
    <text x="28" y="34">y</text>
    <text x="398" y="44">y = x</text>
    <text x="278" y="396">x<tspan font-size="14" dy="5">i</tspan></text>
    <text x="308" y="396">x<tspan font-size="14" dy="5">i</tspan><tspan dy="-5"> + &#916;x</tspan></text>
    <text x="12" y="130">x<tspan font-size="14" dy="5">i</tspan></text>
  </g>
</svg>`;
