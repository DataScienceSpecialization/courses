(function() {
  var DEBUG = false;

  d3.layout.grid = function() {
    var mode = "equal",
        layout = _distributeEqually,
        x = d3.scale.ordinal(),
        y = d3.scale.ordinal(),
        size = [1, 1],
        actualSize = [0, 0],
        nodeSize = false,
        bands = false,
        padding = [0, 0],
        cols, rows;

    function grid(nodes) {
      return layout(nodes);
    }

    function _distributeEqually(nodes) {
      var i = -1, 
          n = nodes.length,
          _cols = cols ? cols : 0,
          _rows = rows ? rows : 0,
          col, row;

      // FIXME: make explicit rows/cols exclusive? Or find a smart way to deal with overflows (repeat?)
      // FIXME: when rows are set, fill top-to-bottom (make test with 5 data points and 4 rows)

      if (_rows && !_cols) {
        _cols = Math.ceil(n / _rows)
      } else {
        _cols || (_cols = Math.ceil(Math.sqrt(n)));
        _rows || (_rows = Math.ceil(n / _cols));
      }

      if (nodeSize) {
        x.domain(d3.range(_cols)).range(d3.range(0, (size[0] + padding[0]) * _cols, size[0] + padding[0]));
        y.domain(d3.range(_rows)).range(d3.range(0, (size[1] + padding[1]) * _rows, size[1] + padding[1]));
        actualSize[0] = bands ? x(_cols - 1) + size[0] : x(_cols - 1);
        actualSize[1] = bands ? y(_rows - 1) + size[1] : y(_rows - 1);
      } else if (bands) {
        x.domain(d3.range(_cols)).rangeBands([0, size[0]], padding[0], 0);
        y.domain(d3.range(_rows)).rangeBands([0, size[1]], padding[1], 0);
        actualSize[0] = x.rangeBand();
        actualSize[1] = y.rangeBand();
      } else {
        x.domain(d3.range(_cols)).rangePoints([0, size[0]]);
        y.domain(d3.range(_rows)).rangePoints([0, size[1]]);
        actualSize[0] = x(1);
        actualSize[1] = y(1);
      }

      if (DEBUG) console.log('cols/rows', _cols, _rows);

      while (++i < n) {
        col = i % _cols;
        row = Math.floor(i / _cols);

        if (DEBUG) console.log(i, col, row);

        nodes[i].x = x(col);
        nodes[i].y = y(row);
      }

      return nodes;
    }

    // grid.mode = function(value) {
    //   if (!arguments.length) return mode;
    //   switch(mode = value) {
    //     case "equal":
    //       layout = _distributeEqually;
    //       break;
    //   }
    //   return grid;
    // }

    grid.size = function(value) {
      if (!arguments.length) return nodeSize ? actualSize : size;
      actualSize = [0, 0];
      nodeSize = (size = value) == null;
      return grid;
    }

    grid.nodeSize = function(value) {
      if (!arguments.length) return nodeSize ? size : actualSize;
      actualSize = [0, 0];
      nodeSize = (size = value) != null;
      return grid;
    }

    grid.rows = function(value) {
      if (!arguments.length) return rows;
      rows = value;
      return grid;
    }

    grid.cols = function(value) {
      if (!arguments.length) return cols;
      cols = value;
      return grid;
    }

    grid.bands = function() {
      bands = true;
      return grid;
    }

    grid.points = function() {
      bands = false;
      return grid;
    }

    grid.padding = function(value) {
      if (!arguments.length) return padding;
      padding = value;
      return grid;
    }

    return grid;
  };
})();