/* Эффективный потенциал — перерисовка pgfplots-графика конспекта
   (pics/eff_potential): кривая U_эфф(r) = l²/2r² − GM/r (в условных
   единицах 2/r² − 4/r) и четыре уровня энергии. Уровни — --fig-b,
   касательный к минимуму уровень окружности — --fig-a. По оси абсцисс
   в конспекте стояла x — здесь r, как в тексте главы. */
window.FIGS = window.FIGS || {};
window.FIGS['effektivnyj-potencial'] = String.raw`
<svg viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="График эффективного потенциала с центробежным барьером и минимумом; горизонтальные уровни энергии: гипербола выше нуля, парабола на нуле, эллипс ниже нуля, окружность в минимуме">
  <!-- оси -->
  <line x1="60" y1="240" x2="544" y2="240" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="552,240 540,234.5 540,245.5" fill="currentColor"/>
  <line x1="60" y1="376" x2="60" y2="40" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="60,32 54.5,44 65.5,44" fill="currentColor"/>
  <!-- уровни энергии -->
  <line x1="60" y1="160" x2="500" y2="160" stroke="var(--fig-b, #c2571a)" stroke-width="2"/>
  <line x1="60" y1="240" x2="500" y2="240" stroke="var(--fig-b, #c2571a)" stroke-width="2" stroke-dasharray="10 6"/>
  <line x1="60" y1="300" x2="500" y2="300" stroke="var(--fig-b, #c2571a)" stroke-width="2"/>
  <line x1="60" y1="320" x2="500" y2="320" stroke="var(--fig-a, #1f8a9d)" stroke-width="2"/>
  <!-- кривая U_eff(r) = 2/r² − 4/r в масштабе 48 px на единицу r, 40 px на единицу U -->
  <path d="M 76.8 44 L 79.2 140 L 81.6 200.4 L 84 240 L 88.8 284.4 L 93.6 305.2 L 98.4 315 L 103.2 319 L 108 320 L 117.6 317.8 L 132 311.1 L 156 300 L 180 291.2 L 204 284.4 L 252 275 L 300 268.8 L 348 264.4 L 396 261.2 L 444 258.8 L 492 256.8 L 540 255.2"
        fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
  <!-- точка минимума -->
  <circle cx="108" cy="320" r="5" fill="var(--fig-a, #1f8a9d)"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="19">
    <text x="548" y="262" font-style="italic" fill="currentColor">r</text>
    <text x="72" y="52" fill="currentColor">U<tspan dy="6" font-size="13">эфф</tspan><tspan dy="-6" font-style="italic">(r)</tspan></text>
    <text x="330" y="152" fill="var(--fig-b, #c2571a)"><tspan font-style="italic">&#949;</tspan> &gt; 0 (гипербола)</text>
    <text x="330" y="232" fill="var(--fig-b, #c2571a)"><tspan font-style="italic">&#949;</tspan> = 0 (парабола)</text>
    <text x="330" y="292" fill="var(--fig-b, #c2571a)"><tspan font-style="italic">&#949;</tspan> &lt; 0 (эллипс)</text>
    <text x="330" y="344" fill="var(--fig-a, #1f8a9d)"><tspan font-style="italic">&#949;</tspan> &#8594; min (окружность)</text>
  </g>
</svg>`;
