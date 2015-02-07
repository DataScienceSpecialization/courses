A quick introduction to ggvis
===
author: Brian Caffo
date: 7/30/2014

===

A first basic example
===


```r
install.packages("ggvis")
```


A first basic example
========================================================


```r
library(ggvis)
library(dplyr)
mtcars %>% ggvis(~wt, ~mpg) %>% layer_points()
```

<!--html_preserve--><div id="plot_id697143314-container" class="ggvis-output-container">
<div id="plot_id697143314" class="ggvis-output"></div>
<div class="plot-gear-icon">
<nav class="ggvis-control">
<a class="ggvis-dropdown-toggle" title="Controls" onclick="return false;"></a>
<ul class="ggvis-dropdown">
<li>
Renderer: 
<a id="plot_id697143314_renderer_svg" class="ggvis-renderer-button" onclick="return false;" data-plot-id="plot_id697143314" data-renderer="svg">SVG</a>
 | 
<a id="plot_id697143314_renderer_canvas" class="ggvis-renderer-button" onclick="return false;" data-plot-id="plot_id697143314" data-renderer="canvas">Canvas</a>
</li>
<li>
<a id="plot_id697143314_download" class="ggvis-download" data-plot-id="plot_id697143314">Download</a>
</li>
</ul>
</nav>
</div>
</div>
<script type="text/javascript">
var plot_id697143314_spec = {
	"data" : [
		{
			"name" : "mtcars0",
			"format" : {
				"type" : "csv",
				"parse" : {
					"wt" : "number",
					"mpg" : "number"
				}
			},
			"values" : "\"wt\",\"mpg\"\n2.62,21\n2.875,21\n2.32,22.8\n3.215,21.4\n3.44,18.7\n3.46,18.1\n3.57,14.3\n3.19,24.4\n3.15,22.8\n3.44,19.2\n3.44,17.8\n4.07,16.4\n3.73,17.3\n3.78,15.2\n5.25,10.4\n5.424,10.4\n5.345,14.7\n2.2,32.4\n1.615,30.4\n1.835,33.9\n2.465,21.5\n3.52,15.5\n3.435,15.2\n3.84,13.3\n3.845,19.2\n1.935,27.3\n2.14,26\n1.513,30.4\n3.17,15.8\n2.77,19.7\n3.57,15\n2.78,21.4"
		},
		{
			"name" : "scale/x",
			"format" : {
				"type" : "csv",
				"parse" : {
					"domain" : "number"
				}
			},
			"values" : "\"domain\"\n1.31745\n5.61955"
		},
		{
			"name" : "scale/y",
			"format" : {
				"type" : "csv",
				"parse" : {
					"domain" : "number"
				}
			},
			"values" : "\"domain\"\n9.225\n35.075"
		}
	],
	"scales" : [
		{
			"name" : "x",
			"domain" : {
				"data" : "scale/x",
				"field" : "data.domain"
			},
			"zero" : false,
			"nice" : false,
			"clamp" : false,
			"range" : "width"
		},
		{
			"name" : "y",
			"domain" : {
				"data" : "scale/y",
				"field" : "data.domain"
			},
			"zero" : false,
			"nice" : false,
			"clamp" : false,
			"range" : "height"
		}
	],
	"marks" : [
		{
			"type" : "symbol",
			"properties" : {
				"update" : {
					"fill" : {
						"value" : "#000000"
					},
					"size" : {
						"value" : 50
					},
					"x" : {
						"scale" : "x",
						"field" : "data.wt"
					},
					"y" : {
						"scale" : "y",
						"field" : "data.mpg"
					}
				},
				"ggvis" : {
					"data" : {
						"value" : "mtcars0"
					}
				}
			},
			"from" : {
				"data" : "mtcars0"
			}
		}
	],
	"width" : 504,
	"height" : 504,
	"legends" : [],
	"axes" : [
		{
			"type" : "x",
			"scale" : "x",
			"orient" : "bottom",
			"layer" : "back",
			"grid" : true,
			"title" : "wt"
		},
		{
			"type" : "y",
			"scale" : "y",
			"orient" : "left",
			"layer" : "back",
			"grid" : true,
			"title" : "mpg"
		}
	],
	"padding" : null,
	"ggvis_opts" : {
		"keep_aspect" : false,
		"resizable" : true,
		"padding" : {},
		"duration" : 250,
		"renderer" : "svg",
		"hover_duration" : 0,
		"width" : 504,
		"height" : 504
	},
	"handlers" : null
};
ggvis.getPlot("plot_id697143314").parseSpec(plot_id697143314_spec);
</script><!--/html_preserve-->

```r
mtcars %>% 
  ggvis(~wt, ~mpg) %>% 
  layer_points(fill = ~factor(cyl))
```

<!--html_preserve--><div id="plot_id938326188-container" class="ggvis-output-container">
<div id="plot_id938326188" class="ggvis-output"></div>
<div class="plot-gear-icon">
<nav class="ggvis-control">
<a class="ggvis-dropdown-toggle" title="Controls" onclick="return false;"></a>
<ul class="ggvis-dropdown">
<li>
Renderer: 
<a id="plot_id938326188_renderer_svg" class="ggvis-renderer-button" onclick="return false;" data-plot-id="plot_id938326188" data-renderer="svg">SVG</a>
 | 
