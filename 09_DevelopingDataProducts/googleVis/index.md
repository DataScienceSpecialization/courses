---
title       : googleVis
subtitle    : Data Products
author      : Brian Caffo, Jeff Leek, Roger Peng
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
url:
    lib: ../../librariesNew
    assets: ../../assets
widgets     : [mathjax]            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
---

## Google Vis API

<img class="center" src="../../assets/img/googlecharts.png" height=500>

https://developers.google.com/chart/interactive/docs/gallery




---

## Basic idea

* The R function creates an HTML page
* The HTML page calls Google Charts
* The result is an interactive HTML graphic

---

## Example 


```r
suppressPackageStartupMessages(library(googleVis))
plot(gvisMotionChart(Fruits, "Fruit", "Year", options = list(width = 600, height = 400)))
```


---

## Charts in googleVis

<center> "gvis + ChartType" </center>

* Motion charts:  `gvisMotionChart`
* Interactive maps: `gvisGeoChart`
* Interactive tables: `gvisTable`
* Line charts: `gvisLineChart`
* Bar charts: `gvisColumnChart`
* Tree maps: `gvisTreeMap`

http://cran.r-project.org/web/packages/googleVis/googleVis.pdf

---

## Plots on maps


```r
plot(gvisGeoChart(Exports, locationvar = "Country", colorvar = "Profit", options = list(width = 600, 
    height = 400)))
```



---

## Specifying a region


```r
plot(gvisGeoChart(Exports, locationvar = "Country", colorvar = "Profit", options = list(width = 600, 
    height = 400, region = "150")))
```


---

## Finding parameters to set under `options`


<img class="center" src="../../assets/img/configoptions.png" height=450>

https://developers.google.com/chart/interactive/docs/gallery/geochart

---

## Combining multiple plots together


```r
G <- gvisGeoChart(Exports, "Country", "Profit", options = list(width = 200, 
    height = 100))
T1 <- gvisTable(Exports, options = list(width = 200, height = 270))
M <- gvisMotionChart(Fruits, "Fruit", "Year", options = list(width = 400, height = 370))
GT <- gvisMerge(G, T1, horizontal = FALSE)
GTM <- gvisMerge(GT, M, horizontal = TRUE, tableOptions = "bgcolor=\"#CCCCCC\" cellspacing=10")
plot(GTM)
```


---

## Seeing the HTML code


```r
M <- gvisMotionChart(Fruits, "Fruit", "Year", options = list(width = 600, height = 400))
print(M)
```

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>MotionChartID1266760ee31f</title>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<style type="text/css">
body {
  color: #444444;
  font-family: Arial,Helvetica,sans-serif;
  font-size: 75%;
  }
  a {
  color: #4D87C7;
  text-decoration: none;
}
</style>
</head>
<body>
 <!-- MotionChart generated in R 3.1.0 by googleVis 0.5.1 package -->
<!-- Mon May  5 04:55:41 2014 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDataMotionChartID1266760ee31f () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "Apples",
2008,
"West",
98,
78,
20,
"2008-12-31" 
],
[
 "Apples",
2009,
"West",
111,
79,
32,
"2009-12-31" 
],
[
 "Apples",
2010,
"West",
89,
76,
13,
"2010-12-31" 
],
[
 "Oranges",
2008,
"East",
96,
81,
15,
"2008-12-31" 
],
[
 "Bananas",
2008,
"East",
85,
76,
9,
"2008-12-31" 
],
[
 "Oranges",
2009,
"East",
93,
80,
13,
"2009-12-31" 
],
[
 "Bananas",
2009,
"East",
94,
78,
16,
"2009-12-31" 
],
[
 "Oranges",
2010,
"East",
98,
91,
7,
"2010-12-31" 
],
[
 "Bananas",
2010,
"East",
81,
71,
10,
"2010-12-31" 
] 
];
data.addColumn('string','Fruit');
data.addColumn('number','Year');
data.addColumn('string','Location');
data.addColumn('number','Sales');
data.addColumn('number','Expenses');
data.addColumn('number','Profit');
data.addColumn('string','Date');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartMotionChartID1266760ee31f() {
var data = gvisDataMotionChartID1266760ee31f();
var options = {};
options["width"] =    600;
options["height"] =    400;

    var chart = new google.visualization.MotionChart(
    document.getElementById('MotionChartID1266760ee31f')
    );
    chart.draw(data,options);
    

}
  
 
// jsDisplayChart
(function() {
var pkgs = window.__gvisPackages = window.__gvisPackages || [];
var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
var chartid = "motionchart";
  
// Manually see if chartid is in pkgs (not all browsers support Array.indexOf)
var i, newPackage = true;
for (i = 0; newPackage && i < pkgs.length; i++) {
if (pkgs[i] === chartid)
newPackage = false;
}
if (newPackage)
  pkgs.push(chartid);
  
// Add the drawChart function to the global list of callbacks
callbacks.push(drawChartMotionChartID1266760ee31f);
})();
function displayChartMotionChartID1266760ee31f() {
  var pkgs = window.__gvisPackages = window.__gvisPackages || [];
  var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
  window.clearTimeout(window.__gvisLoad);
  // The timeout is set to 100 because otherwise the container div we are
  // targeting might not be part of the document yet
  window.__gvisLoad = setTimeout(function() {
  var pkgCount = pkgs.length;
  google.load("visualization", "1", { packages:pkgs, callback: function() {
  if (pkgCount != pkgs.length) {
  // Race condition where another setTimeout call snuck in after us; if
  // that call added a package, we must not shift its callback
  return;
}
while (callbacks.length > 0)
callbacks.shift()();
} });
}, 100);
}
 
// jsFooter
</script>
 
<!-- jsChart -->  
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartMotionChartID1266760ee31f"></script>
 
<!-- divChart -->
  
<div id="MotionChartID1266760ee31f"
  style="width: 600px; height: 400px;">
</div>
 <div><span>Data: Fruits &#8226; Chart ID: <a href="Chart_MotionChartID1266760ee31f.html">MotionChartID1266760ee31f</a></span><br /> 
<!-- htmlFooter -->
<span> 
  R version 3.1.0 (2014-04-10) &#8226; <a href="https://github.com/mages/googleVis">googleVis-0.5.1</a>
  &#8226; <a href="https://developers.google.com/terms/">Google Terms of Use</a> &#8226; <a href="https://google-developers.appspot.com/chart/interactive/docs/gallery/motionchart#Data_Policy">Data Policy</a>
</span></div>
</body>
</html>

```r
print(M, "chart", file = "myfilename.html")
```


---

## Things you can do with Google Vis

* The visualizations can be embedded in websites with HTML code
* Dynamic visualizations can be built with Shiny, Rook, and R.rsp
* Embed them in [R markdown](http://www.rstudio.com/ide/docs/authoring/using_markdown) based documents
  * Set `results="asis"` in the chunk options
  * Can be used with [knitr](http://cran.r-project.org/web/packages/knitr/index.html) and [slidify](http://slidify.org/)
* 


---

## For more info


```r
demo(googleVis)
```


* http://cran.r-project.org/web/packages/googleVis/vignettes/googleVis.pdf
* http://cran.r-project.org/web/packages/googleVis/googleVis.pdf
* https://developers.google.com/chart/interactive/docs/gallery
* https://developers.google.com/chart/interactive/faq
