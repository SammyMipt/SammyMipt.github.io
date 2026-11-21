/* Собран конвейером из sources/physics1_summary/inputs/07/pics/bernulli.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs deformacii-gidrodinamika bernulli.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['bernulli'] = String.raw`<svg class="fig-tikz" width="510" height="218" viewBox="0 0 510 218" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Трубка тока поднимается от сечения S1 на высоте y1 к более узкому сечению S2 на высоте y2; сзади на выделенную жидкость давит сила P1S1 по ходу течения, спереди P2S2 навстречу; за Δt торцы смещаются на v1Δt и v2Δt, и слои, которые они проходят, одного объёма">
<style>text.bernulli-f0{font-family:cmmi10;font-size:10.909px}text.bernulli-f1{font-family:cmr9;font-size:8.966px}text.bernulli-f2{font-family:cmr10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.898 91.224) scale(1.375011)">

<g id='page1'>
<path d='m11.945 1.043h53.859l.934-.027l.992-.059l1.078-.086l1.219-.168l1.359-.285l1.504-.367l1.7-.539l1.871-.652l2.043-.82l2.179-.992l2.356-1.164l2.465-1.332l2.609-1.473l2.691-1.617l2.805-1.758l2.895-1.871l2.976-1.984l3.031-2.098l3.118-2.152l3.175-2.184l3.204-2.27l3.289-2.266l3.316-2.27l3.371-2.293l3.434-2.242l3.457-2.211l3.515-2.125l3.571-2.07l3.601-1.984l3.684-1.898l3.742-1.731l3.797-1.613l3.887-1.477l3.937-1.273l4.027-1.078l4.082-.879l4.11-.621l4.168-.371l4.195-.141h19.84c2.242 0 4.055 8.25 4.055 18.426s-1.813 18.426-4.055 18.426h-19.84l-1.617 .086l-1.672 .195l-1.672 .371l-1.73 .539l-1.813 .707l-1.871 .879l-1.93 1.047l-2.011 1.25l-2.071 1.418l-2.125 1.586l-2.211 1.785l-2.238 1.93l-2.324 2.125l-2.324 2.238l-2.41 2.352l-2.438 2.496l-2.496 2.609l-2.551 2.691l-2.578 2.75l-2.668 2.805l-2.691 2.863l-2.778 2.863l-2.836 2.891l-2.918 2.895l-3.007 2.859l-3.118 2.836l-3.23 2.75l-3.316 2.695l-3.489 2.606l-3.625 2.496l-3.773 2.352l-3.938 2.184l-4.113 1.984l-4.309 1.785l-4.449 1.504l-4.621 1.219l-4.734 .906l-4.817 .539l-4.875 .199h-53.859c3.441 0 6.234-12.691 6.234-28.348s-2.793-28.348-6.234-28.348z' fill="currentColor" fill-opacity="0.078"/>
<path d='m11.945 1.043h19.84c3.445 0 6.238 12.691 6.238 28.348s-2.793 28.348-6.238 28.348h-19.84c3.441 0 6.234-12.691 6.234-28.348s-2.793-28.348-6.234-28.348z' fill="var(--fig-a)" fill-opacity="0.25"/>
<path d='m199.031-51.398h46.973c2.238 0 4.054 8.25 4.054 18.426s-1.816 18.426-4.054 18.426h-46.973c2.242 0 4.055-8.25 4.055-18.426s-1.813-18.426-4.055-18.426z' fill="var(--fig-a)" fill-opacity="0.25"/>
<g fill='none' stroke-miterlimit='10'>
<path d='m-36.246 1.043h102.05l.934-.027l.992-.059l1.078-.086l1.219-.168l1.359-.285l1.504-.367l1.7-.539l1.871-.652l2.043-.82l2.179-.992l2.356-1.164l2.465-1.332l2.609-1.473l2.691-1.617l2.805-1.758l2.895-1.871l2.976-1.984l3.031-2.098l3.118-2.152l3.175-2.184l3.204-2.27l3.289-2.266l3.316-2.27l3.371-2.293l3.434-2.242l3.457-2.211l3.515-2.125l3.571-2.07l3.601-1.984l3.684-1.898l3.742-1.731l3.797-1.613l3.887-1.477l3.937-1.273l4.027-1.078l4.082-.879l4.11-.621l4.168-.371l4.195-.141h96.379' stroke="currentColor" stroke-width='.598'/>
<path d='m-36.246 57.738h102.05l4.875-.199l4.817-.539l4.734-.906l4.621-1.219l4.449-1.504l4.309-1.785l4.113-1.984l3.938-2.184l3.773-2.352l3.625-2.496l3.489-2.606l3.316-2.695l3.23-2.75l3.118-2.836l3.007-2.859l2.918-2.895l2.836-2.891l2.778-2.863l2.691-2.863l2.668-2.805l2.578-2.75l2.551-2.691l2.496-2.609l2.438-2.496l2.41-2.352l2.324-2.238l2.324-2.125l2.238-1.93l2.211-1.785l2.125-1.586l2.071-1.418l2.011-1.25l1.93-1.047l1.871-.879l1.813-.707l1.73-.539l1.672-.371l1.672-.195l1.617-.086h96.379' stroke="currentColor" stroke-width='.598'/>
<path d='m-30.008 29.391c0-15.656-2.793-28.348-6.238-28.348s-6.234 12.691-6.234 28.348s2.789 28.348 6.234 28.348s6.238-12.691 6.238-28.348z' stroke="currentColor" stroke-opacity="0.451" stroke-width='.399'/>
<path d='m279.621-32.973c0-10.176-1.813-18.426-4.051-18.426s-4.055 8.25-4.055 18.426s1.817 18.426 4.055 18.426s4.051-8.25 4.051-18.426z' stroke="currentColor" stroke-opacity="0.451" stroke-width='.399'/>
<g stroke="currentColor">
<path d='m18.18 29.391c0-15.656-2.793-28.348-6.234-28.348c-3.445 0-6.238 12.691-6.238 28.348s2.793 28.348 6.238 28.348c3.441 0 6.234-12.691 6.234-28.348z' stroke-width='.598'/>
<path d='m203.086-32.973c0-10.176-1.813-18.426-4.055-18.426c-2.238 0-4.051 8.25-4.051 18.426s1.813 18.426 4.051 18.426c2.242 0 4.055-8.25 4.055-18.426z' stroke-width='.598'/>
<path d='m38.023 29.391c0-15.656-2.793-28.348-6.238-28.348c-3.442 0-6.234 12.691-6.234 28.348s2.793 28.348 6.234 28.348c3.445 0 6.238-12.691 6.238-28.348z' stroke-width='.399' stroke-dasharray='2.989,1.993'/>
<path d='m250.058-32.973c0-10.176-1.816-18.426-4.054-18.426s-4.055 8.25-4.055 18.426s1.816 18.426 4.055 18.426s4.054-8.25 4.054-18.426z' stroke-width='.399' stroke-dasharray='2.989,1.993'/>
</g>
<path d='m-30.859 29.391h29.695' stroke="var(--fig-b)" stroke-width='1.196'/>
</g>
<g fill="var(--fig-b)">
<path d='m4.574 29.391c-1.699-.32-4.465-1.277-6.375-2.391v4.781c1.91-1.117 4.676-2.074 6.375-2.391'/>
<g transform='translate(11.15 -7.538)'>
<text class="bernulli-f0" x='-36.246' y='29.39'>P</text>
<text class="bernulli-f1" x='-29.242' y='31.41'>1</text>
<text class="bernulli-f0" x='-24.136' y='29.39'>S</text>
<text class="bernulli-f1" x='-17.447' y='31.41'>1</text>
</g>
</g>
<path d='m232.566-32.973h-22.609' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m204.219-32.973c1.703 .316 4.465 1.273 6.379 2.391v-4.781c-1.914 1.113-4.676 2.07-6.379 2.391'/>
<g transform='translate(242.687 -69.618)'>
<text class="bernulli-f0" x='-36.246' y='29.39'>P</text>
<text class="bernulli-f1" x='-29.242' y='31.41'>2</text>
<text class="bernulli-f0" x='-24.136' y='29.39'>S</text>
<text class="bernulli-f1" x='-17.447' y='31.41'>2</text>
</g>
</g>
<text class="bernulli-f0" x='-36.246' y='29.39' transform='translate(42.292 -35.601)'>S</text>
<text class="bernulli-f1" x='-29.556' y='31.41' transform='translate(42.292 -35.601)'>1</text>
<text class="bernulli-f0" x='-36.246' y='29.39' transform='translate(229.381 -88.043)'>S</text>
<text class="bernulli-f1" x='-29.556' y='31.41' transform='translate(229.381 -88.043)'>2</text>
<path d='m11.945 59.152v9.356m19.84-9.356v9.356' stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m11.945 66.242h15.715' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<g fill="var(--fig-a)">
<path d='m31.785 66.242c-1.223-.23-3.207-.918-4.582-1.719v3.438c1.375-.805 3.359-1.492 4.582-1.719'/>
<g transform='translate(45.49 49.539)'>
<text class="bernulli-f0" x='-36.246' y='29.39'>v</text>
<text class="bernulli-f1" x='-30.958' y='31.41'>1</text>
<text class="bernulli-f2" x='-24.034' y='29.39'>∆</text>
<text class="bernulli-f0" x='-14.943' y='29.39'>t</text>
</g>
</g>
<path d='m199.031-13.129v9.352m46.973-9.352v9.352' stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m199.031-6.043h42.848' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<g fill="var(--fig-a)">
<path d='m246.004-6.043c-1.223-.23-3.207-.918-4.582-1.719v3.438c1.375-.805 3.359-1.492 4.582-1.719'/>
<g transform='translate(246.129 -22.745)'>
<text class="bernulli-f0" x='-36.246' y='29.39'>v</text>
<text class="bernulli-f1" x='-30.958' y='31.41'>2</text>
<text class="bernulli-f2" x='-24.034' y='29.39'>∆</text>
<text class="bernulli-f0" x='-14.943' y='29.39'>t</text>
</g>
</g>
<g fill='none' stroke-width='.399' stroke-miterlimit='10'>
<path d='m-58.922 91.754h357.168' stroke="currentColor"/>
<path d='m-54.672 29.391h16.16m316.348-62.363h16.16' stroke="currentColor" stroke-opacity="0.451"/>
<path d='m-50.418 88.164v-55.188' stroke="currentColor"/>
</g>
<path d='m-50.418 91.754c.199-1.063 .797-2.789 1.492-3.988h-2.988c.699 1.199 1.297 2.926 1.496 3.988'/>
<path d='m-50.418 29.391c-.199 1.063-.797 2.789-1.496 3.984h2.988c-.695-1.195-1.293-2.922-1.492-3.984'/>
<text class="bernulli-f0" x='-36.246' y='29.39' transform='translate(-29.862 32.47)'>y</text>
<text class="bernulli-f1" x='-30.897' y='31.41' transform='translate(-29.862 32.47)'>1</text>
<path d='m289.742 88.164v-117.551' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m289.743 91.754c.199-1.063 .797-2.789 1.496-3.988h-2.988c.695 1.199 1.293 2.926 1.492 3.988'/>
<path d='m289.743-32.973c-.199 1.063-.797 2.789-1.492 3.984h2.988c-.699-1.195-1.297-2.922-1.496-3.984'/>
<text class="bernulli-f0" x='-36.246' y='29.39' transform='translate(331.222 1.288)'>y</text>
<text class="bernulli-f1" x='-30.897' y='31.41' transform='translate(331.222 1.288)'>2</text>
</g>
</g>
</svg>`;
