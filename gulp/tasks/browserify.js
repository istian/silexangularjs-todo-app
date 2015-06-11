var gulp = require('gulp'),
    config = require('../config'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

gulp.task('browserify', function (cb) {
    return browserify(config.scripts.src)
        .bundle()
        .pipe(source(config.assets + '/js/main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.tmp + '/js'));
});