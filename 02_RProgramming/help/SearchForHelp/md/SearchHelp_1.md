Searching for help - 1
========================================================

Using the local help
--------------------
### Searching for functions:
First and foremost we should be able to handle the **base** library.  

I encourage you to review its documentation by running the next command,

```r
library(help = base)
```

and checking each of the functions contained in it by using the **help()** function or the question operator **?**, for example:

```r
help("Control")
```

```
## starting httpd help server ... done
```


Since usually the name of a function is closely related to the action it performs, it's useful to try to find functions either by a keyword which can be a whole word, an abbreviation, or an acronym, for example:


```r
apropos("help")
```

```
## [1] "help"         "help.request" "help.search"  "help.start"
```

Let's type:

```r
?help.search;
```

We see the function **help.search()** can take several *parameters*.  

We will use by now only the arguments *pattern* and *package*.

Also note that in the section **See Also** appear links to other functions.  Particularly look at this line:

 ---
> RSiteSearch to access an on-line search of R resources.

 ---
The function **RSiteSearch()** uses an on-line search engine for finding keywords and phrases through the R documentation.  Very powerful but you need to learn how to use it in order to get the results you want otherwise you can end up with thousand documents not related with what you were looking for.

Type for example:

```r
RSiteSearch("help")
```

```
## A search query has been submitted to http://search.r-project.org
## The results page should open in your browser shortly
```

The search returned 4027 documents.

So a better search will look like this:

```r
RSiteSearch("{remove objects}", restrict = "function")
```

```
## A search query has been submitted to http://search.r-project.org
## The results page should open in your browser shortly
```

Now our search returned 79 documents, and the second one listed is the one we were looking for.

Let's back to our local search, and see what the **help.search()** function can do.


```r
help.search("remove objects", package = "base")
```

The help page returns:  
 ----
>    **base::rm**      Remove Objects from a Specified Environment  

 ----
If we go to the end of the help page we'll see the following example:  
 ----
>  **rm**(**list** = **ls**())  

 ----  

So, list is one of the arguments of the **rm()** AKA **remove()** function.  

In order to see what the function **ls()** does, type:

```r
?ls();
```


### Find the package a function belongs to:
We can double-check **rm()** really belongs to the base package by using the function **find()**

```r
find("rm")
```

```
## [1] "package:base"
```

### Run examples:
You can also run the existing examples for a particular function by using the **example()** function.

```r
example(rm)
```

```
## 
## rm> tmp <- 1:4
## 
## rm> ## work with tmp  and cleanup
## rm> rm(tmp)
## 
## rm> ## Not run: 
## rm> ##D ## remove (almost) everything in the working environment.
## rm> ##D ## You will get no warning, so don't do this unless you are really sure.
## rm> ##D rm(list = ls())
## rm> ## End(Not run)
## rm> 
## rm>
```

Vignettes
---------
A "vignette" is a special type of **documentation** that several but not all packages have included.  

When it exists, is the most important source of help for dealing with a particular package.  

You can browse all the vignettes you have at your local R installation the following way:  
### Browse local vignnetes:

```r
browseVignettes(all = T)
```

The **browseVignettes()** function opens your default web browser and displays a list of the available vignettes at your computer and hyperlinks to open them.  

### Review local vignette:
For viewing the vignette for a particular library you can use the **vignette()** function, or via the the **browseVignettes()**:

```r
vignette("Sweave")
```

This will open (usually) a **.pdf** or an **.html** file with the required vignette.

### Review local vignette:

```r
browseVignettes("knitr")
```

The Rdocumentation page
-----------------------
A very nice tool for searching and reading the documentation has been built by the rdocumentation.org.  

From the web page:
 ---
> Rdocumentation is a tool that helps you easily find and browse the documentation of all current and some past packages on CRAN.

 ---

```r
# Uncomment if you want to go to the web page
browseURL("http://www.rdocumentation.org/")
```

### The Rdocumentation package:
There is also a package for using the "rdocumentation" tool inside R.  

It can be found on GitHub.

```r
# Uncomment if you want to go to the web page
browseURL("https://github.com/Data-Camp/Rdocumentation")
```


So let's install it:

### Installing from GitHub:

```r
library(devtools)
```

```
## WARNING: Rtools is required to build R packages, but is not currently installed.
## 
## Please download and install Rtools 3.1 from http://cran.r-project.org/bin/windows/Rtools/ and then run find_rtools().
## 
## Attaching package: 'devtools'
## 
## The following objects are masked from 'package:utils':
## 
##     ?, help
## 
## The following object is masked from 'package:base':
## 
##     system.file
```

```r
install_github("Rdocumentation", "Data-Camp")
```

```
## Installing github repo Rdocumentation/master from Data-Camp
## Downloading master.zip from https://github.com/Data-Camp/Rdocumentation/archive/master.zip
## Installing package from C:\Users\Diego\AppData\Local\Temp\RtmpQZ8iDE/master.zip
## Installing Rdocumentation
## "C:/PROGRA~1/R/R-31~1.0/bin/x64/R" --vanilla CMD INSTALL  \
##   "C:\Users\Diego\AppData\Local\Temp\RtmpQZ8iDE\devtools1684195d35f9\Rdocumentation-master"  \
##   --library="C:/Users/Diego/Documents/R/win-library/3.1" --install-tests
```

### Using the Rdocumentation package

```r
library(Rdocumentation)
```

```
## 
## Attaching package: 'Rdocumentation'
## 
## The following objects are masked from 'package:devtools':
## 
##     ?, help
## 
## The following objects are masked from 'package:utils':
## 
##     ?, help
```

```r
?rm
```

Note Rdocumentation masks the help, so you are redirected to the Rdocumentation web page for reading the help.  

I found it very handy, mostly due the way the help is displayed, because let's face it, the local R documentation is plain, ugly, and difficult to read.

Now that you know this option exists, let's keep using the local help for the rest of this mini-tutorial.

### Unloading a library from a session:

```r
detach("package:Rdocumentation", unload = TRUE)
```

