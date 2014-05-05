---
title       : ROC curves
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





## Why a curve?

* In binary classification you are predicting one of two categories
  * Alive/dead
  * Click on ad/don't click
* But your predictions are often quantitative
  * Probability of being alive
  * Prediction on a scale from 1 to 10
* The _cutoff_  you choose gives different results

---

## ROC curves

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/roc1.png height=400>

[http://en.wikipedia.org/wiki/Receiver_operating_characteristic](http://en.wikipedia.org/wiki/Receiver_operating_characteristic)

---

## An example

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/roc2.png height=400>

[http://en.wikipedia.org/wiki/Receiver_operating_characteristic](http://en.wikipedia.org/wiki/Receiver_operating_characteristic)

---

## Area under the curve

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/roc1.png height=200>

* AUC = 0.5: random guessing
* AUC = 1: perfect classifer
* In general AUC of above 0.8 considered "good"

[http://en.wikipedia.org/wiki/Receiver_operating_characteristic](http://en.wikipedia.org/wiki/Receiver_operating_characteristic)

---

## What is good?

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/roc3.png height=400>

[http://en.wikipedia.org/wiki/Receiver_operating_characteristic](http://en.wikipedia.org/wiki/Receiver_operating_characteristic)



