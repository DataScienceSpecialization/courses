setClass("cachemean",
         representation(set = "function",
                        get = "function",
                        getmean = "function",
                        setmean = "function"))

makeVector <- function(x) {
        data <- x
        datamean <- NULL
        get <- function() data
        set <- function(newvalue) {
                data <<- newvalue
                datamean <<- NULL
        }
        setmean <- function(newmean) datamean <<- newmean
        getmean <- function() datamean
        new("cachemean", set = set, get = get, setmean = setmean,
            getmean = getmean)
}

setMethod("show", "cachemean",
          function(object) {
                  x <- object$get()
                  show(x)
                  invisible(x)
          })

setMethod("mean", "cachemean",
          function(x, ...) {
                  m <- x$getmean()
                  if(!is.null(m))
                          return(m)
                  data <- x$get()
                  m <- mean(data, ...)
                  x$setmean(m)
                  m
          })

