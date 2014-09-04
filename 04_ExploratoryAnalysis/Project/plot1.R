library(dplyr)

NEI <- readRDS("summarySCC_PM25.rds")
SCC <- readRDS("Source_Classification_Code.rds")

pm25_by_year <- select(NEI, year, Emissions) %>%
                        group_by(year) %>%
                        summarize(TotalEmissions = sum(Emissions))
with(pm25_by_year, 
     plot(year, TotalEmissions, type='o', col="dark blue", main = expression("Total PM"[2.5]*" by year"))
)  ## Create plot on screen device

dev.copy(png, file = "plot1.png")  ## Copy my plot to a PNG file

dev.off()  ## Don't forget to close the PNG device!
