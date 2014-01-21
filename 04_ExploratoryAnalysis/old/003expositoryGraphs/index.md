---
title       : Expository graphs
subtitle    : 
author      : Roger D. Peng, Assistant Professor of Biostatistics 
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





## Why do we use graphs in data analysis? 

* To understand data properties
* To find patterns in data
* To suggest modeling strategies
* To "debug" analyses
* To communicate results

---

## Expository graphs

* To understand data properties
* To find patterns in data
* To suggest modeling strategies
* To "debug" analyses
* <redtext> To communicate results </redtex>


---

## Characteristics of expository graphs

* The goal is to communicate information
* Information density is generally good
* Color/size are used both for aesthetics and communication
* Expository figures have understandable axes, titles, and legends


---

## Housing data

<img class=center src=../../assets/img/acs.png height=400>

<br>






```r
pData <- read.csv("./data/ss06pid.csv")
```



---

## Axes

Important parameters: _xlab_,_ylab_,_cex.lab_,_cex.axis_

```r
plot(pData$JWMNP,pData$WAGP,pch=19,col="blue",cex=0.5,
     xlab="Travel time (min)",ylab="Last 12 month wages (dollars)")
```

<div class="rimage center"><img src="fig/unnamed-chunk-1.png" title="plot of chunk unnamed-chunk-1" alt="plot of chunk unnamed-chunk-1" class="plot" /></div>



---

## Axes


```r
plot(pData$JWMNP,pData$WAGP,pch=19,col="blue",cex=0.5,
     xlab="Travel time (min)",ylab="Last 12 month wages (dollars)",cex.lab=2,cex.axis=1.5)
```

<div class="rimage center"><img src="fig/unnamed-chunk-2.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" class="plot" /></div>



---

## Legends

* Important paramters: _x_,_y_,_legend_, _other plotting parameters_

```r
plot(pData$JWMNP,pData$WAGP,pch=19,col="blue",cex=0.5,xlab="TT (min)",ylab="Wages (dollars)")
legend(100,200000,legend="All surveyed",col="blue",pch=19,cex=0.5)
```

<div class="rimage center"><img src="fig/unnamed-chunk-3.png" title="plot of chunk unnamed-chunk-3" alt="plot of chunk unnamed-chunk-3" class="plot" /></div>


---

## Legends



```r
plot(pData$JWMNP,pData$WAGP,pch=19,cex=0.5,xlab="TT (min)",ylab="Wages (dollars)",col=pData$SEX)
legend(100,200000,legend=c("men","women"),col=c("black","red"),pch=c(19,19),cex=c(0.5,0.5))
```

<div class="rimage center"><img src="fig/unnamed-chunk-4.png" title="plot of chunk unnamed-chunk-4" alt="plot of chunk unnamed-chunk-4" class="plot" /></div>



---

## Titles


```r
plot(pData$JWMNP,pData$WAGP,pch=19,cex=0.5,xlab="CT (min)",
     ylab="Wages (dollars)",col=pData$SEX,main="Wages earned versus commute time")
legend(100,200000,legend=c("men","women"),col=c("black","red"),pch=c(19,19),cex=c(0.5,0.5))
```

<div class="rimage center"><img src="fig/unnamed-chunk-5.png" title="plot of chunk unnamed-chunk-5" alt="plot of chunk unnamed-chunk-5" class="plot" /></div>



---

## Multiple panels



```r
par(mfrow=c(1,2))
hist(pData$JWMNP,xlab="CT (min)",col="blue",breaks=100,main="")
plot(pData$JWMNP,pData$WAGP,pch=19,cex=0.5,xlab="CT (min)",ylab="Wages (dollars)",col=pData$SEX)
legend(100,200000,legend=c("men","women"),col=c("black","red"),pch=c(19,19),cex=c(0.5,0.5))
```

<div class="rimage center"><img src="fig/unnamed-chunk-6.png" title="plot of chunk unnamed-chunk-6" alt="plot of chunk unnamed-chunk-6" class="plot" /></div>




---

## Adding text


```r
par(mfrow=c(1,2))
hist(pData$JWMNP,xlab="CT (min)",col="blue",breaks=100,main="")
mtext(text="(a)",side=3,line=1)
plot(pData$JWMNP,pData$WAGP,pch=19,cex=0.5,xlab="CT (min)",ylab="Wages (dollars)",col=pData$SEX)
legend(100,200000,legend=c("men","women"),col=c("black","red"),pch=c(19,19),cex=c(0.5,0.5))
mtext(text="(b)",side=3,line=1)
```

<div class="rimage center"><img src="fig/unnamed-chunk-7.png" title="plot of chunk unnamed-chunk-7" alt="plot of chunk unnamed-chunk-7" class="plot" /></div>



---

## Figure captions

<div class="rimage center"><img src="fig/unnamed-chunk-8.png" title="plot of chunk unnamed-chunk-8" alt="plot of chunk unnamed-chunk-8" class="plot" /></div>


__Figure 1. Distribution of commute time and relationship to wage earned by sex__ __(a)__ Commute times in the American Community Survey (ACS) are right skewed. __(b)__ Commute times do not appear to be strongly correlated with wage for either sex. 

---

## Colorblindness


<img class=center src=../../assets/img/vischeck.png height=450>


[http://www.vischeck.com/](http://www.vischeck.com/vischeck/vischeckImage.php)


---

## Graphical workflow

* Start with a rough plot
* Tweak it to make it expository
* <redtext> Save the file </redtext>
* Include it in presentations

Saving files in R is done with graphics _devices_. Use the command ?Devices to see a list. Here we will go over the most popular devices. 

---

## Something to avoid

<img class=center src=../../assets/img/broman.png height=450>

[http://www.biostat.wisc.edu/~kbroman/topten_worstgraphs/](http://www.biostat.wisc.edu/~kbroman/topten_worstgraphs/)


---

## Something to aspire to

<img class=center src=../../assets/img/facebook.png height=450>

[http://www.facebook.com/notes/facebook-engineering/visualizing-friendships/469716398919](http://www.facebook.com/notes/facebook-engineering/visualizing-friendships/469716398919)



---

## Further resources

* [How to display data badly](http://www.jstor.org/discover/10.2307/2683253?uid=3739704&uid=2&uid=4&uid=3739256&sid=21101619120151)
* [The visual display of quantitative information](http://www.amazon.com/exec/obidos/ASIN/0961392142/7210-20)
* [Creating more effective graphs](http://www.amazon.com/exec/obidos/ASIN/047127402X/7210-20)
* [R Graphics Cookbook](http://www.amazon.com/R-Graphics-Cookbook-Winston-Chang/dp/1449316956)
* [ggplot2: Elegant Graphics for Data Analysis](http://www.amazon.com/ggplot2-Elegant-Graphics-Data-Analysis/dp/0387981403)
* [Flowing Data](http://flowingdata.com/)

