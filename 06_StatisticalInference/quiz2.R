#q 3
qnorm(.95, 1100, 75)

# q4
1100 + qnorm(.95) * 75/sqrt(100)

# q5
pbinom(3, 5, .5, lower.tail=F)

# q9 
ppois(10, 3 * 5)