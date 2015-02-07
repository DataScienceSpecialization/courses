---
title       : Multivariable regression examples
subtitle    : Regression Models
author      : Brian Caffo, Jeff Leek and Roger Peng
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


## Data set for discussion
### `require(datasets); data(swiss); ?swiss`
Standardized fertility measure and socio-economic indicators for each of 47 French-speaking provinces of Switzerland at about 1888.

A data frame with 47 observations on 6 variables, each of which is in percent, i.e., in [0, 100].

* [,1]   Fertility          a common standardized fertility measure
* [,2]   Agriculture        % of males involved in agriculture as occupation
* [,3]	 Examination        % draftees receiving highest mark on army examination
* [,4]	 Education          % education beyond primary school for draftees
* [,5]	 Catholic           % catholic (as opposed to protestant)
* [,6]	 Infant.Mortality   live births who live less than 1 year

All variables but Fertility give proportions of the population.

---

<div class="rimage center"><img src="fig/unnamed-chunk-1.png" title="plot of chunk unnamed-chunk-1" alt="plot of chunk unnamed-chunk-1" class="plot" /></div>



---
## Calling `lm`
`summary(lm(Fertility ~ . , data = swiss))`

```
                 Estimate Std. Error t value  Pr(>|t|)
(Intercept)       66.9152   10.70604   6.250 1.906e-07
Agriculture       -0.1721    0.07030  -2.448 1.873e-02
Examination       -0.2580    0.25388  -1.016 3.155e-01
Education         -0.8709    0.18303  -4.758 2.431e-05
Catholic           0.1041    0.03526   2.953 5.190e-03
Infant.Mortality   1.0770    0.38172   2.822 7.336e-03
```


---
## Example interpretation
* Agriculture is expressed in percentages (0 - 100)
* Estimate is -0.1721.
* Our models estimates an expected 0.17 decrease in standardized fertility for every 1% increase in percentage of males involved in agriculture in holding the remaining variables constant.
* The t-test for $H_0: \beta_{Agri} = 0$ versus $H_a: \beta_{Agri} \neq 0$ is  significant.
* Interestingly, the unadjusted estimate is 

```r
summary(lm(Fertility ~ Agriculture, data = swiss))$coefficients
```

```
            Estimate Std. Error t value  Pr(>|t|)
(Intercept)  60.3044    4.25126  14.185 3.216e-18
Agriculture   0.1942    0.07671   2.532 1.492e-02
```


---
How can adjustment reverse the sign of an effect? Let's try a simulation.

```r
n <- 100; x2 <- 1 : n; x1 <- .01 * x2 + runif(n, -.1, .1); y = -x1 + x2 + rnorm(n, sd = .01)
summary(lm(y ~ x1))$coef
```

```
            Estimate Std. Error t value  Pr(>|t|)
(Intercept)    1.454      1.079   1.348 1.807e-01
x1            96.793      1.862  51.985 3.707e-73
```

```r
summary(lm(y ~ x1 + x2))$coef
```

```
             Estimate Std. Error  t value   Pr(>|t|)
(Intercept)  0.001933  0.0017709    1.092  2.777e-01
x1          -1.020506  0.0163560  -62.393  4.211e-80
x2           1.000133  0.0001643 6085.554 1.544e-272
```


---
<div class="rimage center"><img src="fig/unnamed-chunk-5.png" title="plot of chunk unnamed-chunk-5" alt="plot of chunk unnamed-chunk-5" class="plot" /></div>


---
<div class="rimage center"><img src="fig/unnamed-chunk-6.png" title="plot of chunk unnamed-chunk-6" alt="plot of chunk unnamed-chunk-6" class="plot" /></div>


---
## Back to this data set
* The sign reverses itself with the inclusion of Examination and Education.
* The percent of males in the province working in agriculture is negatively related to educational attainment (correlation of -0.6395) and Education and Examination (correlation of 0.6984) are obviously measuring similar things. 
  * Is the positive marginal an artifact for not having accounted for, say, Education level? (Education does have a stronger effect, by the way.)
* At the minimum, anyone claiming that provinces that are more agricultural have higher fertility rates would immediately be open to criticism.

---
## What if we include an unnecessary variable?
z adds no new linear information, since it's a linear
combination of variables already included. R just drops 
terms that are linear combinations of other terms.

```r
z <- swiss$Agriculture + swiss$Education
lm(Fertility ~ . + z, data = swiss)
```

```

Call:
lm(formula = Fertility ~ . + z, data = swiss)

Coefficients:
     (Intercept)       Agriculture       Examination         Education          Catholic  
          66.915            -0.172            -0.258            -0.871             0.104  
Infant.Mortality                 z  
           1.077                NA  
```



