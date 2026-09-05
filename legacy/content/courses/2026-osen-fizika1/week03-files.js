/* Манифест файлов недели 03: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/zakony-nyutona/ot-kinematiki-k-dinamike.md.js',
    'content/core/zakony-nyutona/pervyj-zakon.md.js',
    'content/core/zakony-nyutona/massa-i-impuls.md.js',
    'content/core/zakony-nyutona/vtoroj-zakon.md.js',
    'content/core/zakony-nyutona/tretij-zakon.md.js',
    'content/core/zakony-nyutona/granicy-primenimosti.md.js',
    'content/core/zakony-nyutona/sistema-tochek.md.js',
    'content/core/zakony-nyutona/ris-sistema-tochek.md.js',
    'content/core/zakony-nyutona/princip-otnositelnosti.md.js',
    'content/core/zakony-nyutona/ris-dve-sistemy.md.js',
    'content/core/zakony-nyutona/additivnost-massy.md.js',
    'content/core/zakony-nyutona/integralnaya-forma.md.js',
    'content/core/zakony-nyutona/uravnenie-dvizheniya.md.js',
    'content/core/zakony-nyutona/chislennoe-integrirovanie.md.js',
    'content/core/zakony-nyutona/zadacha-dvuh-tel.md.js',
    'content/core/zakony-nyutona/ris-dva-tela.md.js',
    'content/core/zakony-nyutona/zadacha-treh-tel.md.js',
    'content/core/zakony-nyutona/uravnenie-meshcherskogo.md.js',
    'content/core/zakony-nyutona/formula-ciolkovskogo.md.js',
    'content/core/zakony-nyutona/centr-mass.md.js',
    'content/core/zakony-nyutona/primer-sterzhen.md.js',
    'content/core/zakony-nyutona/ris-razbienie-sterzhnya.md.js',
    'content/core/zakony-nyutona/centr-mass-plotnost.md.js',
    'content/core/zakony-nyutona/teorema-o-centre-mass.md.js',
    'content/core/zakony-nyutona/vopros-zn-01.md.js',
    'content/core/zakony-nyutona/vopros-zn-02.md.js',
    'content/core/zakony-nyutona/vopros-zn-03.md.js',
    'content/core/zakony-nyutona/vopros-zn-04.md.js',
    'content/core/zakony-nyutona/vopros-zn-05.md.js',
    'content/core/zakony-nyutona/vopros-zn-06.md.js',
    'content/core/zakony-nyutona/vopros-zn-07.md.js',
    'content/core/zakony-nyutona/vopros-zn-08.md.js',
    'content/core/zakony-nyutona/vopros-zn-09.md.js',
    'content/core/zakony-nyutona/vopros-zn-10.md.js',
    'content/core/zakony-nyutona/vopros-zn-11.md.js',
    'content/core/zakony-nyutona/vopros-zn-12.md.js',
    'content/core/zakony-nyutona/vopros-zn-13.md.js',
    'content/core/zakony-nyutona/vopros-zn-14.md.js',
    'content/core/zakony-nyutona/zadacha-palochka.md.js',
    'content/core/zakony-nyutona/zadacha-naklonnaya.md.js',
    'content/core/zakony-nyutona/figs/dve-sistemy.svg.js',
    'content/core/zakony-nyutona/figs/sistema-tochek.svg.js',
    'content/core/zakony-nyutona/figs/dva-tela.svg.js',
    'content/core/zakony-nyutona/figs/razbienie-sterzhnya.svg.js',
    'content/core/zakony-nyutona/figs/palochka-sily.svg.js',
    'content/core/zakony-nyutona/figs/gruzy-naklonnaya.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/kinematika/integrirovanie-skorosti.md.js',
    'content/core/kinematika/sistema-otscheta.md.js',
    'content/core/kinematika/uskorenie.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
