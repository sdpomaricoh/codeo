/**
 * import dependencies
 */
var browserSync = require('browser-sync').create(),
	gulp = require('gulp'),
	reload = browserSync.reload;

/**
 * Create livereload proxy dev server
 * @return {Object} [gulp task]
 */
module.exports = function() {
	gulp.task('reload', function(){
		browserSync.init({
			proxy: 'localhost:2368'
		});
		gulp.watch('**/*.hbs').on('change', reload);
		gulp.watch('./dist/css/**/*.css').on('change', reload);
		gulp.watch('./dist/js/**/*.js').on('change', reload);
	});
};	