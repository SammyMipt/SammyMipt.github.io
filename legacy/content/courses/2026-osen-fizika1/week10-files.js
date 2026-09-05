/* Манифест файлов недели 10: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения.

   Задача-связка zadacha-entropiya живёт в ядре недели 01 (razmernosti)
   и грузится отсюда же, чтобы ссылка [[zadacha-entropiya]] из блока об
   определении энтропии разворачивалась в заголовок, а не в голый id. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/vtoroe-nachalo/formulirovki-vtorogo-nachala.md.js',
    'content/core/vtoroe-nachalo/ris-mashiny-narusheniya.md.js',
    'content/core/vtoroe-nachalo/tomson-idealnyj-gaz.md.js',
    'content/core/vtoroe-nachalo/ris-tomson-gaz.md.js',
    'content/core/vtoroe-nachalo/ekvivalentnost-formulirovok.md.js',
    'content/core/vtoroe-nachalo/ris-klauzius-iz-tomsona.md.js',
    'content/core/vtoroe-nachalo/ris-tomson-iz-klauziusa.md.js',
    'content/core/vtoroe-nachalo/opredelenie-entropii.md.js',
    'content/core/vtoroe-nachalo/ris-serii-adiabat.md.js',
    'content/core/vtoroe-nachalo/ravenstvo-klauziusa.md.js',
    'content/core/vtoroe-nachalo/teplovaya-mashina.md.js',
    'content/core/vtoroe-nachalo/ris-teplovaya-mashina.md.js',
    'content/core/vtoroe-nachalo/kpd.md.js',
    'content/core/vtoroe-nachalo/cikl-karno.md.js',
    'content/core/vtoroe-nachalo/ris-cikl-karno.md.js',
    'content/core/vtoroe-nachalo/teorema-karno.md.js',
    'content/core/vtoroe-nachalo/ris-dokazatelstvo-karno.md.js',
    'content/core/vtoroe-nachalo/cikl-karno-ts.md.js',
    'content/core/vtoroe-nachalo/ris-cikl-ts.md.js',
    'content/core/vtoroe-nachalo/holodilnaya-mashina.md.js',
    'content/core/vtoroe-nachalo/teplovoj-nasos.md.js',
    'content/core/vtoroe-nachalo/ogranicheniya-cikla-karno.md.js',
    'content/core/vtoroe-nachalo/neobratimost-i-entropiya.md.js',
    'content/core/vtoroe-nachalo/primer-teploperedacha.md.js',
    'content/core/vtoroe-nachalo/primer-rasshirenie-v-pustotu.md.js',
    'content/core/vtoroe-nachalo/primer-smeshivanie-gazov.md.js',
    'content/core/vtoroe-nachalo/obobshchenie-nachal.md.js',
    'content/core/vtoroe-nachalo/vopros-en-01.md.js',
    'content/core/vtoroe-nachalo/vopros-en-02.md.js',
    'content/core/vtoroe-nachalo/vopros-en-03.md.js',
    'content/core/vtoroe-nachalo/vopros-en-04.md.js',
    'content/core/vtoroe-nachalo/vopros-en-05.md.js',
    'content/core/vtoroe-nachalo/vopros-en-06.md.js',
    'content/core/vtoroe-nachalo/vopros-en-07.md.js',
    'content/core/vtoroe-nachalo/vopros-en-08.md.js',
    'content/core/vtoroe-nachalo/vopros-en-09.md.js',
    'content/core/vtoroe-nachalo/vopros-en-10.md.js',
    'content/core/vtoroe-nachalo/zadacha-en-teplovoj-nasos.md.js',
    'content/core/vtoroe-nachalo/zadacha-en-rasshirenie-vodoroda.md.js',
    'content/core/vtoroe-nachalo/zadacha-en-cikl-ts.md.js',
    'content/core/razmernosti/zadacha-entropiya.md.js',
    'content/core/vtoroe-nachalo/figs/mashiny-narusheniya.svg.js',
    'content/core/vtoroe-nachalo/figs/tomson-gaz.svg.js',
    'content/core/vtoroe-nachalo/figs/klauzius-iz-tomsona.svg.js',
    'content/core/vtoroe-nachalo/figs/tomson-iz-klauziusa.svg.js',
    'content/core/vtoroe-nachalo/figs/serii-adiabat.svg.js',
    'content/core/vtoroe-nachalo/figs/teplovaya-mashina.svg.js',
    'content/core/vtoroe-nachalo/figs/cikl-karno.svg.js',
    'content/core/vtoroe-nachalo/figs/dokazatelstvo-karno.svg.js',
    'content/core/vtoroe-nachalo/figs/cikl-ts.svg.js',
    'content/core/vtoroe-nachalo/figs/zadacha-cikl-ts.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/termodinamika-vvedenie/pervoe-nachalo.md.js',
    'content/core/termodinamika-vvedenie/izotermicheskij-process.md.js',
    'content/core/termodinamika-vvedenie/politropnyj-process.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
