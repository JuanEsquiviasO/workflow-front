const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', function(){
	console.log('Hi world!!!');
});

gulp.task('sass', function(){
	return gulp.src('scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'));
});