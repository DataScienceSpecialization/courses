---
title       : Binary outcomes
subtitle    : 
author      : Jeffrey Leek, Assistant Professor of Biostatistics 
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow   # 
url:
  lib: ../../libraries
  assets: ../../assets
widgets     : [mathjax]            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
---





## Key ideas

* Frequently we care about outcomes that have two values
  * Alive/dead
  * Win/loss
  * Success/Failure
  * etc
* Called binary outcomes or 0/1 outcomes 
* Linear regression (like we've seen) may not be the best

---

## Example: Baltimore Ravens

<img class=center src=../../assets/img/ravens.png height=450>

[http://espn.go.com/nfl/team/_/name/bal/baltimore-ravens](http://espn.go.com/nfl/team/_/name/bal/baltimore-ravens)

---

## Ravens Data


```r
download.file("https://dl.dropboxusercontent.com/u/7710864/data/ravensData.rda",
              destfile="./data/ravensData.rda",method="curl")
load("./data/ravensData.rda")
head(ravensData)
```

```
  ravenWinNum ravenWin ravenScore opponentScore
1           1        W         24             9
2           1        W         38            35
3           1        W         28            13
4           1        W         34            31
5           1        W         44            13
6           0        L         23            24
```


---

## Linear regression

$$ RW_i = b_0 + b_1 RS_i + e_i $$

$RW_i$ - 1 if a Ravens win, 0 if not

$RS_i$ - Number of points Ravens scored

$b_0$ - probability of a Ravens win if they score 0 points

$b_1$ - increase in probability of a Ravens win for each additional point

$e_i$ - variation due to everything we didn't measure


---

## Linear regression in R


```r
lmRavens <- lm(ravensData$ravenWinNum ~ ravensData$ravenScore)
summary(lmRavens)
```

```

Call:
lm(formula = ravensData$ravenWinNum ~ ravensData$ravenScore)

Residuals:
   Min     1Q Median     3Q    Max 
-0.730 -0.508  0.182  0.322  0.572 

Coefficients:
                      Estimate Std. Error t value Pr(>|t|)  
(Intercept)            0.28503    0.25664    1.11    0.281  
ravensData$ravenScore  0.01590    0.00906    1.76    0.096 .
---
Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1

Residual standard error: 0.446 on 18 degrees of freedom
Multiple R-squared:  0.146,	Adjusted R-squared:  0.0987 
F-statistic: 3.08 on 1 and 18 DF,  p-value: 0.0963
```



---

## Linear regression


```r
plot(ravensData$ravenScore,lmRavens$fitted,pch=19,col="blue",ylab="Prob Win",xlab="Raven Score")
```

<div class="rimage center"><img src="fig/unnamed-chunk-1.png" title="plot of chunk unnamed-chunk-1" alt="plot of chunk unnamed-chunk-1" class="plot" /></div>


---

## Odds

__Binary Outcome 0/1__

$$RW_i$$  

__Probability (0,1)__

$$\rm{Pr}(RW_i | RS_i, b_0, b_1 )$$


__Odds $(0,\infty)$__
$$\frac{\rm{Pr}(RW_i | RS_i, b_0, b_1 )}{1-\rm{Pr}(RW_i | RS_i, b_0, b_1)}$$ 

__Log odds $(-\infty,\infty)$__

$$\log\left(\frac{\rm{Pr}(RW_i | RS_i, b_0, b_1 )}{1-\rm{Pr}(RW_i | RS_i, b_0, b_1)}\right)$$ 

---

## Linear vs. logistic regression

__Linear__

$$ RW_i = b_0 + b_1 RS_i + e_i $$

or

$$ E[RW_i | RS_i, b_0, b_1] = b_0 + b_1 RS_i$$

__Logistic__

$$ \rm{Pr}(RW_i | RS_i, b_0, b_1) = \frac{\exp(b_0 + b_1 RS_i)}{1 + \exp(b_0 + b_1 RS_i)}$$

or

$$ \log\left(\frac{\rm{Pr}(RW_i | RS_i, b_0, b_1 )}{1-\rm{Pr}(RW_i | RS_i, b_0, b_1)}\right) = b_0 + b_1 RS_i $$


---

## Interpreting Logistic Regression

$$ \log\left(\frac{\rm{Pr}(RW_i | RS_i, b_0, b_1 )}{1-\rm{Pr}(RW_i | RS_i, b_0, b_1)}\right) = b_0 + b_1 RS_i $$


$b_0$ - Log odds of a Ravens win if they score zero points

$b_1$ - Log odds ratio of win probability for each point scored (compared to zero points)

$\exp(b_1)$ - Odds ratio of win probability for each point scored (compared to zero points)

---

## Explaining Odds

<img class=center src=../../assets/img/odds1.png height=450>

[via Ken Rice](http://faculty.washington.edu/kenrice/teaching.html)

---

## Probability of Death

<img class=center src=../../assets/img/odds2.png height=450>

[via Ken Rice](http://faculty.washington.edu/kenrice/teaching.html)

---

## Odds of Death

<img class=center src=../../assets/img/odds3.png height=450>

[via Ken Rice](http://faculty.washington.edu/kenrice/teaching.html)

---

## Odds Ratio = 1, Continuous Covariate

<img class=center src=../../assets/img/odds4.png height=450>

[via Ken Rice](http://faculty.washington.edu/kenrice/teaching.html)

---

## Different odds ratios

<img class=center src=../../assets/img/odds5.png height=350>

[via Ken Rice](http://faculty.washington.edu/kenrice/teaching.html)

---

## Ravens logistic regression


```r
logRegRavens <- glm(ravensData$ravenWinNum ~ ravensData$ravenScore,family="binomial")
summary(logRegRavens)
```

```

Call:
glm(formula = ravensData$ravenWinNum ~ ravensData$ravenScore, 
    family = "binomial")

Deviance Residuals: 
   Min      1Q  Median      3Q     Max  
-1.758  -1.100   0.530   0.806   1.495  

Coefficients:
                      Estimate Std. Error z value Pr(>|z|)
(Intercept)            -1.6800     1.5541   -1.08     0.28
ravensData$ravenScore   0.1066     0.0667    1.60     0.11

(Dispersion parameter for binomial family taken to be 1)

    Null deviance: 24.435  on 19  degrees of freedom
Residual deviance: 20.895  on 18  degrees of freedom
AIC: 24.89

Number of Fisher Scoring iterations: 5
```



---

## Ravens fitted values


```r
plot(ravensData$ravenScore,logRegRavens$fitted,pch=19,col="blue",xlab="Score",ylab="Prob Ravens Win")
```

<div class="rimage center"><img src="fig/unnamed-chunk-2.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" class="plot" /></div>



---

## Odds ratios and confidence intervals


```r
exp(logRegRavens$coeff)
```

```
          (Intercept) ravensData$ravenScore 
               0.1864                1.1125 
```

```r
exp(confint(logRegRavens))
```

```
                         2.5 % 97.5 %
(Intercept)           0.005675  3.106
ravensData$ravenScore 0.996230  1.303
```



---

## ANOVA for logistic regression


```r
anova(logRegRavens,test="Chisq")
```

```
Analysis of Deviance Table

Model: binomial, link: logit

Response: ravensData$ravenWinNum

Terms added sequentially (first to last)

                      Df Deviance Resid. Df Resid. Dev Pr(>Chi)  
NULL                                     19       24.4           
ravensData$ravenScore  1     3.54        18       20.9     0.06 .
---
Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
```




---

## Simpson's paradox

<img class=center src=../../assets/img/simpsons.png height=300>

[http://en.wikipedia.org/wiki/Simpson's_paradox](http://en.wikipedia.org/wiki/Simpson's_paradox)

---

## Interpreting Odds Ratios

* Not probabilities 
* Odds ratio of 1 = no difference in odds
* Log odds ratio of 0 = no difference in odds
* Odds ratio < 0.5 or > 2 commonly a "moderate effect"
* Relative risk $\frac{\rm{Pr}(RW_i | RS_i = 10)}{\rm{Pr}(RW_i | RS_i = 0)}$ often easier to interpret, harder to estimate
* For small probabilities RR $\approx$ OR but __they are not the same__!

[Wikipedia on Odds Ratio](http://en.wikipedia.org/wiki/Odds_ratio)


---

## Further resources

* [Wikipedia on Logistic Regression](http://en.wikipedia.org/wiki/Logistic_regression)
* [Logistic regression and glms in R](http://data.princeton.edu/R/glms.html)
* Brian Caffo's lecture notes on: [Simpson's paradox](http://ocw.jhsph.edu/courses/MethodsInBiostatisticsII/PDFs/lecture23.pdf), [Case-control studies](http://ocw.jhsph.edu/courses/MethodsInBiostatisticsII/PDFs/lecture24.pdf)
* [Open Intro Chapter on Logistic Regression](http://www.openintro.org/stat/down/oiStat2_08.pdf)




