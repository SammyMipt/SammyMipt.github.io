/* Собран конвейером из sources/physics1_summary/inputs/07/pics/venturi.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs deformacii-gidrodinamika venturi.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['venturi'] = String.raw`<svg class="fig-tikz" width="422" height="211" viewBox="0 0 422 211" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Труба Вентури с широкой частью, сужением, горлом и расширением; в горле скорость v2 вчетверо больше v1, столб в манометре над горлом ниже на Δh, за расширением столб снова на прежней высоте; на кубик жидкости в сужении сзади давят сильнее, чем спереди">
<style>text.venturi-f0{font-family:cmmi10;font-size:10.909px}text.venturi-f1{font-family:cmr9;font-size:8.966px}text.venturi-f2{font-family:cmr10;font-size:10.909px}text.venturi-f3{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(96.259 96.265) scale(1.375011)">

<g id='page1'>
<g fill="currentColor" fill-opacity="0.098">
<path d='m-69.707 26.668h73.699l45.355 14.176h62.364l73.703-14.176h51.023v56.695h-51.023l-73.703-14.176h-62.364l-45.355 14.176h-73.699z'/>
<path d='m-37.109 26.668v-82.203h8.504v82.203z'/>
<path d='m76.277 40.844v-56.695h8.504v56.695z'/>
<path d='m206.671 26.668v-82.203h8.504v82.203z'/>
</g>
<g stroke="currentColor" fill='none' stroke-miterlimit='10'>
<path d='m-37.109-55.535h8.504m104.883 39.684h8.504m121.89-39.684h8.504' stroke-width='.399'/>
<g stroke-width='.598'>
<path d='m-69.707 26.668h32.598m8.504 0h32.598l45.355 14.176h26.93m8.504 0h26.93l73.703-14.176h21.257m8.504 0h21.262' stroke-linejoin='bevel'/>
<path d='m-69.707 83.363h73.699l45.355-14.176h62.364l73.703 14.176h51.023' stroke-linejoin='bevel'/>
<path d='m-37.109 26.668v-96.379m8.504 96.379v-96.379'/>
<path d='m76.277 40.844v-110.555m8.504 110.555v-110.555'/>
<path d='m206.671 26.668v-96.379m8.504 96.379v-96.379'/>
</g>
</g>
<text class="venturi-f0" x='-69.709' y='55.016' transform='translate(46.62 -68.15)'>P</text>
<text class="venturi-f1" x='-62.705' y='57.036' transform='translate(46.62 -68.15)'>1</text>
<text class="venturi-f0" x='-69.709' y='55.016' transform='translate(160.007 -42.638)'>P</text>
<text class="venturi-f1" x='-62.705' y='57.036' transform='translate(160.007 -42.638)'>2</text>
<g fill='none' stroke-width='.399' stroke-miterlimit='10'>
<path d='m-28.606-55.535h235.277' stroke="currentColor" stroke-opacity="0.451" stroke-dasharray='2.989,1.993'/>
<path d='m84.781-15.852h25.512' stroke="currentColor" stroke-opacity="0.451" stroke-dasharray='2.989,1.993'/>
<path d='m106.043-19.438v-32.512' stroke="currentColor"/>
</g>
<path d='m106.043-15.852c.199-1.063 .797-2.789 1.492-3.984h-2.988c.699 1.195 1.297 2.922 1.496 3.984'/>
<path d='m106.043-55.535c-.199 1.063-.797 2.789-1.496 3.984h2.988c-.695-1.195-1.293-2.922-1.492-3.984'/>
<text class="venturi-f2" x='-69.709' y='55.016' transform='translate(180.985 -86.922)'>∆</text>
<text class="venturi-f0" x='-60.618' y='55.016' transform='translate(180.985 -86.922)'>h</text>
<path d='m-59.785 55.016h8.434' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-a)">
<path d='m-45.613 55.016c-1.699-.32-4.465-1.273-6.375-2.391v4.781c1.91-1.117 4.676-2.07 6.375-2.391'/>
<text class="venturi-f0" x='-70.132' y='55.016' transform='translate(11.811 -7.538)'><tspan x='-69.709'>v</tspan>
</text>
<text class="venturi-f1" x='-64.421' y='57.036' transform='translate(11.811 -7.538)'>1</text>
</g>
<path d='m52.183 55.016h50.953' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-a)">
<path d='m108.875 55.016c-1.699-.32-4.461-1.273-6.375-2.391v4.781c1.914-1.117 4.676-2.07 6.375-2.391'/>
<text class="venturi-f0" x='-70.132' y='55.016' transform='translate(129.45 -6.971)'><tspan x='-69.709'>v</tspan>
</text>
<text class="venturi-f1" x='-64.421' y='57.036' transform='translate(129.45 -6.971)'>2</text>
</g>
<text class="venturi-f3" x='-69.709' y='55.016' transform='translate(136.378 24.387)'>горло</text>
<path d='m21 60.684v-11.336h11.339v11.336z' fill="var(--fig-back)"/>
<path d='m21 60.684v-11.336h11.339v11.336z' fill="currentColor" fill-opacity="0.039"/>
<path d='m21 60.684v-11.336h11.339v11.336z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m4.559 55.016h9.856' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m20.152 55.016c-1.703-.32-4.465-1.273-6.379-2.391v4.781c1.914-1.117 4.676-2.07 6.379-2.391' fill="var(--fig-b)"/>
<path d='m41.695 55.016h-2.766' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m33.191 55.016c1.699 .32 4.461 1.273 6.375 2.391v-4.781c-1.914 1.117-4.676 2.07-6.375 2.391' fill="var(--fig-b)"/>
</g>
</g>
</svg>`;
