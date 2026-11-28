/* Собран конвейером из sources/physics1_summary/inputs/11/pics/barometricheskaya.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs raspredeleniya barometricheskaya.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['barometricheskaya'] = String.raw`<svg class="fig-tikz" width="285" height="284" viewBox="0 0 285 284" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Вертикальный столб воздуха с выделенным слоем между высотами z и z+dz. Сила P(z+dz)S давит на верхнюю грань слоя, сила P(z)S на нижнюю, вес слоя dM g направлен вниз из его центра; на крышке столба буква S площади сечения">
<style>text.barometricheskaya-f0{font-family:cmmi10;font-size:10.909px}text.barometricheskaya-f1{font-family:cmr10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.253 91.070) scale(1.375011)">

<g id='page1'>
<g stroke="currentColor" fill='none'>
<g stroke-width='.598' stroke-miterlimit='10'>
<path d='m-6.379 129.777v-170.078m147.402 170.078v-170.078'/>
<path d='m141.023-40.301c0-5.48-32.996-9.922-73.699-9.922c-40.707 0-73.703 4.442-73.703 9.922c0 5.481 32.996 9.922 73.703 9.922c40.703 0 73.699-4.441 73.699-9.922z'/>
<path d='m-6.379 129.777c0 5.48 32.996 9.922 73.703 9.922c40.703 0 73.699-4.441 73.699-9.922'/>
</g>
<path d='m141.023 129.777c0-5.48-32.996-9.922-73.699-9.922c-40.707 0-73.703 4.441-73.703 9.922' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 2.989'/>
</g>
<text class="barometricheskaya-f0" x='67.323' y='129.777' transform='translate(38.861 -166.351)'>S</text>
<path d='m-6.379 67.414c0 5.48 32.996 9.922 73.703 9.922c40.703 0 73.699-4.441 73.699-9.922v-34.016c0 5.481-32.996 9.922-73.699 9.922c-40.707 0-73.703-4.441-73.703-9.922z' fill="var(--fig-a)" fill-opacity="0.14"/>
<path d='m141.023 33.398c0-5.48-32.996-9.921-73.699-9.921c-40.707 0-73.703 4.441-73.703 9.921s32.996 9.922 73.703 9.922c40.703 0 73.699-4.441 73.699-9.922z' fill="var(--fig-a)" fill-opacity="0.30"/>
<g stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'>
<path d='m141.023 33.398c0-5.48-32.996-9.921-73.699-9.921c-40.707 0-73.703 4.441-73.703 9.921s32.996 9.922 73.703 9.922c40.703 0 73.699-4.441 73.699-9.922z'/>
<path d='m-6.379 67.414c0 5.48 32.996 9.922 73.703 9.922c40.703 0 73.699-4.441 73.699-9.922'/>
<path d='m-6.379 67.414v-34.016m147.402 34.016v-34.016'/>
</g>
<path d='m-29.055 138.281v-192.004' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-29.055-57.309c-.199 1.063-.797 2.789-1.496 3.984h2.992c-.699-1.195-1.297-2.922-1.496-3.984'/>
<text class="barometricheskaya-f0" x='67.323' y='129.777' transform='translate(-99.154 -191.187)'>z</text>
<path d='m-31.324 67.414h4.535m-4.535-34.016h4.535' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<text class="barometricheskaya-f0" x='67.323' y='129.777' transform='translate(-108.866 -60.014)'>z</text>
<g transform='translate(-133.43 -93.044)'>
<text class="barometricheskaya-f0" x='67.323' y='129.777'>z</text>
<text class="barometricheskaya-f1" x='75.3' y='129.777'>+</text>
<text class="barometricheskaya-f0" x='86.209' y='129.777'>dz</text>
</g>
<path d='m-26.789 67.414h20.41m-20.41-34.016h20.41' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 2.989'/>
<path d='m58.82-17.625v55.148' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m58.82 43.262c.316-1.699 1.273-4.461 2.391-6.375h-4.781c1.113 1.914 2.07 4.676 2.391 6.375'/>
<g transform='translate(-71.696 -124.832)'>
<text class="barometricheskaya-f0" x='67.323' y='129.777'>P</text>
<text class="barometricheskaya-f1" x='75.842' y='129.777'>(</text>
<text class="barometricheskaya-f0" x='80.084' y='129.777'>z</text>
<text class="barometricheskaya-f1" x='88.062' y='129.777'>+</text>
<text class="barometricheskaya-f0" x='98.971' y='129.777'>dz</text>
<text class="barometricheskaya-f1" x='110.202' y='129.777'>)</text>
<text class="barometricheskaya-f0" x='116.262' y='129.777'>S</text>
</g>
</g>
<path d='m58.82 112.77v-29.75' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m58.82 77.277c-.32 1.703-1.277 4.465-2.391 6.379h4.781c-1.117-1.914-2.074-4.676-2.391-6.379'/>
<g transform='translate(-47.132 -25.619)'>
<text class="barometricheskaya-f0" x='67.323' y='129.777'>P</text>
<text class="barometricheskaya-f1" x='75.842' y='129.777'>(</text>
<text class="barometricheskaya-f0" x='80.084' y='129.777'>z</text>
<text class="barometricheskaya-f1" x='85.637' y='129.777'>)</text>
<text class="barometricheskaya-f0" x='91.698' y='129.777'>S</text>
</g>
</g>
<path d='m100.098 50.406c0-.879-.715-1.594-1.594-1.594s-1.594 .715-1.594 1.594c0 .883 .715 1.594 1.594 1.594s1.594-.711 1.594-1.594z'/>
<path d='m98.504 50.406v39.617' stroke="currentColor" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m98.504 95.762c.32-1.699 1.277-4.465 2.391-6.375h-4.781c1.117 1.91 2.07 4.676 2.391 6.375'/>
<text class="barometricheskaya-f0" x='67.323' y='129.777' transform='translate(38.116 -39.792)'>dM<tspan x='86.592'>g</tspan></text>
</g>
</g>
</svg>`;
