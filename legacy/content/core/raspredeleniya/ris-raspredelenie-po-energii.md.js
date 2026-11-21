/* НОВЫЙ РИСУНОК 13.11 (рисовальщик 3, бриф briefs/risunki_konspekt12.md;
   рамка briefs/lekciya12_ramka.md §5, сверка 12.22). Идёт к
   raspredelenie-po-modulyu, формула #po-energii и фраза о множителе
   √ε. Исходник
   sources/physics1_summary/inputs/11/pics/raspredelenie_po_energii.tex.
   Энергия в единицах kT, кривая одна для любого газа и температуры.
   Числа (python, briefs/lekciya12_skripty/risunki/r3_risunki12.py, §3):
   площадь 1,000000, максимум при ε/kT = 0,5000, среднее 1,5000; у
   экспоненты площадь 1 и среднее kT; kT/2 при 300 К 12,93 мэВ (глава
   «13»). */
window.BLOCK(String.raw`
---
id: ris-raspredelenie-po-energii
type: рисунок
title: Распределение по энергии
links: [raspredelenie-po-modulyu, raspredelenie-gibbsa]
fig: raspredelenie-po-energii
---

Распределение молекул газа по кинетической энергии, $F(\varepsilon)$. Энергия отложена в единицах $kT$, поэтому кривая одна для любого газа и любой температуры. Чаще всего у молекулы энергия $kT/2$, в среднем $\tfrac32 kT$. Штрихом экспонента $e^{-\varepsilon/kT}/kT$ с той же площадью: такой была бы кривая, если бы число состояний не росло с энергией. Множитель $\sqrt{\varepsilon}$ забирает у неё молекулы с малой энергией и отдаёт их большим энергиям.
`);
