require(rCharts)
map3 <- Leaflet$new()
map3$setView(c(51.505, -0.09), zoom = 13)
map3$tileLayer(
  "http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png",
  maxZoom = 18 
)
map3$circle(c(51.5, -0.09), 100)