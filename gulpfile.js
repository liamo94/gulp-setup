var gulp = require('gulp');
var replace = require('gulp-replace');
var clean = require('gulp-clean');

var plugins = require('gulp-load-plugins')({
    pattern: '*'
});

gulp.task('scripts', require('./gulp/scripts')(gulp, plugins));
gulp.task('sass', require('./gulp/sass')(gulp, plugins));
gulp.task('browser-sync', require('./gulp/browser-sync')(gulp, plugins));
gulp.task('clean', require('./gulp/clean')(gulp, plugins, clean));
gulp.task('copy', require('./gulp/copy')(gulp, plugins));
gulp.task('replace', require('./gulp/replace')(gulp, plugins, replace));
gulp.task('watch', require('./gulp/watch')(gulp, plugins, replace));

// gulp.task('default', ['scripts', 'sass'], function () {
//     gulp.watch('src/js/**/*.js', ['scripts']);
//     gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
// });

gulp.task('dev', ['browser-sync', 'sass', 'watch']);
gulp.task('bulid', ['clean', 'scripts']);