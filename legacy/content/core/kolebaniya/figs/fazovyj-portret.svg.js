/* Фазовый портрет свободных колебаний — перерисовка tikz-иллюстрации
   конспекта (inputs/06/pics/phase_trajectory): три вложенных эллипса
   в осях (x, ẋ) — три значения энергии. Средний эллипс — --fig-b,
   внешний — --fig-a; стрелки показывают обход по часовой стрелке. */
window.FIGS = window.FIGS || {};
window.FIGS['fazovyj-portret'] = String.raw`
<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Фазовый портрет гармонического осциллятора: три вложенных эллипса в координатах x и x с точкой, обход по часовой стрелке">
  <defs>
    <marker id="fig-arr-kol-ph" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <!-- оси -->
  <line x1="30" y1="165" x2="492" y2="165" stroke="currentColor" stroke-width="1.8" marker-end="url(#fig-arr-kol-ph)"/>
  <text x="500" y="171" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor">x</text>
  <line x1="260" y1="308" x2="260" y2="32" stroke="currentColor" stroke-width="1.8" marker-end="url(#fig-arr-kol-ph)"/>
  <text x="272" y="40" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor">x&#775;</text>
  <!-- эллипсы: чем больше энергия, тем шире -->
  <ellipse cx="260" cy="165" rx="75" ry="37.5" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <ellipse cx="260" cy="165" rx="125" ry="62.5" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <ellipse cx="260" cy="165" rx="175" ry="87.5" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <!-- направление обхода: по часовой стрелке -->
  <polygon points="252,71.5 252,83.5 266,77.5" fill="var(--fig-a, #1f8a9d)"/>
  <polygon points="268,246.5 268,258.5 254,252.5" fill="var(--fig-a, #1f8a9d)"/>
</svg>`;
