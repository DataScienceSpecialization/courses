---
title       : R Markdown
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

## What is Markdown?

* Created by [John Gruber](http://daringfireball.net) and Aaron Swartz

* A simplified version of "markup" languages

* Allows one to focus on writing as opposed to formatting

* Simple/minimal intuitive formatting elements

* Easily converted to valid HTML (and other formats) using existing tools

* Complete information is available at [http://daringfireball.net/projects/markdown/](http://daringfireball.net/projects/markdown/)

* Some background information at [http://daringfireball.net/2004/03/dive_into_markdown](http://daringfireball.net/2004/03/dive_into_markdown)

---

## What is R Markdown?

* R markdown is the integration of R code with markdown 

* Allows one to create documents containing "live" R code

* R code is evaluated as part of the processing of the markdown

* Results from R code are inserted into markdown document 

* A core tool in <b>literate statistical programming</b>

---

## What is R Markdown?

* R markdown can be converted to standard markdown using the
  [knitr](http://yihui.name/knitr/) package in R

* Markdown can be converted to HTML using the [markdown](https://github.com/rstudio/markdown) package in R

* Any basic text editor can be used to create a markdown document; no
  special editing tools needed

* The R markdown --> markdown --> HTML work flow can be easily managed
  using [R Studio](http://rstudio.org) (but not required)

* These slides were written in R markdown and converted to slides
  using the [slidify](http://slidify.org) package

