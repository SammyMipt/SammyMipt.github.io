/* Собран конвейером из sources/physics1_summary/inputs/12/pics/balans_potokov.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs yavleniya-perenosa balans-potokov.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['balans-potokov'] = String.raw`<svg class="fig-tikz" width="276" height="201" viewBox="0 0 276 201" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Прямоугольный слой между x и x плюс dx, левая грань площади S выделена. В неё слева входит длинная стрелка потока j от x, справа выходит более короткая стрелка j от x плюс dx. Под рисунком уравнение: dn по dt равно минус dj по dx и равно d по dx от D, умноженного на dn по dx">
<style>text.balans-potokov-f0{font-family:cmex10;font-size:10.909px}text.balans-potokov-f1{font-family:cmsy10;font-size:10.909px}text.balans-potokov-f2{font-family:cmmi10;font-size:10.909px}text.balans-potokov-f3{font-family:cmr10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(96.262 96.259) scale(1.375011)">

<g id='page1'>
<path d='m6.727-58.371h45.355l-15.59-11.336h-45.355z' fill="currentColor" fill-opacity="0.059"/>
<path d='m6.727 9.66v-68.031l-15.59-11.336v68.031z' fill="var(--fig-a)" fill-opacity="0.30"/>
<g stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'>
<path d='m6.727 9.66v-68.031h45.355v68.031z'/>
<path d='m6.727-58.371l-15.59-11.336h45.355l15.59 11.336'/>
<path d='m6.727 9.66l-15.59-11.336v-68.031'/>
</g>
<path d='m-8.863-1.676h45.355v-68.031m0 68.031l15.59 11.336' stroke="currentColor" stroke-opacity="0.549" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 1.993'/>
<text class="balans-potokov-f2" x='-78.312' y='9.662' transform='translate(73.443 -62.713)' fill="var(--fig-a)">S</text>
<path d='m-65.555-30.023h58.75' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m-1.066-30.023c-1.703-.32-4.465-1.273-6.379-2.391v4.781c1.914-1.117 4.676-2.07 6.379-2.391'/>
<g transform='translate(34.019 -47.929)'>
<text class="balans-potokov-f2" x='-78.312' y='9.662'>j</text>
<text class="balans-potokov-f3" x='-73.195' y='9.662'>(</text>
<text class="balans-potokov-f2" x='-68.953' y='9.662'>x</text>
<text class="balans-potokov-f3" x='-62.718' y='9.662'>)</text>
</g>
</g>
<path d='m44.285-30.023h7.797' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10' stroke-dasharray='1.993 1.494'/>
<path d='m52.082-30.023h31.821' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m89.641-30.023c-1.699-.32-4.465-1.273-6.375-2.391v4.781c1.91-1.117 4.676-2.07 6.375-2.391'/>
<g transform='translate(136.692 -46.442)'>
<text class="balans-potokov-f2" x='-78.312' y='9.662'>j</text>
<text class="balans-potokov-f3" x='-73.195' y='9.662'>(</text>
<text class="balans-potokov-f2" x='-68.953' y='9.662'>x</text>
<text class="balans-potokov-f3" x='-60.294' y='9.662'>+</text>
<text class="balans-potokov-f2" x='-49.385' y='9.662'>dx</text>
<text class="balans-potokov-f3" x='-37.472' y='9.662'>)</text>
</g>
</g>
<path d='m-69.809 26.668h186.336' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m120.113 26.668c-1.063-.199-2.789-.797-3.984-1.492v2.988c1.195-.699 2.922-1.297 3.984-1.496'/>
<text class="balans-potokov-f2" x='-78.312' y='9.662' transform='translate(203.092 19.356)'>x</text>
<path d='m6.727 9.66v17.008m45.355-17.008v17.008' stroke="currentColor" stroke-opacity="0.549" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 1.993'/>
<path d='m6.727 26.668v2.836m45.355-2.836v2.836' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<text class="balans-potokov-f2" x='-78.312' y='9.662' transform='translate(81.922 29.206)'>x</text>
<g transform='translate(114.653 32.085)'>
<text class="balans-potokov-f2" x='-78.312' y='9.662'>x</text>
<text class="balans-potokov-f3" x='-69.653' y='9.662'>+</text>
<text class="balans-potokov-f2" x='-58.744' y='9.662'>dx</text>
</g>
<text class="balans-potokov-f2" x='-77.117' y='2.281' transform='translate(42.225 59.012)'>∂<tspan x='-70.719'>n</tspan></text>
<rect x='-34.892' y='65.728' height='.436' width='12.946'/>
<g transform='translate(42.225 59.012)'>
<text class="balans-potokov-f2" x='-75.812' y='17.145'>∂<tspan x='-69.415'>t</tspan></text>
<text class="balans-potokov-f3" x='-59.945' y='9.662'>=</text>
<text class="balans-potokov-f1" x='-48.43' y='9.662'>−</text>
<text class="balans-potokov-f2" x='-38.191' y='2.281'>∂<tspan x='-31.793'>j</tspan></text>
</g>
<rect x='3.475' y='65.728' height='.436' width='12.633'/>
<g transform='translate(42.225 59.012)'>
<text class="balans-potokov-f2" x='-38.75' y='17.145'>∂<tspan x='-32.352'>x</tspan></text>
<text class="balans-potokov-f3" x='-21.891' y='9.662'>=</text>
<text class="balans-potokov-f2" x='-6.063' y='2.281'>∂</text>
</g>
<rect x='33.044' y='65.728' height='.436' width='12.633'/>
<g transform='translate(42.225 59.012)'>
<text class="balans-potokov-f2" x='-9.181' y='17.145'>∂<tspan x='-2.783'>x</tspan></text>
<text class="balans-potokov-f0" x='4.647' y='-2.448'></text>
<text class="balans-potokov-f2" x='11.162' y='9.662'>D<tspan x='23.511' y='2.281'>∂</tspan><tspan x='29.909'>n</tspan></text>
</g>
<rect x='65.736' y='65.728' height='.436' width='12.946'/>
<text class="balans-potokov-f2" x='23.668' y='17.145' transform='translate(42.225 59.012)'>∂<tspan x='30.065'>x</tspan></text>
<text class="balans-potokov-f0" x='37.652' y='-2.448' transform='translate(42.225 59.012)'></text>
</g>
</g>
</svg>`;
