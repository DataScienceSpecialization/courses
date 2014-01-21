---
title       : Motivation and pre-requisites
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






## About this course

* This course covers the basic ideas behind getting data ready for analysis
  * Finding and extracting raw data
  * Tidy data principles and how to make data tidy
  * Practical implementation through a range of R packages
* What this course depends on
  * The Data Scientist's Toolbox
  * R Programming
* What would be useful
  * Exploratory analysis
  * Reporting Data and Reproducible Research

---

## What you wish data looked like

<img class=center src=../../assets/img/03_ObtainingData/excel.png height=450>


---

## What does data really look like? 

<img class=center src=../../assets/img/03_ObtainingData/fastq.png height=450/>


[http://brianknaus.com/software/srtoolbox/s_4_1_sequence80.txt](http://brianknaus.com/software/srtoolbox/s_4_1_sequence80.txt)


--- 

## What does data really look like? 

<img class=center src=../../assets/img/03_ObtainingData/twitter.png height= 450/>


[https://dev.twitter.com/docs/api/1/get/blocks/blocking](https://dev.twitter.com/docs/api/1/get/blocks/blocking)

---

## What does data really look like?


<img class=center src=../../assets/img/03_ObtainingData/medicalrecord.png height=400/>


[http://blue-button.github.com/challenge/](http://blue-button.github.com/challenge/)


---

## Where is data?

<img class=center src=../../assets/img/03_ObtainingData/databases.png height=400/>


[http://rickosborne.org/blog/2010/02/infographic-migrating-from-sql-to-mapreduce-with-mongodb/](http://rickosborne.org/blog/2010/02/infographic-migrating-from-sql-to-mapreduce-with-mongodb/)


---

## Where is data?

<img class=center src=../../assets/img/03_ObtainingData/twitter.png height= 450/>

[https://dev.twitter.com/docs/api/1/get/blocks/blocking](https://dev.twitter.com/docs/api/1/get/blocks/blocking)


---

## Where is data?

<img class=center src=../../assets/img/03_ObtainingData/baltimore.png height= 450/>

[https://data.baltimorecity.gov/](https://data.baltimorecity.gov/)


---

## The goal of this course

</br></br>

<center><rt>Raw data -> Processing script -> tidy data</rt> -> data analysis -> data communication </center>

