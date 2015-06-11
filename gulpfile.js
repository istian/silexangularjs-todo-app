var gulp = require("gulp"),
    requireDir = require('require-dir'),
    sequence = require('gulp-sequence');

var registers = requireDir('./gulp/register');

var runBuild = ['cleanAll', 'build'];

gulp.task('default', function(cb) {
    runBuild.push(cb);
    sequence.apply(this, runBuild);
});

var runProd = ['cleanAll', ['compact', 'build']];
gulp.task('buildProd', function(cb) {
    runProd.push(cb);
    sequence.apply(this, runProd);
});