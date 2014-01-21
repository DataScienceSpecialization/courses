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
  lib: ../../libraries
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

[add link](??)


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
3451 samples
  57 predictors
   2 classes: 'nonspam', 'spam' 

No pre-processing
Resampling: Bootstrap (25 reps) 

Summary of sample sizes: 3451, 3451, 3451, 3451, 3451, 3451, ... 

Resampling results

  Accuracy  Kappa  Accuracy SD  Kappa SD
  0.9       0.8    0.01         0.03    

 
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
        -1.73e+00          -4.85e-01          -1.15e-01           5.40e-02           2.23e+00  
              our               over             remove           internet              order  
         6.90e-01           8.38e-01           2.23e+00           5.08e-01           5.39e-01  
             mail            receive               will             people             report  
         5.66e-02          -2.76e-01          -5.43e-02          -5.92e-02           2.61e-01  
        addresses               free           business              email                you  
         1.76e+00           1.11e+00           1.03e+00           8.93e-02           8.89e-02  
           credit               your               font             num000              money  
         1.22e+00           1.99e-01           1.04e-01           1.78e+00           8.49e-01  
               hp                hpl             george             num650                lab  
        -2.40e+00          -8.10e-01          -2.53e+01           4.39e-01          -1.81e+00  
             labs             telnet             num857               data             num415  
        -2.53e-01          -4.38e+00           2.07e+00          -5.07e-01           1.41e+00  
            num85         technology            num1999              parts                 pm  
        -2.12e+00           8.73e-01           1.31e-01           7.87e-01          -1.16e+00  
           direct                 cs            meeting           original            project  
         1.83e+00          -3.99e+01          -2.17e+00          -1.36e+00          -1.81e+00  
               re                edu              table         conference      charSemicolon  
        -8.80e-01          -1.30e+00          -2.43e+00          -3.81e+00          -1.25e+00  
 charRoundbracket  charSquarebracket    charExclamation         charDollar           charHash  
        -2.09e-02          -6.97e-01           2.57e-01           4.88e+00           2.45e+00  
       capitalAve        capitalLong       capitalTotal  
         9.79e-02           7.49e-03           7.63e-04  

Degrees of Freedom: 3450 Total (i.e. Null);  3393 Residual
Null Deviance:	    4630 
Residual Deviance: 1320 	AIC: 1440
```



--- 

## SPAM Example: Prediction


```r
predictions <- predict(modelFit,newdata=testing)
predictions
```

```
   [1] spam    spam    spam    spam    spam    spam    nonspam spam    spam    spam    spam   
  [12] spam    spam    spam    spam    spam    nonspam spam    spam    nonspam spam    spam   
  [23] spam    spam    spam    spam    spam    nonspam spam    spam    spam    spam    spam   
  [34] spam    spam    spam    spam    spam    nonspam spam    spam    spam    spam    spam   
  [45] spam    spam    spam    spam    spam    spam    nonspam spam    spam    spam    spam   
  [56] spam    spam    spam    spam    spam    nonspam spam    nonspam spam    spam    spam   
  [67] spam    spam    spam    nonspam spam    spam    spam    spam    spam    spam    spam   
  [78] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
  [89] spam    nonspam nonspam nonspam spam    spam    spam    spam    spam    spam    spam   
 [100] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    nonspam
 [111] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [122] spam    spam    spam    spam    nonspam nonspam nonspam spam    spam    spam    spam   
 [133] spam    spam    spam    spam    spam    spam    spam    nonspam spam    spam    spam   
 [144] spam    spam    spam    spam    nonspam spam    spam    spam    spam    spam    nonspam
 [155] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [166] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [177] spam    spam    spam    spam    nonspam spam    spam    spam    spam    spam    spam   
 [188] spam    spam    spam    spam    spam    nonspam spam    spam    nonspam spam    spam   
 [199] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [210] spam    spam    spam    spam    nonspam spam    spam    spam    spam    spam    spam   
 [221] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [232] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [243] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [254] nonspam spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [265] spam    spam    spam    spam    spam    nonspam spam    nonspam spam    spam    spam   
 [276] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [287] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [298] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [309] spam    spam    spam    spam    spam    spam    nonspam spam    spam    spam    spam   
 [320] nonspam spam    spam    spam    spam    spam    spam    nonspam spam    spam    spam   
 [331] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [342] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [353] spam    spam    spam    spam    spam    spam    nonspam spam    spam    spam    spam   
 [364] spam    spam    nonspam nonspam spam    spam    spam    spam    spam    spam    spam   
 [375] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [386] spam    spam    spam    nonspam nonspam nonspam spam    spam    spam    spam    nonspam
 [397] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [408] spam    spam    spam    spam    nonspam spam    spam    spam    spam    nonspam spam   
 [419] spam    nonspam spam    spam    nonspam spam    spam    spam    nonspam spam    spam   
 [430] spam    spam    spam    spam    spam    nonspam spam    spam    spam    spam    spam   
 [441] spam    spam    spam    spam    spam    spam    spam    spam    spam    spam    spam   
 [452] spam    spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam
 [463] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [474] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam
 [485] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [496] nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam
 [507] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [518] nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [529] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [540] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam   
 [551] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [562] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [573] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [584] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [595] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam   
 [606] nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam
 [617] nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam
 [628] spam    spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [639] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [650] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam
 [661] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [672] nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam
 [683] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [694] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam   
 [705] nonspam nonspam spam    spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [716] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [727] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [738] nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam
 [749] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [760] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [771] nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam
 [782] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [793] nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [804] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [815] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [826] spam    spam    nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam spam   
 [837] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [848] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam
 [859] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [870] nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam
 [881] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [892] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [903] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [914] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [925] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [936] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [947] nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam spam   
 [958] nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam
 [969] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [980] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
 [991] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1002] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1013] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1024] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1035] nonspam nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam spam   
[1046] nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1057] nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam nonspam
[1068] spam    nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam nonspam
[1079] nonspam nonspam spam    nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam
[1090] nonspam nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam nonspam nonspam
[1101] nonspam nonspam nonspam nonspam nonspam spam    nonspam nonspam spam    nonspam nonspam
[1112] nonspam nonspam spam    spam    spam    nonspam nonspam nonspam nonspam nonspam nonspam
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
   nonspam     657   42
   spam         40  411
                                        
               Accuracy : 0.929         
                 95% CI : (0.912, 0.943)
    No Information Rate : 0.606         
    P-Value [Acc > NIR] : <2e-16        
                                        
                  Kappa : 0.851         
 Mcnemar's Test P-Value : 0.912         
                                        
            Sensitivity : 0.943         
            Specificity : 0.907         
         Pos Pred Value : 0.940         
         Neg Pred Value : 0.911         
             Prevalence : 0.606         
         Detection Rate : 0.571         
   Detection Prevalence : 0.608         
                                        
       'Positive' Class : nonspam       
                                        
```


---

## Further information

* Caret tutorials:
  * [http://www.edii.uclm.es/~useR-2013/Tutorials/kuhn/user_caret_2up.pdf](http://www.edii.uclm.es/~useR-2013/Tutorials/kuhn/user_caret_2up.pdf)
  * [http://cran.r-project.org/web/packages/caret/vignettes/caret.pdf](http://cran.r-project.org/web/packages/caret/vignettes/caret.pdf)
* A paper introducing the caret package
  * [http://www.jstatsoft.org/v28/i05/paper](http://www.jstatsoft.org/v28/i05/paper)
