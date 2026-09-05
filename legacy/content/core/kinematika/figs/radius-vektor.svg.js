/* Радиус-вектор в декартовой системе: перерисовка tikz-иллюстрации
   конспекта (radius_vector.tex). Псевдо-3D: базис проекции
   ex=(70,0), ey=(0,-62), ez=(-30,20) от начала O=(150,250).
   Контуры — currentColor, радиус-вектор — токен --fig-a,
   единичные векторы осей — --fig-b: тема красит рисунок сама. */
window.FIGS = window.FIGS || {};
window.FIGS['radius-vektor'] = String.raw`
<svg viewBox="0 0 470 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Радиус-вектор соединяет начало координат с точкой A на траектории">
  <!-- оси x, y, z -->
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <line x1="150" y1="250" x2="430" y2="250"/>
    <line x1="150" y1="250" x2="150" y2="52"/>
    <line x1="150" y1="250" x2="62" y2="308"/>
  </g>
  <g fill="currentColor">
    <path d="M 430 250 l -10 -4 v 8 z"/>
    <path d="M 150 52 l -4 10 h 8 z"/>
    <path d="M 62 308 l 10.5 -1.5 -4.5 -6.9 z"/>
  </g>
  <!-- траектория -->
  <path d="M 150 250 C 190 140 235 118 290 154 C 325 177 355 155 385 125"
        fill="none" stroke="currentColor" stroke-width="2.4"/>
  <!-- штриховые проекции: A -> F(осн.), F -> x_A, F -> z_A -->
  <g fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity=".65">
    <line x1="290" y1="154" x2="290" y2="278"/>
    <line x1="290" y1="278" x2="332" y2="250"/>
    <line x1="290" y1="278" x2="108" y2="278"/>
  </g>
  <!-- единичные векторы -->
  <g stroke="var(--fig-b, #c2571a)" stroke-width="3" fill="var(--fig-b, #c2571a)">
    <line x1="150" y1="250" x2="214" y2="250"/>
    <path d="M 220 250 l -9 -4 v 8 z" stroke="none"/>
    <line x1="150" y1="250" x2="150" y2="194"/>
    <path d="M 150 188 l -4 9 h 8 z" stroke="none"/>
    <line x1="150" y1="250" x2="122" y2="268.7"/>
    <path d="M 117 272 l 9.8 -1.3 -4.2 -6.5 z" stroke="none"/>
  </g>
  <!-- радиус-вектор O -> A -->
  <line x1="150" y1="250" x2="283" y2="159" stroke="var(--fig-a, #1f8a9d)" stroke-width="3.2"/>
  <path d="M 290 154 l -11.5 1.6 4.7 6.9 z" fill="var(--fig-a, #1f8a9d)"/>
  <circle cx="290" cy="154" r="4" fill="currentColor"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21" fill="currentColor">
    <text x="437" y="256">x</text>
    <text x="158" y="62">y</text>
    <text x="48" y="322">z</text>
    <text x="196" y="243">i</text>
    <text x="157" y="200">j</text>
    <text x="106" y="266">k</text>
    <text x="298" y="146">A(x</text>
    <text x="330" y="151" font-size="14">A</text>
    <text x="339" y="146">, y</text>
    <text x="360" y="151" font-size="14">A</text>
    <text x="369" y="146">, z</text>
    <text x="387" y="151" font-size="14">A</text>
    <text x="396" y="146">)</text>
    <text x="326" y="272">x</text>
    <text x="337" y="277" font-size="14">A</text>
    <text x="84" y="298">z</text>
    <text x="94" y="303" font-size="14">A</text>
  </g>
  <!-- шляпки единичных векторов и стрелка над r -->
  <g fill="none" stroke="currentColor" stroke-width="1.4">
    <path d="M 196 226 l 4 -4 4 4"/>
    <path d="M 157 183 l 4 -4 4 4"/>
    <path d="M 106 249 l 4 -4 4 4"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="23" fill="var(--fig-a, #1f8a9d)">
    <text x="204" y="196">r(t)</text>
  </g>
  <g fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="1.5">
    <path d="M 205 178 h 12 m 0 0 l -4 -3 m 4 3 l -4 3"/>
  </g>
</svg>`;
