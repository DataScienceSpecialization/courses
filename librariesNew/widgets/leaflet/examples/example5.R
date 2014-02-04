rMap <- function(location = 'montreal', zoom = 10, provider = 'MapQuestOpen.OSM'){
  m1 <- Leaflet$new()
  lnglat <- as.list(ggmap::geocode(location))
  m1$setView(lnglat$lat, lnglat$lon, zoom = zoom)
  m1$tileLayer(provider = provider)
  return(m1)
}

r1 <- rMap()
mcgill <- as.list(ggmap::geocode('mcgill univesity'))
r1$marker(mcgill$lat, mcgill$lon, bindPopup = 'mcgill university')
r1