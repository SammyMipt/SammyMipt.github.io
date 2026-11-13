/* НОВЫЙ 06.11 (бриф briefs/risunki_konspekt11.md, рисовальщик 1; просьба
   автора 06.11 показать на схеме смысл свободных энергий). Исходник
   sources/physics1_summary/inputs/10/pics/kvadrat_potencialov.tex.
   Формулы из главы: #differencial-u, #df (estestvennye-peremennye),
   #differencial и #teplo (entalpiya), #differencial-g-zakrytoj
   (himicheskij-potencial), #gelmgolc и #gibbs (maksimalnaya-rabota);
   Q = ΔU при закреплённом объёме есть #pervoe-nachalo при A = 0 и
   ΔV = 0. Дифференциалы проверены sympy
   (briefs/lekciya11_skripty/risunki/r1_skhemy.py, §1). Слова «несут одно
   знание о теле в разных переменных» из последнего абзаца
   estestvennye-peremennye. 
   Правка автора 09.11 (чтение главы): «тело» заменено на «система»
   (на «вещество», где речь о веществе). */
window.BLOCK(String.raw`
---
id: ris-kvadrat-potencialov
type: рисунок
title: Четыре потенциала
links: [estestvennye-peremennye, entalpiya, maksimalnaya-rabota, himicheskij-potencial]
fig: kvadrat-potencialov
---

Внутренняя энергия, энтальпия, свободная энергия и энергия Гиббса несут одно знание о системе, записанное в разных переменных. Шаг вправо прибавляет $PV$ и меняет естественную переменную $V$ на $P$, шаг вниз вычитает $TS$ и меняет $S$ на $T$. Под каждой функцией стоит её дифференциал и то, что она считает. Энергия и энтальпия дают теплоту, полученную системой при закреплённом объёме и при постоянном давлении ([[entalpiya]]). Свободная энергия и энергия Гиббса ограничивают полезную работу системы в термостате: свободная энергия в жёстком сосуде, энергия Гиббса под поршнем ([[maksimalnaya-rabota]]).
`);
