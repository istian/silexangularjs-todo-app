var gulp = require('gulp'),
    config = require('../config'),
    debug = require('gulp-debug');

gulp.task('vendor', function(cb) {
   return gulp.src(config.vendors.src, {base: config.vendors.base})
       .pipe(debug({title: 'Copying vendor file...'}))
       .pipe(gulp.dest(config.vendors.dest));
});
