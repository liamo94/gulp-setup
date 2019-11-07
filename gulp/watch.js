module.exports = function (gulp, plugins) {
    return function () {
        gulp.watch('./src/sass/**/*.scss', ['sass']);
        gulp.watch('./src/js/**/*.js', ['scripts']);
    };
};
