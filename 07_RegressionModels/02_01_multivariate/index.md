---
title       : Multivariable regression
subtitle    : 
author      : Brian Caffo, Roger Peng and Jeff Leek
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
## Multivariable regression analyses
* If I were to present evidence of a relationship between 
breath mint useage (mints per day, X) and pulmonary function
(measured in FEV), you would be skeptical.
  * Likely, you would say, 'smokers tend to use more breath mints than non smokers, smoking is related to a loss in pulmonary function. That's probably the culprit.'
  * If asked what would convince you, you would likely say, 'If non-smoking breath mint users had lower lung function than non-smoking non-breath mint users and, similarly, if smoking breath mint users had lower lung function than smoking non-breath mint users, I'd be more inclined to believe you'.
* In other words, to even consider my results, I would have to demonstrate that they hold while holding smoking status fixed.

---
## Multivariable regression analyses
* An insurance company is interested in how last year's claims can predict a person's time in the hospital this year. 
  * They want to use an enormous amount of data contained in claims to predict a single number. Simple linear regression is not equipped to handle more than one predictor.
* How can one generalize SLR to incoporate lots of regressors for
the purpose of prediction?
* What are the consequences of adding lots of regressors? 
  * Surely there must be consequences to throwing variables in that aren't related to Y?
  * Surely there must be consequences to omitting variables that are?

---
## The linear model
* The general linear model extends simple linear regression (SLR)
by adding terms linearly into the model.
$$
Y_i =  \beta_1 X_{1i} + \beta_2 X_{2i} + \ldots +
\beta_{p} X_{pi} + \epsilon_{i} 
= \sum_{k=1}^p X_{ik} \beta_j + \epsilon_{i}
$$
* Here $X_{1i}=1$ typically, so that an intercept is included.
* Least squares (and hence ML estimates under iid Gaussianity 
of the errors) minimizes
$$
\sum_{i=1}^n \left(Y_i - \sum_{k=1}^p X_{ki} \beta_j\right)^2
$$
* Note, the important linearity is linearity in the coefficients.
Thus
$$
Y_i =  \beta_1 X_{1i}^2 + \beta_2 X_{2i}^2 + \ldots +
\beta_{p} X_{pi}^2 + \epsilon_{i} 
$$
is still a linear model. (We've just squared the elements of the
predictor variables.)

---
## How to get estimates
* Recall that the LS estimate for regression through the origin, $E[Y_i]=X_{1i}\beta_1$, was $\sum X_i Y_i / \sum X_i^2$.
* Let's consider two regressors, $E[Y_i] = X_{1i}\beta_1 + X_{2i}\beta_2 = \mu_i$. 
* Least squares tries to minimize
$$
\sum_{i=1}^n (Y_i - X_{1i} \beta_1 - X_{2i} \beta_2)^2
$$

---
## Result
$$\hat \beta_1 = \frac{\sum_{i=1}^n e_{i, Y | X_2} e_{i, X_1 | X_2}}{\sum_{i=1}^n e_{i, X_1 | X_2}^2}$$
* That is, the regression estimate for $\beta_1$ is the regression 
through the origin estimate having regressed $X_2$ out of both
the response and the predictor.
* (Similarly, the regression estimate for $\beta_2$ is the regression  through the origin estimate having regressed $X_1$ out of both the response and the predictor.)
* More generally, multivariate regression estimates are exactly those having removed the linear relationship of the other variables
from both the regressor and response.

---
## Example with two variables, simple linear regression
* $Y_{i} = \beta_1 X_{1i} + \beta_2 X_{2i}$ where  $X_{2i} = 1$ is an intercept term.
* Notice the fitted coefficient of $X_{2i}$ on $Y_{i}$ is $\bar Y$
    * The residuals $e_{i, Y | X_2} = Y_i - \bar Y$
* Notice the fitted coefficient of $X_{2i}$ on $X_{1i}$ is $\bar X_1$
    * The residuals $e_{i, X_1 | X_2}= X_{1i} - \bar X_1$
