/* Манифест файлов недели 04: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/rabota-energiya/mehanicheskaya-rabota.md.js',
    'content/core/rabota-energiya/ris-mech-work.md.js',
    'content/core/rabota-energiya/moshchnost.md.js',
    'content/core/rabota-energiya/kineticheskaya-energiya.md.js',
    'content/core/rabota-energiya/teorema-kyoniga.md.js',
    'content/core/rabota-energiya/konservativnye-sily.md.js',
    'content/core/rabota-energiya/ris-kontur-raboty.md.js',
    'content/core/rabota-energiya/centralnye-sily.md.js',
    'content/core/rabota-energiya/potencialnaya-energiya.md.js',
    'content/core/rabota-energiya/sila-i-potencialnaya-energiya.md.js',
    'content/core/rabota-energiya/klassifikaciya-sil.md.js',
    'content/core/rabota-energiya/zakon-sohraneniya-energii.md.js',
    'content/core/rabota-energiya/tipy-stolknovenij.md.js',
    'content/core/rabota-energiya/uprugij-udar-1d.md.js',
    'content/core/rabota-energiya/sistema-centra-mass.md.js',
    'content/core/rabota-energiya/ris-rasseyanie.md.js',
    'content/core/rabota-energiya/predelnyj-ugol.md.js',
    'content/core/rabota-energiya/ris-vektornaya-diagramma.md.js',
    'content/core/rabota-energiya/porogovaya-energiya.md.js',
    'content/core/rabota-energiya/ris-gorka-porog.md.js',
    'content/core/rabota-energiya/vopros-re-01.md.js',
    'content/core/rabota-energiya/vopros-re-02.md.js',
    'content/core/rabota-energiya/vopros-re-03.md.js',
    'content/core/rabota-energiya/vopros-re-04.md.js',
    'content/core/rabota-energiya/vopros-re-05.md.js',
    'content/core/rabota-energiya/vopros-re-06.md.js',
    'content/core/rabota-energiya/vopros-re-07.md.js',
    'content/core/rabota-energiya/vopros-re-08.md.js',
    'content/core/rabota-energiya/vopros-re-09.md.js',
    'content/core/rabota-energiya/vopros-re-10.md.js',
    'content/core/rabota-energiya/vopros-re-11.md.js',
    'content/core/rabota-energiya/vopros-re-12.md.js',
    'content/core/rabota-energiya/zadacha-udar-o-stenku.md.js',
    'content/core/rabota-energiya/zadacha-pruzhina.md.js',
    'content/core/rabota-energiya/zadacha-lennard-dzhons.md.js',
    'content/core/rabota-energiya/figs/mech-work.svg.js',
    'content/core/rabota-energiya/figs/kontur-raboty.svg.js',
    'content/core/rabota-energiya/figs/rasseyanie.svg.js',
    'content/core/rabota-energiya/figs/vektornaya-diagramma.svg.js',
    'content/core/rabota-energiya/figs/gorka-porog.svg.js',
    'content/core/rabota-energiya/figs/pruzhina-gruz.svg.js',
    'content/core/rabota-energiya/figs/lennard-dzhons.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/zakony-nyutona/vtoroj-zakon.md.js',
    'content/core/zakony-nyutona/princip-otnositelnosti.md.js',
    'content/core/zakony-nyutona/centr-mass.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
