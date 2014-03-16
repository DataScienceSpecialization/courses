map4 = Leaflet$new()
map4$setView(c(29.6779, -95.4379), 10)
map4$tileLayer("http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png")
# map4$tileLayer(provider = 'Stamen.Terrain')


data(crime, package = 'ggmap')
dat <- head(crime)[,c('lat', 'lon', 'offense')]
names(dat) <- c('lat', 'lng', 'offense')
map4$geocsv(dat)
map4

# {title: New Map} ----
map5 = Leaflet$new()
map5$setView(37.27667, -91.60611, 4)
map5$tileLayer("http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png")

dat <- read.csv('geoCoded.csv')
names(dat) <- c('address', 'lat', 'lng')
dat <- transform(dat, color = 'red', fillColor = '#f03', fillOpacity = 0.5, radius = 10)
map5$circle(dat)
map5


