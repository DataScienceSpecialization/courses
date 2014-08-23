---
title       : P-values
subtitle    : Statistical inference
author      : Brian Caffo, Jeffrey Leek, Roger Peng 
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow   # 
url:
  lib: ../../librariesNew
  assets: ../../assets
widgets     : [mathjax]            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
---
  
## P-values

* Most common measure of statistical significance
* Their ubiquity, along with concern over their interpretation and use
  makes them controversial among statisticians
  * [http://warnercnr.colostate.edu/~anderson/thompson1.html](http://warnercnr.colostate.edu/~anderson/thompson1.html)
  * Also see *Statistical Evidence: A Likelihood Paradigm* by Richard Royall 
  * *Toward Evidence-Based Medical Statistics. 1: The P Value Fallacy* by Steve Goodman
  * The hilariously titled: *The Earth is Round (p < .05)* by Cohen.
* Some positive comments
  * [simply statistics](http://simplystatistics.org/2012/01/06/p-values-and-hypothesis-testing-get-a-bad-rap-but-we/)
  * [normal deviate](http://normaldeviate.wordpress.com/2013/03/14/double-misunderstandings-about-p-values/)
  * [Error statistics](http://errorstatistics.com/2013/06/14/p-values-cant-be-trusted-except-when-used-to-argue-that-p-values-cant-be-trusted/)

---


## What is a P-value? 

__Idea__: Suppose nothing is going on - how unusual is it to see the estimate we got?

__Approach__: 

1. Define the hypothetical distribution of a data summary (statistic) when "nothing is going on" (_null hypothesis_)
2. Calculate the summary/statistic with the data we have (_test statistic_)
3. Compare what we calculated to our hypothetical distribution and see if the value is "extreme" (_p-value_)

---
## P-values
* The P-value is the probability under the null hypothesis of obtaining evidence as extreme or more extreme than that obtained
* If the P-value is small, then either $H_0$ is true and we have observed a rare event or $H_0$ is false
*  Suppos that you get a $T$ statistic of $2.5$ for 15 df testing $H_0:\mu = \mu_0$
versus $H_a : \mu > \mu_0$. 
  * What's the probability of getting a $T$ statistic as large as $2.5$?

```r
pt(2.5, 15, lower.tail = FALSE)
```

```
## [1] 0.01225
```

* Therefore, the probability of seeing evidence as extreme or more extreme than that actually obtained under $H_0$ is 0.0123

---
## The attained significance level
* Our test statistic was $2$ for $H_0 : \mu_0  = 30$ versus $H_a:\mu > 30$.
* Notice that we rejected the one sided test when $\alpha = 0.05$, would we reject if $\alpha = 0.01$, how about $0.001$?
* The smallest value for alpha that you still reject the null hypothesis is called the *attained significance level*
* This is equivalent, but philosophically a little different from, the *P-value*

---
## Notes
* By reporting a P-value the reader can perform the hypothesis
  test at whatever $\alpha$ level he or she choses
* If the P-value is less than $\alpha$ you reject the null hypothesis 
* For two sided hypothesis test, double the smaller of the two one
  sided hypothesis test Pvalues

---
## Revisiting an earlier example
- Suppose a friend has $8$ children, $7$ of which are girls and none are twins
- If each gender has an independent $50$% probability for each birth, what's the probability of getting $7$ or more girls out of $8$ births?

```r
choose(8, 7) * 0.5^8 + choose(8, 8) * 0.5^8
```

```
## [1] 0.03516
```

```r
pbinom(6, size = 8, prob = 0.5, lower.tail = FALSE)
```

```
## [1] 0.03516
```


---
## Poisson example
- Suppose that a hospital has an infection rate of 10 infections per 100 person/days at risk (rate of 0.1) during the last monitoring period.
- Assume that an infection rate of 0.05 is an important benchmark. 
- Given the model, could the observed rate being larger than 0.05 be attributed to chance?
- Under $H_0: \lambda = 0.05$ so that $\lambda_0 100 = 5$
- Consider $H_a: \lambda > 0.05$.


```r
ppois(9, 5, lower.tail = FALSE)
```

```
## [1] 0.03183
```




