/* ДОБАВЛЕНО К TEX (11_5_statsumm.tex): промежуточный шаг с обозначением
   β = 1/kT — производная ln Z по β приносит множитель (−ε_i) под сумму;
   в конспекте равенство U = −∂lnZ/∂(1/kT) = kT² ∂lnZ/∂T дано без
   вывода (WRITING §2.3). */
window.BLOCK(String.raw`
---
id: statisticheskaya-summa
type: вывод
title: Статистическая сумма
links: [raspredelenie-gibbsa, statisticheskij-integral]
---

Вероятности всех микросостояний в сумме обязаны давать единицу. Нормировочная константа распределения Гиббса называется статистической суммой:

$$#statsumma
Z = \sum\limits_i \exp\left(-\frac{\varepsilon_i}{kT}\right)
$$

где суммирование ведётся по всем возможным энергетическим уровням системы. Окончательное выражение для вероятности — распределение Гиббса:

$$#gibbs
w(\varepsilon_i) = \frac{1}{Z}\exp\left(-\frac{\varepsilon_i}{kT}\right)
$$

Статистическая сумма — фундаментальная величина: её знание позволяет вычислить все термодинамические характеристики системы. Пример — средняя энергия, она же внутренняя энергия системы:

$$#srednyaya-energiya
\langle\varepsilon\rangle = U = \sum\limits_i \varepsilon_i w(\varepsilon_i) = -\left(\frac{\partial \ln Z}{\partial(1/kT)}\right) = kT^2 \frac{\partial \ln Z}{\partial T}
$$

Откуда берётся производная: обозначим $\beta = 1/kT$, тогда $Z = \sum_i e^{-\beta\varepsilon_i}$, и дифференцирование $\ln Z$ по $\beta$ приносит множитель $(-\varepsilon_i)$ под сумму:

$$#vyvod-proizvodnoj
\frac{\partial \ln Z}{\partial \beta} = -\frac{1}{Z}\sum\limits_i \varepsilon_i e^{-\beta\varepsilon_i} = -\langle\varepsilon\rangle
$$

Переход к производной по температуре — по цепному правилу с $\partial\beta/\partial T = -1/kT^2$. Так, зная только энергетический спектр системы и рассчитав статистическую сумму, мы получаем её термодинамические характеристики.

Распределение Гиббса позволяет ввести и статистическое определение температуры:

$$#temperatura
T = \left(\frac{\partial\langle\varepsilon\rangle}{\partial S}\right)_V
$$

Оно эквивалентно термодинамическому, но имеет чисто статистический характер: температура показывает, сколько энергии стоит единица энтропии при постоянном объёме.
`);
