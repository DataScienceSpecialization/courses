### 
### Title: Downloading files
### Author: Jeff Leek
### Date: October 3, 2014
###

## Get working directory
getwd()

## Set working directory (relative)
setwd("../")
getwd()

## Set working directory (absolute)

setwd("~/Desktop")

## Show the files in a directory

list.files("./")

## Check to see if a file/directory exists

file.exists("test")

## Make a directory

dir.create("test")

## Same thing but checking if it exists first

if(!file.exists("data")){dir.create("data")}