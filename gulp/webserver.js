module.exports = function (gulp, plugins, webserver) {

    return function () {

        gulp.src('./')
            .pipe(webserver({
                livereload: true,
                directoryListing: false,
                port: 8080,
                open: false
            }));
    };
};