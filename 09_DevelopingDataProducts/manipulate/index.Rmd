---
title       : Manipulate
subtitle    : Data Products
author      : Brian Caffo, Jeff Leek, Roger Peng
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

## Manipulate
- Suppose that you want to create a quick interactive graphic
  - You have to do it *now* 
  - The intended users also use Rstudio
- `manipulate` is a really cool solution that is often all you need to quickly make interactive graphics

---
## Documentation
- Manipulate is well documented at the Rstudio web site here
  - http://www.rstudio.com/ide/docs/advanced/manipulate
- From there, try this
```
library(manipulate)
manipulate(plot(1:x), x = slider(1, 100))
```
- You can create a slider, checkbox, or picker (drop down) and have more than one

---
## Example from the regression class
```
library(manipulate)
myHist <- function(mu){
  hist(galton$child,col="blue",breaks=100)
  lines(c(mu, mu), c(0, 150),col="red",lwd=5)
  mse <- mean((galton$child - mu)^2)
  text(63, 150, paste("mu = ", mu))
  text(63, 140, paste("MSE = ", round(mse, 2)))
}
manipulate(myHist(mu), mu = slider(62, 74, step = 0.5))
```

