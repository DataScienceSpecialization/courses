require(quantmod)
require(plyr)
tickers =  c('AAPL', 'GOOG', 'MSFT')
quotes = llply(tickers, getSymbols, auto.assign = F)

to_jsdate <- function(date_){
  val = as.POSIXct(as.Date(date_), origin="1970-01-01")
  as.numeric(val)
}

getSymbols('AAPL')
AAPL <- transform(AAPL, date = to_jsdate(index(AAPL)))
names(AAPL) = gsub(".", "_", names(AAPL), fixed = TRUE)

require(rCharts)
options(RCHART_TEMPLATE = 'Rickshaw.html')
r1 <- Rickshaw$new()
r1$layer(x = 'date', y = 'AAPL_Open', data = AAPL, type = 'line', colors = 'steelblue')
r1$xAxis(type = 'Time')
r1$yAxis(orientation = 'left')

riPlot <- function(x, y, data, type, ..., xAxis = list(type = 'Time'), 
    yAxis = list(orientation = 'left')){
  options(RCHART_TEMPLATE = 'Rickshaw.html')
  r1 <- Rickshaw$new()
  r1$layer(x = x, y = y, data = data, type = type, ...)
  do.call(r1$xAxis, xAxis)
  do.call(r1$yAxis, yAxis)
  return(r1)
}