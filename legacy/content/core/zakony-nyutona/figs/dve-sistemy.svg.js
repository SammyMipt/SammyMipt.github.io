/* Переход между системами отсчёта K и K': перерисовка tikz-иллюстрации
   конспекта (change_system). Контуры — currentColor, вектор R — токен
   --fig-a, точка A — --fig-b: тема красит рисунок сама. */
window.FIGS = window.FIGS || {};
window.FIGS['dve-sistemy'] = String.raw`
<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Две системы отсчёта K и K' и точка A с радиус-векторами r и r'">
  <defs>
    <marker id="zn-dvs-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
    <marker id="zn-dvs-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-a, #1f8a9d)"/>
    </marker>
  </defs>

  <!-- оси системы K -->
  <g fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#zn-dvs-c)">
    <line x1="95" y1="310" x2="215" y2="310"/>
    <line x1="95" y1="310" x2="95" y2="190"/>
    <line x1="95" y1="310" x2="38" y2="352"/>
  </g>
  <!-- оси системы K' -->
  <g fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#zn-dvs-c)">
    <line x1="390" y1="260" x2="510" y2="260"/>
    <line x1="390" y1="260" x2="390" y2="140"/>
    <line x1="390" y1="260" x2="333" y2="302"/>
  </g>

  <!-- радиус-векторы r и r' -->
  <g fill="none" stroke="currentColor" stroke-width="2.6" marker-end="url(#zn-dvs-c)">
    <line x1="95" y1="310" x2="295" y2="66"/>
    <line x1="390" y1="260" x2="305" y2="66"/>
  </g>
  <!-- вектор R между началами координат -->
  <line x1="95" y1="310" x2="384" y2="263" fill="none"
        stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6" marker-end="url(#zn-dvs-a)"/>

  <!-- точка A -->
  <circle cx="300" cy="60" r="5" fill="var(--fig-b, #c2571a)"/>

  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="222" y="326">x</text>
    <text x="78" y="186">y</text>
    <text x="24" y="368">z</text>
    <text x="516" y="276">x&#8242;</text>
    <text x="372" y="136">y&#8242;</text>
    <text x="318" y="318">z&#8242;</text>
    <text x="78" y="332">O</text>
    <text x="374" y="284">O&#8242;</text>
    <text x="128" y="222">K</text>
    <text x="428" y="172">K&#8242;</text>
    <text x="308" y="52" fill="var(--fig-b, #c2571a)">A</text>
    <text x="158" y="182">r</text>
    <text x="352" y="158">r&#8242;</text>
    <text x="230" y="312" fill="var(--fig-a, #1f8a9d)">R</text>
  </g>
  <!-- стрелки над буквами векторов -->
  <g fill="none" stroke-width="1.4">
    <g stroke="currentColor" marker-end="url(#zn-dvs-c)">
      <line x1="155" y1="164" x2="169" y2="164"/>
      <line x1="349" y1="140" x2="363" y2="140"/>
    </g>
    <line x1="227" y1="294" x2="241" y2="294" stroke="var(--fig-a, #1f8a9d)" marker-end="url(#zn-dvs-a)"/>
  </g>
</svg>`;
