---
title       : The ggplot2 Plotting System - Part 2
subtitle    : 
author      : Roger D. Peng, Associate Professor of Biostatistics
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




## What is ggplot2?

- An implementation of the __Grammar of Graphics__ by Leland Wilkinson
- Grammar of graphics represents and abstraction of graphics ideas/objects
- Think “verb”, “noun”, “adjective” for graphics
- Allows for a “theory” of graphics on which to build new graphics and graphics objects

---

## Basic Components of a ggplot2 Plot
- A _data frame_
- _aesthetic mappings_: how data are mapped to color, size 
- _geoms_: geometric objects like points, lines, shapes. 
- _facets_: for conditional plots. 
- _stats_: statistical transformations like binning, quantiles, smoothing. 
- _scales_: what scale an aesthetic map uses (example: male = red, female = blue). 
- _coordinate system_ 

---

## Building Plots with ggplot2
- When building plots in ggplot2 (rather than using qplot) the “artist’s palette” model may be the closest analogy
- Plots are built up in layers
  - Plot the data
  - Overlay a summary
  - Metadata and annotation

---

## Example: BMI, PM$_{2.5}$, Asthma
- Mouse Allergen and Asthma Cohort Study
- Baltimore children (age 5-17)
- Persistent asthma, exacerbation in past year
- Does BMI (normal vs. overweight) modify the relationship between PM$_{2.5}$ and asthma symptoms?




---

## Basic Plot


```r
library(ggplot2)
qplot(logpm25, NocturnalSympt, data = maacs, facets = . ~ bmicat, 
      geom = c("point", "smooth"), method = "lm")
```

<div class="rimage center"><img src="fig/unnamed-chunk-2.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" class="plot" /></div>


---

## Building Up in Layers


```r
head(maacs)
```

```
  logpm25        bmicat NocturnalSympt logno2_new
1  1.5362 normal weight              1      1.299
2  1.5905 normal weight              0      1.295
3  1.5218 normal weight              0      1.304
4  1.4323 normal weight              0         NA
5  1.2762    overweight              8      1.108
6  0.7139    overweight              0      0.837
```

```r
g <- ggplot(maacs, aes(logpm25, NocturnalSympt))
summary(g)
```

```
data: logpm25, bmicat, NocturnalSympt, logno2_new [554x4]
mapping:  x = logpm25, y = NocturnalSympt
faceting: facet_null() 
```



---

## No Plot Yet!


```r
g <- ggplot(maacs, aes(logpm25, NocturnalSympt))
print(g)
```

```
Error: No layers in plot
```


---

## First Plot with Point Layer


```r
g <- ggplot(maacs, aes(logpm25, NocturnalSympt))
g + geom_point()
```

<div class="rimage center"><img src="fig/unnamed-chunk-5.png" title="plot of chunk unnamed-chunk-5" alt="plot of chunk unnamed-chunk-5" class="plot" /></div>


---

## Adding More Layers: Smooth


```r
g + geom_point() + geom_smooth()
g + geom_point() + geom_smooth(method = "lm")
```

<div class="rimage center"><img src="fig/unnamed-chunk-61.png" title="plot of chunk unnamed-chunk-6" alt="plot of chunk unnamed-chunk-6" class="plot" />
<img src="fig/unnamed-chunk-62.png" title="plot of chunk unnamed-chunk-6" alt="plot of chunk unnamed-chunk-6" class="plot" /></div>


---

## Adding More Layers: Facets


```r
g + geom_point() + facet_grid(. ~ bmicat) + geom_smooth(method = "lm")
```

<div class="rimage center"><img src="fig/unnamed-chunk-7.png" title="plot of chunk unnamed-chunk-7" alt="plot of chunk unnamed-chunk-7" class="plot" /></div>


---

## Annotation
- Labels: `xlab()`, `ylab()`, `labs()`, `ggtitle()`
- Each of the “geom” functions has options to modify 
- For things that only make sense globally, use `theme()` 
  - Example: `theme(legend.position = "none")` 
- Two standard appearance themes are included
  - `theme_gray()`: The default theme (gray background)
  - `theme_bw()`: More stark/plain 

---

## Modifying Aesthetics


```r
g + geom_point(color = "steelblue", size = 4, alpha = 1/2)
g + geom_point(aes(color = bmicat), size = 4, alpha = 1/2)
```

