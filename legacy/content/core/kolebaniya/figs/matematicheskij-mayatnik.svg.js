/* Математический маятник — перерисовка tikz-иллюстрации конспекта
   (inputs/06/pics/math_pend): точка подвеса O, нить с массой m
   в отклонённом положении и в равновесии, угол φ, силы m·g и T,
   касательная ось x. Силы — токен --fig-b, ось x — --fig-a. */
window.FIGS = window.FIGS || {};
window.FIGS['matematicheskij-mayatnik'] = String.raw`
<svg viewBox="0 0 440 370" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Математический маятник: нить с грузом отклонена на угол фи от вертикали, показаны сила тяжести, натяжение нити и касательная ось x">
  <defs>
    <pattern id="fig-hatch-kol-pend" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" stroke-width="1.1" opacity="0.5"/>
    </pattern>
    <marker id="fig-arr-kol-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-b, #c2571a)"/>
    </marker>
    <marker id="fig-arr-kol-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-a, #1f8a9d)"/>
    </marker>
    <marker id="fig-arr-kol-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <!-- потолок и точка подвеса -->
  <rect x="110" y="30" width="140" height="10" fill="url(#fig-hatch-kol-pend)"/>
  <line x1="110" y1="40" x2="250" y2="40" stroke="currentColor" stroke-width="2.4"/>
  <circle cx="180" cy="40" r="4" fill="currentColor"/>
  <text x="180" y="24" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor">O</text>
  <!-- вертикаль и дуга траектории -->
  <line x1="180" y1="40" x2="180" y2="300" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 6" opacity="0.55"/>
  <path d="M 180 300 A 260 260 0 0 0 336 248" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 6" opacity="0.55"/>
  <!-- нить и грузы -->
  <line x1="180" y1="40" x2="336" y2="248" stroke="currentColor" stroke-width="2.2"/>
  <circle cx="336" cy="248" r="7" fill="currentColor"/>
  <text x="352" y="270" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor">m</text>
  <circle cx="180" cy="300" r="7" fill="currentColor" opacity="0.45"/>
  <text x="180" y="326" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor" opacity="0.65">m</text>
  <!-- угол фи -->
  <path d="M 180 73 A 33 33 0 0 0 199.8 66.4" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <text x="196" y="92" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="var(--fig-b, #c2571a)">&#966;</text>
  <!-- силы -->
  <line x1="336" y1="248" x2="336" y2="330" stroke="var(--fig-b, #c2571a)" stroke-width="2.4" marker-end="url(#fig-arr-kol-b)"/>
  <text x="344" y="352" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="var(--fig-b, #c2571a)">m<tspan font-style="normal">&#8202;</tspan>g&#8407;</text>
  <line x1="336" y1="248" x2="294" y2="192" stroke="var(--fig-b, #c2571a)" stroke-width="2.4" marker-end="url(#fig-arr-kol-b)"/>
  <text x="272" y="186" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="var(--fig-b, #c2571a)">T&#8407;</text>
  <!-- касательная ось x -->
  <line x1="310" y1="268" x2="414" y2="190" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.2" marker-end="url(#fig-arr-kol-a)"/>
  <text x="416" y="216" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="var(--fig-a, #1f8a9d)">x</text>
  <!-- направление g -->
  <line x1="52" y1="80" x2="52" y2="200" stroke="currentColor" stroke-width="2.2" marker-end="url(#fig-arr-kol-c)"/>
  <text x="30" y="150" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor">g&#8407;</text>
</svg>`;
