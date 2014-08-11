---
title       : Random Formulae
subtitle    : Mathematical Biostatistics Boot Camp
author      : Brian Caffo, PhD
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
url:
  lib: ../../libraries
  assets: ../../assets
widgets     : [mathjax]            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
---

## About this document

This document contains random formulae images I used in the notes.

---

$$A = \{1, 2\}$$
$$B = \{1, 2, 3\}$$

---

$$
\begin{eqnarray}
E[X^2] & = & \int_0^1 x^2 dx \\
       & = & \left. \frac{x^3}{3} \right|_0^1 = \frac{1}{3}
\end{eqnarray}
$$

---

$$\frac{|x - \mu|}{k\sigma} > 1$$ 
Over the set $\{x : |x - \mu | > k\sigma\}$
$$\frac{(x - \mu)^2}{k^2\sigma^2} > 1$$
$$\frac{1}{k^2\sigma^2} \int_{-\infty}^\infty (x - \mu)^2 f(x) dx$$
$$\frac{1}{k^2\sigma^2} E[(X - \mu)^2] = \frac{1}{k^2\sigma^2} Var(X)$$

---

$$P(A_1 \cup A_2 \cup A_3) = P\{A_1 \cup (A_2 \cup A_3)\} = P(A_1) + P(A_2 \cup A_3)$$ 
$$P(A_1) + P(A_2 \cup A_3) = P(A_1) + P(A_2) + P(A_3)$$

---

$$P(\cup_{i=1}^n E_i) = P\left\{E_n \cup \left(\cup_{i=1}^{n-1} E_i \right) \right\}$$

---

$$
(x_1, x_2, x_3, x_4) = (1, 0, 1, 1)
$$
$$
p^{(1 + 0 + 1 + 1)}(1 - p)^{\{4 - (1 + 0 + 1 + 1)\}}  = p^3 (1 - p)^1
$$
$$
\mathrm{SD}(X) \mathrm{SD}(Y)
$$
$$
Var(X)
$$
$$
Var(X) = E[X^2] - E[X]^2 \rightarrow E[X^2] = Var(X) + E[X]^2 = \sigma^2 + \mu^2 
$$
$$
Var(\bar X) = E[\bar X^2] - E[\bar X]^2 \rightarrow E[\bar X^2] = Var(\bar X) + E[\bar X]^2 = \sigma^2/n + \mu^2
$$
$$
f(x | y = 5) = \frac{f_{xy}(x, 5)}{f_y(5)}
$$

---

$$
P(A\cap B)
$$
$$
P(A)
$$
$$
P(A\cap B^c)
$$

---

$$
\frac{10!}{1!9!} = \frac{10\times 9 \times 8 \times \ldots \times 1}{9 \times 8 \times \ldots \times 1} = 10
$$

$$
\frac{10!}{2!8!} = \frac{10\times 9 \times 8 \times \ldots \times 1}{2 \times 1 \times 8 \times 7 \times \ldots \times 1} = 45
$$

In general

$\left(\begin{array}{c}n \\ 2\end{array}\right)= \frac{n \times (n - 1)}{2}$

$$
\mu 
$$

$$
\sigma^2
$$

$$
E[Z] = E\left[\frac{X - \mu}{\sigma} \right] = \frac{E[X] - \mu}{\sigma}  = 0
$$

---

$$
Var(Z) = Var\left(\frac{X - \mu}{\sigma}\right) = \frac{1}{\sigma^2} Var(X - \mu) = \frac{1}{\sigma^2} Var(X) = 1
$$

---

$$
E[X_i^2] = E[Y_i] = \sigma^2 + \mu^2
$$
$$
\sum_{i=1}^n (X_i - \bar X)^2 = \sum_{i=1}^2 X_i^2 - n \bar X ^ 2 
$$

---

$$
E[\chi^2_{df}] = df
$$
$$
E[S^2] = \sigma^2
\rightarrow 
E\left[\frac{(n-1)S^2}{\sigma^2}\right] = (n-1)
$$
$$
Var(\chi^2_{df}) = 2df
$$
