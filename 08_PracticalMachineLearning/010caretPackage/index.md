---
title       : The caret package
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





## The caret R package

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/caret.png height=400>

[http://caret.r-forge.r-project.org/](http://caret.r-forge.r-project.org/)

---

## Caret functionality

* Some preprocessing (cleaning)
  * preProcess
* Data splitting
  * createDataPartition
  * createResample
  * createTimeSlices
* Training/testing functions
  * train
  * predict
* Model comparison
  * confusionMatrix

---

## Machine learning algorithms in R

* Linear discriminant analysis
* Regression
* Naive Bayes
* Support vector machines
* Classification and regression trees
* Random forests
* Boosting
* etc. 

---

## Why caret? 

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/predicttable.png height=250>

http://www.edii.uclm.es/~useR-2013/Tutorials/kuhn/user_caret_2up.pdf


--- 

## SPAM Example: Data splitting


```r
library(caret); library(kernlab); data(spam)
inTrain <- createDataPartition(y=spam$type,
                              p=0.75, list=FALSE)
training <- spam[inTrain,]
testing <- spam[-inTrain,]
dim(training)
```

```
[1] 3451   58
```



--- 

## SPAM Example: Fit a model


```r
set.seed(32343)
modelFit <- train(type ~.,data=training, method="glm")
modelFit
```

```
Generalized Linear Model 

3451 samples
  57 predictors
   2 classes: 'nonspam', 'spam' 

No pre-processing
Resampling: Bootstrapped (25 reps) 

Summary of sample sizes: 3451, 3451, 3451, 3451, 3451, 3451, ... 

Resampling results

  Accuracy  Kappa  Accuracy SD  Kappa SD
  0.9       0.8    0.02         0.04    

 
```



--- 

## SPAM Example: Final model


```r
modelFit <- train(type ~.,data=training, method="glm")
modelFit$finalModel
```

```

Call:  NULL

Coefficients:
      (Intercept)               make            address                all              num3d  
        -1.78e+00          -7.76e-01          -1.39e-01           3.68e-02           1.94e+00  
              our               over             remove           internet              order  
         7.61e-01           6.66e-01           2.34e+00           5.94e-01           4.10e-01  
             mail            receive               will             people             report  
         4.08e-02           2.71e-01          -1.08e-01          -2.28e-01          -1.14e-01  
        addresses               free           business              email                you  
         2.16e+00           8.78e-01           6.49e-01           1.38e-01           6.91e-02  
           credit               your               font             num000              money  
         8.00e-01           2.17e-01           2.17e-01           2.04e+00           1.95e+00  
               hp                hpl             george             num650                lab  
        -1.82e+00          -9.17e-01          -7.50e+00           3.33e-01          -1.89e+00  
             labs             telnet             num857               data             num415  
        -7.15e-02          -2.33e-01           1.15e+00          -7.58e-01           1.33e+00  
            num85         technology            num1999              parts                 pm  
        -2.15e+00           1.27e+00          -6.55e-02           9.83e-01          -8.28e-01  
           direct                 cs            meeting           original            project  
        -2.69e-01          -4.55e+01          -2.50e+00          -6.93e-01          -2.01e+00  
               re                edu              table         conference      charSemicolon  
        -5.54e-01          -1.94e+00          -1.32e+00          -3.83e+00          -1.21e+00  
 charRoundbracket  charSquarebracket    charExclamation         charDollar           charHash  
        -1.92e-01          -1.92e-01           5.27e-01           6.86e+00           2.11e+00  
       capitalAve        capitalLong       capitalTotal  
         3.60e-02           1.05e-02           8.13e-04  

Degrees of Freedom: 3450 Total (i.e. Null);  3393 Residual
Null Deviance:	    4630 
Residual Deviance: 1260 	AIC: 1370
```



--- 

## SPAM Example: Prediction


```r
predictions <- predict(modelFit,newdata=testing)
predictions
```

```
   [1] spam    spam    spam    nonspam nonspam nonspam spam    spam    spam    spam    spam   
  [12] spam    spam    spam    spam    spam    spam    spam    nonspam spam    spam    spam   
  [23] nonspam spam    nonspam nonspam spam    spam    spam    spam    spam    spam    spam   
  [34] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
  [45] spam    spam    spam    spam    nonspam spam    nonspam spam    spam    spam    spam   
  [56] spam    nonspam nonspam spam    spam    spam    spam    spam    nonspam spam    spam   
  [67] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
  [78] nonspam nonspam nonspam spam    spam    nonspam spam    nonspam nonspam spam    spam   
  [89] spam    spam    spam    spam    spam    spam    nonspam spam    spam    spam    spam   
 [100] spam    spam    spam    nonspam spam    nonspam spam    spam    spam    spam    spam   
 [111] spam    spam    spam    spam    nonspam spam    spam    spam    spam    spam    spam   
 [122] spam    spam    spam    spam    spam    spam    spam    nonspam spam    spam    nonspam
 [133] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [144] spam    spam    spam    nonspam spam    spam    spam    spam    spam    spam    spam   
 [155] nonspam spam    nonspam spam    nonspam spam    spam    spam    spam    spam    spam   
 [166] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [177] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [188] nonspam spam    spam    nonspam spam    nonspam spam    spam    spam    spam    spam   
 [199] spam    spam    spam    spam    spam    nonspam spam    spam    spam    spam    spam   
 [210] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [221] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [232] spam    spam    spam    spam    spam    spam    nonspam spam    spam    nonspam spam   
 [243] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [254] spam    spam    spam    spam    nonspam spam    spam    spam    spam    spam    spam   
 [265] nonspam spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [276] spam    spam    spam    spam    spam    spam    nonspam spam    spam    spam    spam   
 [287] nonspam nonspam spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [298] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [309] spam    spam    spam    nonspam spam    spam    spam    spam    spam    spam    spam   
 [320] spam    spam    spam    spam    spam    spam    spam    spam    spam    nonspam spam   
 [331] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [342] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [353] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [364] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [375] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [386] nonspam spam    spam    spam    spam    nonspam spam    spam    spam    spam    spam   
 [397] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [408] spam    spam    nonspam nonspam spam    spam    spam    spam    spam    spam    nonspam
 [419] spam    spam    spam    spam    nonspam spam    nonspam spam    nonspam spam    spam   
 [430] nonspam nonspam spam    nonspam nonspam spam    nonspam spam    spam    spam    spam   
 [441] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [452] spam    spam    spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [463] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [474] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [485] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [496] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam
 [507] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [518] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [529] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [540] nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [551] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [562] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam
 [573] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [584] nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam
 [595] nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam
 [606] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [617] spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [628] nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam
 [639] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [650] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam
 [661] nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam
 [672] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [683] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [694] nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam
 [705] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [716] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [727] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [738] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [749] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [760] nonspam spam    spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [771] nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [782] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [793] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [804] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [815] nonspam nonspam nonspam spam    spam    nonspam nonspam nonspam nonspam nonspam nonspam
 [826] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [837] nonspam nonspam spam    nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam
 [848] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [859] nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [870] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [881] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [892] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [903] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [914] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [925] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [936] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [947] nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [958] nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam
 [969] nonspam nonspam nonspam spam    nonspam nonspam spam    nonspam nonspam nonspam nonspam
 [980] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [991] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1002] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1013] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1024] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1035] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1046] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam   
[1057] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam   
[1068] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1079] nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam
[1090] nonspam nonspam nonspam nonspam nonspam spam    spam    nonspam nonspam nonspam nonspam
[1101] nonspam nonspam nonspam spam    spam    nonspam nonspam nonspam nonspam spam    nonspam
[1112] nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam
[1123] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1134] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1145] nonspam nonspam nonspam nonspam nonspam nonspam
Levels: nonspam spam
```


--- 

## SPAM Example: Confusion Matrix


```r
confusionMatrix(predictions,testing$type)
```

```
Confusion Matrix and Statistics

          Reference
Prediction nonspam spam
   nonspam     665   54
   spam         32  399
                                       
               Accuracy : 0.925        
                 95% CI : (0.908, 0.94)
    No Information Rate : 0.606        
    P-Value [Acc > NIR] : <2e-16       
                                       
                  Kappa : 0.842        
 Mcnemar's Test P-Value : 0.0235       
                                       
            Sensitivity : 0.954        
            Specificity : 0.881        
         Pos Pred Value : 0.925        
         Neg Pred Value : 0.926        
             Prevalence : 0.606        
         Detection Rate : 0.578        
   Detection Prevalence : 0.625        
      Balanced Accuracy : 0.917        
                                       
       'Positive' Class : nonspam      
                                       
```


---

## Further information

* Caret tutorials:
  * [http://www.edii.uclm.es/~useR-2013/Tutorials/kuhn/user_caret_2up.pdf](http://www.edii.uclm.es/~useR-2013/Tutorials/kuhn/user_caret_2up.pdf)
  * [http://cran.r-project.org/web/packages/caret/vignettes/caret.pdf](http://cran.r-project.org/web/packages/caret/vignettes/caret.pdf)
* A paper introducing the caret package
  * [http://www.jstatsoft.org/v28/i05/paper](http://www.jstatsoft.org/v28/i05/paper)
