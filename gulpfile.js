'use strict';

// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require('gulp-ruby-sass');
var path = require('path');
var minifycss = require('gulp-minify-css');
var changed = require('gulp-changed');

//General
var psProjectDir = 'prestashop';
var themeName = 'default-bootstrap';
var projectDir = path.resolve(__dirname);

var paths = {
    prestashopSassFiles: './' + psProjectDir + '/themes/default-bootstrap/sass/**/*.scss',
    prestashopCssDir: './' + psProjectDir + '/themes/default-bootstrap/css',
    prestashopJsFiles: './' + psProjectDir + '/themes/default-bootstrap/js/**/*.js',
    prestashopJsDir: './' + psProjectDir + '/themes/default-bootstrap/js/'
};
var sassConfig = {
    style: 'expanded',
    compass: true,
    loadPath: [projectDir + '/prestashop/themes/'+ themeName +'/sass']
};

/*
* Custom routine to cancel gulp when jshint is failed
* (Currently not implemented in gulp-jshint :/)
*/
var map = require('map-stream');
var exitOnJshintError = map(function (file, cb) {
    if (!file.jshint.success) {
        console.error('jshint failed');
        process.exit(1);
    }
});

/* Task
* Lint all prestashop theme javascript files
*/
gulp.task('lint', function() {
    return gulp.src(paths.prestashopJsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(exitOnJshintError);
});

/* Task
* Compile our prestashop SASS files
*/
gulp.task('sass', function() {
    return gulp.src(paths.prestashopSassFiles)
        .pipe(changed(paths.prestashopCssDir,{ extension: '.css' }))
        .pipe(sass(sassConfig))
        .pipe(gulp.dest(paths.prestashopCssDir));
});

/* Task
* Watch Files For Changes
*/
gulp.task('watch', function() {
    gulp.watch(paths.prestashopJsFiles, ['lint']);
    gulp.watch(paths.prestashopSassFiles, ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'watch']);