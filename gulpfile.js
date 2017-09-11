const gulp = require('gulp'),
  fs = require("fs"),
  cleanCSS = require('gulp-clean-css'),
  concatCSS = require('gulp-concat-css'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('css',function() {
  return gulp.src(['node_modules/font-awesome/css/font-awesome.min.css', 'node_modules/bulma/css/bulma.css'])
    .pipe(sourcemaps.init())
    .pipe(concatCSS('index.css'))
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app'));
});

gulp.task('font',function() {
  return gulp.src(['node_modules/font-awesome/fonts/**'])
    .pipe(gulp.dest('app/fonts'));
});
gulp.task('default', ['css', 'font']);
