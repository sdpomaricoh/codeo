var browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

/**
 * Load tasks form ./gulp/tasks
 */
var gulp = require('./gulp')([
	'analyze',
	'css',
	'js',
	'sass',
	'scripts',
]);

gulp.task('build',['sass','scripts','css','js']);

gulp.task('watch',['build'], function(){
	browserSync.init({
		proxy: 'localhost:2368'
	});
	gulp.watch('**/*.hbs').on('change', reload);
	gulp.watch('./src/sass/**/*.scss',['sass']).on('change', reload);
	gulp.watch('./src/vendors/js/*.js',['scripts']).on('change', reload);
	gulp.watch('./src/vendors/css/*.css',['css']).on('change', reload);
	gulp.watch('./src/js/**/*.js',['js']).on('change', reload);
});

gulp.task('default',['watch']);