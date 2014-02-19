var gulp = require('gulp');
var absurd = require('gulp-absurd');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var page = require("./tasks/page");
var builds = require("./tasks/builds");

gulp.task('pages', function() {
	gulp.src('./pages/**/*.md')
	.pipe(page());
});

gulp.task('builds', function() {
	gulp.src('./builds/absurd.js')
	.pipe(builds());
});

gulp.task('js', function() {
	gulp.src('./src/js/**/*.js')
	// .pipe(uglify())
	.pipe(concat('scripts.js'))
	// .pipe(jshint())
	// .pipe(jshint.reporter('default'))
	.pipe(gulp.dest('./public/'))
});

gulp.task('css', function() {
	gulp.src('./src/css/styles.js')
    .pipe(absurd({
        minify: false,
        combineSelectors: false
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('watchers', function() {
	gulp.watch(['pages/**/*.md', 'layout.html', 'pages/structure.json'], ['pages']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/css/**/*.*', ['css']);
});

gulp.task('default', ['pages', 'builds', 'js', 'css', 'watchers']);