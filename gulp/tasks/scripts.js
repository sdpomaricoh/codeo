/**
 * import dependencies
 */
var concat = require('gulp-concat'),
	gulp = require('gulp'),
	plumber = require('gulp-plumber'), 
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps');

/**
 * concatenate and minify javascripts files
 * @return {Object} [gulp task]
 */
module.exports = function() {
	gulp.task('scripts', function(){
		return gulp.src('./src/js/**/*.js')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(concat('main.bundle.min.js'))
			.pipe(uglify())
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./assets/js'));
	});
};