/**
 * import dependencies
 */
var autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	sourcemaps = require('gulp-sourcemaps');

/**
 * concatenate and minify css files
 * @return {Object} [gulp task]
 */
module.exports = function() {
	gulp.task('css', function(){
		return gulp.src('./src/vendors/css/**/*.css')
			.pipe(minifycss())
			.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    		.pipe(concat('libs.min.css'))
    		.pipe(gulp.dest('./assets/css'))
    		.pipe(browserSync.stream());
	});
};	