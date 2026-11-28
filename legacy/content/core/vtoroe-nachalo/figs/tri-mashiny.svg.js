/* Собран конвейером из sources/physics1_summary/inputs/09/pics/tri_mashiny.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs vtoroe-nachalo tri-mashiny.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['tri-mashiny'] = String.raw`<svg class="fig-tikz" width="229" height="231" viewBox="0 0 229 231" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Три тела: сверху тело 3, внизу тело 1, слева посередине тело 2. Слева две обратимые машины друг за другом: первая берёт Q 3 у тела 3 и отдаёт Q 2 телу 2, вторая берёт Q 2 у тела 2 и отдаёт Q 1 телу 1, совершая работы A 23 и A 12; штриховая рамка обводит пару как одну машину. Справа одна машина берёт Q 3 у тела 3 и отдаёт r 13 Q 3 телу 1, совершая работу A 13">
<style>text.tri-mashiny-f0{font-family:cmmi10;font-size:10.909px}text.tri-mashiny-f1{font-family:cmr9;font-size:8.966px}text.tri-mashiny-f2{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(96.262 96.259) scale(1.375011)">

<g id='page1'>
<path d='m-62.723-52.699v-17.008h158.742v17.008z' fill="var(--fig-b)" fill-opacity="0.20"/>
<path d='m-62.723-52.699v-17.008h158.742v17.008z' stroke="var(--fig-b)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-62.723 97.535v-17.008h158.742v17.008z' fill="var(--fig-a)" fill-opacity="0.20"/>
<path d='m-62.723 97.535v-17.008h158.742v17.008z' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-62.723 25.25v-17.008h79.371v17.008z' fill="currentColor" fill-opacity="0.078"/>
<path d='m-62.723 25.25v-17.008h79.371v17.008z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<text class="tri-mashiny-f2" x='-62.722' y='97.535' transform='translate(64.003 -155.238)'>тело<tspan x='-37.41'>3</tspan></text>
<text class="tri-mashiny-f2" x='-62.722' y='97.535' transform='translate(44.16 -77.286)'>тело<tspan x='-37.41'>2</tspan></text>
<text class="tri-mashiny-f2" x='-62.722' y='97.535' transform='translate(64.003 -5.002)'>тело<tspan x='-37.41'>1</tspan></text>
<g stroke="currentColor" fill='none' stroke-miterlimit='10'>
<path d='m-69.809 69.188v-107.715h93.543v107.715z' stroke-width='.399' stroke-dasharray='2.989 1.993'/>
<path d='m-23.602-17.27c0-5.949-4.824-10.769-10.773-10.769s-10.773 4.82-10.773 10.769s4.824 10.774 10.773 10.774s10.773-4.825 10.773-10.774z' stroke-width='.598'/>
<path d='m-23.602 47.93c0-5.949-4.824-10.774-10.773-10.774s-10.773 4.824-10.773 10.774s4.824 10.77 10.773 10.77s10.773-4.82 10.773-10.77z' stroke-width='.598'/>
<path d='m-34.375-52.699v19.996' stroke-width='.797'/>
</g>
<path d='m-34.375-28.039c.258-1.383 1.035-3.625 1.941-5.18h-3.883c.906 1.555 1.684 3.797 1.941 5.18'/>
<text class="tri-mashiny-f0" x='-62.722' y='97.535' transform='translate(34.147 -140.483)'>Q</text>
<text class="tri-mashiny-f1" x='-54.097' y='99.556' transform='translate(34.147 -140.483)'>3</text>
<path d='m-34.375-6.496v10.078' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m-34.375 8.242c.258-1.379 1.035-3.625 1.941-5.18h-3.883c.906 1.555 1.684 3.801 1.941 5.18'/>
<text class="tri-mashiny-f0" x='-62.722' y='97.535' transform='translate(34.147 -93.995)'>Q</text>
<text class="tri-mashiny-f1" x='-54.097' y='99.556' transform='translate(34.147 -93.995)'>2</text>
<path d='m-34.375 25.25v7.246' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m-34.375 37.156c.258-1.379 1.035-3.625 1.941-5.18h-3.883c.906 1.555 1.684 3.801 1.941 5.18'/>
<text class="tri-mashiny-f0" x='-62.722' y='97.535' transform='translate(34.147 -63.664)'>Q</text>
<text class="tri-mashiny-f1" x='-54.097' y='99.556' transform='translate(34.147 -63.664)'>2</text>
<path d='m-34.375 58.699v17.164' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m-34.375 80.527c.258-1.383 1.035-3.625 1.941-5.18h-3.883c.906 1.555 1.684 3.797 1.941 5.18'/>
<text class="tri-mashiny-f0" x='-62.722' y='97.535' transform='translate(34.147 -20.011)'>Q</text>
<text class="tri-mashiny-f1" x='-54.097' y='99.556' transform='translate(34.147 -20.011)'>1</text>
<path d='m-23.602-17.27h21.414' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m2.477-17.27c-1.383-.258-3.629-1.035-5.184-1.941v3.887c1.555-.906 3.801-1.684 5.184-1.945'/>
<text class="tri-mashiny-f0" x='-62.722' y='97.535' transform='translate(43.21 -121.491)'>A</text>
<text class="tri-mashiny-f1" x='-54.54' y='99.556' transform='translate(43.21 -121.491)'>23</text>
<path d='m-23.602 47.93h21.414' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m2.477 47.93c-1.383-.262-3.629-1.035-5.184-1.945v3.887c1.555-.906 3.801-1.684 5.184-1.941'/>
<text class="tri-mashiny-f0" x='-62.722' y='97.535' transform='translate(43.21 -37.485)'>A</text>
<text class="tri-mashiny-f1" x='-54.54' y='99.556' transform='translate(43.21 -37.485)'>12</text>
<path d='m72.773 13.914c0-5.949-4.82-10.774-10.769-10.774s-10.774 4.824-10.774 10.774s4.824 10.77 10.774 10.77s10.769-4.82 10.769-10.77z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m62.004-52.699v51.179' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m62.004 3.141c.258-1.379 1.035-3.625 1.941-5.18h-3.887c.906 1.555 1.684 3.801 1.945 5.18'/>
<text class="tri-mashiny-f0" x='-62.722' y='97.535' transform='translate(130.525 -119.223)'>Q</text>
<text class="tri-mashiny-f1" x='-54.097' y='99.556' transform='translate(130.525 -119.223)'>3</text>
<path d='m62.004 24.684v51.18' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m62.004 80.527c.258-1.383 1.035-3.625 1.941-5.18h-3.887c.906 1.555 1.684 3.797 1.945 5.18'/>
<g transform='translate(130.525 -42.688)'>
<text class="tri-mashiny-f0" x='-62.722' y='97.535'>r</text>
<text class="tri-mashiny-f1" x='-57.8' y='99.556'>13</text>
<text class="tri-mashiny-f0" x='-48.086' y='97.535'>Q</text>
<text class="tri-mashiny-f1" x='-39.462' y='99.556'>3</text>
</g>
<path d='m72.773 13.914h15.746' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m93.184 13.914c-1.383-.262-3.625-1.035-5.18-1.945v3.887c1.555-.906 3.797-1.684 5.18-1.941'/>
<text class="tri-mashiny-f0" x='-62.722' y='97.535' transform='translate(136.753 -90.31)'>A</text>
<text class="tri-mashiny-f1" x='-54.54' y='99.556' transform='translate(136.753 -90.31)'>13</text>
</g>
</g>
</svg>`;
