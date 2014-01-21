---
title       : Types of Data Science Questions
subtitle    : 
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




## Types of Data Science Questions

__In approximate order of difficulty__
* Descriptive
* Exploratory
* Inferential
* Predictive
* Causal
* Mechanistic


---

## About descriptive analyses
__Goal__: Describe a set of data

* The first kind of data analysis performed
* Commonly applied to census data
* The description and interpretation are different steps
* Descriptions can usually not be generalized without additional statistical modeling


---


## Descriptive analysis

<img class=center src="../../assets/img/01_DataScientistToolbox/census2010.png" height=400 />

[http://www.census.gov/2010census/](http://www.census.gov/2010census/)

---

## Descriptive analysis

<img class=center src="../../assets/img/01_DataScientistToolbox/ngrams.png" height=400 />


[http://books.google.com/ngrams](http://books.google.com/ngrams)

---

## About exploratory analysis

__Goal__: Find relationships you didn't know about

* Exploratory models are good for discovering new connections
* They are also useful for defining future studies
* Exploratory analyses are usually not the final say
* Exploratory analyses alone should not be used for generalizing/predicting
* [Correlation does not imply causation](http://en.wikipedia.org/wiki/Correlation_does_not_imply_causation)

---

## Exploratory analysis

<img class=center src="../../assets/img/01_DataScientistToolbox/brain.jpg" height=400 />

[Liu et al. (2012) Scientific Reports](http://www.nature.com/srep/2012/121115/srep00834/full/srep00834.html)


---

## Exploratory analysis

<img class=center src="../../assets/img/01_DataScientistToolbox/sloan.png" height=400 />


[http://www.sdss.org/](http://www.sdss.org/)


---

## About inferential analysis

__Goal__: Use a relatively small sample of data to say something about a bigger population

* Inference is commonly the goal of statistical models
* Inference involves estimating both the quantity you care about and your uncertainty about your estimate
* Inference depends heavily on both the population and the sampling scheme

---

## Inferential analysis

<img class=center src="../../assets/img/01_DataScientistToolbox/pollution.png" height=400 />


[Correia et al. (2013) Epidemiology](http://journals.lww.com/epidem/Fulltext/2013/01000/Effect_of_Air_Pollution_Control_on_Life_Expectancy.4.aspx)


---

## About predictive analysis

__Goal__: To use the data on some objects to predict values for another object

* If $X$ predicts $Y$ it does not mean that $X$ causes $Y$
* Accurate prediction depends heavily on measuring the right variables
* Although there are better and worse prediction models, more data and a simple model [works really well](http://www.youtube.com/watch?v=yvDCzhbjYWs)
* Prediction is very hard, especially about the future [references](http://www.larry.denenberg.com/predictions.html) 

---

## Predictive analysis

<img class=center src="../../assets/img/01_DataScientistToolbox/fivethirtyeight.png" height=400 />

[http://fivethirtyeight.blogs.nytimes.com/](http://fivethirtyeight.blogs.nytimes.com/)

---

## Predictive analysis

<img class=center src="../../assets/img/01_DataScientistToolbox/target.png" height=400 />


[http://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/](http://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/)

---

## About causal analysis

__Goal__: To find out what happens to one variable when you make another variable change. 

* Usually randomized studies are required to identify causation
* There are approaches to inferring causation in non-randomized studies, but they are complicated and sensitive to assumptions
* Causal relationships are usually identified as average effects, but may not apply to every individual
* Causal models are usually the "gold standard" for data analysis

---

## Causal analysis

<img class=center src="../../assets/img/01_DataScientistToolbox/feces.png" height=400 />


[van Nood et al. (2013) NEJM](http://www.nejm.org/doi/full/10.1056/NEJMoa1205037?query=featured_home)

---

## About mechanistic analysis

__Goal__: Understand the exact changes in variables that lead to changes in other variables for individual objects.

* Incredibly hard to infer, except in simple situations
* Usually modeled by a deterministic set of equations (physical/engineering science)
* Generally the random component of the data is measurement error
* If the equations are known but the parameters are not, they may be inferred with data analysis

---

## Mechanistic analysis

<img class=center src="../../assets/img/01_DataScientistToolbox/mechanistic.png" height=400 />

[http://www.fhwa.dot.gov/resourcecenter/teams/pavement/pave_3pdg.pdf](http://www.fhwa.dot.gov/resourcecenter/teams/pavement/pave_3pdg.pdf)


