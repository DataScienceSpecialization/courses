---
title       : Summarizing data
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






## Example data set 

<img class=center src="../../assets/img/03_ObtainingData/restaurants.png" height=500 />


[https://data.baltimorecity.gov/Community/Restaurants/k5ry-ef3g](https://data.baltimorecity.gov/Community/Restaurants/k5ry-ef3g)

---

## Getting the data from the web


```r
if(!file.exists("./data")){dir.create("./data")}
fileUrl <- "https://data.baltimorecity.gov/api/views/k5ry-ef3g/rows.csv?accessType=DOWNLOAD"
download.file(fileUrl,destfile="./data/restaurants.csv",method="curl")
restData <- read.csv("./data/restaurants.csv")
```



---

## Look at a bit of the data


```r
head(restData,n=3)
```

```
   name zipCode neighborhood councilDistrict policeDistrict                        Location.1
1   410   21206    Frankford               2   NORTHEASTERN 4509 BELAIR ROAD\nBaltimore, MD\n
2  1919   21231  Fells Point               1   SOUTHEASTERN    1919 FLEET ST\nBaltimore, MD\n
3 SAUTE   21224       Canton               1   SOUTHEASTERN   2844 HUDSON ST\nBaltimore, MD\n
```

```r
tail(restData,n=3)
```

```
                 name zipCode  neighborhood councilDistrict policeDistrict
1325 ZINK'S CAF\u0090   21213 Belair-Edison              13   NORTHEASTERN
1326     ZISSIMOS BAR   21211       Hampden               7       NORTHERN
1327           ZORBAS   21224     Greektown               2   SOUTHEASTERN
                             Location.1
1325 3300 LAWNVIEW AVE\nBaltimore, MD\n
1326      1023 36TH ST\nBaltimore, MD\n
1327  4710 EASTERN Ave\nBaltimore, MD\n
```



---

## Make summary


```r
summary(restData)
```

```
                           name         zipCode             neighborhood councilDistrict
 MCDONALD'S                  :   8   Min.   :-21226   Downtown    :128   Min.   : 1.00  
 POPEYES FAMOUS FRIED CHICKEN:   7   1st Qu.: 21202   Fells Point : 91   1st Qu.: 2.00  
 SUBWAY                      :   6   Median : 21218   Inner Harbor: 89   Median : 9.00  
 KENTUCKY FRIED CHICKEN      :   5   Mean   : 21185   Canton      : 81   Mean   : 7.19  
 BURGER KING                 :   4   3rd Qu.: 21226   Federal Hill: 42   3rd Qu.:11.00  
 DUNKIN DONUTS               :   4   Max.   : 21287   Mount Vernon: 33   Max.   :14.00  
 (Other)                     :1293                    (Other)     :863                  
      policeDistrict                        Location.1      
 SOUTHEASTERN:385    1101 RUSSELL ST\nBaltimore, MD\n:   9  
 CENTRAL     :288    201 PRATT ST\nBaltimore, MD\n   :   8  
 SOUTHERN    :213    2400 BOSTON ST\nBaltimore, MD\n :   8  
 NORTHERN    :157    300 LIGHT ST\nBaltimore, MD\n   :   5  
 NORTHEASTERN: 72    300 CHARLES ST\nBaltimore, MD\n :   4  
 EASTERN     : 67    301 LIGHT ST\nBaltimore, MD\n   :   4  
 (Other)     :145    (Other)                         :1289  
```


---

## More in depth information


```r
str(restData)
```

```
'data.frame':	1327 obs. of  6 variables:
 $ name           : Factor w/ 1277 levels "#1 CHINESE KITCHEN",..: 9 3 992 1 2 4 5 6 7 8 ...
 $ zipCode        : int  21206 21231 21224 21211 21223 21218 21205 21211 21205 21231 ...
 $ neighborhood   : Factor w/ 173 levels "Abell","Arlington",..: 53 52 18 66 104 33 98 133 98 157 ...
 $ councilDistrict: int  2 1 1 14 9 14 13 7 13 1 ...
 $ policeDistrict : Factor w/ 9 levels "CENTRAL","EASTERN",..: 3 6 6 4 8 3 6 4 6 6 ...
 $ Location.1     : Factor w/ 1210 levels "1 BIDDLE ST\nBaltimore, MD\n",..: 835 334 554 755 492 537 505 530 507 569 ...
```



---

## Quantiles of quantitative variables


```r
quantile(restData$councilDistrict,na.rm=TRUE)
```

```
  0%  25%  50%  75% 100% 
   1    2    9   11   14 
```

```r
quantile(restData$councilDistrict,probs=c(0.5,0.75,0.9))
```

```
50% 75% 90% 
  9  11  12 
```


---

## Make table


```r
table(restData$zipCode,useNA="ifany")
```

```

-21226  21201  21202  21205  21206  21207  21208  21209  21210  21211  21212  21213  21214  21215 
     1    136    201     27     30      4      1      8     23     41     28     31     17     54 
 21216  21217  21218  21220  21222  21223  21224  21225  21226  21227  21229  21230  21231  21234 
    10     32     69      1      7     56    199     19     18      4     13    156    127      7 
 21237  21239  21251  21287 
     1      3      2      1 
```


---

## Make table


```r
table(restData$councilDistrict,restData$zipCode)
```

```
    
     -21226 21201 21202 21205 21206 21207 21208 21209 21210 21211 21212 21213 21214 21215 21216
  1       0     0    37     0     0     0     0     0     0     0     0     2     0     0     0
  2       0     0     0     3    27     0     0     0     0     0     0     0     0     0     0
  3       0     0     0     0     0     0     0     0     0     0     0     2    17     0     0
  4       0     0     0     0     0     0     0     0     0     0    27     0     0     0     0
  5       0     0     0     0     0     3     0     6     0     0     0     0     0    31     0
  6       0     0     0     0     0     0     0     1    19     0     0     0     0    15     1
  7       0     0     0     0     0     0     0     1     0    27     0     0     0     6     7
  8       0     0     0     0     0     1     0     0     0     0     0     0     0     0     0
  9       0     1     0     0     0     0     0     0     0     0     0     0     0     0     2
  10      1     0     1     0     0     0     0     0     0     0     0     0     0     0     0
  11      0   115   139     0     0     0     1     0     0     0     1     0     0     0     0
  12      0    20    24     4     0     0     0     0     0     0     0    13     0     0     0
  13      0     0     0    20     3     0     0     0     0     0     0    13     0     1     0
  14      0     0     0     0     0     0     0     0     4    14     0     1     0     1     0
    
     21217 21218 21220 21222 21223 21224 21225 21226 21227 21229 21230 21231 21234 21237 21239
  1      0     0     0     7     0   140     1     0     0     0     1   124     0     0     0
  2      0     0     0     0     0    54     0     0     0     0     0     0     0     1     0
  3      0     3     0     0     0     0     0     0     1     0     0     0     7     0     0
  4      0     0     0     0     0     0     0     0     0     0     0     0     0     0     3
  5      0     0     0     0     0     0     0     0     0     0     0     0     0     0     0
  6      0     0     0     0     0     0     0     0     0     0     0     0     0     0     0
  7     15     6     0     0     0     0     0     0     0     0     0     0     0     0     0
  8      0     0     0     0     2     0     0     0     2    13     0     0     0     0     0
  9      8     0     0     0    53     0     0     0     0     0    11     0     0     0     0
  10     0     0     1     0     0     0    18    18     0     0   133     0     0     0     0
  11     9     0     0     0     1     0     0     0     0     0    11     0     0     0     0
  12     0    26     0     0     0     0     0     0     0     0     0     2     0     0     0
  13     0     0     0     0     0     5     0     0     1     0     0     1     0     0     0
  14     0    34     0     0     0     0     0     0     0     0     0     0     0     0     0
    
     21251 21287
  1      0     0
  2      0     0
  3      2     0
  4      0     0
  5      0     0
  6      0     0
  7      0     0
  8      0     0
  9      0     0
  10     0     0
  11     0     0
  12     0     0
  13     0     1
  14     0     0
```


---

## Check for missing values


```r
sum(is.na(restData$councilDistrict))
```

```
[1] 0
```

```r
any(is.na(restData$councilDistrict))
```

```
[1] FALSE
```

```r
all(restData$zipCode > 0)
```

```
[1] FALSE
```



---

## Row and column sums


```r
colSums(is.na(restData))
```

```
           name         zipCode    neighborhood councilDistrict  policeDistrict      Location.1 
              0               0               0               0               0               0 
```

```r
all(colSums(is.na(restData))==0)
```

```
[1] TRUE
```



---

## Values with specific characteristics


```r
table(restData$zipCode %in% c("21212"))
```

```

FALSE  TRUE 
 1299    28 
```

```r
table(restData$zipCode %in% c("21212","21213"))
```

```

FALSE  TRUE 
 1268    59 
```



---

## Values with specific characteristics



```r
restData[restData$zipCode %in% c("21212","21213"),]
```

```
                                     name zipCode                neighborhood councilDistrict
29                      BAY ATLANTIC CLUB   21212                    Downtown              11
39                            BERMUDA BAR   21213               Broadway East              12
92                              ATWATER'S   21212   Chinquapin Park-Belvedere               4
111            BALTIMORE ESTONIAN SOCIETY   21213          South Clifton Park              12
187                              CAFE ZEN   21212                    Rosebank               4
220                   CERIELLO FINE FOODS   21212   Chinquapin Park-Belvedere               4
266    CLIFTON PARK GOLF COURSE SNACK BAR   21213                 Darley Park              14
276                CLUB HOUSE BAR & GRILL   21213 Orangeville Industrial Area              13
289                 CLUBHOUSE BAR & GRILL   21213 Orangeville Industrial Area              13
291                           COCKY LOU'S   21213               Broadway East              12
362       DREAM TAVERN, CARRIBEAN  U.S.A.   21213               Broadway East              13
373                         DUNKIN DONUTS   21212                    Homeland               4
383        EASTSIDE  SPORTS  SOCIAL  CLUB   21213               Broadway East              13
417                      FIELDS OLD TRAIL   21212                  Mid-Govans               4
475                             GRAND CRU   21212   Chinquapin Park-Belvedere               4
545                           RANDY'S BAR   21213               Broadway East              12
604     MURPHY'S NEIGHBORHOOD BAR & GRILL   21212                  Mid-Govans               4
616                                NEOPOL   21212   Chinquapin Park-Belvedere               4
620             NEW CLUB THUNDERBIRD INC.   21213                 Middle East              13
626                    NEW MAYFIELD, INC.   21213               Belair-Edison              13
678                          IKAN SEAFOOD   21212   Chinquapin Park-Belvedere               4
711                          KAY-CEE CLUB   21212                    Homeland               4
763                                LA'RAE   21213                      Oliver              12
777                  LEMONGRASS BALTIMORE   21213                Little Italy               1
779                   LEN'S SANDWICH SHOP   21213               Broadway East              12
845                            MCDONALD'S   21213          South Clifton Park              12
852                            MCDONALD'S   21212              Radnor-Winston               4
873                  NEW REX LIQUORS,INC.   21212                 Wilson Park               4
895                             OK TAVERN   21213               Biddle Street              13
919                          PANERA BREAD   21212                 Lake Walker               4
940                    PEIWEI ASIAN DINER   21212                  Cedarcroft               4
949                   PERGUSA ENTERPRISES   21212                    Rosebank               4
957               PHANTOM'S BAR AND GRILL   21213               Belair-Edison               3
976          POPEYES FAMOUS FRIED CHICKEN   21212              Winston-Govans               4
994                         ROBBIE'S NEST   21213               Broadway East              12
1017                          RUTLAND BAR   21213               Broadway East              12
1018                      RYAN'S DAUGHTER   21212   Chinquapin Park-Belvedere               4
1022         saigon remembered restaurant   21212                  Mid-Govans               4
1053                SHIRLEY'S  HONEY HOLE   21213               Broadway East              13
1120                     STEEPLE CHASE II   21213               Biddle Street              13
1122                               SUBWAY   21213                      Oliver              12
1153                              TAM-TAM   21212                  Mid-Govans               4
1155                                TASTE   21212                  Mid-Govans               4
1159                         TAYLORS EAST   21213                       Berea              13
1186                THE EDGE BAR & LOUNGE   21213               Broadway East              12
1187 THE EDGE BAR & LOUNGE - KITCHEN AREA   21213               Broadway East              12
1198               THE HOLLOW BAR & GRILL   21212                    Rosebank               4
1209             THE NEW BUCKETT'S LOUNGE   21213               Broadway East              13
1232                         THREE  ACE'S   21213               Belair-Edison               3
1246                 TORAIN'S  HIDE-A-WAY   21213               Broadway East              12
1259                    TSUNAMI BALTIMORE   21213                Little Italy               1
1287                         VITO'S PIZZA   21212                  Cedarcroft               4
1298 WENDY'S OLD FASHIONED HAMBURGERS #96   21212                    Homeland               4
1304                 WHITTEN'S  (4502-04)   21213           Claremont-Freedom              13
1312                          wozi lounge   21212                    Guilford               4
1319           YETI RESTAURANT & CARRYOUT   21212                    Rosebank               4
1320                     YORK CLUB TAVERN   21212                    Homeland               4
1323            ZEN WEST ROADSIDE CANTINA   21212                    Rosebank               4
1325                     ZINK'S CAF\u0090   21213               Belair-Edison              13
     policeDistrict                           Location.1
29          CENTRAL      206 REDWOOD ST\nBaltimore, MD\n
39          EASTERN      1801 NORTH AVE\nBaltimore, MD\n
92         NORTHERN   529 BELVEDERE AVE\nBaltimore, MD\n
111         EASTERN      1932 BELAIR RD\nBaltimore, MD\n
187        NORTHERN   438 BELVEDERE AVE\nBaltimore, MD\n
220        NORTHERN   529 BELVEDERE AVE\nBaltimore, MD\n
266    NORTHEASTERN       2701 ST LO DR\nBaltimore, MD\n
276         EASTERN     4217 ERDMAN AVE\nBaltimore, MD\n
289         EASTERN     4217 ERDMAN AVE\nBaltimore, MD\n
291         EASTERN      2101 NORTH AVE\nBaltimore, MD\n
362         EASTERN  2300 LAFAYETTE AVE\nBaltimore, MD\n
373        NORTHERN        5422 YORK RD\nBaltimore, MD\n
383         EASTERN 1203 COLLINGTON AVE\nBaltimore, MD\n
417        NORTHERN        5723 YORK RD\nBaltimore, MD\n
475        NORTHERN   527 BELVEDERE AVE\nBaltimore, MD\n
545         EASTERN      2135 NORTH AVE\nBaltimore, MD\n
604        NORTHERN        5847 YORK RD\nBaltimore, MD\n
616        NORTHERN   529 BELVEDERE AVE\nBaltimore, MD\n
620         EASTERN       2201 CHASE ST\nBaltimore, MD\n
626    NORTHEASTERN      3349 BELAIR RD\nBaltimore, MD\n
678        NORTHERN   529 BELVEDERE AVE\nBaltimore, MD\n
711        NORTHERN    201 HOMELAND AVE\nBaltimore, MD\n
763         EASTERN     1000 HOFFMAN ST\nBaltimore, MD\n
777    SOUTHEASTERN    1300 BANK STREET\nBaltimore, MD\n
779         EASTERN  1500 WASHINGTON ST\nBaltimore, MD\n
845         EASTERN       2001 BROADWAY\nBaltimore, MD\n
852        NORTHERN        5100 YORK RD\nBaltimore, MD\n
873        NORTHERN        4637 YORK RD\nBaltimore, MD\n
895         EASTERN      2301 BIDDLE ST\nBaltimore, MD\n
919        NORTHERN    6307 1 2 YORK RD\nBaltimore, MD\n
940        NORTHERN        6302 YORK RD\nBaltimore, MD\n
949        NORTHERN        5928 YORK RD\nBaltimore, MD\n
957    NORTHEASTERN      3539 BELAIR RD\nBaltimore, MD\n
976        NORTHERN        5002 YORK RD\nBaltimore, MD\n
994         EASTERN      2250 NORTH AVE\nBaltimore, MD\n
1017        EASTERN    1508 RUTLAND AVE\nBaltimore, MD\n
1018       NORTHERN   600 BELVEDERE AVE\nBaltimore, MD\n
1022       NORTHERN        5857 york rd\nBaltimore, MD\n
1053        EASTERN      2300 OLIVER ST\nBaltimore, MD\n
1120        EASTERN       2401 CHASE ST\nBaltimore, MD\n
1122        EASTERN      1400 NORTH AVE\nBaltimore, MD\n
1153       NORTHERN        5722 YORK RD\nBaltimore, MD\n
1155       NORTHERN   510 BELVEDERE AVE\nBaltimore, MD\n
1159        EASTERN     1201 POTOMAC ST\nBaltimore, MD\n
1186        EASTERN     2015 FEDERAL ST\nBaltimore, MD\n
1187        EASTERN     2015 FEDERAL ST\nBaltimore, MD\n
1198       NORTHERN        5921 YORK RD\nBaltimore, MD\n
1209        EASTERN     1432 CHESTER ST\nBaltimore, MD\n
1232   NORTHEASTERN      3534 belair RD\nBaltimore, MD\n
1246        EASTERN   1701 ELLSWORTH ST\nBaltimore, MD\n
1259   SOUTHEASTERN        1300 BANK ST\nBaltimore, MD\n
1287       NORTHERN        6304 YORK RD\nBaltimore, MD\n
1298       NORTHERN        5615 YORK RD\nBaltimore, MD\n
1304   NORTHEASTERN     4502 ERDMAN AVE\nBaltimore, MD\n
1312       NORTHERN        4515 YORK RD\nBaltimore, MD\n
1319       NORTHERN        5926 YORK RD\nBaltimore, MD\n
1320       NORTHERN        5407 YORK RD\nBaltimore, MD\n
1323       NORTHERN        5916 YORK RD\nBaltimore, MD\n
1325   NORTHEASTERN   3300 LAWNVIEW AVE\nBaltimore, MD\n
```



---

## Cross tabs


```r
data(UCBAdmissions)
DF = as.data.frame(UCBAdmissions)
summary(DF)
```

```
      Admit       Gender   Dept       Freq    
 Admitted:12   Male  :12   A:4   Min.   :  8  
 Rejected:12   Female:12   B:4   1st Qu.: 80  
                           C:4   Median :170  
                           D:4   Mean   :189  
                           E:4   3rd Qu.:302  
                           F:4   Max.   :512  
```



---

## Cross tabs


```r
xt <- xtabs(Freq ~ Gender + Admit,data=DF)
xt
```

```
        Admit
Gender   Admitted Rejected
  Male       1198     1493
  Female      557     1278
```



---

## Flat tables


```r
warpbreaks$replicate <- rep(1:9, len = 54)
xt = xtabs(breaks ~.,data=warpbreaks)
xt
```

```
, , replicate = 1

    tension
wool  L  M  H
   A 26 18 36
   B 27 42 20

, , replicate = 2

    tension
wool  L  M  H
   A 30 21 21
   B 14 26 21

, , replicate = 3

    tension
wool  L  M  H
   A 54 29 24
   B 29 19 24

, , replicate = 4

    tension
wool  L  M  H
   A 25 17 18
   B 19 16 17

, , replicate = 5

    tension
wool  L  M  H
   A 70 12 10
   B 29 39 13

, , replicate = 6

    tension
wool  L  M  H
   A 52 18 43
   B 31 28 15

, , replicate = 7

    tension
wool  L  M  H
   A 51 35 28
   B 41 21 15

, , replicate = 8

    tension
wool  L  M  H
   A 26 30 15
   B 20 39 16

, , replicate = 9

    tension
wool  L  M  H
   A 67 36 26
   B 44 29 28
```



---

## Flat tables


```r
ftable(xt)
```

```
             replicate  1  2  3  4  5  6  7  8  9
wool tension                                     
A    L                 26 30 54 25 70 52 51 26 67
     M                 18 21 29 17 12 18 35 30 36
     H                 36 21 24 18 10 43 28 15 26
B    L                 27 14 29 19 29 31 41 20 44
     M                 42 26 19 16 39 28 21 39 29
     H                 20 21 24 17 13 15 15 16 28
```



---

## Size of a data set


```r
fakeData = rnorm(1e5)
object.size(fakeData)
```

```
800040 bytes
```

```r
print(object.size(fakeData),units="Mb")
```

```
0.8 Mb
```







