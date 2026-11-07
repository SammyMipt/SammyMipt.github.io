/* Собран конвейером из sources/physics1_summary/inputs/07/pics/prizma.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs deformacii-gidrodinamika prizma.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['prizma'] = String.raw`<svg class="fig-tikz" width="292" height="180" viewBox="0 0 292 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Треугольная призма жидкости длиной l: левая грань перпендикулярна оси x, нижняя оси y, третья наклонена под углом α; в сечении катеты Δx и Δy и гипотенуза Δs; на каждую грань по нормали внутрь давят P_x, P_y и P_s">
<style>text.prizma-f0{font-family:cmmi9;font-size:8.966px}text.prizma-f1{font-family:cmmi10;font-size:10.909px}text.prizma-f2{font-family:cmr10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.899 90.894) scale(1.375011)">

<g id='page1'>
<path d='m-48.148-21.68h22.609' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m-19.801-21.68c-1.703-.316-4.465-1.273-6.379-2.391v4.781c1.914-1.113 4.676-2.07 6.379-2.391' fill="var(--fig-b)"/>
<path d='m41.004 48.621v-22.609' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m41.004 20.273c-.32 1.703-1.277 4.465-2.395 6.379h4.785c-1.117-1.914-2.074-4.676-2.391-6.379' fill="var(--fig-b)"/>
<path d='m66.371 19.141l34.301-24.945l-85.039-56.691l-34.301 24.945z' fill="var(--fig-back)"/>
<path d='m66.371 19.141l34.301-24.945l-85.039-56.691l-34.301 24.945z' fill="currentColor" fill-opacity="0.161"/>
<path d='m66.371 19.141l34.301-24.945l-85.039-56.691l-34.301 24.945z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10' stroke-linejoin='bevel'/>
<path d='m-18.668 19.141h85.039l-85.039-56.691z' fill="var(--fig-back)"/>
<path d='m-18.668 19.141h85.039l-85.039-56.691z' fill="currentColor" fill-opacity="0.071"/>
<g fill='none' stroke-miterlimit='10'>
<path d='m-18.668 19.141h85.039l-85.039-56.691z' stroke="currentColor" stroke-width='.598' stroke-linejoin='bevel'/>
<path d='m-18.668 19.141l34.301-24.945m0 0h85.039m-85.039 0v-56.691' stroke="currentColor" stroke-opacity="0.451" stroke-width='.399' stroke-dasharray='2.989,1.993'/>
<path d='m52.199 19.141c0-2.797 .828-5.535 2.379-7.859' stroke="currentColor" stroke-width='.399'/>
</g>
<text class="prizma-f1" x='15.632' y='-5.804' transform='translate(26.056 20.887)'>α</text>
<path d='m61.441-52.348l-17.258 25.895' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m41.004-21.68c1.207-1.238 3.535-3.004 5.523-3.98l-3.98-2.648c-.133 2.211-.867 5.039-1.543 6.629'/>
<text class="prizma-f1" x='15.632' y='-5.804' transform='translate(-81.74 -12.965)'>P</text>
<text class="prizma-f0" x='22.635' y='-4.168' transform='translate(-81.74 -12.965)'>x</text>
<text class="prizma-f1" x='15.632' y='-5.804' transform='translate(19.189 67.114)'>P</text>
<text class="prizma-f0" x='22.635' y='-4.168' transform='translate(19.189 67.114)'>y</text>
<text class="prizma-f1" x='15.632' y='-5.804' transform='translate(49.908 -52.849)'>P</text>
<text class="prizma-f0" x='22.635' y='-4.168' transform='translate(49.908 -52.849)'>s</text>
</g>
<text class="prizma-f2" x='15.632' y='-5.804' transform='translate(33.78 37.634)'>∆</text>
<text class="prizma-f1" x='24.723' y='-5.804' transform='translate(33.78 37.634)'>x</text>
<text class="prizma-f2" x='15.632' y='-5.804' transform='translate(-54.648 9.47)'>∆</text>
<text class="prizma-f1" x='24.723' y='-5.804' transform='translate(-54.648 9.47)'>y</text>
<text class="prizma-f2" x='15.632' y='-5.804' transform='translate(67.115 -20.824)'>∆</text>
<text class="prizma-f1" x='24.723' y='-5.804' transform='translate(67.115 -20.824)'>s</text>
<text class="prizma-f1" x='15.632' y='-5.804' transform='translate(72.983 25.537)'>l</text>
<path d='m116.262 43.801h16.258' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m136.106 43.801c-1.063-.199-2.789-.797-3.984-1.492v2.988c1.195-.695 2.922-1.293 3.984-1.496'/>
<path d='m116.262 43.801v-16.254' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m116.262 23.961c-.199 1.063-.797 2.789-1.492 3.984h2.988c-.699-1.195-1.297-2.922-1.496-3.984'/>
<path d='m116.262 43.801l-9.57 6.965' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m103.789 52.875c.977-.465 2.727-.996 4.102-1.137l-1.758-2.418c-.555 1.27-1.602 2.766-2.344 3.555'/>
<text class="prizma-f1" x='15.632' y='-5.804' transform='translate(124.573 51.955)'>x</text>
<text class="prizma-f1" x='15.632' y='-5.804' transform='translate(97.761 23.543)'>y</text>
<text class="prizma-f1" x='15.632' y='-5.804' transform='translate(78.506 67.475)'>z</text>
</g>
</g>
</svg>`;
