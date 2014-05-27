
## ------------------------------------------------------------------------
library(help=base)


## ------------------------------------------------------------------------
help("Control")


## ----dir-----------------------------------------------------------------
apropos("help")


## ----localhelp,tidy=FALSE,echo=TRUE--------------------------------------
?help.search;


## ----RsiteSearch---------------------------------------------------------
RSiteSearch("help")


## ------------------------------------------------------------------------
RSiteSearch("{remove objects}", restrict = "function")


## ----localhelpex---------------------------------------------------------
help.search("remove objects", package = "base");


## ----ls,tidy=FALSE-------------------------------------------------------
?ls();


## ----find----------------------------------------------------------------
find("rm")


## ----examples------------------------------------------------------------
example(rm);


## ----browsevignettes-----------------------------------------------------
browseVignettes(all=T);


## ----vignette------------------------------------------------------------
vignette("Sweave");


## ----vigbrowser----------------------------------------------------------
browseVignettes("knitr");


## ----rdocumentation------------------------------------------------------
# Uncomment if you want to go to the web page
browseURL("http://www.rdocumentation.org/")


## ----rdocumentationgit---------------------------------------------------
# Uncomment if you want to go to the web page
browseURL("https://github.com/Data-Camp/Rdocumentation")


## ----devtools------------------------------------------------------------
library(devtools)
install_github("Rdocumentation","Data-Camp")


## ----RdocEx, tidy=FALSE--------------------------------------------------
library(Rdocumentation)
?rm


## ------------------------------------------------------------------------
detach("package:Rdocumentation", unload=TRUE)


