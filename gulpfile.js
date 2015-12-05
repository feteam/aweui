(function () {
  'use strict';
  var gulp = require('gulp');
  var connect = require('gulp-connect');
  var less = require('gulp-less');
  var CleanCSS = require('less-plugin-clean-css');

  var cleanCSS = new CleanCSS({
    advanced: true
  });

  var paths = {
    root: './',
    src: 'src/',
    less: 'less/',
    css: 'css/',
    js: 'js/',
    tpl: 'tpl/',
    example: 'example/'
  };

  gulp.task('less', function () {
    gulp.src(paths.less + 'global.less')
      .pipe(less({
        plugins: [cleanCSS]
      }))
      .pipe(gulp.dest(paths.css))
      .pipe(connect.reload());

    gulp.src(paths.less + 'page/**/*.less')
      .pipe(less({
        plugins: [cleanCSS]
      }))
      .pipe(gulp.dest(paths.css + 'page/'))
      .pipe(connect.reload());

    gulp.src(paths.src + 'less/*.less')
      .pipe(less({
        plugins: [cleanCSS]
      }))
      .pipe(gulp.dest(paths.src + 'css/'))
      .pipe(connect.reload());
  });

  gulp.task('connect', function () {
    connect.server({
      root: paths.root,
      port: 9100,
      livereload: true
    });
  });

  gulp.task('html', function () {
    gulp.src(paths.tpl + '**/*.html')
      .pipe(connect.reload());

    gulp.src(paths.src + 'html/**/*.html')
      .pipe(connect.reload());
  });

  gulp.task('js', function () {
    gulp.src(paths.js + '**/*.js')
      .pipe(connect.reload());

    gulp.src(paths.src + 'js/*.js')
      .pipe(connect.reload());
  });

  gulp.task('watch', function () {
    gulp.watch([paths.tpl + '**/*.html', paths.src + 'html/**/*.html'], ['html']);
    gulp.watch([paths.less + '**/*.less', paths.src + 'less/*.less'], ['less']);
    gulp.watch([paths.js + '**/*.js', paths.src + 'js/*.js'], ['js']);
  });

  gulp.task('default', ['connect', 'watch']);
})();