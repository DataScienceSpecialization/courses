# Describing Decreases in Fine Particle Air Pollution Between 1999 and 2012

## Synopsis

In this report we aim to describe the changes in fine particle (PM<sub>2.5</sub>) outdoor air pollution in the United States between the years 1999 and 2012. Our overall hypothesis is that out door PM<sub>2.5</sub> has decreased on average across the U.S. due to nationwide regulatory requirements arising from the Clean Air Act. To investigate this hypothesis, we obtained PM<sub>2.5</sub> data from the U.S. Environmental Protection Agency which is collected from monitors sited across the U.S. We specifically obtained data for the years 1999 and 2012 (the most recent complete year available). From these data, we found that, on average across the U.S., levels of PM<sub>2.5</sub> have decreased between 1999 and 2012. At one individual monitor, we found that levels have decreased and that the variability of PM<sub>2.5</sub> has decreased. Most individual states also experienced decreases in PM<sub>2.5</sub>, although some states saw increases.


## Loading and Processing the Raw Data

From the [EPA Air Quality System](http://www.epa.gov/ttn/airs/airsaqs/detaildata/downloadaqsdata.htm) we obtained data on fine particulate matter air pollution (PM<sub>2.5</sub>) that is monitored across the U.S. as part of the nationwide PM monitoring network. We obtained the files for the years [1999](http://www.epa.gov/ttn/airs/airsaqs/detaildata/501files/Rd_501_88101_1999.Zip) and [2012](http://www.epa.gov/ttn/airs/airsaqs/detaildata/501files/RD_501_88101_2012[1].zip).


### Reading in the 1999 data

We first read in the 1999 data from the raw text file included in the zip archive. The data is a delimited file were fields are delimited with the `|` character adn missing values are coded as blank fields. We skip some commented lines in the beginning of the file and initially we do not read the header data.



```r
pm0 <- read.table("pm25_data/RD_501_88101_1999-0.txt", comment.char = "#", header = FALSE, 
    sep = "|", na.strings = "")
```


After reading in the 1999 we check the first few rows (there are 117,421 rows in this dataset. 


```r
dim(pm0)
```

```
## [1] 117421     28
```

```r
head(pm0[, 1:13])
```

```
##   V1 V2 V3 V4 V5    V6 V7 V8  V9 V10      V11   V12    V13
## 1 RD  I  1 27  1 88101  1  7 105 120 19990103 00:00     NA
## 2 RD  I  1 27  1 88101  1  7 105 120 19990106 00:00     NA
## 3 RD  I  1 27  1 88101  1  7 105 120 19990109 00:00     NA
## 4 RD  I  1 27  1 88101  1  7 105 120 19990112 00:00  8.841
## 5 RD  I  1 27  1 88101  1  7 105 120 19990115 00:00 14.920
## 6 RD  I  1 27  1 88101  1  7 105 120 19990118 00:00  3.878
```


We then attach the column headers to the dataset and make sure that they are properly formated for R data frames.



```r
cnames <- readLines("pm25_data/RD_501_88101_1999-0.txt", 1)
cnames <- strsplit(cnames, "|", fixed = TRUE)
names(pm0) <- make.names(cnames[[1]])  ## Ensure names are properly formatted
head(pm0[, 1:13])
```

```
##   X..RD Action.Code State.Code County.Code Site.ID Parameter POC
## 1    RD           I          1          27       1     88101   1
## 2    RD           I          1          27       1     88101   1
## 3    RD           I          1          27       1     88101   1
## 4    RD           I          1          27       1     88101   1
## 5    RD           I          1          27       1     88101   1
## 6    RD           I          1          27       1     88101   1
##   Sample.Duration Unit Method     Date Start.Time Sample.Value
## 1               7  105    120 19990103      00:00           NA
## 2               7  105    120 19990106      00:00           NA
## 3               7  105    120 19990109      00:00           NA
## 4               7  105    120 19990112      00:00        8.841
## 5               7  105    120 19990115      00:00       14.920
## 6               7  105    120 19990118      00:00        3.878
```


The column we are interested in is the `Sample.Value` column which contains the PM<sub>2.5</sub> measurements. Here we extract that column and print a brief summary.



```r
x0 <- pm0$Sample.Value
summary(x0)
```

```
##    Min. 1st Qu.  Median    Mean 3rd Qu.    Max.    NA's 
##       0       7      12      14      18     157   13217
```


Missing values are a common problem with environmental data and so we check to se what proportion of the observations are missing (i.e. coded as `NA`).


```r
mean(is.na(x0))  ## Are missing values important here?
```

```
## [1] 0.1126
```


Because the proportion of missing values is relatively low (0.1126), we choose to ignore missing values for now.


### Reading in the 2012 data

We then read in the 2012 data in the same manner in which we read the 1999 data (the data files are in the same format). 



```r
pm1 <- read.table("pm25_data/RD_501_88101_2012-0.txt", comment.char = "#", header = FALSE, 
    sep = "|", na.strings = "", nrow = 1304290)
```


We also set the column names (they are the same ast the 1999 dataset) and extract the `Sample.Value` column from this dataset.


```r
names(pm1) <- make.names(cnames[[1]])
x1 <- pm1$Sample.Value
```


## Results


```r
boxplot(log(x0), log(x1))
```

```
## Warning: NaNs produced
## Warning: Outlier (-Inf) in boxplot 1 is not drawn
## Warning: Outlier (-Inf) in boxplot 2 is not drawn
```

![plot of chunk boxplot log values](figure/boxplot_log_values.png) 



```r
summary(x0)
```

```
##    Min. 1st Qu.  Median    Mean 3rd Qu.    Max.    NA's 
##       0       7      12      14      18     157   13217
```

```r
summary(x1)
```

```
##    Min. 1st Qu.  Median    Mean 3rd Qu.    Max.    NA's 
##     -10       4       8       9      12     909   73133
```


Interestingly, from the summary of `x1` it appears there are some negative values of PM, which in general should not occur. We can investigate that somewhat to see if there is anything we should worry about.


```r
negative <- x1 < 0
mean(negative, na.rm = T)
```

```
## [1] 0.0215
```


There is a relatively small proportion of values that are negative, which is perhaps reassuring. We can extract the date of each measurement from the original data frame. However, the original data are formatted as character strings so we convert them to R's `Date` format for easier manipulation.


```r
dates <- pm1$Date
dates <- as.Date(as.character(dates), "%Y%m%d")
```



We can then extract the month from each of the dates with negative values and attempt to identify when negative values occur most often.


```r
missing.months <- month.name[as.POSIXlt(dates)$mon + 1]
tab <- table(factor(missing.months, levels = month.name))
round(100 * tab/sum(tab))
```

```
## 
##   January  February     March     April       May      June      July 
##        15        13        15        13        14        13         8 
##    August September   October  November  December 
##         6         3         0         0         0
```


From the table above it appears that bulk of the negative values occur in the first six months of the year (January--June). However, beyond that simple observation, it is not clear why the negative values occur. That said, given the relatively low proportion of negative values, we will ignore them for now.


### Changes in PM levels at an individual monitor

Find a monitor for New York State that exists in both datasets


```r
site0 <- unique(subset(pm0, State.Code == 36, c(County.Code, Site.ID)))
site1 <- unique(subset(pm1, State.Code == 36, c(County.Code, Site.ID)))
site0 <- paste(site0[, 1], site0[, 2], sep = ".")
site1 <- paste(site1[, 1], site1[, 2], sep = ".")
str(site0)
```

```
##  chr [1:33] "1.5" "1.12" "5.73" "5.80" "5.83" "5.110" ...
```

```r
str(site1)
```

```
##  chr [1:18] "1.5" "1.12" "5.80" "5.133" "13.11" "29.5" ...
```

```r
both <- intersect(site0, site1)
print(both)
```

```
##  [1] "1.5"     "1.12"    "5.80"    "13.11"   "29.5"    "31.3"    "63.2008"
##  [8] "67.1015" "85.55"   "101.3"
```



```r
## Find how many observations available at each monitor
pm0$county.site <- with(pm0, paste(County.Code, Site.ID, sep = "."))
pm1$county.site <- with(pm1, paste(County.Code, Site.ID, sep = "."))
cnt0 <- subset(pm0, State.Code == 36 & county.site %in% both)
cnt1 <- subset(pm1, State.Code == 36 & county.site %in% both)
sapply(split(cnt0, cnt0$county.site), nrow)
```

```
##    1.12     1.5   101.3   13.11    29.5    31.3    5.80 63.2008 67.1015 
##      61     122     152      61      61     183      61     122     122 
##   85.55 
##       7
```

```r
sapply(split(cnt1, cnt1$county.site), nrow)
```

```
##    1.12     1.5   101.3   13.11    29.5    31.3    5.80 63.2008 67.1015 
##      31      64      31      31      33      15      31      30      31 
##   85.55 
##      31
```

```r

## Choose county 63 and side ID 2008
pm1sub <- subset(pm1, State.Code == 36 & County.Code == 63 & Site.ID == 2008)
pm0sub <- subset(pm0, State.Code == 36 & County.Code == 63 & Site.ID == 2008)
dim(pm1sub)
```

```
## [1] 30 29
```

```r
dim(pm0sub)
```

```
## [1] 122  29
```

```r

## Plot data for 2012
dates1 <- pm1sub$Date
x1sub <- pm1sub$Sample.Value
plot(dates1, x1sub)
```

![plot of chunk unnamed-chunk-5](figure/unnamed-chunk-51.png) 

```r
dates1 <- as.Date(as.character(dates1), "%Y%m%d")
str(dates1)
```

```
##  Date[1:30], format: "2012-01-01" "2012-01-04" "2012-01-07" "2012-01-10" ...
```

```r
plot(dates1, x1sub)
```

![plot of chunk unnamed-chunk-5](figure/unnamed-chunk-52.png) 

```r

## Plot data for 1999
dates0 <- pm0sub$Date
dates0 <- as.Date(as.character(dates0), "%Y%m%d")
x0sub <- pm0sub$Sample.Value
plot(dates0, x0sub)
```

![plot of chunk unnamed-chunk-5](figure/unnamed-chunk-53.png) 

```r

## Plot data for both years in same panel
par(mfrow = c(1, 2), mar = c(4, 4, 2, 1))
plot(dates0, x0sub, pch = 20)
abline(h = median(x0sub, na.rm = T))
plot(dates1, x1sub, pch = 20)  ## Whoa! Different ranges
abline(h = median(x1sub, na.rm = T))
```

![plot of chunk unnamed-chunk-5](figure/unnamed-chunk-54.png) 

```r

## Find global range
rng <- range(x0sub, x1sub, na.rm = T)
rng
```

```
## [1]  3.0 40.1
```

```r
par(mfrow = c(1, 2), mar = c(4, 4, 2, 1))
plot(dates0, x0sub, pch = 20, ylim = rng)
abline(h = median(x0sub, na.rm = T))
plot(dates1, x1sub, pch = 20, ylim = rng)
abline(h = median(x1sub, na.rm = T))
```

![plot of chunk unnamed-chunk-5](figure/unnamed-chunk-55.png) 



### Changes in state-wide PM levels


```r
## Show state-wide means and make a plot showing trend
head(pm0)
```

```
##   X..RD Action.Code State.Code County.Code Site.ID Parameter POC
## 1    RD           I          1          27       1     88101   1
## 2    RD           I          1          27       1     88101   1
## 3    RD           I          1          27       1     88101   1
## 4    RD           I          1          27       1     88101   1
## 5    RD           I          1          27       1     88101   1
## 6    RD           I          1          27       1     88101   1
##   Sample.Duration Unit Method     Date Start.Time Sample.Value
## 1               7  105    120 19990103      00:00           NA
## 2               7  105    120 19990106      00:00           NA
## 3               7  105    120 19990109      00:00           NA
## 4               7  105    120 19990112      00:00        8.841
## 5               7  105    120 19990115      00:00       14.920
## 6               7  105    120 19990118      00:00        3.878
##   Null.Data.Code Sampling.Frequency Monitor.Protocol..MP..ID Qualifier...1
## 1             AS                  3                       NA          <NA>
## 2             AS                  3                       NA          <NA>
## 3             AS                  3                       NA          <NA>
## 4           <NA>                  3                       NA          <NA>
## 5           <NA>                  3                       NA          <NA>
## 6           <NA>                  3                       NA          <NA>
##   Qualifier...2 Qualifier...3 Qualifier...4 Qualifier...5 Qualifier...6
## 1            NA            NA            NA            NA            NA
## 2            NA            NA            NA            NA            NA
## 3            NA            NA            NA            NA            NA
## 4            NA            NA            NA            NA            NA
## 5            NA            NA            NA            NA            NA
## 6            NA            NA            NA            NA            NA
##   Qualifier...7 Qualifier...8 Qualifier...9 Qualifier...10
## 1            NA            NA            NA             NA
## 2            NA            NA            NA             NA
## 3            NA            NA            NA             NA
## 4            NA            NA            NA             NA
## 5            NA            NA            NA             NA
## 6            NA            NA            NA             NA
##   Alternate.Method.Detectable.Limit Uncertainty county.site
## 1                                NA          NA        27.1
## 2                                NA          NA        27.1
## 3                                NA          NA        27.1
## 4                                NA          NA        27.1
## 5                                NA          NA        27.1
## 6                                NA          NA        27.1
```

```r
mn0 <- with(pm0, tapply(Sample.Value, State.Code, mean, na.rm = T))
str(mn0)
```

```
##  num [1:53(1d)] 19.96 6.67 10.8 15.68 17.66 ...
##  - attr(*, "dimnames")=List of 1
##   ..$ : chr [1:53] "1" "2" "4" "5" ...
```

```r
summary(mn0)
```

```
##    Min. 1st Qu.  Median    Mean 3rd Qu.    Max. 
##    4.86    9.52   12.30   12.40   15.60   20.00
```

```r
mn1 <- with(pm1, tapply(Sample.Value, State.Code, mean, na.rm = T))
str(mn1)
```

```
##  num [1:52(1d)] 10.13 4.75 8.61 10.56 9.28 ...
##  - attr(*, "dimnames")=List of 1
##   ..$ : chr [1:52] "1" "2" "4" "5" ...
```

```r

## Make separate data frames for states / years
d0 <- data.frame(state = names(mn0), mean = mn0)
d1 <- data.frame(state = names(mn1), mean = mn1)
mrg <- merge(d0, d1, by = "state")
dim(mrg)
```

```
## [1] 52  3
```

```r
head(mrg)
```

```
##   state mean.x mean.y
## 1     1 19.956 10.126
## 2    10 14.493 11.236
## 3    11 15.787 11.992
## 4    12 11.137  8.240
## 5    13 19.943 11.321
## 6    15  4.862  8.749
```

```r

## Connect lines
par(mfrow = c(1, 1))
with(mrg, plot(rep(1, 52), mrg[, 2], xlim = c(0.5, 2.5)))
with(mrg, points(rep(2, 52), mrg[, 3]))
segments(rep(1, 52), mrg[, 2], rep(2, 52), mrg[, 3])
```

![plot of chunk unnamed-chunk-6](figure/unnamed-chunk-6.png) 