---
## Dummy variables are smart
* Consider the linear model
$$
Y_i = \beta_0 + X_{i1} \beta_1 + \epsilon_{i}
$$
where each $X_{i1}$ is binary so that it is a 1 if measurement $i$ is in a group and 0 otherwise. (Treated versus not in a clinical trial, for example.)
* Then for people in the group $E[Y_i] = \beta_0 + \beta_1$
* And for people not in the group $E[Y_i] = \beta_0$
* The LS fits work out to be $\hat \beta_0 + \hat \beta_1$ is the mean for those in the group and $\hat \beta_0$ is the mean for those not in the group.
* $\beta_1$ is interpretted as the increase or decrease in the mean comparing those in the group to those not.
* Note including a binary variable that is 1 for those not in the group would be redundant. It would create three parameters to describe two means.

---
## More than 2 levels
* Consider a multilevel factor level. For didactic reasons, let's say a three level factor (example, US political party affiliation: Republican, Democrat, Independent)
* $Y_i = \beta_0 + X_{i1} \beta_1 + X_{i2} \beta_2 + \epsilon_i$.
* $X_{i1}$ is 1 for Republicans and 0 otherwise.
* $X_{i2}$ is 1 for Democrats and 0 otherwise.
* If $i$ is Republican $E[Y_i] = \beta_0 +\beta_1$
* If $i$ is Democrat $E[Y_i] = \beta_0 + \beta_2$.
* If $i$ is Independent $E[Y_i] = \beta_0$. 
* $\beta_1$ compares Republicans to Independents.
* $\beta_2$ compares Democrats to Independents.
* $\beta_1 - \beta_2$ compares Republicans to Democrats.
* (Choice of reference category changes the interpretation.)

---
## Insect Sprays
<div class="rimage center"><img src="fig/unnamed-chunk-8.png" title="plot of chunk unnamed-chunk-8" alt="plot of chunk unnamed-chunk-8" class="plot" /></div>


---
## Linear model fit, group A is the reference

```r
summary(lm(count ~ spray, data = InsectSprays))$coef
```

```
            Estimate Std. Error t value  Pr(>|t|)
(Intercept)  14.5000      1.132 12.8074 1.471e-19
sprayB        0.8333      1.601  0.5205 6.045e-01
sprayC      -12.4167      1.601 -7.7550 7.267e-11
sprayD       -9.5833      1.601 -5.9854 9.817e-08
sprayE      -11.0000      1.601 -6.8702 2.754e-09
sprayF        2.1667      1.601  1.3532 1.806e-01
```


---
## Hard coding the dummy variables

```r
summary(lm(count ~ 
             I(1 * (spray == 'B')) + I(1 * (spray == 'C')) + 
             I(1 * (spray == 'D')) + I(1 * (spray == 'E')) +
             I(1 * (spray == 'F'))
           , data = InsectSprays))$coef
```

```
                      Estimate Std. Error t value  Pr(>|t|)
(Intercept)            14.5000      1.132 12.8074 1.471e-19
I(1 * (spray == "B"))   0.8333      1.601  0.5205 6.045e-01
I(1 * (spray == "C")) -12.4167      1.601 -7.7550 7.267e-11
I(1 * (spray == "D"))  -9.5833      1.601 -5.9854 9.817e-08
I(1 * (spray == "E")) -11.0000      1.601 -6.8702 2.754e-09
I(1 * (spray == "F"))   2.1667      1.601  1.3532 1.806e-01
```


---
## What if we include all 6?

```r
summary(lm(count ~ 
   I(1 * (spray == 'B')) + I(1 * (spray == 'C')) +  
   I(1 * (spray == 'D')) + I(1 * (spray == 'E')) +
   I(1 * (spray == 'F')) + I(1 * (spray == 'A')), data = InsectSprays))$coef
```

```
                      Estimate Std. Error t value  Pr(>|t|)
(Intercept)            14.5000      1.132 12.8074 1.471e-19
I(1 * (spray == "B"))   0.8333      1.601  0.5205 6.045e-01
I(1 * (spray == "C")) -12.4167      1.601 -7.7550 7.267e-11
I(1 * (spray == "D"))  -9.5833      1.601 -5.9854 9.817e-08
I(1 * (spray == "E")) -11.0000      1.601 -6.8702 2.754e-09
I(1 * (spray == "F"))   2.1667      1.601  1.3532 1.806e-01
```


---
## What if we omit the intercept?

```r
summary(lm(count ~ spray - 1, data = InsectSprays))$coef
```

```
       Estimate Std. Error t value  Pr(>|t|)
sprayA   14.500      1.132  12.807 1.471e-19
sprayB   15.333      1.132  13.543 1.002e-20
sprayC    2.083      1.132   1.840 7.024e-02
sprayD    4.917      1.132   4.343 4.953e-05
sprayE    3.500      1.132   3.091 2.917e-03
sprayF   16.667      1.132  14.721 1.573e-22
```

