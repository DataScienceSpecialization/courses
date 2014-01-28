### rCharts | Rickshaw Documentation

## Methods

r1$graph(x, y, data, type, ...)

Create a basic graph using Rickshaw

```
x     column name with the x-variable
y     column name with the y-variable
data  data frame
type  type of graph (line, area, scatterplot)
...   other parameters 

## Axis

Add x/y-axis and grid lines

r1$xAxis(...)
r1$yAxis(...)

## Legend

Add a basic legend

r1$legend(...)

## HoverDetail

Show details on hover

r1$hoverdetail(...)

## Annotate

r1$annotate(...)

Add x-axis annotations

## RangeSlider

r1$slider(...)

Dynamically zoom on the x-axis with a slider

## Highlight

Highlight series on legend hover.

r1$highlight(...)

Rickshaw.Graph.JSONP - get data via a JSONP request

Rickshaw.Graph.Annotate - add x-axis annotations

Rickshaw.Graph.RangeSlider - dynamically zoom on the x-axis with a slider

Rickshaw.Graph.Axis.Time - add x-axis and grid lines with time labels

Rickshaw.Graph.Axis.X - add an x-axis and grid lines with arbitrary labels

Rickshaw.Graph.Axis.Y - add a y-axis and grid lines

Rickshaw.Graph.Behavior.Series.Highlight - highlight series on legend hover

Rickshaw.Graph.Behavior.Series.Order - reorder series in the stack with drag-and-drop

Rickshaw.Graph.Behavior.Series.Toggle - toggle series on and off through the legend