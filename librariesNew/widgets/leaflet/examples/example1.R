require(rCharts)
map1 = Leaflet$new()
map1$setView(c(45.5236, -122.675), 13)
map1$tileLayer("http://a.tiles.mapbox.com/v3/mapbox.control-room/{z}/{x}/{y}.png", zoom = 8)
map1

map1 = Leaflet$new()
map1$setView(c(45.50867, -73.55399), 13)
map1