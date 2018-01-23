'use strict'

var gulp = require('gulp')
var ghPages = require('gulp-gh-pages')

// This task only works on a branch name origin with master

gulp.task('deploy', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages())
})
