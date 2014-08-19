# Ideal for creating conditioning plots where you examine same plot under many conditions.
# Look at a relationship, but within levels of another variable
library(lattice)
xyplot(y ~ g | f * g, data) # f and g are conditional variables, * indicates interaction
library(datasets)
xyplot(Ozone ~ Wind, data = airquality)

# convert month to factor
airquality <- transform(airquality, Month = factor(Month))
xyplot(Ozone ~ Wind | Month, data = airquality, layout = c(5, 1))

# panel functions
set.seed(10)
x <- rnorm(100)
f <- rep(0:1, each = 50)
y <- x + f - f * x + rnorm(100, sd=0.5)
f  <- factor(f, labels = c("Group 1", "Group 2"))
xyplot(y ~ x | f, layout=(c(2, 1))) # plot with two panels

## Custom panel function
xyplot( y ~ x | f, panel = function(x,y, ...) {
        panel.xyplot(x, y, ...) # first call the default panel function for xyplot
        panel.abline(h = median(y), lty= 2) # add horizontal line at median
})
# With a regression line
xyplot( y ~ x | f, panel = function(x,y, ...) {
        panel.xyplot(x, y, ...) # first call the default panel function for xyplot
        panel.lmline(x, y, col = 2) # add horizontal line at median
})

# many panel lattice
