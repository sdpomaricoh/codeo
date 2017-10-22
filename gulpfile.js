/**
 * Load tasks form ./gulp/tasks
 */
var gulp = require('./gulp')([
	'analyze',
	'css',
	'reload',
	'sass',
	'scripts',
]);

gulp.task('build',['sass','scripts','css']);

gulp.task('watch',['build'], function(){
	gulp.watch('./src/sass/**/*.scss',['sass']);
	gulp.watch('./src/js/**/*.js',['scripts']);
})

gulp.task('default',['analyze','reload','watch']);