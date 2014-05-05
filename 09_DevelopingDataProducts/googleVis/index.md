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
M <- gvisMotionChart(Fruits, "Fruit", "Year", options = list(width = 600, height = 400))
print(M, "chart")
```

<!-- MotionChart generated in R 3.1.0 by googleVis 0.5.1 package -->
<!-- Mon May  5 05:39:06 2014 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDataMotionChartID126646d88af7 () {
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
function drawChartMotionChartID126646d88af7() {
var data = gvisDataMotionChartID126646d88af7();
var options = {};
options["width"] =    600;
options["height"] =    400;

    var chart = new google.visualization.MotionChart(
    document.getElementById('MotionChartID126646d88af7')
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
callbacks.push(drawChartMotionChartID126646d88af7);
})();
function displayChartMotionChartID126646d88af7() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartMotionChartID126646d88af7"></script>
 
<!-- divChart -->
  
<div id="MotionChartID126646d88af7"
  style="width: 600px; height: 400px;">
</div>


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
G <- gvisGeoChart(Exports, locationvar = "Country", colorvar = "Profit", options = list(width = 600, 
    height = 400))
print(G, "chart")
```

<!-- GeoChart generated in R 3.1.0 by googleVis 0.5.1 package -->
<!-- Mon May  5 05:39:07 2014 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDataGeoChartID1266328b8277 () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "Germany",
3 
],
[
 "Brazil",
4 
],
[
 "United States",
5 
],
[
 "France",
4 
],
[
 "Hungary",
3 
],
[
 "India",
2 
],
[
 "Iceland",
1 
],
[
 "Norway",
4 
],
[
 "Spain",
5 
],
[
 "Turkey",
1 
] 
];
data.addColumn('string','Country');
data.addColumn('number','Profit');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartGeoChartID1266328b8277() {
var data = gvisDataGeoChartID1266328b8277();
var options = {};
options["width"] =    600;
options["height"] =    400;

    var chart = new google.visualization.GeoChart(
    document.getElementById('GeoChartID1266328b8277')
    );
    chart.draw(data,options);
    

}
  
 
// jsDisplayChart
(function() {
var pkgs = window.__gvisPackages = window.__gvisPackages || [];
var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
var chartid = "geochart";
  
// Manually see if chartid is in pkgs (not all browsers support Array.indexOf)
var i, newPackage = true;
for (i = 0; newPackage && i < pkgs.length; i++) {
if (pkgs[i] === chartid)
newPackage = false;
}
if (newPackage)
  pkgs.push(chartid);
  
// Add the drawChart function to the global list of callbacks
callbacks.push(drawChartGeoChartID1266328b8277);
})();
function displayChartGeoChartID1266328b8277() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartGeoChartID1266328b8277"></script>
 
<!-- divChart -->
  
<div id="GeoChartID1266328b8277"
  style="width: 600px; height: 400px;">
</div>



---

## Specifying a region


```r
G2 <- gvisGeoChart(Exports, locationvar = "Country", colorvar = "Profit", options = list(width = 600, 
    height = 400, region = "150"))
print(G2, "chart")
```

<!-- GeoChart generated in R 3.1.0 by googleVis 0.5.1 package -->
<!-- Mon May  5 05:39:07 2014 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDataGeoChartID126665226c8d () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "Germany",
3 
],
[
 "Brazil",
4 
],
[
 "United States",
5 
],
[
 "France",
4 
],
[
 "Hungary",
3 
],
[
 "India",
2 
],
[
 "Iceland",
1 
],
[
 "Norway",
4 
],
[
 "Spain",
5 
],
[
 "Turkey",
1 
] 
];
data.addColumn('string','Country');
data.addColumn('number','Profit');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartGeoChartID126665226c8d() {
var data = gvisDataGeoChartID126665226c8d();
var options = {};
options["width"] =    600;
options["height"] =    400;
options["region"] = "150";

    var chart = new google.visualization.GeoChart(
    document.getElementById('GeoChartID126665226c8d')
    );
    chart.draw(data,options);
    

}
  
 
// jsDisplayChart
(function() {
var pkgs = window.__gvisPackages = window.__gvisPackages || [];
var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
var chartid = "geochart";
  
// Manually see if chartid is in pkgs (not all browsers support Array.indexOf)
var i, newPackage = true;
for (i = 0; newPackage && i < pkgs.length; i++) {
if (pkgs[i] === chartid)
newPackage = false;
}
if (newPackage)
  pkgs.push(chartid);
  
// Add the drawChart function to the global list of callbacks
callbacks.push(drawChartGeoChartID126665226c8d);
})();
function displayChartGeoChartID126665226c8d() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartGeoChartID126665226c8d"></script>
 
<!-- divChart -->
  
