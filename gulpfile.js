/**
 * Created by eleonora on 3/24/17.
 */
var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    gulp.src('src/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function(){
    gulp.watch('src/*.scss', ['sass']);
    gulp.watch('src/*.jade', ['jade']);
});