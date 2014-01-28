library(rCharts)

# Example 1
hPlot(Pulse ~ Height, data = MASS::survey, type = "scatter", group = "Exer")

## Example 2
a <- hPlot(Pulse ~ Height, data = MASS::survey, type = "bubble", title = "Zoom demo", subtitle = "bubble chart", size = "Age", group = "Exer")
a$chart(zoomType = "xy")
a$exporting(enabled = T)
a

## Example 4
x <- data.frame(key = c("a", "b", "c"), value = c(1, 2, 3))
hPlot(x = "key", y = "value", data = x, type = "pie")

## Example 5
a <- hPlot(Pulse ~ Height, data = MASS::survey, type = 'scatter', group = 'Sex', radius = 6, group.na = "Not Available")
a$colors('rgba(223, 83, 83, .5)', 'rgba(119, 152, 191, .5)', 'rgba(60, 179, 113, .5)')
a$legend(align = 'right', verticalAlign = 'top', layout = 'vertical')
a$plotOptions(scatter = list(marker = list(symbol = 'circle')))
a$tooltip(formatter = "#! function() { return this.x + ', ' + this.y; } !#")
a

## Example 6
hPlot(freq ~ Exer, data = plyr::count(MASS::survey, c('Sex', 'Exer')), type = c('column', 'line'), group = 'Sex', radius = 6)

## Example 7
hPlot(freq ~ Exer, data = plyr::count(MASS::survey, c('Sex', 'Exer')), type = 'bar', group = 'Sex', group.na = 'NA\'s')

## Example 8
a <- hPlot(freq ~ Exer, data = plyr::count(MASS::survey, c('Sex', 'Exer')), type = 'column', group = 'Sex', group.na = 'NA\'s')
a$plotOptions(column = list(dataLabels = list(enabled = T, rotation = -90, align = 'right', color = '#FFFFFF', x = 4, y = 10, style = list(fontSize = '13px', fontFamily = 'Verdana, sans-serif'))))
a$xAxis(labels = list(rotation = -45, align = 'right', style = list(fontSize = '13px', fontFamily = 'Verdana, sans-serif')), replace = F)
a

## Example 9 (not working properly)
drill_function <- "#! function() {
    var drilldown = this.drilldown;
    function setChart(name, categories, data, color) {
		chart.xAxis[0].setCategories(categories, false);
		chart.series[0].remove(false);
		chart.addSeries({
			name: name,
			data: data,
			color: color || 'black'
		}, false);
		chart.redraw();
    };
    if (drilldown) { // drill down
        setChart(drilldown.name, drilldown.categories, drilldown.data, drilldown.color);
    } else { // restore
        setChart(name, categories, data);
    }
} !#"

a <- rCharts::Highcharts$new()
a$chart(type = "column")
a$series(data = list(
    list(y = 15, drilldown = list(data = c(1, 2, 3))), 
    list(y = 20, drilldown = list(data = c(1, 2, 3)))), name = "test")
a$xAxis(categories = c("Brand A", "Brand B"))
a$plotOptions(column = list(cursor = 'pointer', point = list(events = list(click = drill_function))))
a

## Example 10
a <- hPlot(freq ~ Exer, data = plyr::count(MASS::survey, c('Sex', 'Exer')), type = 'bar', group = 'Sex', group.na = 'NA\'s')
a$plotOptions(bar = list(cursor = 'pointer', point = list(events = list(click = "#! function() { alert ('Category: '+ this.category +', value: '+ this.y); } !#"))))
a

## Example 11
a <- rCharts::Highcharts$new()
a$series(data = list(
    list(y = 8, url = "https://github.com/metagraf/rHighcharts", color = "lightblue"),
    list(y = 14, url = "https://github.com/metagraf/rVega", color = "lightpink"),
    list(y = 71, url = "https://github.com/ramnathv/rCharts", color = "lightgreen")
), type = "column", name = "Number of Stars")
a$plotOptions(column = list(cursor = 'pointer', point = list(events = list(click = "#! function() { location.href = this.options.url; } !#"))))
a$xAxis(categories = c("rHighcharts", "rVega", "rCharts"), title = list(text = ""))
a$yAxis(title = list(text = ""))
a$legend(enabled = F)
a
