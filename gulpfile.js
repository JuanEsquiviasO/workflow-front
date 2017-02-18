const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: "./app"
	});

	gulp.watch('app/js/*.js', ['compress']);
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('optimize', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/img'))
);

gulp.task('compress', function(cb){
	pump([
		gulp.src('app/js/*.js'),
		uglify(),
		gulp.dest('app/js/dist')
	 ],
	 cb
	);
});

gulp.task('sass', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

