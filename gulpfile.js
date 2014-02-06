var gulp = require('gulp');
var absurd = require('gulp-absurd');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var page = require("./tasks/page");

gulp.task('pages', function() {
	gulp.src('./pages/**/index.js')
	.pipe(page());
});

gulp.task('js', function() {
	gulp.src('./src/js/**/*.js')
	.pipe(uglify())
	.pipe(concat('scripts.js'))
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(gulp.dest('./public/'))
});

gulp.task('css', function() {
	gulp.src('./src/css/styles.css')
    .pipe(absurd({
        minify: true
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('watchers', function() {
	gulp.watch('pages/**/*.*', ['pages']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/css/**/*.*', ['css']);
});

gulp.task('default', ['pages', 'js', 'css', 'watchers']);