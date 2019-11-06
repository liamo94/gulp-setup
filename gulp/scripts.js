module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('src/js/**/*.js')
            .pipe(plugins.concat('scripts.js'))
            .pipe(plugins.babel({
                presets: ['es2015']
              }))
            .pipe(plugins.uglify({mangle: {toplevel: true}}))
            .pipe(gulp.dest('dist/js'));
    };
};

