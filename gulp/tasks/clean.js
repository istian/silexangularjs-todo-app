var gulp = require('gulp'),
    del = require('del');

var dirs = ['./.tmp', './public/css', './public/js', './public/fonts', './public/templates', './public/vendor', './assets/vendor'];

gulp.task('clean', function (cb) {
    del(dirs, {force: true}, cb);
});