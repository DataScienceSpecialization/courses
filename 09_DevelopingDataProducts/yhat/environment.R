library(yhatr)

model.require <- function() {

}

model.transform <- function(df) {
        df
}

model.predict <- function(df) {
        data.frame(version = R.version.string, stringsAsFactors = FALSE)
}

yhat.config  <- c(
        username="rdpeng@gmail.com",
        apikey="90d2a80bb532cabb2387aa51ac4553cc",
        env="http://sandbox.yhathq.com/"
)


yhat.deploy("environment")
