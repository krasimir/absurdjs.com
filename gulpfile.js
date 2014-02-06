var gulp = require('gulp');
var absurd = require('gulp-absurd');
var page = require("./tasks/page");

gulp.task('pages', function() {
	gulp.src('./pages/**/index.js')
	.pipe(page());
});

gulp.task('watchers', function() {
	gulp.watch('pages/**/*.*', ['pages']);
});

gulp.task('default', ['pages', 'watchers']);