var gulp = require('gulp'),
    config = require('../config');

gulp.task('copy', function(cb) {
   return gulp.src(config.tmp + '/**/*', {base : '.tmp'})
       .pipe(gulp.dest(config.public));
});