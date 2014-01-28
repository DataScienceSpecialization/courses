# Example 1
p1 <- Rickshaw$new()
p1$layer(~ cyl, group = 'am', data = mtcars, type = 'bar')

# Example 2
require(rCharts)
options(RCHART_TEMPLATE = 'Rickshaw.html')
require(RColorBrewer)
data(economics, package = 'ggplot2')
datm = reshape2::melt(
  economics[,c('date', 'psavert', 'uempmed')],
  id = 'date'
)
datm <- transform(datm, date = to_jsdate(date))
p2 <- Rickshaw$new()
p2$layer(value ~ date, group = 'variable', data = datm, type = 'line', 
  colors = c("darkred", "darkslategrey"))


to_jsdate <- function(date_){
  val = as.POSIXct(as.Date(date_),origin="1970-01-01")
  as.numeric(val)
}


p3 <- Rickshaw$new()
p3$layer(Employed ~ Year, data = longley, type = 'line', colors = c('darkred'))

usp = reshape2::melt(USPersonalExpenditure)
p4 <- Rickshaw$new()
p4$layer(value ~ Var2, group = 'Var1', data = usp, type = 'area')
p4$show(T)

dat <- yaml::yaml.load('[ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 17 }, { x: 3, y: 42 } ]')

dat <- data.frame(
  x = c(0, 1, 2, 3),
  y = c(40, 49, 2, 17)
)


dat <- data.frame(
  x = seq(1910, 2010, 10),
  y = c(92228531, 106021568, 123202660, 132165129, 151325798, 179323175,
    203211926, 226545805,  248709873,  281421906, 308745538)
)

data(USPop, package = 'car')
dat <- USPop
dat <- transform(dat, year = to_jsdate(as.Date(paste(year, '01', '01', sep = '-'))))
p4 <- Rickshaw$new()
p4$layer(population ~ year, data = dat, type = 'area', colors = 'steelblue')
p4$yAxis(orientation = 'right')
p4$set(width = 540, height = 240)
options(RCHART_TEMPLATE = 'Rickshaw.html')
p4$save('inst/libraries/rickshaw/test-rickshaw2.html')


uspexp <- reshape2::melt(USPersonalExpenditure)
names(uspexp) <- c('category', 'year', 'expenditure')
uspexp <- transform(uspexp, year = to_jsdate(as.Date(paste(year, '01', '01', sep = '-'))))
p4 <- Rickshaw$new()
p4$layer(expenditure ~ year, group = 'category', data = uspexp, type = 'area')
p4$yAxis(orientation = 'left')
p4$xAxis(type = 'Time')
p4$set(width = 540, height = 240)
options(RCHART_TEMPLATE = 'Rickshaw.html')