library(ggplot2)
str(mpg)
qplot(displ, hwy, data = mpg) # Hello World!

# modify aesthetics
qplot(displ, hwy, data = mpg, color = drv)

# add a geom
# 95% conf indicated by zone
# smoother, shows overall trend
qplot(displ, hwy, data = mpg, geom = c("point", "smooth"))

# histograms
qplot(hwy, data = mpg, fill = drv)

# facets
qplot(displ, hwy, data = mpg, facets = .~ drv) # use . in place of no rows
qplot(hwy, data = mpg, facets = drv~., binwidth = 2 )

## Exploring the MAACS dataset
qplot(log(eno), data = maacs)
qplot(log(eno), data = maacs, fill = mopos)
# density smooth
qplot(log(eno), data = maacs, geom = "density")
qplot(log(eno), data = maacs, geom = "density", color = mopos)
# scatterplots
qplot(log(pm25), log(eno), data = maacs)
qplot(log(pm25), log(eno), data = maacs, shape = mopos)
qplot(log(pm25), log(eno), data = maacs, color = mopos)
qplot(log(pm25), log(eno), data = maacs, color = mopos,
      geom = c("smooth", "point"), method = "lm")
qplot(log(pm25), log(eno), data = maacs, color = mopos,
      geom = c("smooth", "point"), method = "lm", facets = .~mopos)

# building plots in layers
qplot(logpm25, NocturnalSympt, data = maacs, facets = . ~ bmicat, geom =
              c("point", "smooth"), method = "lm")
g <- ggplot(maacs, aes(logpm25, NocturnalSympt)) # initial call, no plot
p <- g + geom_point()
g + geom_point() + geom_smooth()
g + geom_point() + geom_smooth(method = "lm")
# number of plots dependent on number of factors in facets
g + geom_point() + facet_grid(. ~ bmicat) + geom_smooth(method = "lm") 
# annotation: xlab(), ylab(), labs(), ggtitle(); theme()
# two standard themes: theme_gray() and theme_bw()

# modifying aesthetics
g + geom_point(color = "steelblue", size =4, alpha = 1/2) # color to constant
g + geom_point(aes(color = bmicat), size = 4, alpha = 1/2) # color to data variable

# labels
g + geom_point(aes(color = bmicat)) + labs(title = "MAACS Cohort") + 
        labs(x = expression("log " * PM[2.5], y = "nocturnal Symptoms"))

# custom smoother
g + geom_point(aes(color = bmicat), size = 2, alpha = 1/2) + geom_smooth(size = 4, linetype = 3,
                                                                         method = "lm", se = FALSE)

# theme
g + geom_point(aes(color = bmicat)) + theme_bw(base_family = "Times")

# a note about axis limits
testdat <- data.frame(x = 1:100, y = rnorm(100))
testdat[50, 2] <-  100 # outlier
plot(testdat$x, testdat$y, type = "l", ylim = c(-3,3))
g  <- ggplot(testdat, aes(x = x, y = y))
g + geom_line()
g + geom_line() + ylim(-3, 3) # outlier missing
g + geom_line() + coord_cartesian(ylim = c(-3, 3)) #with outlier, set limited for axes to 3 -3

# How does relationship b/w pm25 and nocturnal symptoms vary by BMI and NO2?
# unlike previous bmi variable, NO2 is continous
# we need to make NO2 categorical so we can condition on it: using cut()

# Making NO2 tertiles
## calculate deciles of data
cutpoints <- quantile(maacs$logno2_new, seq(0,1, length = 4), na.rm = TRUE)
## cut the data at the deciles and create a new factor variable
maacs$no2dec <- cut(maacs$logno2_new, cutpoints)
## see the levels of the newly created factor variable
levels(maacs$no2dec)

# setup ggplot with data frame
g <- ggplot(maacs, aes(logpm25, NocturnalSympt))
g + geom_point(alpha = 1/3) # add points
  + facet_wrap(bmicat ~ no2dec, nrow = 2, ncol = 4) # make panels
  + geom_smooth(method = "lm", se=FALSE, col = "steelblue") # add smoother
  + theme_bw(base_family = "Avenir", base_size = 10) # change theme
  + labs(x = expression("log " * PM[2.5])) #labels
  + labs(y = "Nocturnal Symptoms")
  + labs(title = "MAACS Cohort")

# that doesn't work, but this does from: https://class.coursera.org/exdata-005/forum/thread?thread_id=128#comment-291
g + geom_point(alpha = 1/3) + facet_wrap(bmicat ~ no2dec, nrow = 2) + 
        geom_smooth(method='lm', se=FALSE, col='steelblue') + 
        theme_bw(base_family = 'Avenir', base_size = 10) + 
        labs(x = expression('log ' * PM[2.5])) + 
        labs(y = 'Nocturnal Symptoms') + 
        labs(title = 'MAACS Cohort')