library(dplyr)

NEI <- readRDS("summarySCC_PM25.rds")
SCC <- readRDS("Source_Classification_Code.rds")

pm25_year_bmore <- select(NEI, fips,year,Emissions) %>%
        filter(fips == "24510") %>% ## Baltimore city only
        group_by(year) %>%
        summarize(TotalEmissions = sum(Emissions))

with(pm25_year_bmore, 
     plot(year, TotalEmissions, type='o', col="dark blue", 
          main = expression("Total PM"[2.5]*" in Baltimore City, MD by year")))  ## Create plot on screen device

dev.copy(png, file = "plot2.png")  ## Copy my plot to a PNG file

dev.off()  ## Don't forget to close the PNG device!
