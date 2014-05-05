---
title       : Boosting
subtitle    : 
author      : Jeffrey Leek
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






## Basic idea

1. Take lots of (possibly) weak predictors
2. Weight them and add them up
3. Get a stronger predictor


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

---

## Simple example

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/ada1.png height=450>

[http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf](http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf)

---

## Round 1: adaboost

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/adar1.png height=450>

[http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf](http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf)

---

## Round 2 & 3

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/ada2.png height=450>

[http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf](http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf)


---

## Completed classifier

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/ada3.png height=450>

[http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf](http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf)

---

## Boosting in R 

* Boosting can be used with any subset of classifiers
* One large subclass is [gradient boosting](http://en.wikipedia.org/wiki/Gradient_boosting)
* R has multiple boosting libraries. Differences include the choice of basic classification functions and combination rules.
  * [gbm](http://cran.r-project.org/web/packages/gbm/index.html) - boosting with trees.
  * [mboost](http://cran.r-project.org/web/packages/mboost/index.html) - model based boosting
  * [ada](http://cran.r-project.org/web/packages/ada/index.html) - statistical boosting based on [additive logistic regression](http://projecteuclid.org/DPubS?service=UI&version=1.0&verb=Display&handle=euclid.aos/1016218223)
  * [gamBoost](http://cran.r-project.org/web/packages/GAMBoost/index.html) for boosting generalized additive models
* Most of these are available in the caret package 



---

## Wage example


```r
library(ISLR); data(Wage); library(ggplot2); library(caret);
Wage <- subset(Wage,select=-c(logwage))
inTrain <- createDataPartition(y=Wage$wage,
                              p=0.7, list=FALSE)
training <- Wage[inTrain,]; testing <- Wage[-inTrain,]
```



---

## Fit the model


```r
modFit <- train(wage ~ ., method="gbm",data=training,verbose=FALSE)
print(modFit)
```

```
2102 samples
  10 predictors

No pre-processing
Resampling: Bootstrap (25 reps) 

Summary of sample sizes: 2102, 2102, 2102, 2102, 2102, 2102, ... 

Resampling results across tuning parameters:

  interaction.depth  n.trees  RMSE  Rsquared  RMSE SD  Rsquared SD
  1                  50       30    0.3       1        0.02       
  1                  100      30    0.3       1        0.02       
  1                  200      30    0.3       1        0.02       
  2                  50       30    0.3       1        0.02       
  2                  100      30    0.3       1        0.02       
  2                  200      30    0.3       1        0.02       
  3                  50       30    0.3       1        0.02       
  3                  100      30    0.3       1        0.02       
  3                  200      30    0.3       1        0.02       

Tuning parameter 'shrinkage' was held constant at a value of 0.1
RMSE was used to select the optimal model using  the smallest value.
The final values used for the model were interaction.depth = 2, n.trees = 100 and shrinkage = 0.1. 
```


---

## Plot the results


```r
qplot(predict(modFit,testing),wage,data=testing)
```

<div class="rimage center"><img src="fig/unnamed-chunk-2.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" class="plot" /></div>




---

## Notes and further reading

* A couple of nice tutorials for boosting
  * Freund and Shapire - [http://www.cc.gatech.edu/~thad/6601-gradAI-fall2013/boosting.pdf](http://www.cc.gatech.edu/~thad/6601-gradAI-fall2013/boosting.pdf)
  * Ron Meir- [http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf](http://webee.technion.ac.il/people/rmeir/BoostingTutorial.pdf)
* Boosting, random forests, and model ensembling are the most common tools that win Kaggle and other prediction contests. 
  * [http://www.netflixprize.com/assets/GrandPrize2009_BPC_BigChaos.pdf](http://www.netflixprize.com/assets/GrandPrize2009_BPC_BigChaos.pdf)
  * [https://kaggle2.blob.core.windows.net/wiki-files/327/09ccf652-8c1c-4a3d-b979-ce2369c985e4/Willem%20Mestrom%20-%20Milestone%201%20Description%20V2%202.pdf](https://kaggle2.blob.core.windows.net/wiki-files/327/09ccf652-8c1c-4a3d-b979-ce2369c985e4/Willem%20Mestrom%20-%20Milestone%201%20Description%20V2%202.pdf)
  
