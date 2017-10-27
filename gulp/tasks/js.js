/**
 * import dependencies
 */
var browserSync = require('browser-sync').create(),
	gulp = require('gulp'),
	plumber = require('gulp-plumber'), 
	uglify = require('gulp-uglify');

/**
 * concatenate and minify javascripts files
 * @return {Object} [gulp task]
 */
module.exports = function() {
	gulp.task('js', function(){
		return gulp.src('./src/js/**/*.js')
			.pipe(plumber())
			.pipe(uglify())
			.pipe(gulp.dest('./assets/js'))
			.pipe(browserSync.stream());
	});
};