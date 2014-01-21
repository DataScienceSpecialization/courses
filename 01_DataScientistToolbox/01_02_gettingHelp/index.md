---
title       : Getting help
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





## Asking questions

* __In a standard class__
  * There are 30-100 people
  * You raise your hand and ask a question
  * The instructor responds 
* __In a MOOC__
  * There are almost 100,000 people
  * You post a question to the message board
  * Others vote on your questions
  * Your instructor responds (as often as possible)
  * Your peers respond (as often as possible)

---

## Often the fastest answer is the one you find yourself

* It's important to try to answer your own questions first
* If the answer to your question is in the help file or the top hit on Google, the answer to your question will be, "Read the documentation" or "Google it" ([http://lmgtfy.com/](http://lmgtfy.com/))
* If you figure out the answer and see the same questions on the forum, post the solution you found

---

## Some important R functions

__Access help file__

```r

?rnorm
```

__Search help files__

```r
help.search("rnorm")
```


__Get arguments__

```r
args("rnorm")
```

```
function (n, mean = 0, sd = 1) 
NULL
```


---

## Some important R functions

__See code__

```r
rnorm
```

```
function (n, mean = 0, sd = 1) 
.External(C_rnorm, n, mean, sd)
<bytecode: 0x7f9173a9f630>
<environment: namespace:stats>
```


__R reference card__

[http://cran.r-project.org/doc/contrib/Short-refcard.pdf](http://cran.r-project.org/doc/contrib/Short-refcard.pdf)

---

## How to ask an R question

* What steps will reproduce the problem?
* What is the expected output? 
* What do you see instead?
* What version of the product (e.g. R, packages, etc.) 
are you using?
* What operating system? 

---

## How to ask a data analysis question

* What is the question you are trying to answer?
* What steps/tools did you use to answer it?
* What did you expect to see?
* What do you see instead?
* What other solutions have you thought about?

---

## Be specific in the title of your questions

* Bad:
  * HELP! Can't fit linear model!
  * HELP! Don't understand PCA!

* Better
  * R 2.15.0 lm() function produces seg fault with large data frame, Mac OS X 
10.6.3 
  * Applied principal component analysis to a matrix - what are U, D, and $V^T$?

* Even better
  * R 2.15.0 lm() function on Mac OS X 10.6.3 -- seg fault on large data frame
  * Using principal components to discover common variation in rows of a matrix, should I use U, D or $V^T$?


--- 


## Etiquette for forums/help sites: DOs 

* Describe the goal
* Be explicit
* Provide the minimum information
* Be courteous (never hurts)
* Follow up and post solutions
* Use the forums rather than email

---

## Etiquette for forums/help sites: DON'Ts

* Immediately assume you found a bug
* Grovel as a substitute for doing your work
* Post homework questions on mailing lists (people don't like doing your homework)
* Email multiple mailing lists at once/the wrong mailing list
* Ask others to fix your code without explaining the problem
* Ask about general data analysis questions on R forums.



---

## Credits

* Roger's [Getting Help Video](http://www.youtube.com/watch?v=ZFaWxxzouCY&list=PLjTlxb-wKvXNSDfcKPFH2gzHGyjpeCZmJ&index=3)
* Inspired by Eric Raymond's "How to ask questions the smart way"
