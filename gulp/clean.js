module.exports = function (gulp, plugins, clean) {
    return function () {
        gulp.src('dist', {read: false})
        .pipe(clean());
    };
};
