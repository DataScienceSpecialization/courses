---
title       : rCharts
subtitle    : Building Data Products
author      : Brian Caffo, Jeff Leek, Roger Peng
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012
highlighter : highlight.js  
hitheme     : tomorrow       
url:
    lib: ../../librariesNew #Remove new if using old slidify
    assets: ../../assets
widgets     : [mathjax, quiz, bootstrap]
mode        : selfcontained # {standalone, draft}
ext_widgets : {rCharts: ["libraries/highcharts","libraries/nvd3", "libraries/morris", "libraries/leaflet", "libraries/rickshaw"]}
---



## rCharts
![rCharts](fig/rCharts.png)
- rCharts is a way to create interactive javascript visualizations using R
- So
  - You don't have to learn complex tools, like D3
  - You simply work in R learning a minimal amount of new syntaxt
- rCharts was written by Ramnath Vaidyanathan (friend of the Data Science Series), who also wrote slidify, the framework we use for all of the lectures in the class
- This lecture is basically going through
  (http://ramnathv.github.io/rCharts/)

---
## Example
```
require(rCharts)
haireye = as.data.frame(HairEyeColor)
nPlot(Freq ~ Hair, group = 'Eye', type = 'multiBarChart',
  data = subset(haireye, Sex == 'Male')
)
```

---
## nvD3 run



<div id = 'chart1' class = 'rChart nvd3'></div>
<script type='text/javascript'>
 $(document).ready(function(){
      drawchart1()
    });
    function drawchart1(){  
      var opts = {
 "dom": "chart1",
"width":    800,
"height":    400,
"x": "Hair",
"y": "Freq",
"group": "Eye",
"type": "multiBarChart",
"id": "chart1" 
},
        data = [
 {
 "Hair": "Black",
"Eye": "Brown",
"Sex": "Male",
"Freq":             32 
},
{
 "Hair": "Brown",
"Eye": "Brown",
"Sex": "Male",
"Freq":             53 
},
{
 "Hair": "Red",
"Eye": "Brown",
"Sex": "Male",
"Freq":             10 
},
{
 "Hair": "Blond",
"Eye": "Brown",
"Sex": "Male",
"Freq":              3 
},
{
 "Hair": "Black",
"Eye": "Blue",
"Sex": "Male",
"Freq":             11 
},
{
 "Hair": "Brown",
"Eye": "Blue",
"Sex": "Male",
"Freq":             50 
},
{
 "Hair": "Red",
"Eye": "Blue",
"Sex": "Male",
"Freq":             10 
},
{
 "Hair": "Blond",
"Eye": "Blue",
"Sex": "Male",
"Freq":             30 
},
{
 "Hair": "Black",
"Eye": "Hazel",
"Sex": "Male",
"Freq":             10 
},
{
 "Hair": "Brown",
"Eye": "Hazel",
"Sex": "Male",
"Freq":             25 
},
{
 "Hair": "Red",
"Eye": "Hazel",
"Sex": "Male",
"Freq":              7 
},
{
 "Hair": "Blond",
"Eye": "Hazel",
"Sex": "Male",
"Freq":              5 
},
{
 "Hair": "Black",
"Eye": "Green",
"Sex": "Male",
"Freq":              3 
},
{
 "Hair": "Brown",
"Eye": "Green",
"Sex": "Male",
"Freq":             15 
},
{
 "Hair": "Red",
"Eye": "Green",
"Sex": "Male",
"Freq":              7 
},
{
 "Hair": "Blond",
"Eye": "Green",
"Sex": "Male",
"Freq":              8 
} 
]
  
      if(!(opts.type==="pieChart" || opts.type==="sparklinePlus")) {
        var data = d3.nest()
          .key(function(d){
            //return opts.group === undefined ? 'main' : d[opts.group]
            //instead of main would think a better default is opts.x
            return opts.group === undefined ? opts.y : d[opts.group];
          })
          .entries(data);
      }
      
      if (opts.disabled != undefined){
        data.map(function(d, i){
          d.disabled = opts.disabled[i]
        })
      }
      
      nv.addGraph(function() {
        var chart = nv.models[opts.type]()
          .x(function(d) { return d[opts.x] })
          .y(function(d) { return d[opts.y] })
          .width(opts.width)
          .height(opts.height)
         
        
          
        

        
        
        
      
       d3.select("#" + opts.id)
        .append('svg')
        .datum(data)
        .transition().duration(500)
        .call(chart);

       nv.utils.windowResize(chart.update);
       return chart;
      });
    };
</script>


---
## Slidify interactive
- The above was an example of embedding an rChart in a slidify document
  - In the YAML 
```yaml ext_widgets : {rCharts: ["libraries/nvd3"]}```
- Or, if you use more than one library
- YAML example
```yaml ext_widgets : {rCharts: ["libraries/highcharts",libraries/nvd3", "libraries/morris"]}``` 

---
## Deconstructing another example
```
## Example 1 Facetted Scatterplot
names(iris) = gsub("\\.", "", names(iris))
rPlot(SepalLength ~ SepalWidth | Species, data = iris, color = 'Species', type = 'point')
```


---
## When run
<iframe src='
fig/unnamed-chunk-3.html
' scrolling='no' seamless class='rChart 
polycharts
 '
id=iframe-
chart16c56388ccbc
></iframe>
<style>iframe.rChart{ width: 100%; height: 400px;}</style>


---
## Example 2 Facetted Barplot
```
hair_eye = as.data.frame(HairEyeColor)
rPlot(Freq ~ Hair | Eye, color = 'Eye', data = hair_eye, type = 'bar')
```

---
## Example 2 Facetted Barplot, when run
<iframe src='
fig/unnamed-chunk-4.html
' scrolling='no' seamless class='rChart 
polycharts
 '
id=iframe-
chart16c57cd13d81
></iframe>
<style>iframe.rChart{ width: 100%; height: 400px;}</style>



---
## How to get the js/html or publish an rChart
Now you can add whatever you'd like

```r
r1 <- rPlot(mpg ~ wt | am + vs, data = mtcars, type = "point", color = "gear")
r1$print("chart1") # print out the js 
r1$save('myPlot.html') #save as html file
r1$publish('myPlot', host = 'gist') # save to gist, rjson required
r1$publish('myPlot', host = 'rpubs') # save to rpubs
```



---
## rCharts has links to several libraries
- We'll do some examples
- Note Ramnath mentions that io2012 and polychart have conflicting js
  - They seem to work for me with that theme, but I get errors if I load the polychart library
  - If debugging with io and polychart, factor that in


---
## morris
```
data(economics, package = "ggplot2")
econ <- transform(economics, date = as.character(date))
m1 <- mPlot(x = "date", y = c("psavert", "uempmed"), type = "Line", data = econ)
m1$set(pointSize = 0, lineWidth = 1)
m1
```

---
## morris example run
<iframe src='
fig/unnamed-chunk-6.html
' scrolling='no' seamless class='rChart 
morris
 '
id=iframe-
chart16c527b1afb7
></iframe>
<style>iframe.rChart{ width: 100%; height: 400px;}</style>


---
## xCharts
```
require(reshape2)
uspexp <- melt(USPersonalExpenditure)
names(uspexp)[1:2] = c("category", "year")
x1 <- xPlot(value ~ year, group = "category", data = uspexp, type = "line-dotted")
x1
```

---
## xCharts run
<iframe src='
fig/unnamed-chunk-7.html
' scrolling='no' seamless class='rChart 
xcharts
 '
id=iframe-
chart16c57d6e1b94
></iframe>
<style>iframe.rChart{ width: 100%; height: 400px;}</style>


---
## Leaflet
```
map3 <- Leaflet$new()
map3$setView(c(51.505, -0.09), zoom = 13)
map3$marker(c(51.5, -0.09), bindPopup = "<p> Hi. I am a popup </p>")
map3$marker(c(51.495, -0.083), bindPopup = "<p> Hi. I am another popup </p>")
map3
```

---
## Leaflet run
<iframe src='
fig/unnamed-chunk-8.html
' scrolling='no' seamless class='rChart 
leaflet
 '
id=iframe-
chart16c577763a3f
></iframe>
<style>iframe.rChart{ width: 100%; height: 400px;}</style>


---
## Rickshaw
```
usp = reshape2::melt(USPersonalExpenditure)
# get the decades into a date Rickshaw likes
usp$Var2 <- as.numeric(as.POSIXct(paste0(usp$Var2, "-01-01")))
p4 <- Rickshaw$new()
p4$layer(value ~ Var2, group = "Var1", data = usp, type = "area", width = 560)
# add a helpful slider this easily; other features TRUE as a default
p4$set(slider = TRUE)
p4
```

---
## Rickshaw run
<iframe src='
fig/unnamed-chunk-9.html
' scrolling='no' seamless class='rChart 
rickshaw
 '
id=iframe-
chart16c56fdfd342
></iframe>
<style>iframe.rChart{ width: 100%; height: 400px;}</style>


---
## highchart
```
h1 <- hPlot(x = "Wr.Hnd", y = "NW.Hnd", data = MASS::survey, type = c("line", 
    "bubble", "scatter"), group = "Clap", size = "Age")
h1
```


---
## highchart run
<iframe src='
fig/unnamed-chunk-10.html
' scrolling='no' seamless class='rChart 
highcharts
 '
id=iframe-
chart16c54f760d43
></iframe>
<style>iframe.rChart{ width: 100%; height: 400px;}</style>


---
## Embedding rCharts into a shiny app 
### (then embedding it into slidify)


---
## What to do now
- Go forth, and produce some eye candy
