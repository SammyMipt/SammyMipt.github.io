/* Угловая скорость при вращении вокруг оси: перерисовка tikz-иллюстрации
   конспекта (angular_velocity.tex). Ось и омега вертикальны, траектория —
   окружность в перспективе (эллипс), скорость касается траектории в точке
   и направлена по вращению против часовой стрелки, если смотреть сверху.
   Контуры — currentColor, скорость — --fig-a, траектория — --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['uglovaya-skorost'] = String.raw`
<svg viewBox="0 0 410 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Угловая скорость направлена вдоль оси вращения, линейная скорость — по касательной к окружности">
  <!-- ось вращения и вектор омега -->
  <line x1="170" y1="305" x2="170" y2="52" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 170 44 l -5 12 h 10 z" fill="currentColor"/>
  <!-- траектория: окружность в перспективе -->
  <ellipse cx="170" cy="205" rx="130" ry="52" fill="none"
           stroke="var(--fig-b, #c2571a)" stroke-width="2.4" stroke-dasharray="7 6"/>
  <!-- радиус-вектор от оси к точке -->
  <line x1="170" y1="205" x2="271" y2="178" stroke="currentColor" stroke-width="2.6"/>
  <path d="M 278 176 l -11.4 -1.9 2.3 7.6 z" fill="currentColor"/>
  <circle cx="278" cy="176" r="4" fill="currentColor"/>
  <!-- Линейная скорость: касательная в точке. Направление посчитано, а не
       поставлено на глаз. Точка (278; 176) лежит на эллипсе под углом 33,9°,
       считая от оси x в горизонтальной плоскости. При omega вдоль +z
       произведение omega x r даёт в единичных координатах (-sin, +cos), а
       после проекции на экран (rx = 130 по x, -ry = -52 по глубине) —
       (-72,5; -43,2), то есть влево и вверх. До 04.09 стрелка смотрела ровно
       в обратную сторону: рисунок показывал вращение по часовой стрелке при
       omega вверх и опровергал правило правой руки, которое иллюстрирует.
       В исходном tikz-эскизе (angular_velocity.tex) направление верное. -->
  <line x1="278" y1="176" x2="234.7" y2="150.1" stroke="var(--fig-a, #1f8a9d)" stroke-width="3.2"/>
  <path d="M 224.4 144 L 237 146.2 L 232.4 154 Z" fill="var(--fig-a, #1f8a9d)"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="24">
    <text x="184" y="66" fill="currentColor">&#969;</text>
    <text x="204" y="182" fill="currentColor">r</text>
    <text x="196" y="140" fill="var(--fig-a, #1f8a9d)">v</text>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M 184 48 h 13 m 0 0 l -4 -3 m 4 3 l -4 3"/>
    <path d="M 203 165 h 9 m 0 0 l -3.5 -2.7 m 3.5 2.7 l -3.5 2.7"/>
  </g>
  <g fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="1.5">
    <path d="M 195 122 h 10 m 0 0 l -3.5 -2.7 m 3.5 2.7 l -3.5 2.7"/>
  </g>
</svg>`;
