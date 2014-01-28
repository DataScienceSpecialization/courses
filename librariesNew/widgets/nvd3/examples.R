## {title: Scatter Chart}
p1 <- nPlot(mpg ~ wt, group = 'cyl', data = mtcars, type = 'scatterChart')
p1$xAxis(axisLabel = 'Weight')
p1


## {title: MultiBar Chart}
hair_eye = as.data.frame(HairEyeColor)
p2 <- nPlot(Freq ~ Hair, group = 'Eye', data = subset(hair_eye, Sex == "Female"), type = 'multiBarChart')
p2$chart(color = c('brown', 'blue', '#594c26', 'green'))
p2

## {title: MultiBar Horizontal Chart}
p3 <- nPlot(~ cyl, group = 'gear', data = mtcars, type = 'multiBarHorizontalChart')
p3$chart(showControls = F)
p3

## {title: Pie Chart}
p4 <- nPlot(~ cyl, data = mtcars, type = 'pieChart')
p4

## {title: Donut Chart}
p5 <- nPlot(~ cyl, data = mtcars, type = 'pieChart')
p5$chart(donut = TRUE)
p5

## {title: Line Chart}
data(economics, package = 'ggplot2')
p6 <- nPlot(uempmed ~ date, data = economics, type = 'lineChart')
p6

## {title: Line with Focus Chart }
ecm <- reshape2::melt(economics[,c('date', 'uempmed', 'psavert')], id = 'date')
p7 <- nPlot(value ~ date, group = 'variable', data = ecm, type = 'lineWithFocusChart')
#test format dates on the xAxis
#also good test of javascript functions as parameters
#dates from R to JSON will come over as number of days since 1970-01-01
#so convert to milliseconds 86400000 in a day and then format with d3
#on lineWithFocusChart type xAxis will also set x2Axis unless it is specified
p7$xAxis( tickFormat="#!function(d) {return d3.time.format('%b %Y')(new Date( d * 86400000 ));}!#" )
#test xAxis also sets x2Axis
p7
#now test setting x2Axis to something different
#test format dates on the x2Axis
#test to show %Y format which is different than xAxis
p7$x2Axis( tickFormat="#!function(d) {return d3.time.format('%Y')(new Date( d * 86400000 ));}!#" )
p7
#test set xAxis again to make sure it does not override set x2Axis
p7$xAxis( NULL, replace = T)
p7

## {title: Stacked Area Chart}
dat <- data.frame(t=rep(0:23,each=4),var=rep(LETTERS[1:4],4),val=round(runif(4*24,0,50)))
p8 <- nPlot(val ~ t, group =  'var', data = dat, type = 'stackedAreaChart', id = 'chart')
p8


## {title: InteractiveGuidline(Multi-Tooltips) on Line}
p9 <- nPlot(value ~ date, group = 'variable', data = ecm, type = 'lineChart')
p9$xAxis( tickFormat="#!function(d) {return d3.time.format('%b %Y')(new Date( d * 86400000 ));}!#" )
#try new interactive guidelines feature
p9$chart(useInteractiveGuideline=TRUE)
p9


## {title: InteractiveGuidline(Multi-Tooltips) on Stack}
p10 <- p8
p10$chart(useInteractiveGuideline=TRUE)
p10

## {title: showDistX and showDistY}
p11 <- p1
p11$chart(showDistX = TRUE, showDistY = TRUE)
p11

## {title: multiChart}
p12 <- nPlot(value ~ date, group = 'variable', data = ecm, type = 'multiChart')
p12$params$multi = list(
  uempmed = list(type="area",yAxis=1),
  psavert = list(type="line",yAxis=2)
)
p12$setTemplate(script = system.file(
  "/libraries/nvd3/layouts/multiChart.html",
  package = "rCharts"
))
p12

## {title: Facets}
p13 <- nPlot(mpg ~ wt, data = mtcars, group = "gear", type = "scatterChart")
p13$params$facet = "cyl"
p13$templates$script = system.file(
  "/libraries/nvd3/layouts/nvd3FacetPlot.html",
  package = "rCharts"
)
p13

hair_eye = as.data.frame(HairEyeColor)
p14 <- nPlot(Freq ~ Hair, group = 'Sex', data = hair_eye, type = 'multiBarChart')
p14$params$facet="Eye"
p14$templates$script = system.file(
  "/libraries/nvd3/layouts/nvd3FacetPlot.html",
  package = "rCharts"
)
p14

p15 <- nPlot(Freq ~ Hair, group = 'Eye', data = hair_eye, type = 'multiBarChart')
p15$params$facet="Sex"
p15$templates$script = system.file(
  "/libraries/nvd3/layouts/nvd3FacetPlot.html",
  package = "rCharts"
)
p15


## {title: Sparklines}
p16 <- nPlot(uempmed ~ date, data = economics, type = 'sparklinePlus',height=100,width=500)
p16$chart(xTickFormat="#!function(d) {return d3.time.format('%b %Y')(new Date( d * 86400000 ));}!#")
p16
## semi replicate sparkline with a full nvd3 model by setting short height and turning off lots of things
p17 <- nPlot(
  x = "date",
  y = "volume",
  data = spy.df,
  type = "multiBarChart",
  height = 200)
p17$chart(showControls = FALSE, showLegend = FALSE, showXAxis = FALSE, showYAxis = FALSE) 
p17$xAxis(tickFormat = 
  "#!function(d) {return d3.time.format('%Y-%m-%d')(new Date(d * 24 * 60 * 60 * 1000));}!#"
)
p17


## {title: ohlcBar}
## ohlcBar not fully implemented on nvd3 side, so no axes or interactive controls
## note do not melt if using ohlcBar
require(quantmod)

spy <- getSymbols("SPY",auto.assign=FALSE,from="2013-01-01")
colnames(spy) <- c("open","high","low","close","volume","adjusted")

spy.df <- data.frame(index(spy),spy)
colnames(spy.df)[1] <- "date"

p18 <- nPlot(
  x = "date",
  y = "close",
  data = spy.df,
  type = "ohlcBar"
)
p18
