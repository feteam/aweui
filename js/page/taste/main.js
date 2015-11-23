/**
 * taste
 * @author hiwangchi@gmail.com
 */
'use strict';
require.config({
  baseUrl: '/js/'
});

require([
  'dep/zepto',
  'dep/iscroll'
], function ($, iscroll) {
  console.log($);
  var taste = {
    init: function () {
      var tasteScroll = new IScroll('#j-taste-container', {
        mouseWheel: true,
        scrollbars: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true
      });
    }
  };

  taste.init();
});