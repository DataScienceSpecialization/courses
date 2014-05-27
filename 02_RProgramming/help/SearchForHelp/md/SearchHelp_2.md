Searching for help - 2
========================================================

Cleanning
---------
Before start coding let's clean our Global environment.

```r
rm(list = ls())
```

Working directory
-----------------
For readiness let's pass the directory path to a variable

```r
mylocal.path <- "C:/Users/Diego/Documents/GitHub/R-Notes"
```

Now let's set our working directory

```r
setwd(mylocal.path)
```



```r
# House Keeping -----------------------------------------------------------
rm(mylocal.path)
```

Download
--------
Let's create a variable that contains the dataset url:

```r
dataset.url <- "http://d396qusza40orc.cloudfront.net/rprog%2Fdata%2Fspecdata.zip"
```

Note that I changed the **https** for **http**.  

While **https** works great on **Windows**, **Mac** and **Linux** users would need to use the **method** `method = curl` of the function **download.file()** in order to avoid errors.  

Also **knitr** doesn't like the use of **https** without that method.  

So for demonstration purposes it's easier to use **http**.

Now let's create a variable with the local name we will assign to that file.

```r
localpath.file <- "./rprog%2Fdata%2Fspecdata.zip"
```

Note the **./** This implies I'm using the working directory.  

Finally let's download the dataset.

```r
if (file.exists(localpath.file) == F) {
    download.file(dataset.url, localpath.file, mode = "wb")
}
```

I use a conditional for checking for the existence of the file in my working directory because I don't want to keep downloading over and over the same file.  

Note that I use the **mode** `mode = "wb"` (binary) in order to avoid corruption.

Unzip
-----
Let's unzip the file.

```r
if (file_test("-d", "specdata") == F) {
    unzip(localpath.file)
}
```

Here again I use a conditional, this time for checking for the existence of the directory "specdata" since I don't want to rewrite it if it already exists.  

```r
# House Keeping -----------------------------------------------------------
rm(list = c("dataset.url", "localpath.file"))
```

Double-check the contents of the working directory.

List the Files in a Directory/Folder
------------------------------------

```r
dir(); # AKA list.files()
```

```
##  [1] "index.html"                  "index.md"                   
##  [3] "index.Rmd"                   "rprog%2Fdata%2Fspecdata.zip"
##  [5] "run_analysis_working.R"      "SearchHelp_1.html"          
##  [7] "SearchHelp_1.md"             "SearchHelp_1.R"             
##  [9] "SearchHelp_1.Rmd"            "SearchHelp_2.html"          
## [11] "SearchHelp_2.md"             "SearchHelp_2.R"             
## [13] "SearchHelp_2.Rmd"            "slides"                     
## [15] "specdata"
```

Note **specdata** has no extension. This is because it is a folder.

```r
list.dirs()
```

```
## [1] "."          "./slides"   "./specdata"
```

Interestingly, **list.dirs()** prints also hidden folders (all **git** folder and subfolders are hidden).  

Let's take a look at what is contained at the spectdata folder:

```r
dir("./specdata")
```

```
##   [1] "001.csv" "002.csv" "003.csv" "004.csv" "005.csv" "006.csv" "007.csv"
##   [8] "008.csv" "009.csv" "010.csv" "011.csv" "012.csv" "013.csv" "014.csv"
##  [15] "015.csv" "016.csv" "017.csv" "018.csv" "019.csv" "020.csv" "021.csv"
##  [22] "022.csv" "023.csv" "024.csv" "025.csv" "026.csv" "027.csv" "028.csv"
##  [29] "029.csv" "030.csv" "031.csv" "032.csv" "033.csv" "034.csv" "035.csv"
##  [36] "036.csv" "037.csv" "038.csv" "039.csv" "040.csv" "041.csv" "042.csv"
##  [43] "043.csv" "044.csv" "045.csv" "046.csv" "047.csv" "048.csv" "049.csv"
##  [50] "050.csv" "051.csv" "052.csv" "053.csv" "054.csv" "055.csv" "056.csv"
##  [57] "057.csv" "058.csv" "059.csv" "060.csv" "061.csv" "062.csv" "063.csv"
##  [64] "064.csv" "065.csv" "066.csv" "067.csv" "068.csv" "069.csv" "070.csv"
##  [71] "071.csv" "072.csv" "073.csv" "074.csv" "075.csv" "076.csv" "077.csv"
##  [78] "078.csv" "079.csv" "080.csv" "081.csv" "082.csv" "083.csv" "084.csv"
##  [85] "085.csv" "086.csv" "087.csv" "088.csv" "089.csv" "090.csv" "091.csv"
##  [92] "092.csv" "093.csv" "094.csv" "095.csv" "096.csv" "097.csv" "098.csv"
##  [99] "099.csv" "100.csv" "101.csv" "102.csv" "103.csv" "104.csv" "105.csv"
## [106] "106.csv" "107.csv" "108.csv" "109.csv" "110.csv" "111.csv" "112.csv"
## [113] "113.csv" "114.csv" "115.csv" "116.csv" "117.csv" "118.csv" "119.csv"
## [120] "120.csv" "121.csv" "122.csv" "123.csv" "124.csv" "125.csv" "126.csv"
## [127] "127.csv" "128.csv" "129.csv" "130.csv" "131.csv" "132.csv" "133.csv"
## [134] "134.csv" "135.csv" "136.csv" "137.csv" "138.csv" "139.csv" "140.csv"
## [141] "141.csv" "142.csv" "143.csv" "144.csv" "145.csv" "146.csv" "147.csv"
## [148] "148.csv" "149.csv" "150.csv" "151.csv" "152.csv" "153.csv" "154.csv"
## [155] "155.csv" "156.csv" "157.csv" "158.csv" "159.csv" "160.csv" "161.csv"
## [162] "162.csv" "163.csv" "164.csv" "165.csv" "166.csv" "167.csv" "168.csv"
## [169] "169.csv" "170.csv" "171.csv" "172.csv" "173.csv" "174.csv" "175.csv"
## [176] "176.csv" "177.csv" "178.csv" "179.csv" "180.csv" "181.csv" "182.csv"
## [183] "183.csv" "184.csv" "185.csv" "186.csv" "187.csv" "188.csv" "189.csv"
## [190] "190.csv" "191.csv" "192.csv" "193.csv" "194.csv" "195.csv" "196.csv"
## [197] "197.csv" "198.csv" "199.csv" "200.csv" "201.csv" "202.csv" "203.csv"
## [204] "204.csv" "205.csv" "206.csv" "207.csv" "208.csv" "209.csv" "210.csv"
## [211] "211.csv" "212.csv" "213.csv" "214.csv" "215.csv" "216.csv" "217.csv"
## [218] "218.csv" "219.csv" "220.csv" "221.csv" "222.csv" "223.csv" "224.csv"
## [225] "225.csv" "226.csv" "227.csv" "228.csv" "229.csv" "230.csv" "231.csv"
## [232] "232.csv" "233.csv" "234.csv" "235.csv" "236.csv" "237.csv" "238.csv"
## [239] "239.csv" "240.csv" "241.csv" "242.csv" "243.csv" "244.csv" "245.csv"
## [246] "246.csv" "247.csv" "248.csv" "249.csv" "250.csv" "251.csv" "252.csv"
## [253] "253.csv" "254.csv" "255.csv" "256.csv" "257.csv" "258.csv" "259.csv"
## [260] "260.csv" "261.csv" "262.csv" "263.csv" "264.csv" "265.csv" "266.csv"
## [267] "267.csv" "268.csv" "269.csv" "270.csv" "271.csv" "272.csv" "273.csv"
## [274] "274.csv" "275.csv" "276.csv" "277.csv" "278.csv" "279.csv" "280.csv"
## [281] "281.csv" "282.csv" "283.csv" "284.csv" "285.csv" "286.csv" "287.csv"
## [288] "288.csv" "289.csv" "290.csv" "291.csv" "292.csv" "293.csv" "294.csv"
## [295] "295.csv" "296.csv" "297.csv" "298.csv" "299.csv" "300.csv" "301.csv"
## [302] "302.csv" "303.csv" "304.csv" "305.csv" "306.csv" "307.csv" "308.csv"
## [309] "309.csv" "310.csv" "311.csv" "312.csv" "313.csv" "314.csv" "315.csv"
## [316] "316.csv" "317.csv" "318.csv" "319.csv" "320.csv" "321.csv" "322.csv"
## [323] "323.csv" "324.csv" "325.csv" "326.csv" "327.csv" "328.csv" "329.csv"
## [330] "330.csv" "331.csv" "332.csv"
```

I would like to know the file extensions of the files at the extracted folder in order to get an idea about what I'm dealing with.  

Sure, we can do this by "eye" or by using Regular Expressions.  

But I'm lazy and I think R should have a function for doing that.  

However, if that function exists it is not contained at the **'base'** packages.

By the way, base packages are:
  1. stats
  2. graphics
  3. grDevices
  4. utils
  5. datasets
  6. methods
  7. base

Is not that I know them by heart; I just ran the function **sessionInfo()**
### Collect Information About the Current R Session


```r
sessionInfo()
```

```
## R version 3.1.0 (2014-04-10)
## Platform: x86_64-w64-mingw32/x64 (64-bit)
## 
## locale:
## [1] LC_COLLATE=English_United States.1252 
## [2] LC_CTYPE=English_United States.1252   
## [3] LC_MONETARY=English_United States.1252
## [4] LC_NUMERIC=C                          
## [5] LC_TIME=English_United States.1252    
## 
## attached base packages:
## [1] stats     graphics  grDevices utils     datasets  methods   base     
## 
## other attached packages:
## [1] knitr_1.5
## 
## loaded via a namespace (and not attached):
## [1] evaluate_0.5.5 formatR_0.10   stringr_0.6.2  tools_3.1.0
```

Now let's see if we can find a function for getting only the file extensions.

Search through all CRAN packages with the 'sos' package
-------------------------------------------------------
From the vignette of the package **"sos"**:  
 ---
> The sos package provides a means
to quickly and flexibly search the help pages
of contributed packages, finding functions and
datasets in seconds or minutes that could not
be found in hours or days by any other means
we know. 
 
 ---

### Installing packages:
Install the **"sos"** package

```r
if ("sos" %in% rownames(installed.packages()) == F) {
    install.packages("sos", repos = "http://cran.rstudio.com/")
}
```

Here I first check if the package "sos" is already installed, and if not I install it.
### Loading packages:
Load the **"sos"** package

```r
library(sos); # Review the use of the require() function.
```

```
## Loading required package: brew
## 
## Attaching package: 'sos'
## 
## The following object is masked from 'package:utils':
## 
##     ?
```

Let's find in the help pages for a function that includes the **keywords**
*file* AND *extensions* using the function **findFn()**. Note the use of **{}**. They are useful for searching for an exact string.

```r
cran.help <- findFn("{file extensions}", sortby = "MaxScore")
```

```
## found 66 matches;  retrieving 4 pages
## 2 3 4 
## Downloaded 39 links in 29 packages.
```

### Getting the class of an object
Well, I just passed "whatever" was returned by the **findFn()** function to a new variable.  
However I don't know what kind of object it is. So let's find it.

```r
is(cran.help)
```

```
## [1] "findFn"
```

```r
class(cran.help)
```

```
## [1] "findFn"     "data.frame"
```

So it seems the newly created object belongs to a data.frame superclass.
### Test if an object can be treated as from a superclass.

```r
is(cran.help, "data.frame")
```

```
## [1] TRUE
```

Perfect. My object *cran.help* can use data.frame methods!
### Getting the methods of a class

```r
methods(class = "data.frame")
```

```
##  [1] $.data.frame             $<-.data.frame          
##  [3] [.data.frame             [[.data.frame           
##  [5] [[<-.data.frame          [<-.data.frame          
##  [7] aggregate.data.frame     anyDuplicated.data.frame
##  [9] as.data.frame.data.frame as.list.data.frame      
## [11] as.matrix.data.frame     by.data.frame           
## [13] cbind.data.frame         dim.data.frame          
## [15] dimnames.data.frame      dimnames<-.data.frame   
## [17] droplevels.data.frame    duplicated.data.frame   
## [19] edit.data.frame*         format.data.frame       
## [21] formula.data.frame*      head.data.frame*        
## [23] is.na.data.frame         Math.data.frame         
## [25] merge.data.frame         na.exclude.data.frame*  
## [27] na.omit.data.frame*      Ops.data.frame          
## [29] PackageSum2.data.frame*  plot.data.frame*        
## [31] print.data.frame         prompt.data.frame*      
## [33] rbind.data.frame         row.names.data.frame    
## [35] row.names<-.data.frame   rowsum.data.frame       
## [37] split.data.frame         split<-.data.frame      
## [39] stack.data.frame*        str.data.frame*         
## [41] subset.data.frame        summary.data.frame      
## [43] Summary.data.frame       t.data.frame            
## [45] tail.data.frame*         transform.data.frame    
## [47] unique.data.frame        unstack.data.frame*     
## [49] within.data.frame       
## 
##    Non-visible functions are asterisked
```

Well, we have several methods for working with data frames.  

Let's take a look at the packages returned by using the **summary()** function first and then using the **PackageSummary()** function.

```r
summary(cran.help, minPackages = 20)
```

```
## 
## Call:
## findFn(string = "{file extensions}", sortby = "MaxScore")
## 
## Total number of matches: 66
## Downloaded 39 links in 29 packages.
## 
## Packages with at least 1 match using pattern
##   '{file%20extensions}'
##              Package Count MaxScore TotalScore       Date
## 1                opm     5        5         13 2014-04-22
## 2          oro.nifti     2       24         31 2014-01-09
## 3                emu     2       24         25 2012-07-16
## 4             reader     2        5          8 2014-03-04
## 5                nat     2        2          3 2014-05-16
## 6       PBSmodelling     2        2          3 2014-04-22
## 7           pkgutils     2        1          2 2014-01-23
## 8              tools     1        7          7 2013-10-17
## 9    ProjectTemplate     1        5          5 2014-03-20
## 10          markdown     1        4          4 2014-05-16
## 11          metrumrg     1        3          3 2014-03-04
## 12             plink     1        2          2 2012-02-22
## 13             RCurl     1        2          2 2013-03-08
## 14             RSAGA     1        2          2 2013-08-03
## 15      tractor.base     1        2          2 2014-03-20
## 16            DynDoc     1        1          1 2013-10-29
## 17              fail     1        1          1 2013-09-21
## 18         gWidgets2     1        1          1 2014-03-20
## 19    gWidgets2RGtk2     1        1          1 2013-10-29
## 20    gWidgets2tcltk     1        1          1 2013-11-20
## 21             knitr     1        1          1 2013-10-06
## 22        likelihood     1        1          1 2012-02-22
## 23 MALDIquantForeign     1        1          1 2014-04-22
## 24           monitoR     1        1          1 2014-05-16
## 25           openair     1        1          1 2014-02-16
## 26            QCGWAS     1        1          1 2014-02-16
## 27              Rook     1        1          1 2013-01-11
## 28           RSurvey     1        1          1 2014-01-09
## 29         subselect     1        1          1 2013-07-18
```

The response from the **summary()** call seems different from the one we usually see when using the **base** package.  
Let's see if there is an specific method **summary** for the **findFn** object created by the **findFn()** function:

```r
?summary.findFn
```

```
## starting httpd help server ... done
```

Effectively the **findFn()** has a method **summary** and the help page explains which information is returned when using it.  

Now let's compare these results with the ones returned by the **PackageSummary()** function.

```r
PackageSummary(cran.help)
```

```
##              Package Count MaxScore TotalScore                Date
## 15               opm     5        5         13 2014-04-22 06:30:23
## 16         oro.nifti     2       24         31 2014-01-09 08:06:51
## 2                emu     2       24         25 2012-07-16 08:23:06
## 23            reader     2        5          8 2014-03-04 10:44:29
## 13               nat     2        2          3 2014-05-16 16:30:06
## 17      PBSmodelling     2        2          3 2014-04-22 06:30:45
## 18          pkgutils     2        1          2 2013-04-29 17:00:02
## 28             tools     1        7          7 2013-10-17 20:30:04
## 20   ProjectTemplate     1        5          5 2014-03-20 07:22:47
## 10          markdown     1        4          4 2014-05-16 16:29:29
## 11          metrumrg     1        3          3 2014-03-04 10:28:01
## 19             plink     1        2          2 2012-02-22 19:28:11
## 22             RCurl     1        2          2 2013-03-08 15:47:59
## 25             RSAGA     1        2          2 2013-08-03 04:45:48
## 29      tractor.base     1        2          2 2014-03-20 07:32:40
## 1             DynDoc     1        1          1 2013-10-29 16:45:34
## 3               fail     1        1          1 2013-09-21 14:58:16
## 4          gWidgets2     1        1          1 2014-03-20 07:17:33
## 5     gWidgets2RGtk2     1        1          1 2013-10-29 17:30:08
## 6     gWidgets2tcltk     1        1          1 2013-11-20 10:56:46
## 7              knitr     1        1          1 2013-10-06 06:59:17
## 8         likelihood     1        1          1 2012-02-22 19:33:10
## 9  MALDIquantForeign     1        1          1 2014-04-22 06:35:57
## 12           monitoR     1        1          1 2014-05-16 16:15:04
## 14           openair     1        1          1 2014-02-16 10:22:19
## 21            QCGWAS     1        1          1 2014-02-16 10:12:47
## 24              Rook     1        1          1 2013-01-11 07:06:43
## 26           RSurvey     1        1          1 2014-01-09 08:09:38
## 27         subselect     1        1          1 2013-07-18 08:06:36
```

With a few differences, results are pretty similar, so we can use any of them for reviewing the results.

By inspecting the names of the packages returned there is one that calls my attention: **'tools'**.

It would be great if that package had a vignette, so let's see how we can query for that.

### Finding vignettes with the "sos" package:
The **"sos"** package has also a nice function called **PackageSum2()**.  

From the vignette: 
> The PackageSum2 function,(...) adds information from installed packages not obtained by `findFn`. The extended summary includes the package title and date, plus the names of the author and the maintainer, the number of help pages in the package, and the name(s) of any vignettes.

This is cool, since the names of the vignettes are not always easy to find, and as I previously said, not all packages have a vignette.

So let's create a data frame for storing the results of **PackageSum2()** and then subset that data frame for keeping only the results of the packages that contain a vignette and get their actual names:


```r
expanded.cran.help <- PackageSum2(cran.help)
```

### Subsetting
Now let's extract the columns "Packages" and "Vignettes" for which the result is not a zero length string (ZLS).  

I would like to highlight that a ZLS is not the same as NA, and this is something you need to consider when cleaning a data set, because functions intended to remove NA's won't work with ZLS's.

```r
b <- expanded.cran.help[expanded.cran.help$vignette != "", 1];
d <- strsplit(sub("^[0-9]?\\: ", "",
                  expanded.cran.help[expanded.cran.help$vignette != "", 11],
                  ","),
              ", ");
```

Ok, this seems complex, so let me explain a bit what I did.   

First I subset the *expanded.cran.help* data frame for getting only the rows from the columns **Package** (column number = 1) and **Vignette** (column number = 11) that contain vignettes:  

`expanded.cran.help[expanded.cran.help$vignette != "", column number]`.  

In the case of the column **Package** that's the only thing I had to do.  

On the other hand, the column **Vignette** needs further processing.  

That column returns the results showing first the number of vignettes in a package, then a colon and a space, and finally the names of the vignettes.  

So the first thing I want to do is to remove that.  

### Using Regular Expresions for replacement
For that I use the function **sub()** that uses a Regular Expression (RegExp) for replacing the first occurrence of a pattern. My patern in this case is `^.: `, where:  

   1. The caret ^ is an anchor element that matches the **position before the first character** in the string.  
   2. [0-9] means **any digit**.  
   3. The question mark ? is used here to find **any number of digits**.  
   4. Finally since the colon : has a special meaning in RegExp it needs to be **escaped** with the backslah. However in RStudio one needs to use a double backslash for those purposes.  

### Splitting a string
After removing that part of the string, I used the **strsplit()** function for splitting each record of that column anywhere a **comma and a space** appear.  

The reason for this, is all vignettes appear in a single cell separated by commas. A convenient but ugly presentation.

As a result we end up with two different objects: a character vector, and a list.

### Getting the class of an object
You can corroborate this by using the **class()** function:

```r
class(b)
```

```
## [1] "character"
```

```r
class(d)
```

```
## [1] "list"
```

Now we need to put both objects together!

### Initialize a data frame.
So, let's **initialize** an empty data frame for storing the results:

```r
df <- data.frame(Packages = character(0), Vignettes = character(0), stringsAsFactors = F)
```

### Appending rows to an existing data frame.
And finally let's **append** the filtered and processed columns into our new data frame for easier visualization by using the function **rbind()**:

```r
for (i in 1:length(b)) {
    df <- rbind(df, merge(setNames(as.data.frame(b[i]), "Packages"), setNames(as.data.frame(d[[i]]), 
        "Vignettes")))
}
```

Here I used a simple loop for **merging** the values of the character vector and the list according to their indexes.  

I would like to highlight that is more efficient to **preallocate** objects and filling them when needed than appending rows and/or columns each time. However this is not always possible.   

### Coercing objects as data frames:
Note that as soon I capture every index I transform it into a data frame using the **as.data.frame()** function and assign the column names with the **setNames()** function.  

Also note the different way indexes are used at the character vector and at the list.  

### Merging data:
After that I merge both data frames without specifying any kind of join using the **merge()** function.  

By doing this I'm creating a **cartesian product**.  **<- Homework** :)

Finally I append to my data frame the results of this catesian product at every cycle of the loop.  

Here is the final result:

```r
df
```

```
##    Packages         Vignettes
## 1  markdown   markdown-output
## 2  markdown markdown-examples
## 3     knitr       knitr-intro
## 4     knitr        knitr-html
## 5     knitr    knitr-markdown
## 6     knitr        datatables
## 7     knitr     knitr-refcard
## 8     knitr     docco-classic
## 9     knitr      docco-linear
## 10    knitr       knit_expand
```

Unfortunately, the library **"tools"** does not contain a vignette. Too bad.

### Reviewing the functions of a package returned by "sos":
Not everything is lost if our interesting package doesn't contain a vignette.  

Let's explore the functions that matched our search.

For that, subset the original data frame into another with only the packages we want to review, and ...

```r
filtered.results <- cran.help[cran.help$Package == "tools", ]
```

... open the filtered HTML page and check the results

```r
filtered.results
```

By looking at the 'fileutils' page, there's a function that seems to do exactly what I'm looking for: **'file_ext()'**  

So, let's test it.

### Testing the file_ext() function:
Load the library

```r
library(tools)
```

Get the extension of the files in my specdata folder

```r
file_ext(dir("./specdata"))
```

```
##   [1] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
##  [12] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
##  [23] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
##  [34] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
##  [45] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
##  [56] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
##  [67] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
##  [78] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
##  [89] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [100] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [111] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [122] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [133] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [144] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [155] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [166] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [177] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [188] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [199] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [210] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [221] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [232] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [243] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [254] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [265] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [276] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [287] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [298] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [309] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [320] "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv" "csv"
## [331] "csv" "csv"
```

Great! It returns only the extension of the files.  

So let's find the unique extensions at that folder:

```r
unique(file_ext(dir("./specdata")))
```

```
## [1] "csv"
```

All files at the specdata folder have a csv extension.  

So most probably we can read all those files by simply using the **read.csv()** function!

### Why to stay away from csv files (personal opinion):
I said most probably because remember csv files are just text files with "columns" separated by a comma.

Using a comma or a semicolon as a column separator is a call for disaster. I really don't like to work with that format because fields are separated by commas!

So if I have a string that contains a comma, or a number coming from a country that uses comma as decimal separator, etc, data will be messed-up.

### Final cleaning:
Since I don't need some objects anymore, a wise thing is to remove them from R.  

Remember R keeps everything in memory, so if you don't clean regularly your environment you are wasting important resources.

Additionally, I'm kind of impatient so I call the garbage collector **gc()** right away.


```r
rm(list = ls())
gc()
```

```
##          used (Mb) gc trigger (Mb) max used (Mb)
## Ncells 310735 16.6     467875 25.0   407500 21.8
## Vcells 555886  4.3    1031040  7.9   859060  6.6
```

