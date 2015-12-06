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
    // src: 'src/',
    html: 'src/html/',
    less: 'src/less/',
    fonts: 'src/fonts/',
    css: 'dist/css/',
    js: 'src/js/',
    example: 'example/',
    dist: 'dist/'
  };

  gulp.task('less', function () {

    // gulp.src(paths.less + 'global.less')
    //   .pipe(less({
    //     plugins: [cleanCSS]
    //   }))
    //   .pipe(gulp.dest(paths.css))
    //   .pipe(connect.reload());
    //
    // gulp.src(paths.less + 'page/**/*.less')
    //   .pipe(less({
    //     plugins: [cleanCSS]
    //   }))
    //   .pipe(gulp.dest(paths.css + 'page/'))
    //   .pipe(connect.reload());

    gulp.src(paths.less + '/aweui.less')
      .pipe(less({
        plugins: [cleanCSS]
      }))
      .pipe(gulp.dest(paths.css))
      .pipe(connect.reload());

    gulp.src(paths.less + 'font-awesome/font-awesome.less')
      .pipe(less({
        plugins: [cleanCSS]
      }))
      .pipe(gulp.dest(paths.css))
      .pipe(connect.reload());
  });

  gulp.task('copy', function () {
    gulp.src(paths.fonts + '*')
      .pipe(gulp.dest(paths.dist + 'fonts/'));
  });

  gulp.task('connect', function () {
    connect.server({
      root: paths.root,
      port: 9100,
      livereload: true
    });
  });

  gulp.task('connect:dev', function () {
    connect.server({
      root: paths.root,
      port: 9101,
      livereload: true
    });
  });

  gulp.task('html', function () {
    // gulp.src(paths.tpl + '**/*.html')
    //   .pipe(connect.reload());

    gulp.src(paths.html + '**/*.html')
      .pipe(connect.reload());
  });

  gulp.task('js', function () {
    // gulp.src(paths.js + '**/*.js')
    //   .pipe(connect.reload());

    gulp.src(paths.src + '**/*.js')
      .pipe(connect.reload());
  });

  gulp.task('watch', function () {
    gulp.watch([paths.html + '**/*.html'], ['html']);
    gulp.watch([paths.less + '**/*.less'], ['less']);
    gulp.watch([paths.js + '**/*.js'], ['js']);
  });

  gulp.task('dev', ['connect:dev', 'copy', 'watch']);
})();