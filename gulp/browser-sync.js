module.exports = function(gulp, plugins) {

    return function() {

        plugins.browserSync.init({
            port: 8080
        });
    };
};