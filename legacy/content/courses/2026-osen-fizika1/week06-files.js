/* Манифест файлов недели 06: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/tverdoe-telo/uravnenie-momentov-os.md.js',
    'content/core/tverdoe-telo/primer-gantel.md.js',
    'content/core/tverdoe-telo/ris-gantel.md.js',
    'content/core/tverdoe-telo/vrashchenie-vokrug-osi.md.js',
    'content/core/tverdoe-telo/moment-inercii-sterzhnya.md.js',
    'content/core/tverdoe-telo/moment-inercii-tochki.md.js',
    'content/core/tverdoe-telo/shar-i-disk.md.js',
    'content/core/tverdoe-telo/teorema-gyujgensa-shtejnera.md.js',
    'content/core/tverdoe-telo/tenzor-inercii.md.js',
    'content/core/tverdoe-telo/ellipsoid-inercii.md.js',
    'content/core/tverdoe-telo/mgnovennaya-os.md.js',
    'content/core/tverdoe-telo/primer-koleso.md.js',
    'content/core/tverdoe-telo/ris-koleso.md.js',
    'content/core/tverdoe-telo/razlozhenie-dvizheniya.md.js',
    'content/core/tverdoe-telo/uravnenie-momentov-ploskoe.md.js',
    'content/core/tverdoe-telo/primer-katushka.md.js',
    'content/core/tverdoe-telo/ris-katushka.md.js',
    'content/core/tverdoe-telo/teorema-ejlera.md.js',
    'content/core/tverdoe-telo/giroskop.md.js',
    'content/core/tverdoe-telo/vopros-tt-01.md.js',
    'content/core/tverdoe-telo/vopros-tt-02.md.js',
    'content/core/tverdoe-telo/vopros-tt-03.md.js',
    'content/core/tverdoe-telo/vopros-tt-04.md.js',
    'content/core/tverdoe-telo/vopros-tt-05.md.js',
    'content/core/tverdoe-telo/vopros-tt-06.md.js',
    'content/core/tverdoe-telo/vopros-tt-07.md.js',
    'content/core/tverdoe-telo/vopros-tt-08.md.js',
    'content/core/tverdoe-telo/vopros-tt-09.md.js',
    'content/core/tverdoe-telo/vopros-tt-10.md.js',
    'content/core/tverdoe-telo/vopros-tt-11.md.js',
    'content/core/tverdoe-telo/zadacha-tt-shtanga.md.js',
    'content/core/tverdoe-telo/zadacha-tt-truba.md.js',
    'content/core/tverdoe-telo/zadacha-tt-myach.md.js',
    'content/core/tverdoe-telo/zadacha-tt-meteorit.md.js',
    'content/core/tverdoe-telo/zadacha-tt-propeller.md.js',
    'content/core/tverdoe-telo/figs/gantel.svg.js',
    'content/core/tverdoe-telo/figs/koleso.svg.js',
    'content/core/tverdoe-telo/figs/katushka.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/moment-impulsa/moment-impulsa.md.js',
    'content/core/zakony-nyutona/vtoroj-zakon.md.js',
    'content/core/zakony-nyutona/centr-mass.md.js',
    'content/core/rabota-energiya/teorema-kyoniga.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
