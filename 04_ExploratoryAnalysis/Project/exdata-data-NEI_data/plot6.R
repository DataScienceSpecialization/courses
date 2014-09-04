library(dplyr)
library(ggplot2)

NEI <- readRDS("summarySCC_PM25.rds")
SCC <- readRDS("Source_Classification_Code.rds")

vehicles_SCC <- filter(SCC, grepl("Vehicle", SCC$SCC.Level.Two))

pm25_vehicles_bmore_la <- select(NEI, fips, SCC, year, Emissions) %>%
        filter(SCC %in% vehicles_SCC$SCC, fips %in% c('24510', '06037')) %>%
        mutate(city = sub('06037', "Los Angeles",fips), city = sub('24510', "Baltimore City", city)) %>%
        group_by(city, year) %>%
        summarize(TotalEmissions = sum(Emissions))


with(pm25_vehicles_bmore_la, qplot(year, TotalEmissions, geom = "line", color = city,
                                main=expression("Total PM"[2.5] * " from Motor Vehicles in Baltimore City and LA")))

dev.copy(png, file = "plot6.png")  ## Copy my plot to a PNG file

dev.off()  ## Don't forget to close the PNG device!
