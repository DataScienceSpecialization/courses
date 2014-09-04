library(dplyr)
library(ggplot2)

NEI <- readRDS("summarySCC_PM25.rds")
SCC <- readRDS("Source_Classification_Code.rds")

coal_SCC <- filter(SCC, grepl("Coal", SCC$Short.Name))

pm25_year_coal <- select(NEI, SCC,year,Emissions) %>%
        filter(SCC %in% coal_SCC$SCC ) %>% ## coal SCCs only
        group_by(year) %>%
        summarize(TotalEmissions = sum(Emissions))

with(pm25_year_coal, qplot(year, TotalEmissions, geom = "line",
                           main=expression("Total PM"[2.5] * " Emissions from Coal-Related Sources in the US")))

dev.copy(png, file = "plot4.png")  ## Copy my plot to a PNG file

dev.off()  ## Don't forget to close the PNG device!
