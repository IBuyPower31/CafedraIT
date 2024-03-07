'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

function buildStyles(cb) {
    gulp.src('./stylesheet.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./stylesheet'));
    cb();
};

function watchScss() {
    gulp.watch('./sass/*/*.scss', buildStyles);
}

gulp.task('default', watchScss);
gulp.task('buildStyles', buildStyles);