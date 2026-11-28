/* НОВАЯ ДЕМКА, вычитка автора 24.11, замечание 3 («пьяного матроса»;
   briefs/lekciya13_vychitka_avtora_24-11.md). Режим матроса демки
   platform/demos/doska-galtona.html за ?nedelya=13&rezhim=matros (бриф
   briefs/vychitka13_sborka.md, роль М, отчёт briefs/vychitka13_M_REPORT.md);
   без rezhim=matros за ?nedelya=13 открывается облако блужданий
   (demka-oblako-bluzhdanij), без nedelya доска двенадцатой недели, обе
   побайтно прежние. Место в главе: пятый раздел, за
   ris-sluchajnoe-bluzhdanie, перед strogij-vyvod-diffuzii (сведение 24.11,
   генеральная сессия: текст абзаца перенесён из обёртки облака, где его
   поставила роль М). Числа (briefs/lekciya13_skripty/vychitka/m_matros.py,
   hcheck m_check.js): ⟨R²⟩ = Nl² у шага l в случайную сторону на плоскости
   (200 000 матросов, 1,000 в пределах шума при 10, 100, 400 шагах); 100
   шагов по 1 м дают путь 100 м и √N·l = 10 м, как в sluchajnye-bluzhdaniya;
   один матрос в 80 % прогулок уходит на 3,3–15,1 м; √⟨R²⟩ толпы из 11
   отходит от √N·l в среднем на 15 %, из 101 на 5 %. */
window.BLOCK(String.raw`
---
id: demka-matros
type: демка
title: Пьяный матрос на площади
links: [sluchajnye-bluzhdaniya, ris-sluchajnoe-bluzhdanie, demka-oblako-bluzhdanij]
src: demos/doska-galtona.html?nedelya=13&rezhim=matros
---

Пьяный матрос выходит из бара ([[sluchajnye-bluzhdaniya]]). Улица здесь стала площадью: каждый шаг длиной $l = 1$ м он делает в случайную сторону, а средний квадрат смещения тот же, $\langle R^2\rangle = Nl^2$, потому что перекрёстные произведения шагов в среднем нули. Матрос оставляет след и останавливается на сотом шаге. Круг $\sqrt N\,l$ к этому времени вырос до $10$ м, а сам матрос в восьми случаях из десяти стоит где-то между $3$ и $15$ м от бара. Кнопки «+1» и «+10» добавляют матросов на том же шаге. Справа $R^2$ первого так и скачет, а $\langle R^2\rangle$ по всем ложится на прямую $Nl^2$ тем ровнее, чем матросов больше. Кнопка «облако» отпускает толпу ([[demka-oblako-bluzhdanij]]).
`);
