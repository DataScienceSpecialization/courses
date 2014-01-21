---
title       : Training options
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






## SPAM Example


```r
library(caret); library(kernlab); data(spam)
inTrain <- createDataPartition(y=spam$type,
                              p=0.75, list=FALSE)
training <- spam[inTrain,]
testing <- spam[-inTrain,]
modelFit <- train(type ~.,data=training, method="glm")
```


---

## Train options


```r
args(train.default)
```

```
function (x, y, method = "rf", preProcess = NULL, ..., weights = NULL, 
    metric = ifelse(is.factor(y), "Accuracy", "RMSE"), maximize = ifelse(metric == 
        "RMSE", FALSE, TRUE), trControl = trainControl(), tuneGrid = NULL, 
    tuneLength = 3) 
NULL
```



---

## Metric options

__Continous outcomes__:
  * _RMSE_ = Root mean squared error
  * _RSquared_ = $R^2$ from regression models

__Categorical outcomes__:
  * _Accuracy_ = Fraction correct
  * _Kappa_ = A measure of [concordance](http://en.wikipedia.org/wiki/Cohen%27s_kappa)
  
  

--- 

## trainControl


```r
args(trainControl)
```

```
function (method = "boot", number = ifelse(method %in% c("cv", 
    "repeatedcv"), 10, 25), repeats = ifelse(method %in% c("cv", 
    "repeatedcv"), 1, number), p = 0.75, initialWindow = NULL, 
    horizon = 1, fixedWindow = TRUE, verboseIter = FALSE, returnData = TRUE, 
    returnResamp = "final", savePredictions = FALSE, classProbs = FALSE, 
    summaryFunction = defaultSummary, selectionFunction = "best", 
    custom = NULL, preProcOptions = list(thresh = 0.95, ICAcomp = 3, 
        k = 5), index = NULL, indexOut = NULL, timingSamps = 0, 
    predictionBounds = rep(FALSE, 2), seeds = NA, allowParallel = TRUE) 
NULL
```


--- 

## trainControl resampling

* _method_
  * _boot_ = bootstrapping
  * _boot632_ = bootstrapping with adjustment
  * _cv_ = cross validation
  * _repeatedcv_ = repeated cross validation
  * _LOOCV_ = leave one out cross validation
* _number_
  * For boot/cross validation
  * Number of subsamples to take
* _repeats_
  * Number of times to repeate subsampling
  * If big this can _slow things down_


---

## Setting the seed

* It is often useful to set an overall seed
* You can also set a seed for each resample
* Seeding each resample is useful for parallel fits
* _seed_ must be a list with
  * Length equal to number of resamples
  * Length of each element equal to number of models fit



--- 



## seed example


```r
set.seed(1235); seeds <- vector(26,mode="list")
for(i in 1:26){seeds[[i]] <- floor(runif(1,0,1e5))}
trControl <- trainControl(seeds=seeds)
```




--- 


## seed example


```r
modelFit2 <- train(type ~.,data=training, method="glm")
modelFit2
```

```
3451 samples
  57 predictors
   2 classes: 'nonspam', 'spam' 

No pre-processing
Resampling: Bootstrap (25 reps) 

Summary of sample sizes: 3451, 3451, 3451, 3451, 3451, 3451, ... 

Resampling results

  Accuracy  Kappa  Accuracy SD  Kappa SD
  0.9       0.8    0.006        0.01    

 
```



--- 

## seed example


```r
modelFit3 <- train(type ~.,data=training, method="glm")
modelFit3
```

```
3451 samples
  57 predictors
   2 classes: 'nonspam', 'spam' 

No pre-processing
Resampling: Bootstrap (25 reps) 

Summary of sample sizes: 3451, 3451, 3451, 3451, 3451, 3451, ... 

Resampling results

  Accuracy  Kappa  Accuracy SD  Kappa SD
  0.9       0.8    0.006        0.01    

 
```