<div id="GeoChartID126665226c8d"
  style="width: 600px; height: 400px;">
</div>


---

## Finding parameters to set under `options`


<img class="center" src="../../assets/img/configoptions.png" height=450>

https://developers.google.com/chart/interactive/docs/gallery/geochart

---

## Setting more options


```r
df <- data.frame(label = c("US", "GB", "BR"), val1 = c(1, 3, 4), val2 = c(23, 
    12, 32))
Line <- gvisLineChart(df, xvar = "label", yvar = c("val1", "val2"), options = list(title = "Hello World", 
    legend = "bottom", titleTextStyle = "{color:'red', fontSize:18}", vAxis = "{gridlines:{color:'red', count:3}}", 
    hAxis = "{title:'My Label', titleTextStyle:{color:'blue'}}", series = "[{color:'green', targetAxisIndex: 0}, \n                         {color: 'blue',targetAxisIndex:1}]", 
    vAxes = "[{title:'Value 1 (%)', format:'##,######%'}, \n                                  {title:'Value 2 (£)'}]", 
    curveType = "function", width = 500, height = 300))
```


https://github.com/mages/Introduction_to_googleVis/blob/gh-pages/index.Rmd

---

## Setting more options


```r
print(Line, "chart")
```

<!-- LineChart generated in R 3.1.0 by googleVis 0.5.1 package -->
<!-- Mon May  5 05:44:01 2014 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDataLineChartID1266767a9187 () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "US",
1,
23 
],
[
 "GB",
3,
12 
],
[
 "BR",
4,
32 
] 
];
data.addColumn('string','label');
data.addColumn('number','val1');
data.addColumn('number','val2');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartLineChartID1266767a9187() {
var data = gvisDataLineChartID1266767a9187();
var options = {};
options["allowHtml"] = true;
options["title"] = "Hello World";
options["legend"] = "bottom";
options["titleTextStyle"] = {color:'red', fontSize:18};
options["vAxis"] = {gridlines:{color:'red', count:3}};
options["hAxis"] = {title:'My Label', titleTextStyle:{color:'blue'}};
options["series"] = [{color:'green', targetAxisIndex: 0}, 
                         {color: 'blue',targetAxisIndex:1}];
options["vAxes"] = [{title:'Value 1 (%)', format:'##,######%'}, 
                                  {title:'Value 2 (£)'}];
options["curveType"] = "function";
options["width"] =    500;
options["height"] =    300;

    var chart = new google.visualization.LineChart(
    document.getElementById('LineChartID1266767a9187')
    );
    chart.draw(data,options);
    

}
  
 
// jsDisplayChart
(function() {
var pkgs = window.__gvisPackages = window.__gvisPackages || [];
var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
var chartid = "corechart";
  
// Manually see if chartid is in pkgs (not all browsers support Array.indexOf)
var i, newPackage = true;
for (i = 0; newPackage && i < pkgs.length; i++) {
if (pkgs[i] === chartid)
newPackage = false;
}
if (newPackage)
  pkgs.push(chartid);
  
// Add the drawChart function to the global list of callbacks
callbacks.push(drawChartLineChartID1266767a9187);
})();
function displayChartLineChartID1266767a9187() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartLineChartID1266767a9187"></script>
 
<!-- divChart -->
  
<div id="LineChartID1266767a9187"
  style="width: 500px; height: 300px;">
</div>




---

## Combining multiple plots together


```r
G <- gvisGeoChart(Exports, "Country", "Profit", options = list(width = 200, 
    height = 100))
T1 <- gvisTable(Exports, options = list(width = 200, height = 270))
M <- gvisMotionChart(Fruits, "Fruit", "Year", options = list(width = 400, height = 370))
GT <- gvisMerge(G, T1, horizontal = FALSE)
GTM <- gvisMerge(GT, M, horizontal = TRUE, tableOptions = "bgcolor=\"#CCCCCC\" cellspacing=10")
```


---

## Combining multiple plots together


```r
print(GTM, "chart")
```

<!-- GeoChart generated in R 3.1.0 by googleVis 0.5.1 package -->
<!-- Mon May  5 05:44:02 2014 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDataGeoChartID126668e872d5 () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "Germany",
3 
],
[
 "Brazil",
4 
],
[
 "United States",
5 
],
[
 "France",
4 
],
[
 "Hungary",
3 
],
[
 "India",
2 
],
[
 "Iceland",
1 
],
[
 "Norway",
4 
],
[
 "Spain",
5 
],
[
 "Turkey",
1 
] 
];
data.addColumn('string','Country');
data.addColumn('number','Profit');
data.addRows(datajson);
return(data);
}


