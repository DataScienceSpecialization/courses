---
title       : Math notation in R markdown
subtitle    : 
author      :  
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





## Why math notation in R markdown?

* Math notation is the standard for technical descriptions of machine learning/statistical models.
* You may want to intersperse your technical decriptions with plain language descriptions. 
* Math notation allows you to be precise
  * "We fit a linear model with terms for age, sex" versus $Y_i = \alpha + \beta_a A_i + \beta_s S_i + \epsilon_i$
* Math notation allows you to be concise
  * "We estimated the intercept to be 3.3" versus $\hat{\alpha}=3.3$. 

---

## What notation system does R markdown use?

* R markdown uses the same system as [Latex](http://en.wikipedia.org/wiki/LaTeX) 
* The basic idea:
  * You write your document in R markdown
  * You include symbols for math notation
  * You indicate math by wrapping the symbols with certain text
* Often the symbols are intuitive: _\alpha_ gives you $\alpha$

---

## How to write math inline

Including math in a sentence involves wrapping the symbols in $ symbols. For
example if you write this in an R markdown file:

<center> "The intercept was estimated as `$\hat{\alpha} = 4$`" </center>

Then you get the following text after running _knit2html_ or _slidify_ on your document. 

<center> "The intercept was estimated as $\hat{\alpha} = 4$" </center>

---

## How to write math on a separate line

Sometimes you have several equations you would like to line up. The
way that you do that is with a double dollar sign \$$ and the align command.

For example if you write

<img class=center src=../../assets/img/mathNotation/aligned.png width='400px'/>

Then you get the following text after running _knit2html_ or _slidify_ on your document. 

$$
  \begin{aligned}
  y &= \beta_0 + \beta_1 + x_1 + \epsilon\\
  x &= \gamma z \\
  z &\sim N(0,1)
  \end{aligned}
$$

---

## Common symbols

* Subscripts to get $a_{b}$ write: `$a_{b}$`
* Superscripts write $a^{b}$ write: `$a^{b}$`
* Greek letters like $\alpha, \beta, \ldots$ write: `$\alpha, \beta, \ldots$`
* Sums like $\sum_{n=1}^N$ write: `$\sum_{n=1}^N$`
* Multiplication like $\times$ write: `$\times$`
* Products like $\prod_{n=1}^N$ write: `$\prod_{n=1}^N$`
* Inequalities like $<, \leq, \geq$ write: `$<, \leq, \geq$`
* Distributed like $\sim$ write: `$\sim$`
* Hats like $\widehat{\alpha}$ write: `$\widehat{\alpha}$`
* Averages like $\bar{x}$ write: `$\bar{x}$`
* Fractions like $\frac{a}{b}$ write: `$\frac{a}{b}$`
* Big parentheses like $\left(\frac{a}{b}\right)$ write: `$\left(\frac{a}{b}\right)$`


---

## For more information

* Rstudio's equations page:
  * http://www.rstudio.com/ide/docs/authoring/using_markdown_equations
* Lists of Latex symbols
  * http://www.rpi.edu/dept/arc/training/latex/LaTeX_symbols.pdf
  * http://www.giss.nasa.gov/tools/latex/ltx-2.html
  * http://omega.albany.edu:8008/Symbols.html



