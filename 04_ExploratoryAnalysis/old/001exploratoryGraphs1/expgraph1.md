---
title       : Exploratory graphs
subtitle    : 
author      : Roger D. Peng, Associate Professor of Biostatistics 
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

## Exploratory graphs

* <redtext>To understand data properties</redtext>
* <redtext>To find patterns in data</redtext>
* <redtext>To suggest modeling strategies</redtext>
* <redtext>To "debug" analyses</redtext>
* To communicate results

---

## Characteristics of exploratory graphs

* They are made quickly
* A large number are made
* The goal is for personal understanding
* Axes/legends are generally cleaned up
* Color/size are primarily used for information

---

## Background - perceptual tasks

<img class=center src=../../assets/img/perceptual.png height=450>

[Graphical perception: Theory, Experimentation, and Applications to the Development of Graphical Models](http://www.jstor.org/discover/10.2307/2288400?uid=3739704&uid=2&uid=4&uid=3739256&sid=21101742782357)

---

## Position versus length

<img class=center src=../../assets/img/barcharts.png height=250>

[Graphical perception: Theory, Experimentation, and Applications to the Development of Graphical Models](http://www.jstor.org/discover/10.2307/2288400?uid=3739704&uid=2&uid=4&uid=3739256&sid=21101742782357)


---

## Position versus length - results

<img class=center src=../../assets/img/poslength.png height=250>


[Graphical perception: Theory, Experimentation, and Applications to the Development of Graphical Models](http://www.jstor.org/discover/10.2307/2288400?uid=3739704&uid=2&uid=4&uid=3739256&sid=21101742782357)

---

## Position versus angle

<img class=center src=../../assets/img/piechart.png height=300>


[Graphical perception: Theory, Experimentation, and Applications to the Development of Graphical Models](http://www.jstor.org/discover/10.2307/2288400?uid=3739704&uid=2&uid=4&uid=3739256&sid=21101742782357)


---

## Position versus angle - results


<img class=center src=../../assets/img/posangle.png height=200>

<br><br>
[Graphical perception: Theory, Experimentation, and Applications to the Development of Graphical Models](http://www.jstor.org/discover/10.2307/2288400?uid=3739704&uid=2&uid=4&uid=3739256&sid=21101742782357)


---

## More experimental results

<img class=center src=../../assets/img/bigexp.png height=450>

[Graphical Perception and Graphical Methods for Analyzing Scientific Data](http://www.sciencemag.org/content/229/4716/828.refs)

---

## Summary

* Use common scales when possible
* When possible use position comparisons
* Angle comparisons are frequently hard to interpret (no piecharts!)
* No 3-D barcharts. Please.


---

## Housing data


<img class=center src=../../assets/img/acs.png height=350>

<br>






```r
pData <- read.csv("./data/ss06pid.csv")
```



--- 

## Boxplots

Important parameters: _col_,_varwidth_,_names_,_horizontal_


```r
boxplot(pData$AGEP, col="blue")
```

<div class="rimage center"><img src="fig/unnamed-chunk-1.png" title="plot of chunk unnamed-chunk-1" alt="plot of chunk unnamed-chunk-1" class="plot" /></div>


--- 

## Boxplots


```r
pData <- transform(pData, DDRS = factor(DDRS))
boxplot(AGEP ~ DDRS, data = pData, col = "blue")
```

<div class="rimage center"><img src="fig/unnamed-chunk-2.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" class="plot" /></div>



--- 

## Boxplots


```r
boxplot(AGEP ~ DDRS, data = pData, col = c("blue", "orange"), 
        names = c("yes", "no"), varwidth = TRUE)
```

<div class="rimage center"><img src="fig/unnamed-chunk-3.png" title="plot of chunk unnamed-chunk-3" alt="plot of chunk unnamed-chunk-3" class="plot" /></div>




--- 

## Barplots


```r
barplot(table(pData$CIT), col = "blue")
```

<div class="rimage center"><img src="fig/unnamed-chunk-4.png" title="plot of chunk unnamed-chunk-4" alt="plot of chunk unnamed-chunk-4" class="plot" /></div>




--- 

## Histograms

Important parameters: _breaks_,_freq_,_col_,_xlab_,_ylab_, _xlim, _ylim_ ,_main_


```r
hist(pData$AGEP, col = "blue")
```

<div class="rimage center"><img src="fig/unnamed-chunk-5.png" title="plot of chunk unnamed-chunk-5" alt="plot of chunk unnamed-chunk-5" class="plot" /></div>


--- 

## Histograms


```r
hist(pData$AGEP, col = "blue", breaks = 100, main = "Age")
```

<div class="rimage center"><img src="fig/unnamed-chunk-6.png" title="plot of chunk unnamed-chunk-6" alt="plot of chunk unnamed-chunk-6" class="plot" /></div>



--- 

## Density plots

Important parameters (to plot): _col_,_lwd_,_xlab_,_ylab_,_xlim_,_ylim_


```r
dens <- density(pData$AGEP)
plot(dens, lwd = 3, col = "blue")
```

<div class="rimage center"><img src="fig/unnamed-chunk-7.png" title="plot of chunk unnamed-chunk-7" alt="plot of chunk unnamed-chunk-7" class="plot" /></div>



--- 

## Density plots - multiple distributions


```r
dens <- density(pData$AGEP)
densMales <- density(pData$AGEP[which(pData$SEX == 1)])
plot(dens, lwd = 3, col = "blue")
lines(densMales, lwd = 3, col = "orange")
```

<div class="rimage center"><img src="fig/unnamed-chunk-8.png" title="plot of chunk unnamed-chunk-8" alt="plot of chunk unnamed-chunk-8" class="plot" /></div>




