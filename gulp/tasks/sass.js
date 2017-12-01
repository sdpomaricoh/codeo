/**
 * import dependencies
 */
const autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create(),
	gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	plumber = require('gulp-plumber'), 
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps')

/**
 * Compile SASS on CSS minified with sourcemap  
 * @return {Object} [gulp task]
 */
module.exports = function() {

	const processor = [
		autoprefixer
	]

	gulp.task('sass', () => {
		return gulp.src('./src/sass/**/*.scss')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(sass({
				outputStyle: 'compressed'
			}))
			.on('error', sass.logError)
			.pipe(postcss(processor))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./assets/css'))
			.pipe(browserSync.stream())
	})
}
