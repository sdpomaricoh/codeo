/**
 * import dependencies
 */
const browserify = require('browserify'),
	buffer = require('vinyl-buffer'),
	gulp = require('gulp'),
	notify = require('gulp-notify'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps')

/**
 * Support to ES6 
 */
module.exports = function() {	
	gulp.task('browserify', () => {
		return browserify('./src/js/main.js')
			.transform('babelify', {presets: ['es2015']})
			.bundle()
			.on('error', (err) => {
				notify({
			    	'title': 'Compile Error',
			    	'message': err.message
			    })
			})
			.pipe(source('main.bundle.min.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init({loadMaps: true}))
			.pipe(uglify())
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./assets/js'))
	})
}
