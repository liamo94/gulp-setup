module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('dist/**/*')
        .pipe(gulp.dest('.dist'));
    };
};
