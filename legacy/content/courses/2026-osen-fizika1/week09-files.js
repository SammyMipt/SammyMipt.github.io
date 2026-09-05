/* Манифест файлов недели 09: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/termodinamika-vvedenie/zachem-termodinamika.md.js',
    'content/core/termodinamika-vvedenie/masshtaby-i-konstanty.md.js',
    'content/core/termodinamika-vvedenie/termodinamicheskaya-sistema.md.js',
    'content/core/termodinamika-vvedenie/minus-pervoe-nachalo.md.js',
    'content/core/termodinamika-vvedenie/uravnenie-sostoyaniya.md.js',
    'content/core/termodinamika-vvedenie/nulevoe-nachalo.md.js',
    'content/core/termodinamika-vvedenie/model-idealnogo-gaza.md.js',
    'content/core/termodinamika-vvedenie/davlenie-idealnogo-gaza.md.js',
    'content/core/termodinamika-vvedenie/ris-udar-o-stenku.md.js',
    'content/core/termodinamika-vvedenie/vnutrennyaya-energiya-gaza.md.js',
    'content/core/termodinamika-vvedenie/pervoe-nachalo.md.js',
    'content/core/termodinamika-vvedenie/rabota-i-teplo.md.js',
    'content/core/termodinamika-vvedenie/ravnovesnye-processy.md.js',
    'content/core/termodinamika-vvedenie/izotermicheskij-process.md.js',
    'content/core/termodinamika-vvedenie/ris-izoterma.md.js',
    'content/core/termodinamika-vvedenie/izohornyj-i-izobarnyj.md.js',
    'content/core/termodinamika-vvedenie/politropnyj-process.md.js',
    'content/core/termodinamika-vvedenie/ris-processy-pv.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-01.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-02.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-03.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-04.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-05.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-06.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-07.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-08.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-09.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-10.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-11.md.js',
    'content/core/termodinamika-vvedenie/vopros-td-12.md.js',
    'content/core/termodinamika-vvedenie/zadacha-td-komnata.md.js',
    'content/core/termodinamika-vvedenie/zadacha-td-izoterma.md.js',
    'content/core/termodinamika-vvedenie/zadacha-td-cikl.md.js',
    'content/core/termodinamika-vvedenie/zadacha-td-otkachka.md.js',
    'content/core/termodinamika-vvedenie/figs/udar-o-stenku.svg.js',
    'content/core/termodinamika-vvedenie/figs/izoterma.svg.js',
    'content/core/termodinamika-vvedenie/figs/processy-pv.svg.js',
    'content/core/termodinamika-vvedenie/figs/zadacha-cikl.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/rabota-energiya/zakon-sohraneniya-energii.md.js',
    'content/core/rabota-energiya/mehanicheskaya-rabota.md.js',
    'content/core/rabota-energiya/tipy-stolknovenij.md.js',
    'content/core/rabota-energiya/kineticheskaya-energiya.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
