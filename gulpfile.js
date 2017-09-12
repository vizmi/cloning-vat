const gulp = require('gulp'),
  del = require('del'),
  cleanCSS = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  sequence = require('gulp-sequence')
 ;

gulp.task('clean', function () {
  return del(['app/**']);
});

gulp.task('css',function() {
  return gulp.src(['node_modules/font-awesome/css/font-awesome.min.css', 'node_modules/bulma/css/bulma.css'])
    .pipe(sourcemaps.init())
    .pipe(concat('index.css'))
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app'));
});

gulp.task('font',function() {
  return gulp.src(['node_modules/font-awesome/fonts/**'])
    .pipe(gulp.dest('app/fonts'));
});

gulp.task('asset',function() {
  return gulp.src(['src/index.html', 'src/favicon.ico'])
    .pipe(gulp.dest('app'));
});

gulp.task('default', sequence('clean', ['css', 'font', 'asset']));
