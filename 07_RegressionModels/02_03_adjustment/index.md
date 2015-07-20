---
title       : Multivariable regression
subtitle    : Regression
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

```
## Error: object 'opts_chunk' not found
```

```
## Error: object 'knit_hooks' not found
```

```
## Error: object 'knit_hooks' not found
```
## Consider the following simulated data
Code for the first plot, rest omitted
(See the git repo for the rest of the code.)
```
n <- 100; t <- rep(c(0, 1), c(n/2, n/2)); x <- c(runif(n/2), runif(n/2));
beta0 <- 0; beta1 <- 2; tau <- 1; sigma <- .2
y <- beta0 + x * beta1 + t * tau + rnorm(n, sd = sigma)
plot(x, y, type = "n", frame = FALSE)
abline(lm(y ~ x), lwd = 2)
abline(h = mean(y[1 : (n/2)]), lwd = 3)
abline(h = mean(y[(n/2 + 1) : n]), lwd = 3)
fit <- lm(y ~ x + t)
abline(coef(fit)[1], coef(fit)[2], lwd = 3)
abline(coef(fit)[1] + coef(fit)[3], coef(fit)[2], lwd = 3)
points(x[1 : (n/2)], y[1 : (n/2)], pch = 21, col = "black", bg = "lightblue", cex = 2)
points(x[(n/2 + 1) : n], y[(n/2 + 1) : n], pch = 21, col = "black", bg = "salmon", cex = 2)
```


---
## Simulation 1
![plot of chunk unnamed-chunk-1](assets/fig/unnamed-chunk-1.png) 

---
## Discussion
### Some things to note in this simulation
* The X variable is unrelated to group status
* The X variable is related to Y, but the intercept depends
  on group status.
* The group variable is related to Y.
  * The relationship between group status and Y is constant depending on X.
  * The relationship between group and Y disregarding X is about the same as holding X constant

---
## Simulation 2
![plot of chunk unnamed-chunk-2](assets/fig/unnamed-chunk-2.png) 


---
## Discussion
### Some things to note in this simulation
* The X variable is highly related to group status
* The X variable is related to Y, the intercept
  doesn't depend on the group variable.
  * The X variable remains related to Y holding group status constant
* The group variable is marginally related to Y disregarding X.
* The model would estimate no adjusted effect due to group.
  * There isn't any data to inform the relationship between
    group and Y.
  * This conclusion is entirely based on the model.

---
## Simulation 3
![plot of chunk unnamed-chunk-3](assets/fig/unnamed-chunk-3.png) 

---
## Discussion
### Some things to note in this simulation
* Marginal association has red group higher than blue.
* Adjusted relationship has blue group higher than red.
* Group status related to X.
* There is some direct evidence for comparing red and blue
holding X fixed.



---
## Simulation 4
![plot of chunk unnamed-chunk-4](assets/fig/unnamed-chunk-4.png) 

---
## Discussion
### Some things to note in this simulation
* No marginal association between group status and Y.
* Strong adjusted relationship.
* Group status not related to X.
* There is lots of direct evidence for comparing red and blue
holding X fixed.

---
## Simulation 5
![plot of chunk unnamed-chunk-5](assets/fig/unnamed-chunk-5.png) 

---
## Discussion
### Some things to note from this simulation
* There is no such thing as a group effect here.
  * The impact of group reverses itself depending on X.
  * Both intercept and slope depends on group.
* Group status and X unrelated.
  * There's lots of information about group effects holding X fixed.

---
### Simulation 6
![plot of chunk unnamed-chunk-6](assets/fig/unnamed-chunk-6.png) 

---
### Do this to investigate the bivariate relationship
```
library(rgl)
plot3d(x1, x2, y)
```

---
### Residual relationship
![plot of chunk unnamed-chunk-7](assets/fig/unnamed-chunk-7.png) 


---
## Discussion
### Some things to note from this simulation

* X1 unrelated to X2
* X2 strongly related to Y
* Adjusted relationship between X1 and Y largely unchanged
  by considering X2.
  * Almost no residual variability after accounting for X2.

---
## Some final thoughts
* Modeling multivariate relationships is difficult.
* Play around with simulations to see how the
  inclusion or exclusion of another variable can
  change analyses.
* The results of these analyses deal with the
impact of variables on associations.
  * Ascertaining mechanisms or cause are difficult subjects
    to be added on top of difficulty in understanding multivariate associations.
