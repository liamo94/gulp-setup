
module.exports = function (gulp, plugins, replace) {
    return function () {
        gulp.src(['src/js/*.js'])
            .pipe(replace('liam', 'charlotte'))
            .pipe(gulp.dest('build/')); 
    };
};