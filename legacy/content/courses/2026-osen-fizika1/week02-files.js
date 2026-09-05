/* Манифест файлов недели 02: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/kinematika/pochemu-mekhanika.md.js',
    'content/core/kinematika/aksiomy-i-formalizaciya.md.js',
    'content/core/kinematika/chto-takoe-kinematika.md.js',
    'content/core/kinematika/prostranstvo-i-vremya.md.js',
    'content/core/kinematika/otnositelnost-dvizheniya.md.js',
    'content/core/kinematika/sistema-otscheta.md.js',
    'content/core/kinematika/materialnaya-tochka.md.js',
    'content/core/kinematika/radius-vektor.md.js',
    'content/core/kinematika/ris-radius-vektor.md.js',
    'content/core/kinematika/traektoriya.md.js',
    'content/core/kinematika/peremeshchenie.md.js',
    'content/core/kinematika/ris-peremeshchenie.md.js',
    'content/core/kinematika/skorost.md.js',
    'content/core/kinematika/integrirovanie-skorosti.md.js',
    'content/core/kinematika/uskorenie.md.js',
    'content/core/kinematika/uglovaya-skorost.md.js',
    'content/core/kinematika/ris-uglovaya-skorost.md.js',
    'content/core/kinematika/normalnoe-i-tangencialnoe.md.js',
    'content/core/kinematika/ris-krivizna.md.js',
    'content/core/kinematika/vopros-kin-01.md.js',
    'content/core/kinematika/vopros-kin-02.md.js',
    'content/core/kinematika/vopros-kin-03.md.js',
    'content/core/kinematika/vopros-kin-04.md.js',
    'content/core/kinematika/vopros-kin-05.md.js',
    'content/core/kinematika/vopros-kin-06.md.js',
    'content/core/kinematika/vopros-kin-07.md.js',
    'content/core/kinematika/vopros-kin-08.md.js',
    'content/core/kinematika/vopros-kin-09.md.js',
    'content/core/kinematika/zadacha-grafiki.md.js',
    'content/core/kinematika/zadacha-myach.md.js',
    'content/core/kinematika/zadacha-okruzhnost.md.js',
    'content/core/kinematika/zadacha-eksponenta.md.js',
    'content/core/kinematika/figs/radius-vektor.svg.js',
    'content/core/kinematika/figs/peremeshchenie.svg.js',
    'content/core/kinematika/figs/uglovaya-skorost.svg.js',
    'content/core/kinematika/figs/krivizna.svg.js',
    'content/core/kinematika/figs/zadacha-grafik-v.svg.js',
    'content/core/kinematika/figs/zadacha-grafik-s.svg.js',
    'content/core/kinematika/figs/zadacha-grafik-a.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/razmernosti/gradusy-i-radiany.md.js',
    'content/core/razmernosti/formula-razmernosti.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
