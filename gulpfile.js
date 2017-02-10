const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', function(){
	console.log('Hi world!!!');
});

gulp.task('sass', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'));
});

// gulp.watch('file', ['tarea'])
gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass'])
});

