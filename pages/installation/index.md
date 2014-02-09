# Installation

## Node.js

Install AbsurdJS globally:

	npm install -g absurd

## Client-side port

	<script src="absurd.organic.min.js"></script>
	<script src="absurd.min.js"></script>

> Notice that if you plan to use Organic you should include it<br />before *absurd.min.js*.

# Compilation

## Node.js

### Inline compilation.

Use this approach if you want to integrate AbsurdJS into your Node.js app.

	var Absurd = require("absurd");
	Absurd(function(api) {
	    // use the Absurd's api here
	}).compile(function(err, css) {
	    // do something with the css
	});

### Inline compilation to a file:

	var output = "./css/styles.css";
	Absurd("./css/styles.js").compileFile(output, function(err, css) {
	    // ...
	});

### Compiling through command line interface

	// Outputs the css in the console.
	absurd -s [source file] 

	// Outputs the css to a file.
	absurd -s [source file] -o [output file]

	// Outputs the css to a file and watching 
	// specific directory. If some of the files 
	// there is changed a compilation is fired.
	absurd -s [source file] -o [output file] -w [directory]

	// Minify the CSS
	absurd -s [source file] -m true

	// Preprocessing html
	absurd -s [source file] -t html

	// keep the camel case of the properties
	absurd -s [source file] -k true

Here are two examples uses all the options:

	# as css parser
	node ./index.js -s ./tests/data/css/index.js -o ./tests/data/result/res.css -w ./tests/data/**/*.js -m true

	# as html parser 
	node ./index.js -s ./tests/data/html.json -o ./tests/data/result/code.html -w ./tests/data/**/*.json -m true -t html

### Using with [Grunt](http://gruntjs.com/)

The official Grunt plugin is avaiable [here](https://github.com/krasimir/grunt-absurd).

Dependencies for your `package.json`:

	"dependencies": {
	    "grunt": "~0.4.1",
	    "grunt-contrib-watch": "*",
	    "grunt-absurd": "*"
	}

Simple `Gruntfile.js` file:

	module.exports = function(grunt) {

	    grunt.initConfig({
	        absurd: {
	            task: {
	                src: __dirname + "/css/absurd/index.js",
	                dest: 'css/styles.css'
	            }
	        },
	        watch: {
	            css: {
	                files: ['css/absurd/**/*.js'],
	                tasks: ['absurd']
	            }
	        }
	    });

	    grunt.loadNpmTasks('grunt-contrib-watch');
	    grunt.loadNpmTasks('grunt-absurd');

	    // grunt.registerTask('default', ['concat', 'less']);
	    grunt.registerTask('default', ['absurd', 'watch']);

	}

### Using with [Gulp](http://gulpjs.com/)

The official Gulp plugin is avaiable [here](https://github.com/krasimir/gulp-absurd).

Dependencies for your `package.json`:

	"dependencies": {
	    "gulp": "~3.5.0",
    	"gulp-absurd": "*"
	}

Simple usage:

	var gulp = require('gulp');
	var absurd = require('./gulp-absurd');

	gulp.task('default', function() {
	    gulp.src('./data/*.js')
	    .pipe(absurd({
	        minify: true
	    }))
	    .pipe(gulp.dest('./result'));
	});

## Client-side

In the browser, AbsurdJS is registered globally as `Absurd` variable.

	var absurd = Absurd();
	absurd.add({
		p: {
			margin: '0 10px 0 0'
		}
	}).compile(function(err, css) {
		console.log(css);
	});

The API is the same. In general, the client-side port of the library has the same capabilities. Only the calls to the files system are not available.