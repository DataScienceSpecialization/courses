---
title       : T Confidence Intervals
subtitle    : Statistical Inference
author      : Brian Caffo, Jeff Leek, Roger Peng
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
url:
  lib: ../../librariesNew
  assets: ../../assets
widgets     : [mathjax]            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
---
## T Confidence intervals

- In the previous, we discussed creating a confidence interval using the CLT
  - They took the form $Est \pm Z SE_{EST}$
- In this lecture, we discuss some methods for small samples, notably Gosset's $t$ distribution and $t$ confidence intervals
- These are some of the handiest of intervals
- If you want a rule between whether to use a $t$ interval
or normal interval, just always use the $t$ interval
- We'll cover the one and two group versions

---

## Gosset's $t$ distribution

- Invented by William Gosset (under the pseudonym "Student") in 1908
- Has thicker tails than the normal
- Is indexed by a degrees of freedom; gets more like a standard normal as df gets larger
- It assumes that the underlying data are iid 
Gaussian with the result that
$$
\frac{\frac{\bar X - \mu}{\sigma /\sqrt{n}}}{S/\sigma}  
= \frac{\bar X - \mu}{S/\sqrt{n}}
$$
follows Gosset's $t$ distribution with $n-1$ degrees of freedom
- (If we replaced $s$ by $\sigma$ the statistic would be exactly standard normal)

---

## Confidence intervals for the mean

- Notice that the $t$ statistic is a pivot, therefore we use it to create a confidence interval for $\mu$
- Let $t_{df,\alpha}$ be the $\alpha^{th}$ quantile of the t distribution with $df$ degrees of freedom
$$
  \begin{eqnarray*}
&   & 1 - \alpha \\
& = & P\left(-t_{n-1,1-\alpha/2} \leq \frac{\bar X - \mu}{S/\sqrt{n}} \leq t_{n-1,1-\alpha/2}\right) \\ \\
& = & P\left(\bar X - t_{n-1,1-\alpha/2} S / \sqrt{n} \leq \mu  
      \leq \bar X + t_{n-1,1-\alpha/2}S /\sqrt{n}\right)
  \end{eqnarray*}
$$
- Interval is $\bar X \pm t_{n-1,1-\alpha/2} S/\sqrt{n}$

---

## Note's about the $t$ interval

- The $t$ interval technically assumes that the data are iid normal, though it is robust to this assumption
- It works well whenever the distribution of the data is roughly symmetric and mound shaped
- Paired observations are often analyzed using the $t$ interval by taking differences
- For large degrees of freedom, $t$ quantiles become the same as standard normal quantiles; therefore this interval converges to the same interval as the CLT yielded
- For skewed distributions, the spirit of the $t$ interval assumptions are violated
- Also, for skewed distributions, it doesn't make a lot of sense to center the interval at the mean
- In this case, consider taking logs or using a different summary like the median
- For highly discrete data, like binary, other intervals are available

---

## Sleep data

In R typing `data(sleep)` brings up the sleep data originally
analyzed in Gosset's Biometrika paper, which shows the increase in
hours for 10 patients on two soporific drugs. R treats the data as two
groups rather than paired.

---
## The data

```r
data(sleep)
head(sleep)
```

```
##   extra group ID
## 1   0.7     1  1
## 2  -1.6     1  2
## 3  -0.2     1  3
## 4  -1.2     1  4
## 5  -0.1     1  5
## 6   3.4     1  6
```

---
## Results

```r
g1 <- sleep$extra[1 : 10]; g2 <- sleep$extra[11 : 20]
difference <- g2 - g1
mn <- mean(difference); s <- sd(difference); n <- 10
mn + c(-1, 1) * qt(.975, n-1) * s / sqrt(n)
```

```
## [1] 0.7001 2.4599
```

```r
t.test(difference)$conf.int
```

```
## [1] 0.7001 2.4599
## attr(,"conf.level")
## [1] 0.95
```



