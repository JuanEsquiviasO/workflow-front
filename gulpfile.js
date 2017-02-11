const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: "./app"
	});

	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass'])
});

