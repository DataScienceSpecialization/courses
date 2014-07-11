---
title       : Introduction to regression
subtitle    : Regression
author      : Brian Caffo, Jeff Leek and Roger Peng
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


## A famous motivating example

<img class=center src=fig/galton.jpg height=150>

### (Perhaps surprisingly, this example is still relevant)

<img class=center src=fig/height.png height=150>

[http://www.nature.com/ejhg/journal/v17/n8/full/ejhg20095a.html](http://www.nature.com/ejhg/journal/v17/n8/full/ejhg20095a.html)

[Predicting height: the Victorian approach beats modern genomics](http://www.wired.com/wiredscience/2009/03/predicting-height-the-victorian-approach-beats-modern-genomics/)

---
## Recent simply statistics post
(Simply Statistics is a blog by Jeff Leek, Roger Peng and 
Rafael Irizarry, who wrote this post, link on the image)

<a href="http://simplystatistics.org/2013/01/28/data-supports-claim-that-if-kobe-stops-ball-hogging-the-lakers-will-win-more/">
<img class=center src=http://simplystatistics.org/wp-content/uploads/2013/01/kobelakers1-1024x1024.png height=250></img>
</a>

- "Data supports claim that if Kobe stops ball hogging the Lakers will win more"
- "Linear regression suggests that an increase of 1% in % of shots taken by Kobe results in a drop of 1.16 points (+/- 0.22)  in score differential."
- How was it done? Do you agree with the analysis? 






---
## Questions for this class
* Consider trying to answer the following kinds of questions:
  * To use the parents' heights to predict childrens' heights.
  * To try to find a parsimonious, easily described mean 
    relationship between parent and children's heights.
  * To investigate the variation in childrens' heights that appears 
  unrelated to parents' heights (residual variation).
  * To quantify what impact genotype information has beyond parental height in explaining child height.
  * To figure out how/whether and what assumptions are needed to
    generalize findings beyond the data in question.  
  * Why do children of very tall parents tend to be 
    tall, but a little shorter than their parents and why children of very short parents tend to be short, but a little taller than their parents? (This is a famous question called 'Regression to the mean'.)

---
## Galton's Data

* Let's look at the data first, used by Francis Galton in 1885. 
* Galton was a statistician who invented the term and concepts
  of regression and correlation, founded the journal Biometrika,
  and was the cousin of Charles Darwin.
* You may need to run `install.packages("UsingR")` if the `UsingR` library is not installed.
* Let's look at the marginal (parents disregarding children and children disregarding parents) distributions first. 
  * Parent distribution is all heterosexual couples.
  * Correction for gender via multiplying female heights by 1.08.
  * Overplotting is an issue from discretization.

---
## Code


```r
library(UsingR); data(galton)
par(mfrow=c(1,2))
hist(galton$child,col="blue",breaks=100)
hist(galton$parent,col="blue",breaks=100)
```

<div class="rimage center"><img src="fig/galton.png" title="plot of chunk galton" alt="plot of chunk galton" class="plot" /></div>

---
## Finding the middle via least squares
* Consider only the children's heights. 
  * How could one describe the "middle"?
  * One definition, let $Y_i$ be the height of child $i$ for $i = 1, \ldots, n = 928$, then define the middle as the value of $\mu$
  that minimizes $$\sum_{i=1}^n (Y_i - \mu)^2$$
* This is physical center of mass of the histrogram.
* You might have guessed that the answer $\mu = \bar X$.


---
## Experiment
### Use R studio's manipulate to see what value of $\mu$ minimizes the sum of the squared deviations.

```
library(manipulate)
myHist <- function(mu){
  hist(galton$child,col="blue",breaks=100)
  lines(c(mu, mu), c(0, 150),col="red",lwd=5)
  mse <- mean((galton$child - mu)^2)
  text(63, 150, paste("mu = ", mu))
  text(63, 140, paste("MSE = ", round(mse, 2)))
}
manipulate(myHist(mu), mu = slider(62, 74, step = 0.5))
```

---
## The least squares estimate is the empirical mean

```r
  hist(galton$child,col="blue",breaks=100)
  meanChild <- mean(galton$child)
  lines(rep(meanChild,100),seq(0,150,length=100),col="red",lwd=5)
```

<div class="rimage center"><img src="fig/lsm.png" title="plot of chunk lsm" alt="plot of chunk lsm" class="plot" /></div>

---
### The math follows as:
$$ 
\begin{align} 
\sum_{i=1}^n (Y_i - \mu)^2 & = \
\sum_{i=1}^n (Y_i - \bar Y + \bar Y - \mu)^2 \\ 
& = \sum_{i=1}^n (Y_i - \bar Y)^2 + \
2 \sum_{i=1}^n (Y_i - \bar Y)  (\bar Y - \mu) +\
\sum_{i=1}^n (\bar Y - \mu)^2 \\
& = \sum_{i=1}^n (Y_i - \bar Y)^2 + \
2 (\bar Y - \mu) \sum_{i=1}^n (Y_i - \bar Y)  +\
\sum_{i=1}^n (\bar Y - \mu)^2 \\
& = \sum_{i=1}^n (Y_i - \bar Y)^2 + \
2 (\bar Y - \mu)  (\sum_{i=1}^n Y_i - n \bar Y) +\
\sum_{i=1}^n (\bar Y - \mu)^2 \\
& = \sum_{i=1}^n (Y_i - \bar Y)^2 + \sum_{i=1}^n (\bar Y - \mu)^2\\ 
& \geq \sum_{i=1}^n (Y_i - \bar Y)^2 \
\end{align} 
$$

---
## Comparing childrens' heights and their parents' heights


```r
plot(galton$parent,galton$child,pch=19,col="blue")
```

<div class="rimage center"><img src="fig/unnamed-chunk-1.png" title="plot of chunk unnamed-chunk-1" alt="plot of chunk unnamed-chunk-1" class="plot" /></div>

---
Size of point represents number of points at that (X, Y) combination (See the Rmd file for the code).

<div class="rimage center"><img src="fig/freqGalton.png" title="plot of chunk freqGalton" alt="plot of chunk freqGalton" class="plot" /></div>

---
## Regression through the origin
* Suppose that $X_i$ are the parents' heights.
* Consider picking the slope $\beta$ that minimizes $$\sum_{i=1}^n (Y_i - X_i \beta)^2$$
* This is exactly using the origin as a pivot point picking the
line that minimizes the sum of the squared vertical distances
of the points to the line
* Use R studio's  manipulate function to experiment
* Subtract the means so that the origin is the mean of the parent
and children's heights

---
```
myPlot <- function(beta){
  y <- galton$child - mean(galton$child)
  x <- galton$parent - mean(galton$parent)
  freqData <- as.data.frame(table(x, y))
  names(freqData) <- c("child", "parent", "freq")
  plot(
    as.numeric(as.vector(freqData$parent)), 
    as.numeric(as.vector(freqData$child)),
    pch = 21, col = "black", bg = "lightblue",
    cex = .15 * freqData$freq, 
    xlab = "parent", 
    ylab = "child"
    )
  abline(0, beta, lwd = 3)
  points(0, 0, cex = 2, pch = 19)
  mse <- mean( (y - beta * x)^2 )
  title(paste("beta = ", beta, "mse = ", round(mse, 3)))
}
manipulate(myPlot(beta), beta = slider(0.6, 1.2, step = 0.02))
```

---
## The solution 
### In the next few lectures we'll talk about why this is the solution

```r
lm(I(child - mean(child))~ I(parent - mean(parent)) - 1, data = galton)
```

```

Call:
lm(formula = I(child - mean(child)) ~ I(parent - mean(parent)) - 
    1, data = galton)

Coefficients:
I(parent - mean(parent))  
                   0.646  
```

---
## Visualizing the best fit line
### Size of points are frequencies at that X, Y combination
<div class="rimage center"><img src="fig/unnamed-chunk-3.png" title="plot of chunk unnamed-chunk-3" alt="plot of chunk unnamed-chunk-3" class="plot" /></div>

