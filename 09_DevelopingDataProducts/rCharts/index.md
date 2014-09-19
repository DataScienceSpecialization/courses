---
title       : rCharts
subtitle    : Building Data Products
author      : Brian Caffo, Jeff Leek, Roger Peng
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012
highlighter : highlight.js  
hitheme     : tomorrow       
url:
    lib: ../../librariesNew #Remove new if using old slidify
    assets: ../../assets
widgets     : [mathjax, quiz, bootstrap]
mode        : selfcontained # {standalone, draft}
ext_widgets : {rCharts: ["libraries/highcharts","libraries/nvd3", "libraries/morris", "libraries/leaflet", "libraries/rickshaw"]}
---


## rCharts
![rCharts](fig/rCharts.png)
- rCharts is a way to create interactive javascript visualizations using R
- So
  - You don't have to learn complex tools, like D3
  - You simply work in R learning a minimal amount of new syntaxt
- rCharts was written by Ramnath Vaidyanathan (friend of the Data Science Series), who also wrote slidify, the framework we use for all of the lectures in the class
- This lecture is basically going through
  (http://ramnathv.github.io/rCharts/)

---
## Example
```
require(rCharts)
haireye = as.data.frame(HairEyeColor)
n1 <- nPlot(Freq ~ Hair, group = 'Eye', type = 'multiBarChart',
  data = subset(haireye, Sex == 'Male')
)
n1$save('fig/n1.html', cdn = TRUE)
cat('<iframe src="fig/n1.html" width=100%, height=600></iframe>')
```

---
## nvD3 run



















