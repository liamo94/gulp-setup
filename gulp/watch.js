module.exports = function (gulp, plugins) {
    return function () {
        gulp.watch('./src/sass/**/*.scss', ['sass']);
    };
};
