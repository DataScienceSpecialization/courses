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
  - (http://www.rstudio.com/ide/docs/advanced/manipulate)
- From there, try this
```
library(manipulate)
manipulate(plot(1:x), x = slider(1, 100))
```
- You can create a slider, checkbox, or picker (drop down) and have more than one

---
## Example from the regression class
```
freqData <- as.data.frame(table(galton$child, galton$parent))
names(freqData) <- c("child", "parent", "freq")
plot(as.numeric(as.vector(freqData$parent)), 
     as.numeric(as.vector(freqData$child)),
     pch = 21, col = "black", bg = "lightblue",
     cex = .05 * freqData$freq, 
     xlab = "parent", ylab = "child")
lm1 <- lm(galton$child ~ galton$parent)
lines(galton$parent,lm1$fitted,col="red",lwd=3)
```

