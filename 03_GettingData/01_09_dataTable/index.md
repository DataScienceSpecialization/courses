---
title       : Using data.table
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





## data.table

* Inherets from data.frame
  * All functions that accept data.frame work on data.table
* Written in C so it is much faster
* Much, much faster at subsetting, group, and updating
 

---

## Create data tables just like data frames


```r
library(data.table)
DF = data.frame(x=rnorm(9),y=rep(c("a","b","c"),each=3),z=rnorm(9))
head(DF,3)
```

```
       x y        z
1 0.4159 a -0.05855
2 0.8433 a  0.13732
3 1.0585 a  2.16448
```

```r
DT = data.table(x=rnorm(9),y=rep(c("a","b","c"),each=3),z=rnorm(9))
head(DT,3)
```

```
          x y      z
1: -0.27721 a 0.2530
2:  1.00158 a 1.5093
3: -0.03382 a 0.4844
```


---

## See all the data tables in memory


```r
tables()
```

```
     NAME NROW MB COLS  KEY
[1,] DT      9 1  x,y,z    
Total: 1MB
```


---

## Subsetting rows


```r
DT[2,]
```

```
       x y     z
1: 1.002 a 1.509
```

```r
DT[DT$y=="a",]
```

```
          x y      z
1: -0.27721 a 0.2530
2:  1.00158 a 1.5093
3: -0.03382 a 0.4844
```


---

## Subsetting rows


```r
DT[c(2,3)]
```

```
          x y      z
1:  1.00158 a 1.5093
2: -0.03382 a 0.4844
```



---

## Subsetting columns!?


```r
DT[,c(2,3)]
```

```
[1] 2 3
```


---

## Column subsetting in data.table

* The subsetting function is modified for data.table
* The argument you pass after the comma is called an "expression"
* In R an expression is a collection of statements enclosed in curley brackets 

```r
{
  x = 1
  y = 2
}
k = {print(10); 5}
```

```
[1] 10
```

```r
print(k)
```

```
[1] 5
```


---

## Calculating values for variables with expressions


```r
DT[,list(mean(x),sum(z))]
```

```
        V1     V2
1: 0.05637 0.5815
```

```r
DT[,table(y)]
```

```
y
a b c 
3 3 3 
```


---

## Adding new columns


```r
DT[,w:=z^2]
```

```
          x y        z        w
1: -0.27721 a  0.25300 0.064009
2:  1.00158 a  1.50933 2.278091
3: -0.03382 a  0.48437 0.234619
4: -0.70493 b -1.22755 1.506885
5: -1.36402 b -0.64624 0.417631
6: -0.26224 b -0.51427 0.264475
7: -0.10929 c  1.21445 1.474901
8:  1.40234 c  0.07493 0.005614
9:  0.85494 c -0.56652 0.320948
```



---

## Adding new columns


```r
DT2 <- DT
DT[, y:= 2]
```

```
          x y        z        w
1: -0.27721 2  0.25300 0.064009
2:  1.00158 2  1.50933 2.278091
3: -0.03382 2  0.48437 0.234619
4: -0.70493 2 -1.22755 1.506885
5: -1.36402 2 -0.64624 0.417631
6: -0.26224 2 -0.51427 0.264475
7: -0.10929 2  1.21445 1.474901
8:  1.40234 2  0.07493 0.005614
9:  0.85494 2 -0.56652 0.320948
```


---

## Careful


```r
head(DT,n=3)
```

```
          x y      z       w
1: -0.27721 2 0.2530 0.06401
2:  1.00158 2 1.5093 2.27809
3: -0.03382 2 0.4844 0.23462
```

```r
head(DT2,n=3)
```

```
          x y      z       w
1: -0.27721 2 0.2530 0.06401
2:  1.00158 2 1.5093 2.27809
3: -0.03382 2 0.4844 0.23462
```



---

## Multiple operations


```r
DT[,m:= {tmp <- (x+z); log2(tmp+5)}]
```

```
          x y        z        w     m
1: -0.27721 2  0.25300 0.064009 2.315
2:  1.00158 2  1.50933 2.278091 2.909
3: -0.03382 2  0.48437 0.234619 2.446
4: -0.70493 2 -1.22755 1.506885 1.617
5: -1.36402 2 -0.64624 0.417631 1.580
6: -0.26224 2 -0.51427 0.264475 2.078
7: -0.10929 2  1.21445 1.474901 2.610
8:  1.40234 2  0.07493 0.005614 2.695
9:  0.85494 2 -0.56652 0.320948 2.403
```


---

## plyr like operations


```r
DT[,a:=x>0]
```

```
          x y        z        w     m     a
1: -0.27721 2  0.25300 0.064009 2.315 FALSE
2:  1.00158 2  1.50933 2.278091 2.909  TRUE
3: -0.03382 2  0.48437 0.234619 2.446 FALSE
4: -0.70493 2 -1.22755 1.506885 1.617 FALSE
5: -1.36402 2 -0.64624 0.417631 1.580 FALSE
6: -0.26224 2 -0.51427 0.264475 2.078 FALSE
7: -0.10929 2  1.21445 1.474901 2.610 FALSE
8:  1.40234 2  0.07493 0.005614 2.695  TRUE
9:  0.85494 2 -0.56652 0.320948 2.403  TRUE
```



---

## plyr like operations


```r
DT[,b:= mean(x+w),by=a]
```

