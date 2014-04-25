---
title       : Installing R Packages
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

## R Packages

- When you download R from the Comprehensive R Archive Network (CRAN),
  you get that ``base" R system

- The base R system comes with basic functionality; implements the R language

- One reason R is so useful is the large collection of packages that
  extend the basic functionality of R

- R packages are developed and published by the larger R community

--- 

## Obtaining R Packages

- The primary location for obtaining R packages is
  [CRAN](http://cran.r-project.org)

- For biological applications, many packages are available from the
  [Bioconductor Project](http://bioconductor.org)

- You can obtain information about the available packages on CRAN with
  the `available.packages()` function


```r
a <- available.packages()
head(rownames(a), 3)  ## Show the names of the first few packages
```

```
## [1] "A3"       "abc"      "abcdeFBA"
```





- There are approximately 5600 packages on CRAN covering a wide range of topics

- A list of some topics is available through the [Task
  Views](http://cran.r-project.org/web/views/) link, which groups
  together many R packages related to a given topic

---

## Installing an R Package

- Packages can be installed with the `install.packages()`
  function in R

- To install a single package, pass the name of the package to the
  `install.packages()` function as the first argument

- The following the code installs the **slidify** package from CRAN


```r
install.packages("slidify")
```


- This command downloads the **slidify** package from CRAN and
  installs it on your computer

- Any packages on which this package depends will also be downloaded
  and installed

---

## Installing an R Package

- You can install multiple R packages at once with a single call to
  `install.packages()`

- Place the names of the R packages in a character vector


```r
install.packages(c("slidify", "ggplot2", "devtools"))
```


---

## Installing an R Package in RStudio

<img src="../../assets/img/01_DataScientistToolbox/InstallPackageRStudio1crop.png" height=500>

--- 

## Installing an R Package in RStudio

<img src="../../assets/img/01_DataScientistToolbox/InstallPackageRStudio2.png" height=500>


--- 

## Installing an R Package from Bioconductor

- To get the basic installer and basic set of R packages (warning, will install multiple packages)


```r
source("http://bioconductor.org/biocLite.R")
biocLite()
```


- Place the names of the R packages in a character vector


```r
biocLite(c("GenomicFeatures", "AnnotationDbi"))
```


[http://www.bioconductor.org/install/](http://www.bioconductor.org/install/)

---

## Loading R Packages

- Installing a package does not make it immediately available to you
  in R; you must load the package

- The `library()` function is used to **load** packages into R

- The following code is used to load the **ggplot2** package into R


```r
library(ggplot2)
```


- Any packages that need to be loaded as dependencies will be loaded
  first, before the named package is loaded

- NOTE: Do not put the package name in quotes!

- Some packages produce messages when they are loaded (but some don't)

---

## Loading R Packages

After loading a package, the functions exported by that package will
be attached to the top of the `search()` list (after the workspace)


```r
library(ggplot2)
search()
```

```
##  [1] ".GlobalEnv"         "package:ggplot2"    "package:makeslides"
##  [4] "package:knitr"      "package:slidify"    "tools:rstudio"     
##  [7] "package:stats"      "package:graphics"   "package:grDevices" 
## [10] "package:utils"      "package:datasets"   "package:methods"   
## [13] "Autoloads"          "package:base"
```


---

## Summary

- R packages provide a powerful mechanism for extending the
  functionality of R

- R packages can be obtained from CRAN or other repositories

- The `install.packages()` can be used to install packages at the R
  console

- The `library()` function loads packages that have been installed so
  that you may access the functionality in the package
