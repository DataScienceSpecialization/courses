---
title       : Representing data in R
subtitle    : 
author      : Jeffrey Leek, Assistant Professor of Biostatistics 
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : zenburn   # 
url:
  lib: ../../libraries
  assets: ../../assets
widgets     : [mathjax]            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
---

## Important data types in R

__Classes__
* Character, Numeric, Integer, Logical

***********

__Objects__

* Vectors, Matrices, Data frames, Lists, Factors, Missing values

***********
__Operations__

* Subsetting, Logical subsetting

***********

_For more information_: 
* [Data Types](http://www.youtube.com/watch?v=5AQM-yUX9zg&list=PLjTlxb-wKvXNSDfcKPFH2gzHGyjpeCZmJ&index=5)


---

## Character


```r
firstName = "jeff"
class(firstName)
```

```
## [1] "character"
```

```r
firstName
```

```
## [1] "jeff"
```


---

## Numeric

```r
heightCM = 188.2
class(heightCM)
```

```
## [1] "numeric"
```

```r
heightCM
```

```
## [1] 188.2
```


---

## Integer

```r
numberSons = 1L
class(numberSons)
```

```
## [1] "integer"
```

```r
numberSons
```

```
## [1] 1
```


---

## Logical

```r
teachingCoursera = TRUE
class(teachingCoursera)
```

```
## [1] "logical"
```

```r
teachingCoursera
```

```
## [1] TRUE
```


---
## Vectors
A set of values with the same class

```r
heights = c(188.2, 181.3, 193.4)
heights
```

```
## [1] 188.2 181.3 193.4
```

```r

firstNames = c("jeff", "roger", "andrew", "brian")
firstNames
```

```
## [1] "jeff"   "roger"  "andrew" "brian"
```


---

## Lists
A vector of values of possibly different classes

```r
vector1 = c(188.2, 181.3, 193.4)
vector2 = c("jeff", "roger", "andrew", "brian")
myList = list(heights = vector1, firstNames = vector2)
myList
```

```
## $heights
## [1] 188.2 181.3 193.4
## 
## $firstNames
## [1] "jeff"   "roger"  "andrew" "brian"
```


---

## Matrices
Vectors with multiple dimensions

```r
myMatrix = matrix(c(1, 2, 3, 4), byrow = T, nrow = 2)
myMatrix
```

```
##      [,1] [,2]
## [1,]    1    2
## [2,]    3    4
```


---

## Data frames
Multiple vectors of possibly different classes, of the same length

```r
vector1 = c(188.2, 181.3, 193.4)
vector2 = c("jeff", "roger", "andrew", "brian")
myDataFrame = data.frame(heights = vector1, firstNames = vector2)
```

```
## Error: arguments imply differing number of rows: 3, 4
```

```r
myDataFrame
```

```
## Error: object 'myDataFrame' not found
```


---

## Data frames


```r
vector1 = c(188.2, 181.3, 193.4, 192.3)
vector2 = c("jeff", "roger", "andrew", "brian")
myDataFrame = data.frame(heights = vector1, firstNames = vector2)
myDataFrame
```

```
##   heights firstNames
## 1   188.2       jeff
## 2   181.3      roger
## 3   193.4     andrew
## 4   192.3      brian
```


---
## Factors
Qualitative variables that can be included in models


```r
smoker = c("yes", "no", "yes", "yes")
smokerFactor = as.factor(smoker)
smokerFactor
```

```
## [1] yes no  yes yes
## Levels: no yes
```


---

## Missing values
In R they are usually coded NA


```r
vector1 = c(188.2, 181.3, 193.4, NA)
vector1
```

```
## [1] 188.2 181.3 193.4    NA
```

```r
is.na(vector1)
```

```
## [1] FALSE FALSE FALSE  TRUE
```



---

## Subsetting


```r
vector1 = c(188.2, 181.3, 193.4, 192.3)
vector2 = c("jeff", "roger", "andrew", "brian")
myDataFrame = data.frame(heights = vector1, firstNames = vector2)

vector1[1]
```

```
## [1] 188.2
```

```r
vector1[c(1, 2, 4)]
```

```
## [1] 188.2 181.3 192.3
```


---

## Subsetting


```r
myDataFrame[1, 1:2]
```

```
##   heights firstNames
## 1   188.2       jeff
```

```r
myDataFrame$firstNames
```

```
## [1] jeff   roger  andrew brian 
## Levels: andrew brian jeff roger
```

---

## Logical subsetting

```r
myDataFrame[myDataFrame$firstNames == "jeff", ]
```

```
##   heights firstNames
## 1   188.2       jeff
```

```r
myDataFrame[myDataFrame$heights < 190, ]
```

```
##   heights firstNames
## 1   188.2       jeff
## 2   181.3      roger
```


---

## Variable naming conventions

Variable names should be short, but descriptive. Here are some common styles

__Camel caps__

```r
myHeightCM = 188
```

__Underscore__

```r
my_height_cm = 188
```

__Dot separated__

```r
my.height.cm = 188
```


---

## Style guides

* [http://4dpiecharts.com/r-code-style-guide/](http://4dpiecharts.com/r-code-style-guide/)
* [http://google-styleguide.googlecode.com/svn/trunk/google-r-style.html](http://google-styleguide.googlecode.com/svn/trunk/google-r-style.html)
* [http://wiki.fhcrc.org/bioc/Coding_Standards](http://wiki.fhcrc.org/bioc/Coding_Standards)