// jsData 
function gvisDataTableID126674cb33c1 () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "Germany",
3,
true 
],
[
 "Brazil",
4,
false 
],
[
 "United States",
5,
true 
],
[
 "France",
4,
true 
],
[
 "Hungary",
3,
false 
],
[
 "India",
2,
true 
],
[
 "Iceland",
1,
false 
],
[
 "Norway",
4,
true 
],
[
 "Spain",
5,
true 
],
[
 "Turkey",
1,
false 
] 
];
data.addColumn('string','Country');
data.addColumn('number','Profit');
data.addColumn('boolean','Online');
data.addRows(datajson);
return(data);
}


// jsData 
function gvisDataMotionChartID126648b2ffce () {
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
function drawChartGeoChartID126668e872d5() {
var data = gvisDataGeoChartID126668e872d5();
var options = {};
options["width"] =    200;
options["height"] =    100;

    var chart = new google.visualization.GeoChart(
    document.getElementById('GeoChartID126668e872d5')
    );
    chart.draw(data,options);
    

}
  


// jsDrawChart
function drawChartTableID126674cb33c1() {
var data = gvisDataTableID126674cb33c1();
var options = {};
options["allowHtml"] = true;
options["width"] =    200;
options["height"] =    270;

    var chart = new google.visualization.Table(
    document.getElementById('TableID126674cb33c1')
    );
    chart.draw(data,options);
    

}
  


// jsDrawChart
function drawChartMotionChartID126648b2ffce() {
var data = gvisDataMotionChartID126648b2ffce();
var options = {};
options["width"] =    400;
options["height"] =    370;

    var chart = new google.visualization.MotionChart(
    document.getElementById('MotionChartID126648b2ffce')
    );
    chart.draw(data,options);
    

}
  
 
// jsDisplayChart
(function() {
var pkgs = window.__gvisPackages = window.__gvisPackages || [];
var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
var chartid = "geochart";
  
// Manually see if chartid is in pkgs (not all browsers support Array.indexOf)
var i, newPackage = true;
for (i = 0; newPackage && i < pkgs.length; i++) {
if (pkgs[i] === chartid)
newPackage = false;
}
if (newPackage)
  pkgs.push(chartid);
  
// Add the drawChart function to the global list of callbacks
callbacks.push(drawChartGeoChartID126668e872d5);
})();
function displayChartGeoChartID126668e872d5() {
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


// jsDisplayChart
(function() {
var pkgs = window.__gvisPackages = window.__gvisPackages || [];
var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
var chartid = "table";
  
// Manually see if chartid is in pkgs (not all browsers support Array.indexOf)
var i, newPackage = true;
for (i = 0; newPackage && i < pkgs.length; i++) {
if (pkgs[i] === chartid)
newPackage = false;
}
if (newPackage)
  pkgs.push(chartid);
  
// Add the drawChart function to the global list of callbacks
callbacks.push(drawChartTableID126674cb33c1);
})();
function displayChartTableID126674cb33c1() {
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
callbacks.push(drawChartMotionChartID126648b2ffce);
})();
function displayChartMotionChartID126648b2ffce() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartGeoChartID126668e872d5"></script>


<!-- jsChart -->  
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartTableID126674cb33c1"></script>


<!-- jsChart -->  
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartMotionChartID126648b2ffce"></script>
 
<table bgcolor="#CCCCCC" cellspacing=10>
<tr>
<td>

<table border="0">
<tr>
<td>

<!-- divChart -->
  
<div id="GeoChartID126668e872d5"
  style="width: 200px; height: 100px;">
</div>

</td>
</tr>
<tr>
<td>

<!-- divChart -->
  
<div id="TableID126674cb33c1"
  style="width: 200px; height: 270px;">
</div>

</td>
</tr>
</table>

</td>
<td>

<!-- divChart -->
  
<div id="MotionChartID126648b2ffce"
  style="width: 400px; height: 370px;">
</div>

</td>
</tr>
</table>



---

## Seeing the HTML code


```r
M <- gvisMotionChart(Fruits, "Fruit", "Year", options = list(width = 600, height = 400))
print(M)
```

```
## <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
##   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
## <html xmlns="http://www.w3.org/1999/xhtml">
## <head>
## <title>MotionChartID126636c9cf8e</title>
## <meta http-equiv="content-type" content="text/html;charset=utf-8" />
## <style type="text/css">
## body {
##   color: #444444;
##   font-family: Arial,Helvetica,sans-serif;
##   font-size: 75%;
##   }
##   a {
##   color: #4D87C7;
##   text-decoration: none;
## }
## </style>
## </head>
## <body>
##  <!-- MotionChart generated in R 3.1.0 by googleVis 0.5.1 package -->
## <!-- Mon May  5 05:44:02 2014 -->
## 
## 
## <!-- jsHeader -->
## <script type="text/javascript">
##  
## // jsData 
## function gvisDataMotionChartID126636c9cf8e () {
## var data = new google.visualization.DataTable();
## var datajson =
## [
##  [
##  "Apples",
## 2008,
## "West",
## 98,
## 78,
## 20,
## "2008-12-31" 
## ],
## [
##  "Apples",
## 2009,
## "West",
## 111,
## 79,
## 32,
## "2009-12-31" 
## ],
## [
##  "Apples",
## 2010,
## "West",
## 89,
## 76,
## 13,
## "2010-12-31" 
## ],
## [
##  "Oranges",
## 2008,
## "East",
## 96,
## 81,
## 15,
## "2008-12-31" 
## ],
## [
##  "Bananas",
## 2008,
## "East",
## 85,
## 76,
## 9,
## "2008-12-31" 
## ],
## [
##  "Oranges",
## 2009,
## "East",
## 93,
## 80,
## 13,
## "2009-12-31" 
## ],
## [
##  "Bananas",
## 2009,
## "East",
## 94,
## 78,
## 16,
## "2009-12-31" 
## ],
## [
##  "Oranges",
## 2010,
## "East",
## 98,
## 91,
## 7,
## "2010-12-31" 
## ],
## [
##  "Bananas",
## 2010,
## "East",
## 81,
## 71,
## 10,
## "2010-12-31" 
## ] 
## ];
## data.addColumn('string','Fruit');
## data.addColumn('number','Year');
## data.addColumn('string','Location');
## data.addColumn('number','Sales');
## data.addColumn('number','Expenses');
## data.addColumn('number','Profit');
## data.addColumn('string','Date');
## data.addRows(datajson);
## return(data);
## }
##  
## // jsDrawChart
## function drawChartMotionChartID126636c9cf8e() {
## var data = gvisDataMotionChartID126636c9cf8e();
## var options = {};
## options["width"] =    600;
## options["height"] =    400;
## 
## 
##     var chart = new google.visualization.MotionChart(
##     document.getElementById('MotionChartID126636c9cf8e')
##     );
##     chart.draw(data,options);
##     
## 
## }
##   
##  
## // jsDisplayChart
## (function() {
## var pkgs = window.__gvisPackages = window.__gvisPackages || [];
## var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
## var chartid = "motionchart";
##   
## // Manually see if chartid is in pkgs (not all browsers support Array.indexOf)
## var i, newPackage = true;
## for (i = 0; newPackage && i < pkgs.length; i++) {
## if (pkgs[i] === chartid)
## newPackage = false;
## }
## if (newPackage)
##   pkgs.push(chartid);
##   
## // Add the drawChart function to the global list of callbacks
## callbacks.push(drawChartMotionChartID126636c9cf8e);
## })();
## function displayChartMotionChartID126636c9cf8e() {
##   var pkgs = window.__gvisPackages = window.__gvisPackages || [];
##   var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
##   window.clearTimeout(window.__gvisLoad);
##   // The timeout is set to 100 because otherwise the container div we are
##   // targeting might not be part of the document yet
##   window.__gvisLoad = setTimeout(function() {
##   var pkgCount = pkgs.length;
##   google.load("visualization", "1", { packages:pkgs, callback: function() {
##   if (pkgCount != pkgs.length) {
##   // Race condition where another setTimeout call snuck in after us; if
##   // that call added a package, we must not shift its callback
##   return;
## }
## while (callbacks.length > 0)
## callbacks.shift()();
## } });
## }, 100);
## }
##  
## // jsFooter
## </script>
##  
## <!-- jsChart -->  
## <script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartMotionChartID126636c9cf8e"></script>
##  
## <!-- divChart -->
##   
## <div id="MotionChartID126636c9cf8e"
##   style="width: 600px; height: 400px;">
## </div>
##  <div><span>Data: Fruits &#8226; Chart ID: <a href="Chart_MotionChartID126636c9cf8e.html">MotionChartID126636c9cf8e</a></span><br /> 
## <!-- htmlFooter -->
## <span> 
##   R version 3.1.0 (2014-04-10) &#8226; <a href="https://github.com/mages/googleVis">googleVis-0.5.1</a>
##   &#8226; <a href="https://developers.google.com/terms/">Google Terms of Use</a> &#8226; <a href="https://google-developers.appspot.com/chart/interactive/docs/gallery/motionchart#Data_Policy">Data Policy</a>
## </span></div>
## </body>
## </html>
```

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


---

## For more info


```r
demo(googleVis)
```


* http://cran.r-project.org/web/packages/googleVis/vignettes/googleVis.pdf
* http://cran.r-project.org/web/packages/googleVis/googleVis.pdf
* https://developers.google.com/chart/interactive/docs/gallery
* https://developers.google.com/chart/interactive/faq
