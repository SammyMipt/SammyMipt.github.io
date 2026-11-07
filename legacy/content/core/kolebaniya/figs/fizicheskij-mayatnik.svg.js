/* Собран конвейером из sources/physics1_summary/inputs/06/pics/fizicheskij_mayatnik.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs kolebaniya fizicheskij-mayatnik.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['fizicheskij-mayatnik'] = String.raw`<svg class="fig-tikz" width="284" height="181" viewBox="0 0 284 181" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Физический маятник: тело на горизонтальной оси A отклонено от вертикали на угол фи; центр масс C на расстоянии a от оси, центр качания B на продолжении AC на эффективной длине; сила тяжести mg приложена в C, её плечо a sin фи отложено между вертикалью через ось и линией действия силы">
<style>text.fizicheskij-mayatnik-f0{font-family:cmmi9;font-size:8.966px}text.fizicheskij-mayatnik-f1{font-family:cmmi10;font-size:10.909px}text.fizicheskij-mayatnik-f2{font-family:cmr10;font-size:10.909px}text.fizicheskij-mayatnik-f3{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(96.265 96.259) scale(1.375011)">

<g id='page1'>
<path d='m49.574-50.859l-1.926-2.438l-2.215-2.211l-2.406-1.957l-2.637-1.727l-2.75-1.449l-2.891-1.246l-2.949-1.02l-3.004-.82l-2.977-.652l-3.004-.512l-2.977-.399l-2.922-.281l-2.918-.172l-2.863-.086l-2.863-.027l-2.809 .086l-2.805 .141l-2.777 .227l-2.75 .285l-2.75 .313l-2.75 .34l-2.75 .281l-2.832 .227l-2.895 .145l-3.059-.027l-3.234-.145l-3.457-.281l-3.742-.312l-3.996-.285l-4.195-.141l-4.336 .199l-4.34 .566l-4.223 1.105l-3.91 1.672l-3.516 2.27l-2.977 2.777l-2.438 3.23l-1.871 3.543l-1.359 3.77l-.91 3.855l-.594 3.883l-.367 3.828l-.231 3.77l-.113 3.656v3.602l.059 3.516l.199 3.484l.367 3.402l.566 3.316l.793 3.231l1.024 3.148l1.273 3.031l1.477 2.863l1.672 2.75l1.813 2.582l1.957 2.438l2.012 2.297l2.07 2.18l2.098 2.07l2.098 1.984l2.125 1.899l2.125 1.844l2.129 1.758l2.18 1.699l2.211 1.617l2.27 1.531l2.324 1.445l2.41 1.305l2.465 1.133l2.582 1.02l2.605 .824l2.695 .68l2.691 .481l2.75 .34l2.75 .172l2.777 .055l2.723-.055l2.75-.145l2.719-.195l2.723-.285l2.719-.281l2.75-.344l2.75-.395l2.777-.453l2.809-.512l2.836-.594l2.859-.766l2.836-.879l2.836-1.078l2.75-1.246l2.691-1.477l2.551-1.699l2.41-1.899l2.211-2.098l2.043-2.297l1.785-2.465l1.586-2.551l1.391-2.695l1.16-2.719l1.024-2.781l.848-2.777l.738-2.777l.68-2.75l.652-2.75l.625-2.719l.621-2.75l.625-2.75l.652-2.777l.652-2.836l.621-2.918l.57-2.981l.453-3.031l.309-3.09l.113-3.145l-.113-3.121l-.395-3.117l-.68-3.063l-.992-2.977l-1.332-2.805z' fill="currentColor" fill-opacity="0.059"/>
<g fill='none' stroke-miterlimit='10'>
<path d='m49.574-50.859l-1.926-2.438l-2.215-2.211l-2.406-1.957l-2.637-1.727l-2.75-1.449l-2.891-1.246l-2.949-1.02l-3.004-.82l-2.977-.652l-3.004-.512l-2.977-.399l-2.922-.281l-2.918-.172l-2.863-.086l-2.863-.027l-2.809 .086l-2.805 .141l-2.777 .227l-2.75 .285l-2.75 .313l-2.75 .34l-2.75 .281l-2.832 .227l-2.895 .145l-3.059-.027l-3.234-.145l-3.457-.281l-3.742-.312l-3.996-.285l-4.195-.141l-4.336 .199l-4.34 .566l-4.223 1.105l-3.91 1.672l-3.516 2.27l-2.977 2.777l-2.438 3.23l-1.871 3.543l-1.359 3.77l-.91 3.855l-.594 3.883l-.367 3.828l-.231 3.77l-.113 3.656v3.602l.059 3.516l.199 3.484l.367 3.402l.566 3.316l.793 3.231l1.024 3.148l1.273 3.031l1.477 2.863l1.672 2.75l1.813 2.582l1.957 2.438l2.012 2.297l2.07 2.18l2.098 2.07l2.098 1.984l2.125 1.899l2.125 1.844l2.129 1.758l2.18 1.699l2.211 1.617l2.27 1.531l2.324 1.445l2.41 1.305l2.465 1.133l2.582 1.02l2.605 .824l2.695 .68l2.691 .481l2.75 .34l2.75 .172l2.777 .055l2.723-.055l2.75-.145l2.719-.195l2.723-.285l2.719-.281l2.75-.344l2.75-.395l2.777-.453l2.809-.512l2.836-.594l2.859-.766l2.836-.879l2.836-1.078l2.75-1.246l2.691-1.477l2.551-1.699l2.41-1.899l2.211-2.098l2.043-2.297l1.785-2.465l1.586-2.551l1.391-2.695l1.16-2.719l1.024-2.781l.848-2.777l.738-2.777l.68-2.75l.652-2.75l.625-2.719l.621-2.75l.625-2.75l.652-2.777l.652-2.836l.621-2.918l.57-2.981l.453-3.031l.309-3.09l.113-3.145l-.113-3.121l-.395-3.117l-.68-3.063l-.992-2.977l-1.332-2.805z' stroke="currentColor" stroke-width='.598'/>
<g stroke-width='.399'>
<path d='m-33.312-54.461v106.301' stroke="currentColor" stroke-opacity="0.498" stroke-dasharray='2.989,1.993'/>
<path d='m-7.543 13.574v38.266' stroke="currentColor" stroke-opacity="0.498" stroke-dasharray='2.989,1.993'/>
<path d='m-29.727 47.59h18.594' stroke="currentColor"/>
</g>
</g>
<path d='m-33.313 47.59c1.063 .199 2.789 .797 3.984 1.492v-2.988c-1.195 .699-2.922 1.297-3.984 1.496'/>
<path d='m-7.543 47.59c-1.066-.199-2.793-.797-3.988-1.496v2.988c1.195-.695 2.922-1.293 3.988-1.492'/>
<g transform='translate(-2.069 114.001)'>
<text class="fizicheskij-mayatnik-f1" x='-33.312' y='-54.459'>a</text>
<text class="fizicheskij-mayatnik-f2" x='-25.727' y='-54.459'>sin</text>
<text class="fizicheskij-mayatnik-f1" x='-10.515' y='-54.459'>ϕ</text>
</g>
<g fill='none' stroke-miterlimit='10'>
<path d='m-33.312-54.461l48.133 68.77' stroke="currentColor" stroke-width='.399'/>
<path d='m-30.762-56.246l8.363-5.867' stroke="currentColor" stroke-opacity="0.498" stroke-width='.199'/>
<path d='m-4.992-19.449l8.359-5.871' stroke="currentColor" stroke-opacity="0.498" stroke-width='.199'/>
<path d='m-23.117-57.219l21.652 30.918' stroke="currentColor" stroke-width='.399'/>
</g>
<path d='m-25.176-60.156c.445 .984 .945 2.742 1.062 4.121l2.445-1.715c-1.254-.578-2.734-1.652-3.508-2.406'/>
<path d='m.59-23.363c-.445-.984-.945-2.742-1.062-4.121l-2.445 1.715c1.258 .578 2.734 1.652 3.508 2.406'/>
<text class="fizicheskij-mayatnik-f1" x='-33.312' y='-54.459' transform='translate(23.111 11.335)'>a</text>
<g fill='none' stroke-miterlimit='10'>
<path d='m-22.398-62.113l11.141-7.793' stroke="currentColor" stroke-opacity="0.498" stroke-width='.199'/>
<path d='m17.371 12.523l19.504-13.664' stroke="currentColor" stroke-opacity="0.498" stroke-width='.199'/>
<path d='m-12.379-64.09l43.402 62.008' stroke="var(--fig-const)" stroke-width='.598'/>
</g>
<g fill="var(--fig-const)">
<path d='m-14.746-67.469c.516 1.133 1.09 3.152 1.223 4.738l2.812-1.973c-1.445-.664-3.145-1.898-4.035-2.766'/>
<path d='m33.387 1.301c-.512-1.133-1.086-3.156-1.219-4.742l-2.816 1.973c1.445 .664 3.148 1.898 4.035 2.77'/>
<text class="fizicheskij-mayatnik-f1" x='-33.312' y='-54.459' transform='translate(48.888 11.105)'>l</text>
<text class="fizicheskij-mayatnik-f0" x='-30.057' y='-52.09' transform='translate(48.888 11.105)'>A</text>
</g>
<path d='m-33.312-36.883c3.605 0 7.129-1.113 10.082-3.18' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<text class="fizicheskij-mayatnik-f1" x='-33.312' y='-54.459' transform='translate(3.519 26.8)' fill="var(--fig-a)">ϕ</text>
<path d='m-7.543-17.664v25.5' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m-7.543 13.574c.316-1.703 1.273-4.465 2.391-6.379h-4.785c1.117 1.914 2.074 4.676 2.395 6.379' fill="var(--fig-b)"/>
<text class="fizicheskij-mayatnik-f1" x='-33.312' y='-54.459' transform='translate(5.388 62.365)' fill="var(--fig-b)">m<tspan x='-24.199'></tspan>
<tspan x='-23.734'>g</tspan>
</text>
<path d='m-30.902-54.461c0-1.328-1.078-2.406-2.41-2.406s-2.41 1.078-2.41 2.406c0 1.332 1.078 2.41 2.41 2.41s2.41-1.078 2.41-2.41z' fill="var(--fig-back)"/>
<path d='m-30.902-54.461c0-1.328-1.078-2.406-2.41-2.406s-2.41 1.078-2.41 2.406c0 1.332 1.078 2.41 2.41 2.41s2.41-1.078 2.41-2.41z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-32.461-54.461c0-.469-.383-.848-.852-.848s-.852 .379-.852 .848c0 .473 .383 .852 .852 .852s.852-.379 .852-.852z'/>
<path d='m-5.852-17.664c0-.938-.758-1.695-1.691-1.695c-.938 0-1.695 .758-1.695 1.695c0 .934 .758 1.691 1.695 1.691c.934 0 1.691-.758 1.691-1.691z'/>
<path d='m16.516 14.309c0-.934-.758-1.691-1.695-1.691c-.934 0-1.691 .758-1.691 1.691c0 .938 .758 1.695 1.691 1.695c.938 0 1.695-.758 1.695-1.695z'/>
<text class="fizicheskij-mayatnik-f1" x='-33.312' y='-54.459' transform='translate(-15.683 3.16)'>A</text>
<text class="fizicheskij-mayatnik-f1" x='-33.312' y='-54.459' transform='translate(11.134 40.578)'>C</text>
<text class="fizicheskij-mayatnik-f1" x='-33.312' y='-54.459' transform='translate(34.134 81.571)'>B</text>
<path d='m16.578 14.707h43.656' stroke="currentColor" stroke-opacity="0.498" fill='none' stroke-width='.199' stroke-miterlimit='10'/>
<text class="fizicheskij-mayatnik-f3" x='-33.312' y='-54.459' transform='translate(98.212 70.454)'>центр<tspan x='-1.372'>к</tspan>
<tspan x='4.352'>а</tspan>
<tspan x='9.475'>чания</tspan>
</text>
</g>
</g>
</svg>`;
