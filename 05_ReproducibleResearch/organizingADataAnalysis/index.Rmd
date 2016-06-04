---
title       : Organizing a Data Analysis
subtitle    : 
author      : Roger D. Peng, Associate Professor of Biostatistics 
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



## Data analysis files

* Data
  * Raw data
  * Processed data
* Figures
  * Exploratory figures
  * Final figures
* R code
  * Raw / unused scripts
  * Final scripts
  * R Markdown files
* Text
  * README files
  * Text of analysis / report


---

## Raw Data

<img class=center src=../../assets/img/medicalrecord.png height='400'/>

* Should be stored in your analysis folder
* If accessed from the web, include url, description, and date accessed in README

---

## Processed data

<img class=center src=../../assets/img/excel.png height='400'/>
* Processed data should be named so it is easy to see which script generated the data. 
* The processing script - processed data mapping should occur in the README
* Processed data should be [tidy](http://vita.had.co.nz/papers/tidy-data.pdf)

---

## Exploratory figures

<img class=center src=../../assets/img/example10.png height='400'/>

* Figures made during the course of your analysis, not necessarily part of your final report.
* They do not need to be "pretty"

---

## Final Figures

<img class=center src=../../assets/img/figure1final.png height='400'/>

* Usually a small subset of the original figures
* Axes/colors set to make the figure clear
* Possibly multiple panels

---

## Raw scripts

<img class=center src=../../assets/img/rawcode.png height='350'/>

* May be less commented (but comments help you!)
* May be multiple versions
* May include analyses that are later discarded

---

## Final scripts

<img class=center src=../../assets/img/finalscript2.png height='300'/>

* Clearly commented
  * Small comments liberally - what, when, why, how
  * Bigger commented blocks for whole sections
* Include processing details
* Only analyses that appear in the final write-up

---

## R markdown files

<img class=center src=../../assets/img/rmd.png height='400'/>

* [R markdown](http://www.rstudio.com/ide/docs/authoring/using_markdown) files can be used to generate reproducible reports
* Text and R code are integrated
* Very easy to create in [Rstudio](http://www.rstudio.com/)

---

## Readme files

<img class=center src=../../assets/img/readme.png height='400'/>

* Not necessary if you use R markdown
* Should contain step-by-step instructions for analysis
* Here is an example [https://github.com/jtleek/swfdr/blob/master/README.md](https://github.com/jtleek/swfdr/blob/master/README.md)

---

## Text of the document

<img class=center src=../../assets/img/swfdr.png height='350'/>

* It should include a title, introduction (motivation), methods (statistics you used), results (including measures of uncertainty), and conclusions (including potential problems)
* It should tell a story
* _It should not include every analysis you performed_
* References should be included for statistical methods

---

## Further resources

* Information about a non-reproducible study that led to cancer patients being mistreated: [The Duke Saga Starter Set](http://simplystatistics.org/2012/02/27/the-duke-saga-starter-set/)
* [Reproducible research and Biostatistics](http://biostatistics.oxfordjournals.org/content/10/3/405.full)
* [Managing a statistical analysis project guidelines and best practices](http://www.r-statistics.com/2010/09/managing-a-statistical-analysis-project-guidelines-and-best-practices/)
* [Project template](http://projecttemplate.net/) - a pre-organized set of files for data analysis

