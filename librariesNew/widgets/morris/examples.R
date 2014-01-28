require(rCharts)
haireye = as.data.frame(HairEyeColor)

## {title: Simple Bar Chart}
dat = subset(haireye, Sex == "Female" & Eye == "Blue")
p1 <- mPlot(x = 'Hair', y = list('Freq'), data = dat, type = 'Bar', labels = list("Count"))
p1

### {title: Simple Bar Chart, tag: "No Hover"}
p1$set(hideHover = "auto")
p1

## {title: Multi Bar Chart}
dat = subset(haireye, Sex == "Female")
p2 <- mPlot(Freq ~ Eye, group = "Hair", data = dat, type = "Bar", labels = 1:4)
p2

## {title: Line Chart}
data(economics, package = 'ggplot2')
dat = transform(economics, date = as.character(date))
p3 <- mPlot(x = "date", y = list("psavert", "uempmed"), data = dat, type = 'Line',
 pointSize = 0, lineWidth = 1)
p3$set(xLabelFormat = "#! function (x) { 
  return x.toString(); } 
!#")
p3


## {title: Area Chart}
p3$set(type = 'Area')
p3

