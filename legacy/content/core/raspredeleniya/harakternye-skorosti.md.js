/* ДОБАВЛЕНО К TEX: блок собран по методичке недели (methodology.tex
   «Средние скорости», solutions.tex задача 2) и topics.tex, где три
   характерные скорости заявлены темой лекции; конспект 11_7 явно
   приводит только наиболее вероятную. Интеграл для средней скорости
   выписан шагами (WRITING §2.3), числа — из решений методички. */
window.BLOCK(String.raw`
---
id: harakternye-skorosti
type: вывод
title: Три характерные скорости
links: [raspredelenie-po-modulyu, ris-krivaya-maksvella, zadacha-rb-skorosti-azota]
---

Кривая распределения по модулю порождает три характерные скорости, и их постоянно путают. Наиболее вероятная скорость — положение максимума $F(v)$, найденное в разделе о распределении по модулю: $v_{\text{вер}} = \sqrt{2kT/m}$.

Средняя скорость — интеграл по распределению:

$$#srednyaya-integralom
\langle v \rangle = \int\limits_0^\infty v F(v)\,dv = 4\pi \left(\frac{m}{2\pi kT}\right)^{3/2} \int\limits_0^\infty v^3 e^{-\alpha v^2}\,dv = \sqrt{\frac{8kT}{\pi m}}
$$

где $\alpha = m/2kT$. Интеграл берётся заменой $u = v^2$: он сводится к табличному $\int_0^\infty u\,e^{-\alpha u}du = 1/\alpha^2$, откуда $\int_0^\infty v^3 e^{-\alpha v^2}dv = 1/(2\alpha^2)$.

Среднеквадратичной скорости интеграл не нужен: средняя кинетическая энергия складывается из $kT/2$ на каждую из трёх осей, поэтому

$$#srednekvadratichnaya
\left\langle\frac{mv^2}{2}\right\rangle = \frac{3kT}{2} \implies \sqrt{\langle v^2 \rangle} = \sqrt{\frac{3kT}{m}}
$$

В расчётных задачах удобнее молярная форма: $kT/m = RT/M$, потому что $R = kN_A$ и молярная масса $M = mN_A$. Три скорости принимают вид:

$$#tri-skorosti
v_{\text{вер}} = \sqrt{\frac{2RT}{M}}, \quad \langle v \rangle = \sqrt{\frac{8RT}{\pi M}}, \quad \sqrt{\langle v^2 \rangle} = \sqrt{\frac{3RT}{M}}
$$

Иерархия зашита в коэффициенты $\sqrt{2} < \sqrt{8/\pi} < \sqrt{3}$ и от газа и температуры не зависит:

$$#ierarhiya
v_{\text{вер}} < \langle v \rangle < \sqrt{\langle v^2 \rangle}
$$

отношения равны $1 : 1{,}13 : 1{,}22$. Число: для азота при $T = 300$ К три скорости составляют 422, 476 и 517 м/с — все три выше скорости звука 353 м/с; подробный расчёт в задаче недели ([[zadacha-rb-skorosti-azota]]).
`);
