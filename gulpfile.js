var browserSync = require('browser-sync').create(),
	reload = browserSync.reload

/**
 * Load tasks form ./gulp/tasks
 */
var gulp = require('./gulp')([
	'analyze',
	'sass',
	'browserify',
])

gulp.task('build', ['sass','analyze','browserify']);

gulp.task('watch',['build'], () => {
	browserSync.init({
		proxy: 'localhost:2368'
	});
	gulp.watch('**/*.hbs').on('change', reload);
	gulp.watch('./src/sass/**/*.scss',['sass']).on('change', reload);
	gulp.watch('./src/js/*.js',['browserify']).on('change', reload);
});

gulp.task('default',['watch']);