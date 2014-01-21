---
title       : Practical Machine Learning Overview
author      : Jeffrey Leek
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

## Practical Machine Learning Content

* Prediction study design
* Types of Errors
* Cross validation
* The caret package
* Plotting for prediction
* Preprocessing
* Predicting with regression
* Predicting with trees
* Boosting
* Bagging
* Model blending 
* Forecasting 

---

## Basic terms

In general, __Positive__ = identified and __negative__ = rejected. Therefore:

- __True positive__ = correctly identified
- __False positive__ = incorrectly identified
- __True negative__ = correctly rejected
- __False negative__ = incorrectly rejected

_Medical testing example_:

- __True positive__ = Sick people correctly diagnosed as sick
- __False positive__= Healthy people incorrectly identified as sick
- __True negative__ = Healthy people correctly identified as healthy
- __False negative__ = Sick people incorrectly identified as healthy.

[http://en.wikipedia.org/wiki/Sensitivity_and_specificity](http://en.wikipedia.org/wiki/Sensitivity_and_specificity)

---

## Correlated predictors


```r
library(caret)
library(kernlab)
data(spam)
inTrain <- createDataPartition(y = spam$type, p = 0.75, list = FALSE)
training <- spam[inTrain, ]
testing <- spam[-inTrain, ]

M <- abs(cor(training[, -58]))
diag(M) <- 0
which(M > 0.8, arr.ind = T)
```

```
##        row col
## num415  34  32
## direct  40  32
## num857  32  34
## num857  32  40
```


---

## Basic idea behind boosting

1. Start with a set of classifiers $h_1,\ldots,h_k$
  * Examples: All possible trees, all possible regression models, all possible cutoffs.
2. Create a classifier that combines classification functions:
$f(x) = \rm{sgn}\left(\sum_{t=1}^T \alpha_t h_t(x)\right)$.
  * Goal is to minimize error (on training set)
  * Iterative, select one $h$ at each step
  * Calculate weights based on errors
  * Upweight missed classifications and select next $h$
  
[Adaboost on Wikipedia](http://en.wikipedia.org/wiki/AdaBoost)

[http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf](http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf)