```r
library(dplyr)
summarise(group_by(InsectSprays, spray), mn = mean(count))
```

```
Source: local data frame [6 x 2]

  spray     mn
1     A 14.500
2     B 15.333
3     C  2.083
4     D  4.917
5     E  3.500
6     F 16.667
```


---
## Reordering the levels

```r
spray2 <- relevel(InsectSprays$spray, "C")
summary(lm(count ~ spray2, data = InsectSprays))$coef
```

```
            Estimate Std. Error t value  Pr(>|t|)
(Intercept)    2.083      1.132  1.8401 7.024e-02
spray2A       12.417      1.601  7.7550 7.267e-11
spray2B       13.250      1.601  8.2755 8.510e-12
spray2D        2.833      1.601  1.7696 8.141e-02
spray2E        1.417      1.601  0.8848 3.795e-01
spray2F       14.583      1.601  9.1083 2.794e-13
```

---
## Summary
* If we treat Spray as a factor, R includes an intercept and omits the alphabetically first level of the factor.
  * All t-tests are for comparisons of Sprays versus Spray A.
  * Emprirical mean for A is the intercept.
  * Other group means are the itc plus their coefficient. 
* If we omit an intercept, then it includes terms for all levels of the factor. 
  * Group means are the coefficients. 
  * Tests are tests of whether the groups are different than zero. (Are the expected counts zero for that spray.)
* If we want comparisons between, Spray B and C, say we could refit the model with C (or B) as the reference level. 


---
## Other thoughts on this data
* Counts are bounded from below by 0, violates the assumption of normality of the errors. 
  * Also there are counts near zero, so both the actual assumption and the intent of the assumption are violated.
* Variance does not appear to be constant.
* Perhaps taking logs of the counts would help. 
  * There are 0 counts, so maybe log(Count + 1)
* Also, we'll cover Poisson GLMs for fitting count data.

---

## Recall the `swiss` data set


```r
library(datasets); data(swiss)
head(swiss)
```

```
             Fertility Agriculture Examination Education Catholic Infant.Mortality
Courtelary        80.2        17.0          15        12     9.96             22.2
Delemont          83.1        45.1           6         9    84.84             22.2
Franches-Mnt      92.5        39.7           5         5    93.40             20.2
Moutier           85.8        36.5          12         7    33.77             20.3
Neuveville        76.9        43.5          17        15     5.16             20.6
Porrentruy        76.1        35.3           9         7    90.57             26.6
```


---
## Create a binary variable

```r
library(dplyr); 
swiss = mutate(swiss, CatholicBin = 1 * (Catholic > 50))
```


---
## Plot the data 
<div class="rimage center"><img src="fig/unnamed-chunk-16.png" title="plot of chunk unnamed-chunk-16" alt="plot of chunk unnamed-chunk-16" class="plot" /></div>


---
## No effect of religion

```r
summary(lm(Fertility ~ Agriculture, data = swiss))$coef
```

```
            Estimate Std. Error t value  Pr(>|t|)
(Intercept)  60.3044    4.25126  14.185 3.216e-18
Agriculture   0.1942    0.07671   2.532 1.492e-02
```


---
## Parallel lines

```r
summary(lm(Fertility ~ Agriculture + factor(CatholicBin), data = swiss))$coef
```

```
                     Estimate Std. Error t value  Pr(>|t|)
(Intercept)           60.8322     4.1059  14.816 1.032e-18
Agriculture            0.1242     0.0811   1.531 1.329e-01
factor(CatholicBin)1   7.8843     3.7484   2.103 4.118e-02
```


---
## Lines with different slopes and intercepts

```r
summary(lm(Fertility ~ Agriculture * factor(CatholicBin), data = swiss))$coef
```

```
                                 Estimate Std. Error t value  Pr(>|t|)
(Intercept)                      62.04993    4.78916 12.9563 1.919e-16
Agriculture                       0.09612    0.09881  0.9727 3.361e-01
factor(CatholicBin)1              2.85770   10.62644  0.2689 7.893e-01
Agriculture:factor(CatholicBin)1  0.08914    0.17611  0.5061 6.153e-01
```


---
## Just to show you it can be done

```r
summary(lm(Fertility ~ Agriculture + Agriculture : factor(CatholicBin), data = swiss))$coef
```

```
                                 Estimate Std. Error t value  Pr(>|t|)
(Intercept)                      62.63037    4.22989 14.8066 1.057e-18
Agriculture                       0.08539    0.08945  0.9546 3.450e-01
Agriculture:factor(CatholicBin)1  0.13340    0.06199  2.1520 3.693e-02
```

