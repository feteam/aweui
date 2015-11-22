(function () {
  'use strict';
  var gulp = require('gulp');
  var connect = require('gulp-connect');
  var less = require('gulp-less');
  var paths = {
    root: './',
    example: 'example/'
  };

  // gulp.tast('less', function () {
  //   gulp
  // });

  gulp.task('connect', function () {
    connect.server({
      root: paths.root,
      port: 9100,
      livereload: true
    });
  });

  gulp.task('html', function () {
    gulp.src(paths.example + '**/*.html')
      .pipe(connect.reload());
  });

  gulp.task('watch', function () {
    gulp.watch([paths.example + '**/*.html'], ['html']);
  });

  gulp.task('default', ['connect', 'watch']);
})();