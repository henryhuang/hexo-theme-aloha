var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var path = require('path');
var livereload = require('gulp-livereload');

gulp.task('less', function() {
    return gulp.src('./source/css/aloha.less')
        .pipe(plumber())
        .pipe(less({
            paths: ['./source/css/']
        }))
        .pipe(prefix("last 8 version", "> 1%", "ie 8", "ie 7"), {cascade:true})
        .pipe(gulp.dest('./source/css/'))
        .pipe(livereload());
});

gulp.task('dev', ['less'], function() {
    gulp.watch('./source/css/_partial/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['less']); // Default will run the 'entry' watch task