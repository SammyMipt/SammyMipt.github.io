/* Перерисовка pics/tompson_exp.tex: попытка построить машину Томпсона на
   идеальном газе. Изотерма 1-2 (var(--fig-a)) и адиабата через точку 2
   (var(--fig-b)) пересекаются только в одной точке: возврат по адиабате
   приводит выше точки 1, замкнуть цикл без сброса тепла нельзя (крест
   и пунктирная стрелка). Кривые посчитаны по P = 4/V и P = 6,48/V^1,3. */
window.FIGS = window.FIGS || {};
window.FIGS['tomson-gaz'] = String.raw`
<svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Диаграмма P-V: изотерма из точки 1 в точку 2 и адиабата через точку 2, которая возвращается выше точки 1">
  <!-- оси -->
  <line x1="50" y1="280" x2="420" y2="280" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 428 280 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="50" y1="280" x2="50" y2="40" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 50 32 l -4.5 11 h 9 z" fill="currentColor"/>
  <!-- изотерма 1 -> 2: P = 4/V -->
  <path d="M 110 128 L 134 171.4 L 158 195.6 L 194 216.6 L 230 229.3 L 278 240 L 350 249.6"
        fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6"/>
  <path d="M 350 249.6 l -11.5 -3.3 l 0.9 8 z" fill="var(--fig-a, #1f8a9d)"/>
  <!-- адиабата через точку 2: P = 6,48/V^1,3 -->
  <path d="M 350 249.6 L 290 239.4 L 230 220.9 L 182 191.6 L 152 156.5 L 128 104.9 L 110 33.8"
        fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.6"/>
  <path d="M 110 33.8 l 0.4 12 l 7.3 -3.4 z" fill="var(--fig-b, #c2571a)"/>
  <!-- несостоявшийся возврат в точку 1 -->
  <line x1="110" y1="44" x2="110" y2="112" stroke="var(--fig-b, #c2571a)" stroke-width="2.2" stroke-dasharray="2 6"/>
  <path d="M 110 122 l -4.5 -11 h 9 z" fill="var(--fig-b, #c2571a)"/>
  <g stroke="var(--fig-b, #c2571a)" stroke-width="3.4" stroke-linecap="round">
    <line x1="101" y1="72" x2="119" y2="90"/>
    <line x1="119" y1="72" x2="101" y2="90"/>
  </g>
  <!-- точки 1 и 2 -->
  <circle cx="110" cy="128" r="4" fill="currentColor"/>
  <circle cx="350" cy="249.6" r="4" fill="currentColor"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="34" y="48">P</text>
    <text x="412" y="304">V</text>
    <text x="88" y="136">1</text>
    <text x="362" y="268">2</text>
  </g>
  <text x="210" y="272" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="var(--fig-a, #1f8a9d)">T = const</text>
  <text x="228" y="162" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="var(--fig-b, #c2571a)">&#948;Q = 0</text>
</svg>`;
