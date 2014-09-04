library(dplyr)
library(ggplot2)

NEI <- readRDS("summarySCC_PM25.rds")
SCC <- readRDS("Source_Classification_Code.rds")

vehicles_SCC <- filter(SCC, grepl("Vehicle", SCC$SCC.Level.Two))

pm25_fips_vehicles_bmore <- select(NEI, fips, SCC,year,Emissions) %>%
        filter(SCC %in% vehicles_SCC$SCC , fips == '24510') %>% ## Match motor vehicle SCC and Bmore
        group_by(year) %>%
        summarize(TotalEmissions = sum(Emissions))

with(pm25_vehicles_bmore, qplot(year, TotalEmissions, geom = "line",
                           main=expression("Total PM"[2.5] * " from Motor Vehicles in Baltimore City, MD")))

dev.copy(png, file = "plot5.png")  ## Copy my plot to a PNG file

dev.off()  ## Don't forget to close the PNG device!
