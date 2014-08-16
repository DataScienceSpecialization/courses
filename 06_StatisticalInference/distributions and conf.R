# Probabilities
# -1.28, -1.645, -1.96 and -2.33 == 10th, 5th, 2.5th, and 1st percentile
# if each gender has 50% p, what is the p of getting 7 or more girls out of 8 births?
choose(8, 7) * .5 ^ 8 + choose(8,8) * .5 ^8
pbinom(6, 8, .5, lower.tail=F)

# the chance that you get 5 or more heads out of 10 tries
pbinom(4, 10, .5, lower.tail=F)

# what is the 95th percentile of a normal distribution?
qnorm(.95, mean = 0, sd = 1)

# what is the prob that a random variable is larger than x?
pnorm(x, mean, sd, lower.tail = FALSE)

# what number of ad clicks would rep where 75% of days were less? mean=1020, sd=50
qnorm(.75, 1020, 50)

# POISSON DISTRIBUTION
# used to model counts, goes from 0 to infinity
# variance == mean = lambda
# for modeling counts, even-time or survival data (rates), contingency tables, approximating binomials
# ... when n is large and p is small

# the number of people that show up is Poisson w/mean 2.5/hour. If watching for four hours, what
# is probablility that 3 or fewer show up?
ppois(3, 2.5 * 4)
ppois(40, 9 * 5)

# example poisson approximation to binomial
# flip a coin w/ p = .01 500 times, what is p of 2 or fewer successes?
pbinom(2, 500, .01)
ppois(2, (500*.01))

# what is the p of getting 45 or fewer heads from a fair coin and 100 flips
# mean = 0.5 and variance = sqrt(.5 * (1-.5)/ 100) = 0.05
pnorm(.45, .5, .05)
pbinom(45, 100, .5)

# confidence interval for the average heigh of sons
library(UsingR)
data(father.son)
x <- father.son$sheight
# qnorm returns no. of standard deviations
(mean(x) + c(1, -1) * qnorm(0.975) * sd(x)/sqrt(length(x)))/12

# poisson confidence interval
# 5 failures in 94.32 days
x <- 5
t <- 94.32
lambda <- x/t
round(lambda + c(-1, 1) * qnorm(.975) * sqrt(lambda/t), 3)
poisson.test(x, T = t)$conf

# rate of search entries was 10 per minute when monitoring an hour, what is exact poisson 
# interval for rate of events per minute?
poisson.test(10 * 60, 60)$conf