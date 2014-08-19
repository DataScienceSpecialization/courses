setwd("~/documents/lectures/04-data analysis/data")
pollution <- read.csv("avgpm25.csv", colClasses = c("numeric", "character", "factor",
                                       "numeric", "numeric"))
head(pollution)

#five number summary + mean
summary(pollution$pm25)

boxplot(pollution$pm25, col = "blue")

hist(pollution$pm25, col = "green")
rug(pollution$pm25) #adds detail to bottom
#change breaks
hist(pollution$pm25, col = "green", breaks = 100)
rug(pollution$pm25)

#overlaying boxplot
boxplot(pollution$pm25, col = "blue")
abline(h = 12)

#overlaying hist
hist(pollution$pm25, col = "green")
abline(v = 12, lwd = 2)
abline(v = median(pollution$pm25), col = "magenta", lwd = 4)

barplot(table(pollution$region), col = "wheat", main = "Number of Counties in Each Region")

#multi box plots
boxplot(pm25 ~ region, data = pollution, col = "red")