```
          x y        z        w     m     a      b
1: -0.27721 2  0.25300 0.064009 2.315 FALSE 0.2018
2:  1.00158 2  1.50933 2.278091 2.909  TRUE 1.9545
3: -0.03382 2  0.48437 0.234619 2.446 FALSE 0.2018
4: -0.70493 2 -1.22755 1.506885 1.617 FALSE 0.2018
5: -1.36402 2 -0.64624 0.417631 1.580 FALSE 0.2018
6: -0.26224 2 -0.51427 0.264475 2.078 FALSE 0.2018
7: -0.10929 2  1.21445 1.474901 2.610 FALSE 0.2018
8:  1.40234 2  0.07493 0.005614 2.695  TRUE 1.9545
9:  0.85494 2 -0.56652 0.320948 2.403  TRUE 1.9545
```



---

## Special variables

`.N` An integer, length 1, containing the numbe r


```r
set.seed(123);
DT <- data.table(x=sample(letters[1:3], 1E5, TRUE))
DT[, .N, by=x]
```

```
   x     N
1: a 33387
2: c 33201
3: b 33412
```


---

## Keys


```r
DT <- data.table(x=rep(c("a","b","c"),each=100), y=rnorm(300))
setkey(DT, x)
DT['a']
```

```
     x        y
  1: a  0.25959
  2: a  0.91751
  3: a -0.72232
  4: a -0.80828
  5: a -0.14135
  6: a  2.25701
  7: a -2.37955
  8: a -0.45425
  9: a -0.06007
 10: a  0.86090
 11: a -1.78466
 12: a -0.13074
 13: a -0.36984
 14: a -0.18066
 15: a -1.04973
 16: a  0.37832
 17: a -1.37079
 18: a -0.31612
 19: a  0.39435
 20: a -1.68988
 21: a -1.46234
 22: a  2.55838
 23: a  0.08789
 24: a  1.73141
 25: a  1.21513
 26: a  0.29954
 27: a -0.17246
 28: a  1.13250
 29: a  0.02320
 30: a  1.33587
 31: a -1.09879
 32: a -0.58176
 33: a  0.03892
 34: a  1.07315
 35: a  1.34970
 36: a  1.19528
 37: a -0.02218
 38: a  0.69849
 39: a  0.67241
 40: a -0.79165
 41: a -0.21791
 42: a  0.02307
 43: a  0.11539
 44: a -0.27708
 45: a  0.03688
 46: a  0.47520
 47: a  1.70749
 48: a  1.07601
 49: a -1.34571
 50: a -1.44025
 51: a -0.39393
 52: a  0.58106
 53: a -0.17079
 54: a -0.90585
 55: a  0.15621
 56: a -0.37323
 57: a -0.34587
 58: a -0.35829
 59: a -0.13307
 60: a -0.08960
 61: a  0.62793
 62: a -1.42883
 63: a  0.17255
 64: a -0.79115
 65: a  1.26204
 66: a -0.26941
 67: a  0.15698
 68: a -0.76060
 69: a  1.37060
 70: a  0.03758
 71: a  0.44949
 72: a  2.78869
 73: a -0.46849
 74: a  1.01261
 75: a -0.04374
 76: a  1.40670
 77: a  0.41993
 78: a  0.31009
 79: a  1.11905
 80: a -1.29814
 81: a -1.28248
 82: a  1.65943
 83: a  0.78375
 84: a  0.57771
 85: a -0.26725
 86: a -0.64569
 87: a -0.44953
 88: a -0.82620
 89: a  1.05504
 90: a -0.87927
 91: a -1.27713
 92: a -0.63412
 93: a  0.66470
 94: a -0.50958
 95: a  0.40736
 96: a  1.67775
 97: a -1.05206
 98: a -0.63691
 99: a  0.56539
100: a  0.38016
     x        y
```


---

## Joins


```r
DT1 <- data.table(x=c('a', 'a', 'b', 'dt1'), y=1:4)
DT2 <- data.table(x=c('a', 'b', 'dt2'), z=5:7)
setkey(DT1, x); setkey(DT2, x)
merge(DT1, DT2)
```

```
   x y z
1: a 1 5
2: a 2 5
3: b 3 6
```




---

## Fast reading


```r
big_df <- data.frame(x=rnorm(1E6), y=rnorm(1E6))
file <- tempfile()
write.table(big_df, file=file, row.names=FALSE, col.names=TRUE, sep="\t", quote=FALSE)
system.time(fread(file))
```

```
   user  system elapsed 
  0.312   0.015   0.326 
```

```r
system.time(read.table(file, header=TRUE, sep="\t"))
```

```
   user  system elapsed 
  5.702   0.048   5.755 
```





---

## Summary and further reading

* The latest development version contains new functions like `melt` and `dcast` for data.tables 
  * [https://r-forge.r-project.org/scm/viewvc.php/pkg/NEWS?view=markup&root=datatable](https://r-forge.r-project.org/scm/viewvc.php/pkg/NEWS?view=markup&root=datatable)
* Here is a list of differences between data.table and data.frame
  * [http://stackoverflow.com/questions/13618488/what-you-can-do-with-data-frame-that-you-cant-in-data-table](http://stackoverflow.com/questions/13618488/what-you-can-do-with-data-frame-that-you-cant-in-data-table)
* Notes based on Raphael Gottardo's notes [https://github.com/raphg/Biostat-578/blob/master/Advanced_data_manipulation.Rpres](https://github.com/raphg/Biostat-578/blob/master/Advanced_data_manipulation.Rpres), who got them from Kevin Ushey.
