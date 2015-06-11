var gulp = require('gulp'),
    requireDir = require('require-dir'),
    sequence = require('gulp-sequence');

var tasks = requireDir('./../tasks');
var run = ['clean'];

gulp.task('cleanAll', function (cb) {
    run.push(cb);
    sequence.apply(this, run);
});