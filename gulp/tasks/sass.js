/**
 * import dependencies
 */
var autoprefixer = require('gulp-autoprefixer'),
	gulp = require('gulp'),
	plumber = require('gulp-plumber'), 
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');

/**
 * Compile SASS on CSS minified with sourcemap  
 * @return {Object} [gulp task]
 */
module.exports = function() {	      
	gulp.task('sass', function(){
		return gulp.src('./src/sass/**/*.scss')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
			.pipe(sass({
				outputStyle: 'compressed'
			}))
			.on('error', sass.logError)
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./assets/css'));
	});
};