* Thus
$$
\hat \beta_1 = \frac{\sum_{i=1}^n e_{i, Y | X_2} e_{i, X_1 | X_2}}{\sum_{i=1}^n e_{i, X_1 | X_2}^2} = \frac{\sum_{i=1}^n (X_i - \bar X)(Y_i - \bar Y)}{\sum_{i=1}^n (X_i - \bar X)^2}
= Cor(X, Y) \frac{Sd(Y)}{Sd(X)}
$$

---
## The general case
* Least squares solutions have to minimize
$$
\sum_{i=1}^n (Y_i - X_{1i}\beta_1 - \ldots - X_{pi}\beta_p)^2
$$
* The least squares estimate for the coefficient of a multivariate regression model is exactly regression through the origin with the linear relationships with the other regressors removed from both the regressor and outcome by taking residuals. 
* In this sense, multivariate regression "adjusts" a coefficient for the linear impact of the other variables. 

---
## Demonstration that it works using an example
### Linear model with two variables

```r
n = 100; x = rnorm(n); x2 = rnorm(n); x3 = rnorm(n)
y = 1 + x + x2 + x3 + rnorm(n, sd = .1)
ey = resid(lm(y ~ x2 + x3))
ex = resid(lm(x ~ x2 + x3))
sum(ey * ex) / sum(ex ^ 2)
```

```
## [1] 1.009
```

```r
coef(lm(ey ~ ex - 1))
```

```
##    ex 
## 1.009
```

```r
coef(lm(y ~ x + x2 + x3)) 
```

```
## (Intercept)           x          x2          x3 
##      1.0202      1.0090      0.9787      1.0064
```

---
## Interpretation of the coeficients
$$E[Y | X_1 = x_1, \ldots, X_p = x_p] = \sum_{k=1}^p x_{k} \beta_k$$

$$
E[Y | X_1 = x_1 + 1, \ldots, X_p = x_p] = (x_1 + 1) \beta_1 + \sum_{k=2}^p x_{k} \beta_k
$$

$$
E[Y | X_1 = x_1 + 1, \ldots, X_p = x_p]  - E[Y | X_1 = x_1, \ldots, X_p = x_p]$$
$$= (x_1 + 1) \beta_1 + \sum_{k=2}^p x_{k} \beta_k + \sum_{k=1}^p x_{k} \beta_k = \beta_1 $$
So that the interpretation of a multivariate regression coefficient is the expected change in the response per unit change in the regressor, holding all of the other regressors fixed.

In the next lecture, we'll do examples and go over context-specific
interpretations.

---
## Fitted values, residuals and residual variation
All of our SLR quantities can be extended to linear models
* Model $Y_i = \sum_{k=1}^p X_{ik} \beta_{k} + \epsilon_{i}$ where $\epsilon_i \sim N(0, \sigma^2)$
* Fitted responses $\hat Y_i = \sum_{k=1}^p X_{ik} \hat \beta_{k}$
* Residuals $e_i = Y_i - \hat Y_i$
* Variance estimate $\hat \sigma^2 = \frac{1}{n-p} \sum_{i=1}^n e_i ^2$
* To get predicted responses at new values, $x_1, \ldots, x_p$, simply plug them into the linear model $\sum_{k=1}^p x_{k} \hat \beta_{k}$
* Coefficients have standard errors, $\hat \sigma_{\hat \beta_k}$, and
$\frac{\hat \beta_k - \beta_k}{\hat \sigma_{\hat \beta_k}}$
follows a $T$ distribution with $n-p$ degrees of freedom.
* Predicted responses have standard errors and we can calculate predicted and expected response intervals.

---
## Linear models
* Linear models are the single most important applied statistical and machine learning techniqe, *by far*.
* Some amazing things that you can accomplish with linear models
  * Decompose a signal into its harmonics.
  * Flexibly fit complicated functions.
  * Fit factor variables as predictors.
  * Uncover complex multivariate relationships with the response.
  * Build accurate prediction models.