<div class="rimage center"><img src="fig/unnamed-chunk-81.png" title="plot of chunk unnamed-chunk-8" alt="plot of chunk unnamed-chunk-8" class="plot" />
<img src="fig/unnamed-chunk-82.png" title="plot of chunk unnamed-chunk-8" alt="plot of chunk unnamed-chunk-8" class="plot" /></div>


---

## Modifying Labels


```r
g + geom_point(aes(color = bmicat)) + labs(title = "MAACS Cohort") + 
  labs(x = expression("log " * PM[2.5]), y = "Nocturnal Symptoms")
```

<div class="rimage center"><img src="fig/unnamed-chunk-9.png" title="plot of chunk unnamed-chunk-9" alt="plot of chunk unnamed-chunk-9" class="plot" /></div>


---

## Customizing the Smooth


```r
g + geom_point(aes(color = bmicat), size = 2, alpha = 1/2) + 
  geom_smooth(size = 4, linetype = 3, method = "lm", se = FALSE)
```

<div class="rimage center"><img src="fig/unnamed-chunk-10.png" title="plot of chunk unnamed-chunk-10" alt="plot of chunk unnamed-chunk-10" class="plot" /></div>


---

## Changing the Theme


```r
g + geom_point(aes(color = bmicat)) + theme_bw(base_family = "Times")
```

<div class="rimage center"><img src="fig/unnamed-chunk-11.png" title="plot of chunk unnamed-chunk-11" alt="plot of chunk unnamed-chunk-11" class="plot" /></div>


---

## A Note about Axis Limits


```r
testdat <- data.frame(x = 1:100, y = rnorm(100))
testdat[50,2] <- 100  ## Outlier!
plot(testdat$x, testdat$y, type = "l", ylim = c(-3,3))

g <- ggplot(testdat, aes(x = x, y = y))
g + geom_line()
```

<div class="rimage center"><img src="fig/unnamed-chunk-121.png" title="plot of chunk unnamed-chunk-12" alt="plot of chunk unnamed-chunk-12" class="plot" />
<img src="fig/unnamed-chunk-122.png" title="plot of chunk unnamed-chunk-12" alt="plot of chunk unnamed-chunk-12" class="plot" /></div>


---

## Axis Limits


```r
g + geom_line() + ylim(-3, 3)
g + geom_line() + coord_cartesian(ylim = c(-3, 3))
```

<div class="rimage center"><img src="fig/unnamed-chunk-131.png" title="plot of chunk unnamed-chunk-13" alt="plot of chunk unnamed-chunk-13" class="plot" />
<img src="fig/unnamed-chunk-132.png" title="plot of chunk unnamed-chunk-13" alt="plot of chunk unnamed-chunk-13" class="plot" /></div>



---

## More Complex Example
- How does the relationship between PM$_{2.5}$ and nocturnal symptoms vary by BMI and NO$_2$?
- Unlike our previous BMI variable, NO$_2$ is continuous
- We need to make NO$_2$ categorical so we can condition on it in the plotting
- Use the `cut()` function for this

---

## Making NO$_2$ Tertiles


```r
## Calculate the tertiles of the data
cutpoints <- quantile(maacs$logno2_new, seq(0, 1, length = 4), na.rm = TRUE)

## Cut the data at the tertiles and create a new factor variable
maacs$no2tert <- cut(maacs$logno2_new, cutpoints)

## See the levels of the newly created factor variable
levels(maacs$no2tert)
```

```
[1] "(0.378,1.2]" "(1.2,1.42]"  "(1.42,2.55]"
```


---

## Final Plot

<div class="rimage center"><img src="fig/unnamed-chunk-15.png" title="plot of chunk unnamed-chunk-15" alt="plot of chunk unnamed-chunk-15" class="plot" /></div>


---

## Code for Final Plot


```r
## Setup ggplot with data frame
g <- ggplot(maacs, aes(logpm25, NocturnalSympt))

## Add layers
g + geom_point(alpha = 1/3) + 
  facet_wrap(bmicat ~ no2tert, nrow = 2, ncol = 4) + 
  geom_smooth(method="lm", se=FALSE, col="steelblue") + 
  theme_bw(base_family = "Avenir", base_size = 10) + 
  labs(x = expression("log " * PM[2.5])) + 
  labs(y = "Nocturnal Symptoms") + 
  labs(title = "MAACS Cohort")
```


---

## Summary
- ggplot2 is very powerful and flexible if you learn the “grammar” and the various elements that can be tuned/modified
- Many more types of plots can be made; explore and mess around with the package (references mentioned in Part 1 are useful)
