---
title       : Homework 1 for Stat Inference
subtitle    : Extra problems for Stat Inference
author      : Brian Caffo
job         : Johns Hopkins Bloomberg School of Public Health
framework   : io2012
highlighter : highlight.js  
hitheme     : tomorrow       
#url:
#    lib: ../../librariesNew #Remove new if using old slidify
#    assets: ../../assets
widgets     : [mathjax, quiz, bootstrap]
mode        : selfcontained # {standalone, draft}
---



## About these slides
- These are some practice problems for Statistical Inference Quiz 1
- They were created using slidify interactive which you will learn in 
Creating Data Products
- Please help improve this with pull requests here
(https://github.com/bcaffo/courses)


--- &radio

Consider influenza epidemics for two parent heterosexual families. Suppose that the probability is 15% that at least one of the parents has contracted the disease. The probability that the father has contracted influenza is 10% while that the mother contracted the disease is 9%. What is the probability that both contracted influenza expressed as a whole number percentage?

1. 15%
2. 10%
3. 9%
4. _4%_

*** .hint
$A = Father$, $P(A) = .10$, $B = Mother$, $P(B) = .09$ 
$P(A\cup B) = .15$, 

*** .explanation
$P(A\cup B) = P(A) + P(B) - P(AB)$ thus
$$.15 = .10 + .09 - P(AB)$$

```r
.10 + .09 - .15
```

```
[1] 0.04
```


---  &radio

A random variable, $X$, is uniform, a box from $0$ to $1$ of height $1$. (So that it's density is $f(x) = 1$ for $0\leq x \leq 1$.) What is it's median expressed to two decimal places? </p>

1. 1.00
2. 0.75
3. _0.50_
4. 0.25

*** .hint
The median is the point so that 50% of the density lies below it.

*** .explanation
This density looks like a box. So, notice that $P(X \leq x) = width\times height = x$.
We want $.5 = P(X\leq x) = x$.

--- &radio

You are playing a game with a friend where you flip a coin and if it comes up heads you give her  $X$ dollars and if it comes up tails she gives you $Y$ dollars. The odds that the coin is heads in $d$. What is your expected earnings?

1. _$-X \frac{d}{1 + d} + Y \frac{1}{1+d} $_
2. $X \frac{d}{1 + d} + Y \frac{1}{1+d} $
3. $X \frac{d}{1 + d} - Y \frac{1}{1+d} $
4. $-X \frac{d}{1 + d} - Y \frac{1}{1+d} $

*** .hint
The probability that you win on a given round is given by $p / (1 - p) = d$ which implies
that $p = d / (1 + d)$.

*** .explanation
You lose $X$ with probability $p = d/(1 +d)$ and you win $Y$ with probability $1-p = 1/(1 + d)$. So your answer is
$$
-X \frac{d}{1 + d} + Y \frac{1}{1+d} 
$$

--- &radio
A random variable takes the value -4 with probabability .2 and 1 with proabability .8. What
is the variance of this random variable?

1. 0
2. _4_
3. 8
4. 16

*** .hint
This random variable has mean 0. The variance would be given by $E[X^2]$ then.

*** .explanation
$$E[X] = 0$$
$$
Var(X) = E[X^2] = (-4)^2 * .2 + (1)^2 * .8
$$

```r
-4 * .2 + 1 * .8
```

```
[1] 0
```

```r
(-4)^2 * .2 + (1)^2 * .8
```

```
[1] 4
```



--- &radio
If $\bar X$ and $\bar Y$ are comprised of $n$ iid random variables arising from distributions
having  means $\mu_x$ and $\mu_y$, respectively and common variance $\sigma^2$
what is the variance $\bar X - \bar Y$?

1. 0
2. _$2\sigma^2/n$_
3. $\mu_x$ - $\mu_y$
4. $2\sigma^2$

*** .hint
Remember that $Var(\bar X) = Var(\bar Y) = \sigma^2 / n$. 

*** .explanation 
$$
Var(\bar X - \bar Y) = Var(\bar X) + Var(\bar Y) = \sigma^2 / n + \sigma^2 / n
$$

--- &radio
Let $X$ be a random variable having standard deviation $\sigma$. What can
be said about $X /\sigma$?

1. Nothing
2. _It must have variance 1._
3. It must have mean 0.
4. It must have variance 0.

*** .hint
$Var(aX) = a^2 Var(X)$

*** .explanation
$$Var(X / \sigma) = Var(X) / \sigma^2 = 1$$


--- &radio
If a continuous density that never touches the horizontal axis is symmetric about zero, can we say that its associated median is zero?

1. _Yes_
2. No.
3. It can not be determined given the information given.

*** .explanation
This is a surprisingly hard problem. The easy explanation is that 50% of the probability
is below 0 and 50% is above so yes. However, it is predicated on the density not being
a flat line at 0 around 0. That's why the caveat that it never touches the horizontal axis
is important.


--- &radio

Consider the following pmf given in R

```r
p <- c(.1, .2, .3, .4)
x <- 2 : 5 
```

What is the variance expressed to 1 decimal place?

1. _1.0_
2. 4.0
3. 6.0
4. 17.0

*** .hint
The variance is $E[X^2] - E[X^2]$

*** .explanation 

```r
sum(x ^ 2 * p) - sum(x * p) ^ 2
```

```
[1] 1
```

