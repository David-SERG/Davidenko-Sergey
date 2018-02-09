const gulp = require('gulp'),
    scss = require('gulp-scss');
gulp.task('scss', function () {
    const postcss = require('gulp-postcss'),
        autoprefixer = require('autoprefixer');

    return gulp
        .src('source/styles/**/*.scss')
        .pipe(scss())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest("source/styles"));
});
gulp.task('css', function () {
    const uglifycss = require('gulp-uglifycss'),
        concatCss = require('gulp-concat-css');

    return gulp
        .src('source/styles/*.css')
        .pipe(concatCss("result.css"))
        .pipe(uglifycss())
        .pipe(gulp.dest("./dest"));
});

gulp.task('imgOpt', function () {
    const imageMin = require('gulp-imagemin');
    gulp.src('source/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dest/img'))
});

gulp.task('htmlMove', function () {
    return gulp.src('source/**/*.html')
        .pipe(gulp.dest('dest/'))
});

gulp.task('compressJs', function() {
    const minify = require('gulp-minify');
    gulp.src('source/js/*.js')
        .pipe(minify({
            ext:{
                src:'.min.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['combo.js', 'min.js']
        }))
        .pipe(gulp.dest('source/js'))
});

gulp.task('watch', function () {
    gulp.watch('source/styles/*.scss', ['scss', 'css']);
});
gulp.task('default', ['scss', 'css','imgOpt','htmlMove','compressJs']);

