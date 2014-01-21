---
title       : Types of errors
subtitle    : 
author      : Jeffrey Leek
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





---

## Basic terms

In general, __Positive__ = identified and __negative__ = rejected. Therefore:

__True positive__ = correctly identified

__False positive__ = incorrectly identified

__True negative__ = correctly rejected

__False negative__ = incorrectly rejected

_Medical testing example_:

__True positive__ = Sick people correctly diagnosed as sick

__False positive__= Healthy people incorrectly identified as sick

__True negative__ = Healthy people correctly identified as healthy

__False negative__ = Sick people incorrectly identified as healthy.

[http://en.wikipedia.org/wiki/Sensitivity_and_specificity](http://en.wikipedia.org/wiki/Sensitivity_and_specificity)

---

## Define your error rate

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/sensspec.png height=400>


[http://en.wikipedia.org/wiki/Sensitivity_and_specificity](http://en.wikipedia.org/wiki/Sensitivity_and_specificity)

---

## Why your choice matters

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/sensspecex.png height=400>

[http://en.wikipedia.org/wiki/Sensitivity_and_specificity](http://en.wikipedia.org/wiki/Sensitivity_and_specificity)


---

## For continuous data

__Mean squared error (MSE)__:

$$\frac{1}{n} \sum_{i=1}^n (Prediction_i - Truth_i)^2$$

__Root mean squared error (RMSE)__:

$$\sqrt{\frac{1}{n} \sum_{i=1}^n(Prediction_i - Truth_i)^2}$$

---

## Common error measures

1. Mean squared error (or root mean squared error)
  * Continuous data, sensitive to outliers
2. Median absolute deviation 
  * Continuous data, often more robust
3. Sensitivity (recall)
  * If you want few missed positives
4. Specificity
  * If you want few negatives called positives
5. Accuracy
  * Weights false positives/negatives equally
6. Concordance
  * One example is [kappa](http://en.wikipedia.org/wiki/Cohen%27s_kappa)
5. Predictive value of a positive (precision)
  * When you are screeing and prevelance is low
