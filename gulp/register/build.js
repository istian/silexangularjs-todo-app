var gulp = require('gulp'),
    sequence = require('gulp-sequence');

var run = [['vendor', 'compileAssets'], 'copy'];
gulp.task('build', function (cb) {
    run.push(cb);
    sequence.apply(this, run);
});
