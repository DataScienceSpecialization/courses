---
title       : Reproducible Research Checklist
subtitle    : What to Do and What Not to Do
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

## DO: Start With Good Science

* Garbage in, garbage out

* Coherent, focused question simplifies many problems

* Working with good collaborators reinforces good practices

* Something that's interesting to you will (hopefully) motivate good
  habits

---

## DON'T: Do Things By Hand



* Editing spreadsheets of data to "clean it up"

  - Removing outliers
  - QA / QC
  - Validating

* Editing tables or figures (e.g. rounding, formatting)

* Downloading data from a web site (clicking links in a web browser)

* Moving data around your computer; splitting / reformatting data files

* "We're just going to do this once...."


Things done by hand need to be precisely documented (this is harder
than it sounds)

---

## DON'T: Point And Click


---

## DO: Teach a Computer


---

## DO: Use Some Version Control

* Slow things down

* Add changes in small chunks (don't just do one massive commit)

* Track / tag snapshots; revert to old versions

* Software like GitHub / BitBucket / SourceForge make it easy to
  publish results

---
## DO: Keep Track of Your Software Environment


---

## DO: Keep Track of Your Software Environment



```r
sessionInfo()
```

```
## R version 3.0.2 Patched (2013-12-30 r64600)
## Platform: x86_64-apple-darwin13.0.0 (64-bit)
## 
## locale:
## [1] en_US.UTF-8/en_US.UTF-8/en_US.UTF-8/C/en_US.UTF-8/en_US.UTF-8
## 
## attached base packages:
## [1] stats     graphics  grDevices utils     datasets  base     
## 
## other attached packages:
## [1] slidify_0.3.3
## 
## loaded via a namespace (and not attached):
## [1] evaluate_0.5.1 formatR_0.10   knitr_1.5      markdown_0.6.3
## [5] stringr_0.6.2  tools_3.0.2    whisker_0.3-2  yaml_2.1.8
```


---

## DON'T: Save Output


---

## DO: Think About the Pipeline

* Data analysis is a lengthy process

* How you got the end is just as important as the end itself

* The farther back in the pipeline you can "preserve" the better

---

## Summary: Checklist

* Are we doing good science?

* Was any part of this analysis done by hand?
  - If so, are those parts *precisely* document?

* Have we taught a computer to do as much as possible (i.e. coded)?

* Are we using a version control system?

* Have we documented our software environment?

* Have we saved any output that we cannot reconstruct from original
  data + code?

* How far back in the analysis pipeline can we go before our results
  are no longer (automatically) reproducible?