<a id="plot_id938326188_renderer_canvas" class="ggvis-renderer-button" onclick="return false;" data-plot-id="plot_id938326188" data-renderer="canvas">Canvas</a>
</li>
<li>
<a id="plot_id938326188_download" class="ggvis-download" data-plot-id="plot_id938326188">Download</a>
</li>
</ul>
</nav>
</div>
</div>
<script type="text/javascript">
var plot_id938326188_spec = {
	"data" : [
		{
			"name" : "mtcars0",
			"format" : {
				"type" : "csv",
				"parse" : {
					"wt" : "number",
					"mpg" : "number"
				}
			},
			"values" : "\"wt\",\"mpg\",\"factor(cyl)\"\n2.62,21,\"6\"\n2.875,21,\"6\"\n2.32,22.8,\"4\"\n3.215,21.4,\"6\"\n3.44,18.7,\"8\"\n3.46,18.1,\"6\"\n3.57,14.3,\"8\"\n3.19,24.4,\"4\"\n3.15,22.8,\"4\"\n3.44,19.2,\"6\"\n3.44,17.8,\"6\"\n4.07,16.4,\"8\"\n3.73,17.3,\"8\"\n3.78,15.2,\"8\"\n5.25,10.4,\"8\"\n5.424,10.4,\"8\"\n5.345,14.7,\"8\"\n2.2,32.4,\"4\"\n1.615,30.4,\"4\"\n1.835,33.9,\"4\"\n2.465,21.5,\"4\"\n3.52,15.5,\"8\"\n3.435,15.2,\"8\"\n3.84,13.3,\"8\"\n3.845,19.2,\"8\"\n1.935,27.3,\"4\"\n2.14,26,\"4\"\n1.513,30.4,\"4\"\n3.17,15.8,\"8\"\n2.77,19.7,\"6\"\n3.57,15,\"8\"\n2.78,21.4,\"4\""
		},
		{
			"name" : "scale/fill",
			"format" : {
				"type" : "csv",
				"parse" : null
			},
			"values" : "\"domain\"\n\"4\"\n\"6\"\n\"8\""
		},
		{
			"name" : "scale/x",
			"format" : {
				"type" : "csv",
				"parse" : {
					"domain" : "number"
				}
			},
			"values" : "\"domain\"\n1.31745\n5.61955"
		},
		{
			"name" : "scale/y",
			"format" : {
				"type" : "csv",
				"parse" : {
					"domain" : "number"
				}
			},
			"values" : "\"domain\"\n9.225\n35.075"
		}
	],
	"scales" : [
		{
			"name" : "fill",
			"type" : "ordinal",
			"domain" : {
				"data" : "scale/fill",
				"field" : "data.domain"
			},
			"points" : true,
			"sort" : false,
			"range" : "category10"
		},
		{
			"name" : "x",
			"domain" : {
				"data" : "scale/x",
				"field" : "data.domain"
			},
			"zero" : false,
			"nice" : false,
			"clamp" : false,
			"range" : "width"
		},
		{
			"name" : "y",
			"domain" : {
				"data" : "scale/y",
				"field" : "data.domain"
			},
			"zero" : false,
			"nice" : false,
			"clamp" : false,
			"range" : "height"
		}
	],
	"marks" : [
		{
			"type" : "symbol",
			"properties" : {
				"update" : {
					"size" : {
						"value" : 50
					},
					"x" : {
						"scale" : "x",
						"field" : "data.wt"
					},
					"y" : {
						"scale" : "y",
						"field" : "data.mpg"
					},
					"fill" : {
						"scale" : "fill",
						"field" : "data.factor(cyl)"
					}
				},
				"ggvis" : {
					"data" : {
						"value" : "mtcars0"
					}
				}
			},
			"from" : {
				"data" : "mtcars0"
			}
		}
	],
	"width" : 504,
	"height" : 504,
	"legends" : [
		{
			"orient" : "right",
			"fill" : "fill",
			"title" : "factor(cyl)"
		}
	],
	"axes" : [
		{
			"type" : "x",
			"scale" : "x",
			"orient" : "bottom",
			"layer" : "back",
			"grid" : true,
			"title" : "wt"
		},
		{
			"type" : "y",
			"scale" : "y",
			"orient" : "left",
			"layer" : "back",
			"grid" : true,
			"title" : "mpg"
		}
	],
	"padding" : null,
	"ggvis_opts" : {
		"keep_aspect" : false,
		"resizable" : true,
		"padding" : {},
		"duration" : 250,
		"renderer" : "svg",
		"hover_duration" : 0,
		"width" : 504,
		"height" : 504
	},
	"handlers" : null
};
ggvis.getPlot("plot_id938326188").parseSpec(plot_id938326188_spec);
</script><!--/html_preserve-->

Slide With Plot
========================================================

![plot of chunk unnamed-chunk-3](ggvis-figure/unnamed-chunk-3.png) 
