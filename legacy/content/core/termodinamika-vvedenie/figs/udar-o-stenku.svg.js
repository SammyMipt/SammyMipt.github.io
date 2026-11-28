/* Собран конвейером из sources/physics1_summary/inputs/08/pics/udar_o_stenku.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs termodinamika-vvedenie udar-o-stenku.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['udar-o-stenku'] = String.raw`<svg class="fig-tikz" width="264" height="171" viewBox="0 0 264 171" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Молекулы газа у стенки площадью S: часть летит к стенке, часть от неё; из слоя толщиной v_x Δt до стенки за время Δt долетают молекулы с проекцией скорости v_x; молекула у стенки отражается, проекция её скорости меняется с v_x на −v_x, стенке передан импульс 2mv_x">
<style>text.udar-o-stenku-f0{font-family:cmsy10;font-size:10.909px}text.udar-o-stenku-f1{font-family:cmmi9;font-size:8.966px}text.udar-o-stenku-f2{font-family:cmmi10;font-size:10.909px}text.udar-o-stenku-f3{font-family:cmr10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(96.262 91.387) scale(1.375011)">

<g id='page1'>
<path d='m9.563 55.367v-96.379h62.363v96.379z' fill="currentColor" fill-opacity="0.059"/>
<g stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10'>
<path d='m9.563 55.367v-96.379' stroke-dasharray='2.989 1.993'/>
<path d='m71.926 55.367l9.07-9.07'/>
<path d='m71.926 48.281l9.07-9.07'/>
<path d='m71.926 41.195l9.07-9.07'/>
<path d='m71.926 34.109l9.07-9.074'/>
<path d='m71.926 27.02l9.07-9.07'/>
<path d='m71.926 19.934l9.07-9.07'/>
<path d='m71.926 12.848l9.07-9.07'/>
<path d='m71.926 5.762l9.07-9.07'/>
<path d='m71.926-1.324l9.07-9.07'/>
<path d='m71.926-8.41l9.07-9.074'/>
<path d='m71.926-15.5l9.07-9.07'/>
<path d='m71.926-22.586l9.07-9.07'/>
<path d='m71.926-29.672l9.07-9.07'/>
</g>
<path d='m71.926 55.367v-96.379' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<text class="udar-o-stenku-f2" x='-69.808' y='55.368' transform='translate(147.25 -100.478)'>S</text>
<path d='m-69.809 55.367h177.832' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m111.609 55.367c-1.063-.199-2.789-.797-3.984-1.492v2.988c1.195-.699 2.922-1.297 3.984-1.496'/>
<text class="udar-o-stenku-f2" x='-69.808' y='55.368' transform='translate(186.084 2.349)'>x</text>
<g stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'>
<path d='m9.563-42.426v-14.176'/>
<path d='m71.926-42.426v-14.176'/>
<path d='m13.148-52.347h55.187'/>
</g>
<path d='m9.562-52.348c1.063 .199 2.789 .797 3.984 1.492v-2.988c-1.195 .699-2.922 1.297-3.984 1.496'/>
<path d='m71.926-52.348c-1.063-.199-2.793-.797-3.988-1.496v2.988c1.195-.695 2.926-1.293 3.988-1.492'/>
<g transform='translate(98.531 -114.02)'>
<text class="udar-o-stenku-f2" x='-69.808' y='55.368'>v</text>
<text class="udar-o-stenku-f1" x='-64.52' y='57.004'>x</text>
<text class="udar-o-stenku-f3" x='-58.799' y='55.368'>∆</text>
<text class="udar-o-stenku-f2" x='-49.708' y='55.368'>t</text>
</g>
<path d='m-44.297-18.332l11.969-6.531' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-28.707-26.836c-1.18 .383-3.254 .73-4.844 .684l1.645 3.02c.824-1.363 2.238-2.918 3.199-3.703' fill="var(--fig-a)"/>
<path d='m-42.703-18.332c0-.883-.715-1.594-1.594-1.594s-1.594 .711-1.594 1.594c0 .879 .715 1.594 1.594 1.594s1.594-.715 1.594-1.594z'/>
<path d='m-27.289 29.856l-9.5-7.391' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-40.043 19.934c.824 .934 1.969 2.695 2.562 4.172l2.109-2.715c-1.578-.211-3.566-.887-4.672-1.457' fill="var(--fig-a)"/>
<path d='m-25.695 29.856c0-.879-.711-1.594-1.594-1.594c-.879 0-1.594 .715-1.594 1.594c0 .883 .715 1.594 1.594 1.594c.883 0 1.594-.711 1.594-1.594z'/>
<path d='m-13.117 1.508l10.953 8.766' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m1.059 12.848c-.813-.941-1.934-2.719-2.504-4.203l-2.148 2.684c1.574 .23 3.555 .934 4.652 1.52' fill="var(--fig-a)"/>
<path d='m-11.52 1.508c0-.879-.715-1.594-1.598-1.594c-.879 0-1.594 .715-1.594 1.594c0 .883 .715 1.598 1.594 1.598c.883 0 1.598-.715 1.598-1.598z'/>
<path d='m20.898-26.836l13.007-3.254' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m37.91-31.09c-1.242 .074-3.336-.109-4.863-.555l.832 3.336c1.141-1.113 2.898-2.262 4.031-2.781' fill="var(--fig-a)"/>
<path d='m22.496-26.836c0-.883-.715-1.594-1.598-1.594c-.879 0-1.594 .711-1.594 1.594c0 .879 .715 1.594 1.594 1.594c.883 0 1.598-.715 1.598-1.594z'/>
<path d='m29.406 35.523l-10.488 5.242' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m15.23 42.613c1.195-.344 3.281-.617 4.867-.516l-1.535-3.07c-.871 1.332-2.34 2.832-3.332 3.586' fill="var(--fig-a)"/>
<path d='m31 35.523c0-.879-.715-1.594-1.594-1.594c-.883 0-1.598 .715-1.598 1.594c0 .883 .715 1.598 1.598 1.598c.879 0 1.594-.715 1.594-1.598z'/>
<path d='m32.238 4.344l-9.5-7.391' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m19.484-5.578c.824 .934 1.969 2.695 2.562 4.172l2.109-2.715c-1.578-.211-3.566-.887-4.672-1.457' fill="var(--fig-a)"/>
<path d='m33.832 4.344c0-.879-.711-1.594-1.594-1.594c-.878 0-1.593 .715-1.593 1.594s.715 1.594 1.593 1.594c.883 0 1.594-.715 1.594-1.594z'/>
<path d='m43.578 38.359l10.344 4.137' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m57.75 44.027c-1.047-.664-2.637-2.039-3.617-3.297l-1.273 3.191c1.574-.234 3.672-.133 4.891 .105' fill="var(--fig-a)"/>
<path d='m45.172 38.359c0-.879-.715-1.594-1.594-1.594c-.882 0-1.593 .715-1.593 1.594s.711 1.594 1.593 1.594c.879 0 1.594-.715 1.594-1.594z'/>
<path d='m1.059-26.836l-8.039 6.027' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-10.281-18.332c1.117-.551 3.117-1.191 4.699-1.375l-2.063-2.75c-.621 1.465-1.797 3.207-2.637 4.125' fill="var(--fig-a)"/>
<path d='m2.652-26.836c0-.883-.715-1.594-1.594-1.594c-.883 0-1.594 .711-1.594 1.594c0 .879 .711 1.594 1.594 1.594c.879 0 1.594-.715 1.594-1.594z'/>
<path d='m-41.461 10.012l8.598 9.676' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-30.125 22.77c-.641-1.066-1.445-3.008-1.758-4.566l-2.57 2.281c1.516 .496 3.348 1.523 4.328 2.285' fill="var(--fig-a)"/>
<path d='m-39.867 10.012c0-.879-.715-1.594-1.594-1.594c-.883 0-1.594 .715-1.594 1.594c0 .883 .711 1.594 1.594 1.594c.879 0 1.594-.711 1.594-1.594z'/>
<path d='m48.68 11.43l15.844-9.508' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m68.523-.477c-1.32 .492-3.645 .98-5.441 1l1.996 3.332c.867-1.578 2.395-3.398 3.445-4.332' fill="var(--fig-a)"/>
<path d='m69.942-1.324l-15.848-9.508' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m50.098-13.23c1.051 .934 2.574 2.754 3.441 4.332l2-3.332c-1.801-.023-4.125-.512-5.441-1' fill="var(--fig-a)"/>
<path d='m71.535-1.324c0-.883-.714-1.594-1.593-1.594c-.883 0-1.598 .711-1.598 1.594c0 .879 .715 1.594 1.598 1.594c.879 0 1.593-.715 1.593-1.594z'/>
<g fill="var(--fig-a)">
<text class="udar-o-stenku-f2" x='-69.808' y='55.368' transform='translate(114.968 -33.723)'>v</text>
<text class="udar-o-stenku-f1" x='-64.52' y='57.004' transform='translate(114.968 -33.723)'>x</text>
<g transform='translate(110.725 -74.902)'>
<text class="udar-o-stenku-f0" x='-69.808' y='55.368'>−</text>
<text class="udar-o-stenku-f2" x='-61.323' y='55.368'>v</text>
<text class="udar-o-stenku-f1" x='-56.035' y='57.004'>x</text>
</g>
</g>
<path d='m83.262-1.324h16.941' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m105.941-1.324c-1.703-.32-4.465-1.277-6.379-2.391v4.781c1.914-1.117 4.676-2.074 6.379-2.391'/>
<g transform='translate(152.806 -63.847)'>
<text class="udar-o-stenku-f3" x='-69.808' y='55.368'>2</text>
<text class="udar-o-stenku-f2" x='-64.354' y='55.368'>mv</text>
<text class="udar-o-stenku-f1" x='-49.487' y='57.004'>x</text>
</g>
</g>
</g>
</g>
</svg>`;
