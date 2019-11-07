module.exports = function (gulp, plugins, rename, cleanCSS) {
    return function () {
        gulp.src('src/sass/styles.scss')
            .pipe(plugins.sass())
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            .pipe(plugins.autoprefixer())
            .pipe(plugins.minifyCss())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('dist/css'));
    };
};