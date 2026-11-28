/* НОВЫЙ РИСУНОК 13.11 (рисовальщик 1, бриф briefs/risunki_konspekt12.md;
   рамка briefs/lekciya12_ramka.md §5, предметный мост). Идёт к
   temperatura-vyborki, первый абзац, фраза о низкой и высокой температуре.
   Исходник sources/physics1_summary/inputs/11/pics/softmax_temperatura.tex.
   Температуры 0,5; 1; 2 есть три соседние строки таблицы softmax документа
   мостов (briefs/lekciya12_mosty_ml.md, §1); предел T → ∞ показан штрихом
   1/4. Числа (python, briefs/lekciya12_skripty/risunki/r1_softmax.py;
   сходятся с faza2/mosty_ml_schet.py, §1, и avtorC12.py, §4): 0,842;
   0,114; 0,042; 0,002 / 0,609; 0,224; 0,136; 0,030 / 0,434; 0,263; 0,205;
   0,097. Сводчик главы 13.11: доли наибольшего ответа записаны так же,
   как в temperatura-vyborki («0,84», «0,43»); разность уровней ΔE, как в
   zadacha-rb-dva-urovnya и temperatura-vyborki. */
window.BLOCK(String.raw`
---
id: ris-softmax-temperatura
type: рисунок
title: Распределение Гиббса на выходе сети при трёх температурах
links: [temperatura-vyborki, statisticheskaya-summa, raspredelenie-gibbsa, zadacha-rb-dva-urovnya]
fig: softmax-temperatura
---

Четыре ответа с логитами $2$, $1$, $0{,}5$ и $-1$ и их вероятности $q_i = e^{z_i/T}/\sum_j e^{z_j/T}$ при трёх температурах выборки. Ответ с наибольшим логитом получает $0{,}84$ при $T = 0{,}5$ и $0{,}43$ при $T = 2$, и с ростом температуры столбики тянутся к штриху $\tfrac14$, где все ответы равновероятны. Отношение двух столбиков равно $e^{(z_i - z_j)/T}$, как отношение населённостей двух уровней равно $e^{-\Delta E/kT}$.
`);
