const gulp = require('gulp');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const plumber = require('gulp-plumber');
const rollup = require('rollup-stream');
const rollupResolve = require('rollup-plugin-node-resolve')
const rollupReplace = require('rollup-plugin-replace');

gulp.task('clean', function () {
  return del(['app/**', '!app']);
});

gulp.task('css', ['clean'], function() {
  return gulp.src(['node_modules/font-awesome/css/font-awesome.min.css', 'node_modules/bulma/css/bulma.css'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('index.css'))
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app'));
});

gulp.task('font', ['clean'], function() {
  return gulp.src(['node_modules/font-awesome/fonts/**'])
    .pipe(gulp.dest('app/fonts'));
});

gulp.task('asset', ['clean'], function() {
  return gulp.src(['src/index.html', 'src/favicon.ico'])
    .pipe(gulp.dest('app'));
});

gulp.task('js', ['clean'], function() {
  return rollup({
    input: 'src/index.js',
    format: 'es',
    sourcemap: true,
    plugins: [
      rollupReplace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      rollupResolve()
    ]
  })
    .pipe(source('index.js'))
    .pipe(plumber())
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app'));
});

gulp.task('default', ['css', 'font', 'asset', 'js']);
