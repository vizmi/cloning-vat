var gulp = require('gulp'),
  connect = require('gulp-connect'),
  fs = require("fs");

// watch the html files and invoke reload
gulp.task('watch', function () {
  gulp.watch(['./app/*'], ['reload']);
});

// send reload to server when the html changes
gulp.task('reload', function () {
  gulp.src('./app/*')
    .pipe(connect.reload());
});

// start the server with livereload
gulp.task('dev-server', function() {
  connect.server({
  	port: 80,
    root: 'app',
    livereload: true
  });
});

// default task = fire dev server and watch files
gulp.task('default', ['dev-server', 'watch']);
