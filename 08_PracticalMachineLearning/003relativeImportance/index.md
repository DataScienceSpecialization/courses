---
title       : Relative importance of steps
subtitle    : 
author      : Jeffrey Leek, Assistant Professor of Biostatistics 
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





## Relative order of importance

</br>
</br>
</br>

<center> question > data > features > algorithms </center>


---

## An important point

<q>The combination of some data and an aching desire for an answer does not ensure that a reasonable answer can be extracted from a given body of data.</q>

<center> John Tukey </center>




---

## Garbage in = Garbage out

<center> question -> <rt>input data</rt> -> features -> algorithm -> parameters -> evaluation  </center>

1. May be easy (movie ratings -> new movie ratings)
2. May be harder (gene expression data -> disease)
3. Depends on what is a "good prediction".
4. Often [more data > better models](http://www.youtube.com/watch?v=yvDCzhbjYWs)
5. The most important step!


---

## Features matter!

<center> question -> input data -> <rt>features</rt> -> algorithm -> parameters -> evaluation  </center>

__Properties of good features__

* Lead to data compression
* Retain relevant information
* Are created based on expert application knowledge

__Common mistakes__

* Trying to automate feature selection
* Not paying attention to data-specific quirks
* Throwing away information unnecessarily

---

## May be automated with care

<center> question -> input data -> <rt>features</rt> -> algorithm -> parameters -> evaluation  </center>

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/autofeatures.jpeg height=300>

[http://arxiv.org/pdf/1112.6209v5.pdf](http://arxiv.org/pdf/1112.6209v5.pdf)

---

## Algorithms matter less than you'd think

<center> question -> input data -> features -> <rt>algorithm</rt> -> parameters -> evaluation  </center>

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/illusiontable.png height=400>

[http://arxiv.org/pdf/math/0606441.pdf](http://arxiv.org/pdf/math/0606441.pdf)

---

## Issues to consider

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/mlconsiderations.jpg height=400>

[http://strata.oreilly.com/2013/09/gaining-access-to-the-best-machine-learning-methods.html](http://strata.oreilly.com/2013/09/gaining-access-to-the-best-machine-learning-methods.html)

---

## Prediction is about accuracy tradeoffs


* Interpretability versus accuracy
* Speed versus accuracy
* Simplicity versus accuracy
* Scalability versus accuracy

---

## Interpretability matters

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/interpretable.png height=150>

</br></br></br>

[http://www.cs.cornell.edu/~chenhao/pub/mldg-0815.pdf](http://www.cs.cornell.edu/~chenhao/pub/mldg-0815.pdf)

---

## Scalability matters

<img class=center src=../../assets/img/08_PredictionAndMachineLearning/netflixno.png height=250>
</br></br></br>

[http://www.techdirt.com/blog/innovation/articles/20120409/03412518422/](http://www.techdirt.com/blog/innovation/articles/20120409/03412518422/)

[http://techblog.netflix.com/2012/04/netflix-recommendations-beyond-5-stars.html](http://techblog.netflix.com/2012/04/netflix-recommendations-beyond-5-stars.html)
