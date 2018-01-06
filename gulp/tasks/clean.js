'use strict'

var gulp = require('gulp')
var del = require('del')

// Clean dist folder
gulp.task('clean:dist', function () {
  return del.sync('dist')
})

// After clome the repo run 'gulp clean:git' to clean all git files from this repositry
gulp.task('clean:git', function () {
  return del.sync('./.git')
})
