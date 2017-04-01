$(function () {
  var initNavCursor = function () {
    var $cursor = $('nav .cursor');
    var widths = [];
    var lefts = [];
    $('nav li').each(function (i) {
      widths[i] = $(this).outerWidth();
      lefts[i] = widths.slice(0, widths.length - 1).reduce(function (acc, val) {
        return acc + val;
      }, 0);
    });
    var moveCursor = function (left, width) {
      $cursor.css({
        width: width + 'px',
        left: left + 'px'
      });
    };
    var tid;
    $('nav li').hover(function () {
      var i = $(this).index();
      var width = widths[i] || 0;
      var left = lefts[i] || 0;
      clearTimeout(tid);
      tid = setTimeout(function () {
        moveCursor(left, width);
      }, 200);
    });
  };

  initNavCursor();
});
