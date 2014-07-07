---
title       : The variance
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

## The variance

- The variance of a random variable is a measure of *spread*
- If $X$ is a random variable with mean $\mu$, the variance of $X$ is defined as

$$
Var(X) = E[(X - \mu)^2] = E[X^2] - E[X]^2
$$ 

- The expected (squared) distance from the mean
- Densities with a higher variance are more spread out than densities with a lower variance
- The square root of the variance is called the **standard deviation**
- The standard deviation has the same units as $X$

---

## Example

- What's the variance from the result of a toss of a die? 

  - $E[X] = 3.5$ 
  - $E[X^2] = 1 ^ 2 \times \frac{1}{6} + 2 ^ 2 \times \frac{1}{6} + 3 ^ 2 \times \frac{1}{6} + 4 ^ 2 \times \frac{1}{6} + 5 ^ 2 \times \frac{1}{6} + 6 ^ 2 \times \frac{1}{6} = 15.17$ 

- $Var(X) = E[X^2] - E[X]^2 \approx 2.92$

---

## Example

- What's the variance from the result of the toss of a coin with probability of heads (1) of $p$? 

  - $E[X] = 0 \times (1 - p) + 1 \times p = p$
  - $E[X^2] = E[X] = p$ 

$$Var(X) = E[X^2] - E[X]^2 = p - p^2 = p(1 - p)$$


---
## Distributions with increasing variance

```
## Error: could not find function "ggplot"
```

---
## The sample variance 
- The sample variance is 
$$
S^2 = \frac{\sum_{i=1} (X_i - \bar X)^2}{n-1}
$$
(almost, but not quite, the average squared deviation from
the sample mean)
- It is also a statistic, it has an associate
population distribution
- Its expected value is the population variance
- Its square root is the sample standard deviation


---
## Simulation experiment
### Simulating from a population with variance 1

<img src="assets/fig/unnamed-chunk-2.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" style="display: block; margin: auto;" />

---
## Variances of x die rolls
<img src="assets/fig/unnamed-chunk-3.png" title="plot of chunk unnamed-chunk-3" alt="plot of chunk unnamed-chunk-3" style="display: block; margin: auto;" />

---

## Hoping to avoid some confusion

- Suppose $X_i$ are iid with mean $\mu$ and variance $\sigma^2$
- $S^2$ estimates $\sigma^2$
- The calculation of $S^2$ involves dividing by $n-1$
- $S / \sqrt{n}$ estimates $\sigma / \sqrt{n}$ the standard error of the mean
- $S / \sqrt{n}$ is called the sample standard error (of the mean)

---
## Example

```r
data(father.son); 
```

```
## Warning: data set 'father.son' not found
```

```r
x <- father.son$sheight
```

```
## Error: object 'father.son' not found
```

```r
n<-length(x)
```

```
## Error: object 'x' not found
```

---

```
## Error: object 'father.son' not found
```

```r
round(c(sum( (x - mean(x) )^ 2) / (n-1), var(x), var(x) / n, sd(x), sd(x) / sqrt(n)),2)
```

```
## Error: object 'x' not found
```


---
## Summarizing what we know about variances
- Expectations are properties of populations
- The mean and the variance are two important such properties
- These are naturally estimated by the sample mean and
variance
- The sample mean and variance from a random sample from 
a population are random variables
  - They have distributions
  - These distributions are centered at the
population mean and variance they are estimating
  - If they are comprised of more observations, they have lower
variability
