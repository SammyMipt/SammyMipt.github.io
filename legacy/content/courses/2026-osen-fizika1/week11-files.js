/* Манифест файлов недели 11: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/fazovye-perehody/polnyj-differencial.md.js',
    'content/core/fazovye-perehody/estestvennye-peremennye.md.js',
    'content/core/fazovye-perehody/entalpiya.md.js',
    'content/core/fazovye-perehody/maksimalnaya-rabota.md.js',
    'content/core/fazovye-perehody/minimum-gibbsa.md.js',
    'content/core/fazovye-perehody/ekstensivnye-intensivnye.md.js',
    'content/core/fazovye-perehody/himicheskij-potencial.md.js',
    'content/core/fazovye-perehody/fazovoe-ravnovesie.md.js',
    'content/core/fazovye-perehody/uravnenie-klapejrona.md.js',
    'content/core/fazovye-perehody/ravnovesie-zhidkost-par.md.js',
    'content/core/fazovye-perehody/ravnovesie-zhidkost-tverdoe.md.js',
    'content/core/fazovye-perehody/fazovaya-diagramma.md.js',
    'content/core/fazovye-perehody/ris-fazovaya-diagramma.md.js',
    'content/core/fazovye-perehody/osobennosti-fazovyh-perehodov.md.js',
    'content/core/fazovye-perehody/mezhmolekulyarnoe-vzaimodejstvie.md.js',
    'content/core/fazovye-perehody/ris-potencial-vzaimodejstviya.md.js',
    'content/core/fazovye-perehody/uravnenie-van-der-vaalsa.md.js',
    'content/core/fazovye-perehody/izotermy-van-der-vaalsa.md.js',
    'content/core/fazovye-perehody/ris-izotermy-vdv.md.js',
    'content/core/fazovye-perehody/kriticheskie-parametry.md.js',
    'content/core/fazovye-perehody/sverhkriticheskij-flyuid.md.js',
    'content/core/fazovye-perehody/vopros-fp-01.md.js',
    'content/core/fazovye-perehody/vopros-fp-02.md.js',
    'content/core/fazovye-perehody/vopros-fp-03.md.js',
    'content/core/fazovye-perehody/vopros-fp-04.md.js',
    'content/core/fazovye-perehody/vopros-fp-05.md.js',
    'content/core/fazovye-perehody/vopros-fp-06.md.js',
    'content/core/fazovye-perehody/vopros-fp-07.md.js',
    'content/core/fazovye-perehody/vopros-fp-08.md.js',
    'content/core/fazovye-perehody/vopros-fp-09.md.js',
    'content/core/fazovye-perehody/vopros-fp-10.md.js',
    'content/core/fazovye-perehody/vopros-fp-11.md.js',
    'content/core/fazovye-perehody/vopros-fp-12.md.js',
    'content/core/fazovye-perehody/zadacha-fp-vnutrennyaya-energiya.md.js',
    'content/core/fazovye-perehody/zadacha-fp-everest.md.js',
    'content/core/fazovye-perehody/zadacha-fp-privedennoe-davlenie.md.js',
    'content/core/fazovye-perehody/figs/potencial-vzaimodejstviya.svg.js',
    'content/core/fazovye-perehody/figs/fazovaya-diagramma.svg.js',
    'content/core/fazovye-perehody/figs/izotermy-vdv.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/vtoroe-nachalo/obobshchenie-nachal.md.js',
    'content/core/termodinamika-vvedenie/pervoe-nachalo.md.js',
    'content/core/termodinamika-vvedenie/uravnenie-sostoyaniya.md.js',
    'content/core/rabota-energiya/zadacha-lennard-dzhons.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
