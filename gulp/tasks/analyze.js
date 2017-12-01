/**
 * import dependencies
 */
const eslint = require('gulp-eslint'),
	gulp = require('gulp'),
	notify = require('gulp-notify')

/**
 * validate code on eslint validator
 * @return {Object} [gulp task]
 */
module.exports = () => {	
	gulp.task('analyze', () => {
		return gulp.src([
			'src/**/*.js',
			'gulp/**/*.js'
		]).pipe(eslint())
			.pipe(eslint.format())
			.pipe(eslint.failAfterError())
			.on('error', notify.onError({
				title: 'Validation', 
				message: 'You have errors in your code',
				sound: true 
			}))
	})
}
