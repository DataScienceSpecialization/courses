map2 = Leaflet$new()
map2$setView(c(45.5236, -122.6750), 13)
map2$tileLayer(provider = 'Stamen.Toner')
map2$marker(c(45.5244, -122.6699), bindPopup = 'The Waterfront')
map2$circle(c(45.5215, -122.6261), radius = 500, bindPopup = 'Laurelhurst Park')
map2
