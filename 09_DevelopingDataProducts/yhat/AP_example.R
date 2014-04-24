## Create dataset of PM and O3 for all US taking year 2013 (annual
## data from EPA)

## This uses data from
## http://aqsdr1.epa.gov/aqsweb/aqstmp/airdata/download_files.html

## Read in the 2013 Annual Data

d <- read.csv("annual_all_2013.csv", nrow = 68210)

sub <- subset(d, Parameter.Name %in% c("PM2.5 - Local Conditions", "Ozone")
              & Pullutant.Standard %in% c("Ozone 8-Hour 2008", "PM25 Annual 2006"),
              c(State.Code, County.Code, Site.Num, Longitude, Latitude, Parameter.Name, Arithmetic.Mean, County.Name, City.Name, Pullutant.Standard))

pollavg <- aggregate(sub[, "Arithmetic.Mean"],
                     sub[, c("Longitude", "Latitude", "Parameter.Name")],
                     mean, na.rm = TRUE)
pollavg$Parameter.Name <- factor(pollavg$Parameter.Name, labels = c("ozone", "pm25"))
names(pollavg)[4] <- "level"

## Remove unneeded objects
rm(d, sub)

## library(fields)
rdist <- function (x1, x2, miles = TRUE, R = NULL) {
    if (is.null(R)) {
        if (miles) 
            R <- 3963.34
        else R <- 6378.388
    }
    coslat1 <- cos((x1[, 2] * pi)/180)
    sinlat1 <- sin((x1[, 2] * pi)/180)
    coslon1 <- cos((x1[, 1] * pi)/180)
    sinlon1 <- sin((x1[, 1] * pi)/180)
    if (missing(x2)) {
        pp <- cbind(coslat1 * coslon1, coslat1 * sinlon1, sinlat1) %*% 
            t(cbind(coslat1 * coslon1, coslat1 * sinlon1, sinlat1))
        return(R * acos(ifelse(abs(pp) > 1, 1 * sign(pp), pp)))
    }
    else {
        coslat2 <- cos((x2[, 2] * pi)/180)
        sinlat2 <- sin((x2[, 2] * pi)/180)
        coslon2 <- cos((x2[, 1] * pi)/180)
        sinlon2 <- sin((x2[, 1] * pi)/180)
        pp <- cbind(coslat1 * coslon1, coslat1 * sinlon1, sinlat1) %*% 
            t(cbind(coslat2 * coslon2, coslat2 * sinlon2, sinlat2))
        return(R * acos(ifelse(abs(pp) > 1, 1 * sign(pp), pp)))
    }
}

monitors <- data.matrix(pollavg[, c("Longitude", "Latitude")])


pollutant <- function(df) {
        x <- data.matrix(df[, c("lon", "lat")])
        r <- df$radius
        d <- rdist(monitors, x)
        use <- lapply(seq_len(ncol(d)), function(i) {
                which(d[, i] < r[i])
        })
        levels <- sapply(use, function(idx) {
                with(pollavg[idx, ], tapply(level, Parameter.Name, mean))
        })
        dlevel <- as.data.frame(t(levels))
        data.frame(df, dlevel)
}

library(yhatr)

model.transform <- function(df) {
        df
}

model.predict <- function(df) {
        pollutant(df)
}

yhat.config  <- c(
        username="rdpeng@gmail.com",
        apikey="90d2a80bb532cabb2387aa51ac4553cc",
        env="http://sandbox.yhathq.com/"
)

yhat.deploy("pollutant")



################################################################################
## Client side

library(yhatr)
yhat.config  <- c(
        username="rdpeng@gmail.com",
        apikey="90d2a80bb532cabb2387aa51ac4553cc",
        env="http://sandbox.yhathq.com/"
)
df <- data.frame(lon = c(-76.6167, -118.25), lat = c(39.2833, 34.05),
                 radius = 20)
yhat.predict("pollutant", df)
