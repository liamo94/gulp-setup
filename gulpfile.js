var gulp = require('gulp');
var replace = require('gulp-replace');
var clean = require('gulp-clean');
var webserver = require('gulp-webserver');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

var plugins = require('gulp-load-plugins')({
    pattern: '*'
});

gulp.task('scripts', require('./gulp/scripts')(gulp, plugins));
gulp.task('sass', require('./gulp/sass')(gulp, plugins, rename, cleanCSS));
gulp.task('webserver', require('./gulp/webserver')(gulp, plugins, webserver));
gulp.task('clean', require('./gulp/clean')(gulp, plugins, clean));
gulp.task('copy', require('./gulp/copy')(gulp, plugins));
gulp.task('replace', require('./gulp/replace')(gulp, plugins, replace));
gulp.task('watch', require('./gulp/watch')(gulp, plugins, replace));

// gulp.task('default', ['scripts', 'sass'], function () {
//     gulp.watch('src/js/**/*.js', ['scripts']);
//     gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
// });

gulp.task('dev', ['webserver', 'sass', 'scripts', 'watch']);
gulp.task('default', ['scripts', 'styles']);
gulp.task('bulid', ['clean', 'scripts']);