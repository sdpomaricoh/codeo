var browserify = require('browserify'),
	buffer = require('vinyl-buffer'),
	gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify');

/**
 * Support to ES6 
 */
module.exports = function() {	
	gulp.task('browserify', function(){
		return browserify('./src/js/main.js')
			.transform('babelify', {presets: ['es2015']})
			.bundle()
			.pipe(plumber())
			.pipe(source('main.bundle.min.js'))
			.pipe(buffer())
			.pipe(uglify())
			.pipe(gulp.dest('./assets/js'));
	});
};
