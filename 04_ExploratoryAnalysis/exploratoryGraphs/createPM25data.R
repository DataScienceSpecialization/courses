## Create PM2.5 dataset

pm25 <- readRDS("~/projects/speciationdata/PM25/pm25_monitors.rds")
use <- (substr(names(pm25), 1, 2) <= 60) & (sapply(pm25, nrow) >= 1096)
pm25 <- pm25[use]

r <- lapply(pm25, function(x) {
        subset(x, Date >= "2008-01-01" & Date <= "2010-12-31")
})
use <- sapply(r, nrow) > 0
r <- r[use]

avg <- lapply(r, function(x) {
        with(x, tapply(PM25, factor(as.POSIXlt(Date)$year + 1900), mean, na.rm = TRUE))
})
use <- sapply(avg, length) == 3L
avg <- avg[use]

d0 <- data.frame(pm25 = unlist(avg), year = 2008:2010)
d0$fips <- factor(substr(row.names(d0), 1, 5))
row.names(d0) <- NULL

d <- data.frame(pm25 = with(d0, tapply(pm25, fips, mean, na.rm = TRUE)))
d$fips <- factor(row.names(d))
row.names(d) <- NULL

cen <- readRDS("~/projects/source/fips/countycensus.rds")
m <- merge(d, cen, by = "fips")
m <- transform(m, lat = lat / 1e6, long = long / 1e6)
d$region <- factor(m$long < -100, labels = c("east", "west"))
d$longitude <- m$long
d$latitude <- m$lat

write.csv(d, file = "data/avgpm25.csv", row.names = FALSE)
