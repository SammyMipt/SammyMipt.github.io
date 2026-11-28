/* Собран конвейером из sources/physics1_summary/inputs/12/pics/dve_eksponenty.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs yavleniya-perenosa dve-eksponenty.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['dve-eksponenty'] = String.raw`<svg class="fig-tikz" width="490" height="198" viewBox="0 0 490 198" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Две одинаковые убывающие экспоненты рядом. Слева e^(−l/λ) от l, отмечены медиана 0,69λ на уровне 0,5 и точка λ на уровне 0,37. Справа множитель Больцмана e^(−ε/kT) от ε с делениями kT, 2kT, 3kT">
<style>text.dve-eksponenty-f0{font-family:cmsy9;font-size:8.966px}text.dve-eksponenty-f1{font-family:cmmi9;font-size:8.966px}text.dve-eksponenty-f2{font-family:cmmi10;font-size:10.909px}text.dve-eksponenty-f3{font-family:cmr10;font-size:10.909px}text.dve-eksponenty-f4{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.312 90.898) scale(1.375011)">

<g id='page1'>
<path d='m-39.211 50.723h135.308' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m99.688 50.723c-1.063-.199-2.793-.797-3.988-1.492v2.988c1.195-.699 2.926-1.297 3.988-1.496'/>
<text class="dve-eksponenty-f2" x='-39.212' y='50.724' transform='translate(143.565 3.788)'>l</text>
<path d='m-39.211 50.723v-98.461' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-39.211-51.324c-.199 1.063-.797 2.789-1.496 3.984h2.988c-.695-1.195-1.293-2.922-1.492-3.984'/>
<g transform='translate(-12.814 -106.147)'>
<text class="dve-eksponenty-f2" x='-39.212' y='50.724'>e</text>
<text class="dve-eksponenty-f0" x='-34.132' y='46.765'>−</text>
<text class="dve-eksponenty-f1" x='-26.964' y='46.765'>l<tspan x='-24.066'>/λ</tspan></text>
</g>
<g stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'>
<path d='m-2.359 50.723v2.836'/>
<path d='m34.488 50.723v2.836'/>
<path d='m71.34 50.723v2.836'/>
</g>
<text class="dve-eksponenty-f2" x='-39.212' y='50.724' transform='translate(33.669 15.077)'>λ</text>
<text class="dve-eksponenty-f3" x='-39.212' y='50.724' transform='translate(67.792 15.077)'>2</text>
<text class="dve-eksponenty-f2" x='-33.757' y='50.724' transform='translate(67.792 15.077)'>λ</text>
<text class="dve-eksponenty-f3" x='-39.212' y='50.724' transform='translate(104.642 15.077)'>3</text>
<text class="dve-eksponenty-f2" x='-33.757' y='50.724' transform='translate(104.642 15.077)'>λ</text>
<g stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'>
<path d='m-39.211-34.316h-2.836'/>
<path d='m-39.211 8.203h-2.836'/>
<path d='m-39.211 19.43h-2.836'/>
</g>
<text class="dve-eksponenty-f3" x='-39.212' y='50.724' transform='translate(-12.956 -81.524)'>1</text>
<g transform='translate(-21.441 -41.766)'>
<text class="dve-eksponenty-f3" x='-39.212' y='50.724'>0</text>
<text class="dve-eksponenty-f2" x='-33.757' y='50.724'>,</text>
<text class="dve-eksponenty-f3" x='-30.727' y='50.724'>5</text>
</g>
<g transform='translate(-26.895 -27.309)'>
<text class="dve-eksponenty-f3" x='-39.212' y='50.724'>0</text>
<text class="dve-eksponenty-f2" x='-33.757' y='50.724'>,</text>
<text class="dve-eksponenty-f3" x='-30.727' y='50.724'>37</text>
</g>
<path d='m-39.211 8.203h25.539v56.129' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 1.993'/>
<g transform='translate(12.661 25.282)'>
<text class="dve-eksponenty-f3" x='-39.212' y='50.724'>0</text>
<text class="dve-eksponenty-f2" x='-33.757' y='50.724'>,</text>
<text class="dve-eksponenty-f3" x='-30.727' y='50.724'>69</text>
<text class="dve-eksponenty-f2" x='-19.818' y='50.724'>λ</text>
</g>
<path d='m-39.211 19.43h36.852v31.293' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 1.993'/>
<path d='m-39.211-34.316l3.684 8.078l3.688 7.344l3.684 6.633l3.684 5.981l3.688 5.414l3.684 4.934l3.684 4.422l3.688 4.023l3.684 3.629l3.688 3.289l3.684 2.977l3.684 2.691l3.688 2.438l3.684 2.211l3.684 2.016l3.688 1.785l3.684 1.645l3.684 1.473l3.688 1.332l3.684 1.219l3.688 1.106l3.684 .992l3.684 .879l3.688 .82l3.684 .738l3.688 .652l3.684 .598l3.683 .566l3.688 .48l3.683 .453l3.684 .398l3.687 .367l3.684 .313l3.684 .313l3.687 .254' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<g fill="var(--fig-a)">
<path d='m-12.078 8.203c0-.879-.711-1.594-1.594-1.594c-.879 0-1.594 .715-1.594 1.594c0 .883 .715 1.594 1.594 1.594c.883 0 1.594-.711 1.594-1.594zm11.313 11.227c0-.879-.715-1.594-1.594-1.594c-.883 0-1.594 .715-1.594 1.594s.711 1.594 1.594 1.594c.879 0 1.594-.715 1.594-1.594z'/>
<text class="dve-eksponenty-f4" x='-39.212' y='37.175' transform='translate(48.037 -49.804)'>доля<tspan x='-12.244'>пробегов</tspan><tspan x='-39.212' y='50.724'>длиннее</tspan></text>
<text class="dve-eksponenty-f2" x='4.177' y='50.724' transform='translate(48.037 -49.804)'>l</text>
</g>
<path d='m142.208 50.723h135.308' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m281.102 50.723c-1.063-.199-2.789-.797-3.984-1.492v2.988c1.195-.699 2.922-1.297 3.984-1.496'/>
<text class="dve-eksponenty-f2" x='-39.212' y='50.724' transform='translate(324.982 2.349)'>ε</text>
<path d='m142.208 50.723v-98.461' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m142.207-51.324c-.199 1.063-.797 2.789-1.496 3.984h2.988c-.695-1.195-1.293-2.922-1.492-3.984'/>
<g transform='translate(164.744 -106.147)'>
<text class="dve-eksponenty-f2" x='-39.212' y='50.724'>e</text>
<text class="dve-eksponenty-f0" x='-34.132' y='46.765'>−</text>
<text class="dve-eksponenty-f1" x='-26.964' y='46.765'>ε/k<tspan x='-13.018'>T</tspan></text>
</g>
<g stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'>
<path d='m179.055 50.723v2.836'/>
<path d='m215.907 50.723v2.836'/>
<path d='m252.758 50.723v2.836'/>
</g>
<text class="dve-eksponenty-f2" x='-39.212' y='50.724' transform='translate(211.312 15.077)'>k<tspan x='-33.189'>T</tspan></text>
<text class="dve-eksponenty-f3" x='-39.212' y='50.724' transform='translate(245.435 15.077)'>2</text>
<text class="dve-eksponenty-f2" x='-33.757' y='50.724' transform='translate(245.435 15.077)'>k<tspan x='-27.734'>T</tspan></text>
<text class="dve-eksponenty-f3" x='-39.212' y='50.724' transform='translate(282.285 15.077)'>3</text>
<text class="dve-eksponenty-f2" x='-33.757' y='50.724' transform='translate(282.285 15.077)'>k<tspan x='-27.734'>T</tspan></text>
<path d='m142.208-34.316h-2.836' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<text class="dve-eksponenty-f3" x='-39.212' y='50.724' transform='translate(168.462 -81.524)'>1</text>
<path d='m142.208-34.316l3.683 8.078l3.684 7.344l3.687 6.633l3.684 5.981l3.683 5.414l3.688 4.934l3.684 4.422l3.687 4.023l3.684 3.629l3.683 3.289l3.688 2.977l3.683 2.691l3.684 2.438l3.687 2.211l3.684 2.016l3.687 1.785l3.684 1.645l3.684 1.473l3.687 1.332l3.684 1.219l3.683 1.106l3.688 .992l3.683 .879l3.684 .82l3.688 .738l3.683 .652l3.688 .598l3.683 .566l3.684 .48l3.687 .453l3.684 .398l3.687 .367l3.684 .313l3.684 .313l3.687 .254' stroke="var(--fig-b)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<text class="dve-eksponenty-f4" x='-39.212' y='37.175' transform='translate(229.455 -49.804)' fill="var(--fig-b)">мно<tspan x='-20.833'>житель</tspan><tspan x='-39.212' y='50.724'>Больцмана</tspan></text>
</g>
</g>
</svg>`;
