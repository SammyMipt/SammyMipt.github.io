/* Манифест файлов недели 10: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения.

   Сведён 30.10 по правилу восьмой и девятой: свои блоки в порядке спеки
   week10.js (разделы, вопросы, задачи), рисунки svg по алфавиту, цели
   межнедельных [[...]]-ссылок в порядке первого появления в телах блоков.

   Рисунок расширения в пустоту живёт в ядре девятой недели
   (termodinamika-vvedenie), а стоит в разделе трёх необратимых процессов
   десятой и в условии задачи о водороде, поэтому грузится отсюда вместе
   со своей разметкой.

   Задача о цикле zadacha-td-cikl живёт в ядре девятой недели
   (termodinamika-vvedenie), а стоит в задачах десятой (решения автора
   по рамке девятой, 23.10), поэтому грузится отсюда вместе с рисунком.

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
    'content/core/vtoroe-nachalo/demka-pv-diagramma-10.md.js',
    'content/core/vtoroe-nachalo/ekvivalentnost-formulirovok.md.js',
    'content/core/vtoroe-nachalo/ris-klauzius-iz-tomsona.md.js',
    'content/core/vtoroe-nachalo/ris-tomson-iz-klauziusa.md.js',
    'content/core/vtoroe-nachalo/teplovaya-mashina.md.js',
    'content/core/vtoroe-nachalo/ris-teplovaya-mashina.md.js',
    'content/core/vtoroe-nachalo/ris-ptichka-pod-kolpakom.md.js',
    'content/core/vtoroe-nachalo/demka-pyushchaya-ptica.md.js',
    'content/core/vtoroe-nachalo/kpd.md.js',
    'content/core/vtoroe-nachalo/neobratimost-i-entropiya.md.js',
    'content/core/vtoroe-nachalo/ris-teploobmen-cherez-stenku.md.js',
    'content/core/vtoroe-nachalo/ris-porshen-s-treniem.md.js',
    'content/core/vtoroe-nachalo/cikl-karno.md.js',
    'content/core/vtoroe-nachalo/ris-cikl-karno.md.js',
    'content/core/vtoroe-nachalo/teorema-karno.md.js',
    'content/core/vtoroe-nachalo/ris-dokazatelstvo-karno.md.js',
    'content/core/vtoroe-nachalo/holodilnaya-mashina.md.js',
    'content/core/vtoroe-nachalo/ris-obratnaya-mashina.md.js',
    'content/core/vtoroe-nachalo/teplovoj-nasos.md.js',
    'content/core/vtoroe-nachalo/ogranicheniya-cikla-karno.md.js',
    'content/core/vtoroe-nachalo/ris-mashina-s-perepadami.md.js',
    'content/core/vtoroe-nachalo/termodinamicheskaya-temperatura.md.js',
    'content/core/vtoroe-nachalo/ris-shkala-karno.md.js',
    'content/core/vtoroe-nachalo/ris-tri-mashiny.md.js',
    'content/core/vtoroe-nachalo/ravenstvo-klauziusa.md.js',
    'content/core/vtoroe-nachalo/ris-uzkie-cikly-karno.md.js',
    'content/core/vtoroe-nachalo/opredelenie-entropii.md.js',
    'content/core/vtoroe-nachalo/ris-serii-adiabat.md.js',
    'content/core/vtoroe-nachalo/ris-vspomogatelnyj-rezervuar.md.js',
    'content/core/vtoroe-nachalo/cikl-karno-ts.md.js',
    'content/core/vtoroe-nachalo/ris-cikl-ts.md.js',
    'content/core/vtoroe-nachalo/primer-teploperedacha.md.js',
    'content/core/vtoroe-nachalo/demka-dva-gaza-10.md.js',
    'content/core/vtoroe-nachalo/primer-rasshirenie-v-pustotu.md.js',
    'content/core/termodinamika-vvedenie/ris-rasshirenie-v-pustotu.md.js',
    'content/core/vtoroe-nachalo/demka-porshen-i-molekuly-10.md.js',
    'content/core/vtoroe-nachalo/primer-smeshivanie-gazov.md.js',
    'content/core/vtoroe-nachalo/ris-polupronicaemye-porshni.md.js',
    'content/core/vtoroe-nachalo/obobshchenie-nachal.md.js',
    'content/core/vtoroe-nachalo/ris-cikl-s-vozvratom.md.js',
    'content/core/vtoroe-nachalo/demka-razvorot-skorostej.md.js',
    'content/core/vtoroe-nachalo/vechnyj-dvigatel-demona.md.js',
    'content/core/vtoroe-nachalo/ris-dvigatel-scilarda.md.js',
    'content/core/vtoroe-nachalo/demka-dvigatel-scilarda.md.js',
    'content/core/vtoroe-nachalo/itog-odin-zapret.md.js',
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
    'content/core/termodinamika-vvedenie/zadacha-td-cikl.md.js',
    'content/core/termodinamika-vvedenie/figs/rasshirenie-v-pustotu.svg.js',
    'content/core/termodinamika-vvedenie/figs/zadacha-cikl.svg.js',
    'content/core/vtoroe-nachalo/figs/cikl-karno.svg.js',
    'content/core/vtoroe-nachalo/figs/cikl-s-vozvratom.svg.js',
    'content/core/vtoroe-nachalo/figs/cikl-ts.svg.js',
    'content/core/vtoroe-nachalo/figs/dokazatelstvo-karno.svg.js',
    'content/core/vtoroe-nachalo/figs/dvigatel-scilarda.svg.js',
    'content/core/vtoroe-nachalo/figs/klauzius-iz-tomsona.svg.js',
    'content/core/vtoroe-nachalo/figs/mashina-s-perepadami.svg.js',
    'content/core/vtoroe-nachalo/figs/mashiny-narusheniya.svg.js',
    'content/core/vtoroe-nachalo/figs/obratnaya-mashina.svg.js',
    'content/core/vtoroe-nachalo/figs/polupronicaemye-porshni.svg.js',
    'content/core/vtoroe-nachalo/figs/porshen-s-treniem.svg.js',
    'content/core/vtoroe-nachalo/figs/ptichka-pod-kolpakom.svg.js',
    'content/core/vtoroe-nachalo/figs/serii-adiabat.svg.js',
    'content/core/vtoroe-nachalo/figs/shkala-karno.svg.js',
    'content/core/vtoroe-nachalo/figs/teploobmen-cherez-stenku.svg.js',
    'content/core/vtoroe-nachalo/figs/teplovaya-mashina.svg.js',
    'content/core/vtoroe-nachalo/figs/tomson-gaz.svg.js',
    'content/core/vtoroe-nachalo/figs/tomson-iz-klauziusa.svg.js',
    'content/core/vtoroe-nachalo/figs/tri-mashiny.svg.js',
    'content/core/vtoroe-nachalo/figs/uzkie-cikly-karno.svg.js',
    'content/core/vtoroe-nachalo/figs/vspomogatelnyj-rezervuar.svg.js',
    'content/core/vtoroe-nachalo/figs/zadacha-cikl-ts.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/termodinamika-vvedenie/itog-dva-opisaniya-gaza.md.js',
    'content/core/termodinamika-vvedenie/minus-pervoe-nachalo.md.js',
    'content/core/rabota-energiya/spusk-i-trenie.md.js',
    'content/core/termodinamika-vvedenie/pervoe-nachalo.md.js',
    'content/core/termodinamika-vvedenie/rabota-zavisit-ot-puti.md.js',
    'content/core/termodinamika-vvedenie/izotermicheskij-process.md.js',
    'content/core/termodinamika-vvedenie/demka-pv-diagramma.md.js',
    'content/core/termodinamika-vvedenie/gazovyj-termometr.md.js',
    'content/core/termodinamika-vvedenie/temperatura-i-energiya-molekuly.md.js',
    'content/core/rabota-energiya/konservativnye-sily.md.js',
    'content/core/termodinamika-vvedenie/zvuk-v-gaze.md.js',
    'content/core/raspredeleniya/veroyatnost-makrosostoyaniya.md.js',
    'content/core/deformacii-gidrodinamika/trehosnye-napryazheniya.md.js',
    'content/core/termodinamika-vvedenie/vechnyj-dvigatel-agenta.md.js',
    'content/core/termodinamika-vvedenie/demka-gaz-iz-molekul.md.js',
    'content/core/termodinamika-vvedenie/vnutrennyaya-energiya-gaza.md.js',
    'content/core/termodinamika-vvedenie/adiabaticheskij-process.md.js',
    'content/core/termodinamika-vvedenie/izohornyj-i-izobarnyj.md.js',
    'content/core/termodinamika-vvedenie/ravnovesnye-processy.md.js',
    'content/core/rabota-energiya/rabota-vnutrennih-sil.md.js',
    'content/core/rabota-energiya/demka-para-sil.md.js',
    'content/core/kinematika/prostranstvo-i-vremya.md.js',
    'content/core/fazovye-perehody/sverhkriticheskij-flyuid.md.js',
    'content/core/razmernosti/si-cherez-konstanty.md.js',
    'content/core/termodinamika-vvedenie/rabota-i-teplo.md.js',
    'content/core/raspredeleniya/statisticheskaya-summa.md.js',
    'content/core/kolebaniya/fazovyj-portret.md.js',
    'content/core/fazovye-perehody/polnyj-differencial.md.js',
    'content/core/razmernosti/zadacha-entropiya.md.js',
    'content/core/rabota-energiya/potencialnaya-energiya.md.js',
    'content/core/raspredeleniya/formula-bolcmana.md.js',
    'content/core/termodinamika-vvedenie/demka-dva-gaza.md.js',
    'content/core/termodinamika-vvedenie/ris-meshalka-dzhoulya.md.js',
    'content/core/termodinamika-vvedenie/demka-porshen-i-molekuly.md.js',
    'content/core/fazovye-perehody/estestvennye-peremennye.md.js',
    'content/core/fazovye-perehody/minimum-gibbsa.md.js',
    'content/core/yavleniya-perenosa/klassifikaciya-perenosa.md.js',
    'content/core/zakony-nyutona/demka-tri-tela.md.js',
    'content/core/termodinamika-vvedenie/davlenie-idealnogo-gaza.md.js',
    'content/core/rabota-energiya/zakon-sohraneniya-energii.md.js',
    'content/core/fazovye-perehody/maksimalnaya-rabota.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
