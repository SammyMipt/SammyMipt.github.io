/* Собран конвейером из sources/physics1_summary/inputs/07/pics/kubik_zhidkosti.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs deformacii-gidrodinamika kubik-zhidkosti.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['kubik-zhidkosti'] = String.raw`<svg class="fig-tikz" width="203" height="156" viewBox="0 0 203 156" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Кубик покоящейся жидкости: на все четыре грани сечения давит одно и то же давление P по нормали внутрь, касательных сил нет">
<style>text.kubik-zhidkosti-f0{font-family:cmmi10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(96.262 90.894) scale(1.375011)">

<g id='page1'>
<path d='m-70.008 41.828v-102.051h147.402v102.051z' fill="currentColor" fill-opacity="0.098"/>
<path d='m-18.984 13.48v-45.356h45.356v45.356z' fill="var(--fig-back)"/>
<path d='m-18.984 13.48v-45.356h45.356v45.356z' fill="currentColor" fill-opacity="0.039"/>
<path d='m-18.984 13.48v-45.356h45.356v45.356z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m49.047-9.199h-16.086' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m27.223-9.199c1.699 .32 4.461 1.277 6.375 2.391v-4.781c-1.914 1.117-4.676 2.074-6.375 2.391' fill="var(--fig-b)"/>
<path d='m-41.66-9.199h16.086' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m-19.836-9.199c-1.699-.316-4.461-1.273-6.375-2.391v4.781c1.914-1.113 4.676-2.07 6.375-2.391' fill="var(--fig-b)"/>
<path d='m3.695-54.555v16.09' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m3.695-32.727c.316-1.699 1.273-4.461 2.391-6.375h-4.785c1.117 1.914 2.074 4.676 2.395 6.375' fill="var(--fig-b)"/>
<path d='m3.695 36.156v-16.086' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m3.695 14.328c-.32 1.703-1.277 4.465-2.395 6.379h4.785c-1.117-1.914-2.074-4.676-2.391-6.379'/>
<text class="kubik-zhidkosti-f0" x='3.693' y='-9.198' transform='translate(50.022 3.727)'>P</text>
<text class="kubik-zhidkosti-f0" x='3.693' y='-9.198' transform='translate(-58.541 3.727)'>P</text>
<text class="kubik-zhidkosti-f0" x='3.693' y='-9.198' transform='translate(-4.26 -49.455)'>P</text>
<text class="kubik-zhidkosti-f0" x='3.693' y='-9.198' transform='translate(-4.26 56.91)'>P</text>
</g>
</g>
</g>
</svg>`;
