## A program for copying the index.pdf files and naming them
## appropriately in the lectured directory
## Brian Caffo
## 
## Has to be run within the directory and won't overwrite
## unless you change this to TRUE
overwrite = FALSE

## Get the directory names (they all start with 0)
dirNames <- dir(pattern = "^[0-1][0-9]_[a-zA-Z]")

## Loop over them and copy the pdf files
sapply(dirNames, function(x) 
  file.copy(from = paste(x, "/index.pdf", sep = ""),
            to = paste("lectures/", x, ".pdf", sep = ""),
            overwrite = overwrite
              )
  )

## Loop over them and copy the RMD files
sapply(dirNames, function(x) 
  file.copy(from = paste(x, "/index.Rmd", sep = ""),
            to = paste("rmd/", x, ".Rmd", sep = ""),
            overwrite = overwrite
  )
)
