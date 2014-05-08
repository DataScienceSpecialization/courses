---
title       : Experimental design
subtitle    : 
author      : Jeffrey Leek
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
url:
  lib: ../../librariesNew
  assets: ../../assets
widgets     : [mathjax]            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
---





## Why you should care - an exciting result!


<img class=center src=../../assets/img/01_DataScientistToolbox/potti1.png height=450>


[http://www.nature.com/nm/journal/v12/n11/full/nm1491.html](http://www.nature.com/nm/journal/v12/n11/full/nm1491.html
)

---

## Why you should care - uh oh! 


<img class=center src=../../assets/img/01_DataScientistToolbox/baggerly1.png height=450>


[http://arxiv.org/pdf/1010.1092.pdf](http://arxiv.org/pdf/1010.1092.pdf)

---

## Why you should care - serious trouble


<img class=center src=../../assets/img/01_DataScientistToolbox/potti2.png height=450>


---

## Know and care about the analysis plan!

<img class=center src=../../assets/img/01_DataScientistToolbox/know.png height=450>

[http://nsaunders.wordpress.com/2012/07/23/we-really-dont-care-what-statistical-method-you-used/](http://nsaunders.wordpress.com/2012/07/23/we-really-dont-care-what-statistical-method-you-used/)


---

## Have a plan for data and code sharing


<img class=center src=../../assets/img/01_DataScientistToolbox/github.png height=200>


[https://github.com/](https://github.com/)

<img class=center src=../../assets/img/01_DataScientistToolbox/figshare.png height=200>

[http://figshare.com/](http://figshare.com/)


---

## May I recommend? 


<img class=center src=../../assets/img/01_DataScientistToolbox/share.png height=500>

[https://github.com/jtleek/datasharing](https://github.com/jtleek/datasharing
)


---

## Formulate your question in advance

<img class=center src=../../assets/img/01_DataScientistToolbox/abtest.png height=250>


__Question__: Does changing the text on your website improve donations?

__Experiment__:

1. Randomly show visitors one version or the other
2. Measure how much they donate
3. Determine which is better

[http://www.wired.com/business/2012/04/ff_abtesting](http://www.wired.com/business/2012/04/ff_abtesting)

---

## Statistical inference

<img class=center src=../../assets/img/01_DataScientistToolbox/infcentraldogma.png height=450>

[http://www.gs.washington.edu/academics/courses/akey/56008/lecture/lecture2.pdf](http://www.gs.washington.edu/academics/courses/akey/56008/lecture/lecture2.pdf)


---


## Variability - Scenario 1

<div class="rimage center"><img src="fig/unnamed-chunk-1.png" title="plot of chunk unnamed-chunk-1" alt="plot of chunk unnamed-chunk-1" class="plot" /></div>


---


## Variability - Scenario 2

<div class="rimage center"><img src="fig/unnamed-chunk-2.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" class="plot" /></div>



---


## Variability - Scenario 3

<div class="rimage center"><img src="fig/unnamed-chunk-3.png" title="plot of chunk unnamed-chunk-3" alt="plot of chunk unnamed-chunk-3" class="plot" /></div>


---

## Confounding


<img class=center src=../../assets/img/01_DataScientistToolbox/shoelit.png height=500>


---

## Correlation is not causation*

<img class=center src=../../assets/img/01_DataScientistToolbox/nejm.jpg height=500>



[http://www.nejm.org/doi/full/10.1056/NEJMon1211064](http://www.nejm.org/doi/full/10.1056/NEJMon1211064)

_Sometimes called spurious correlation*_

---

## Randomization and blocking


* If you can (and want to) fix a variable
  * Website always says Obama 2014 on it
* If you don't fix a variable, stratify it
  * If you are testing sign up phrases and have two website colors, use both phrases equally on both. 
* If you can't fix a variable, randomize it


---

## Why does randomization help? 

<img class=center src=../../assets/img/01_DataScientistToolbox/whyrandomize.png height=450>

[http://www.gs.washington.edu/academics/courses/akey/56008/lecture/lecture1.pdf](http://www.gs.washington.edu/academics/courses/akey/56008/lecture/lecture1.pdf)

---

## Prediction

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/centraldogma.png height=450>

----

## Prediction versus inference

<img class=center src=../../assets/img/01_DataScientistToolbox/predvinf.png height=500>

[http://www.biostat.jhsph.edu/~iruczins/teaching/140.615/](http://www.biostat.jhsph.edu/~iruczins/teaching/140.615/)

----

## Prediction key quantities


<img class=center src=../../assets/img/01_DataScientistToolbox/predquant.png height=500>

[http://www.biostat.jhsph.edu/~iruczins/teaching/140.615/](http://www.biostat.jhsph.edu/~iruczins/teaching/140.615/)

----

## Beware data dredging


<img class=center src=../../assets/img/01_DataScientistToolbox/mt1.png height=450>

[http://xkcd.com/882/](http://xkcd.com/882/)


----

## Beware data dredging


<img class=center src=../../assets/img/01_DataScientistToolbox/mt2.png height=450>

[http://xkcd.com/882/](http://xkcd.com/882/)


----

## Beware data dredging


<img class=center src=../../assets/img/01_DataScientistToolbox/mt3.png height=450>

[http://xkcd.com/882/](http://xkcd.com/882/)

----

## Summary

* Good experiments
  * Have replication
  * Measure variability
  * Generalize to the problem you care about
  * Are transparent
* Prediction is not inference
  * Both can be important
* Beware data dredging
