require(rCharts)
options(RCHART_WIDTH = 800, RCHART_HEIGHT = 400)

### {title: Bar Chart, working: FALSE}
p1 <- xCharts$new()
p1$set(xScale = 'ordinal', yScale = 'linear')
p1$layer(~ cyl, data = mtcars, type = 'bar')
p1

### {title: Multi Bar Chart, working: TRUE}
haireye = subset(as.data.frame(HairEyeColor), Sex == "Male")
p2 <- xCharts$new()
p2$set(xScale = 'ordinal', yScale = 'linear', width = 600)
p2$layer(Freq ~ Hair, group = 'Eye', data = haireye, type = 'bar')
p2

### {title: Line Chart, working: TRUE}
uspexp = reshape2::melt(USPersonalExpenditure)
names(uspexp)[1:2] = c('Category', 'Year')
p3 <- xCharts$new()
p3$layer(value ~ Year, group = 'Category', data = uspexp)
p3$set(xScale = 'linear', yScale = 'linear', type = 'line-dotted', xMin = 1935)
p3