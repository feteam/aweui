'use strict';
import gulp from 'gulp';
import connect from 'gulp-connect';
import less from 'gulp-less';
import CleanCSS from 'less-plugin-clean-css';

const cleanCSS = new CleanCSS({
  advanced: true
});

const paths = {
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

gulp.task('less', () => {
  console.log(`${paths.less}aweui.less`);
  gulp.src(`${paths.less}aweui.less`)
    .pipe(less({
      plugins: [cleanCSS]
    }))
    .pipe(gulp.dest(paths.css))
    .pipe(connect.reload());

  gulp.src(`${paths.less}font-awesome/font-awesome.less`)
    .pipe(less({
      plugins: [cleanCSS]
    }))
    .pipe(gulp.dest(paths.css))
    .pipe(connect.reload());
});

gulp.task('copy', () => {
  gulp.src(`${paths.fonts}*`)
    .pipe(gulp.dest(`${paths.dist}fonts/`));
});

gulp.task('connect', () => {
  connect.server({
    root: paths.root,
    port: 9100,
    livereload: true
  });
});

gulp.task('connect:dev', () => {
  connect.server({
    root: paths.root,
    port: 9101,
    livereload: true
  });
});

gulp.task('html', () => {
  gulp.src(`${paths.html}**/*.html`)
    .pipe(connect.reload());
});

gulp.task('js', () => {
  gulp.src(`${paths.src}**/*.js`)
    .pipe(connect.reload());
});

gulp.task('watch', ['less'], () => {
  gulp.watch([`${paths.html}**/*.html`], ['html']);
  gulp.watch([`${paths.less}**/*.less`], ['less']);
  gulp.watch([`${paths.js}**/*.js`], ['js']);
});

gulp.task('dev', ['connect:dev', 'copy', 'watch']);