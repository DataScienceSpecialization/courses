library(dplyr)
library(ggplot2)

NEI <- readRDS("summarySCC_PM25.rds")
SCC <- readRDS("Source_Classification_Code.rds")

pm25_year_type_bmore <- select(NEI, fips, type ,year,Emissions) %>%
        filter(fips == "24510") %>% ## Baltimore city only
        group_by(type, year) %>%
        summarize(TotalEmissions = sum(Emissions))

with(pm25_year_type_bmore, qplot(year, TotalEmissions, data=pm25_year_type_bmore, color = type, geom = "line",
                           main=expression("Total PM"[2.5] * " Emissions by Year and Type in Baltimore City, MD")))

dev.copy(png, file = "plot3.png")  ## Copy my plot to a PNG file

dev.off()  ## Don't forget to close the PNG device!
