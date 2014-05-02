library(yhatr)

model.require <- function() {

}

model.transform <- function(df) {
        transform(df, Wind = as.numeric(as.character(Wind)),
                  Temp = as.integer(as.character(Temp)))
}

model.predict <- function(df) {
        result <- data.frame(Ozone = predict(fit, newdata = df))
        cl <- data.frame(clWind = class(df$Wind), clTemp = class(df$Temp))
        data.frame(result, Temp = as.character(df$Temp),
                   Wind = as.character(df$Wind), cl)
}

fit <- lm(Ozone ~ Wind + Temp, data = airquality)

yhat.config  <- c(
        username="rdpeng@gmail.com",
        apikey="90d2a80bb532cabb2387aa51ac4553cc",
        env="http://sandbox.yhathq.com/"
)


yhat.deploy("ozone")


## yhat.predict("ozone", data.frame(Wind = 9.7, Temp = 67))
