const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

gulp.task('default', ['css', 'javascript'], function(){
	browserSync.init({
		server: "./app"
	});

	gulp.watch('app/js/*.js', ['javascript']).on('change', browserSync.reload);
	gulp.watch('scss/**/*.scss', ['css']);
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch("./*.html", ['html']);
});

gulp.task('html', function() {
	return gulp.src('./*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('app'));
});

gulp.task('images', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/img'));
});

gulp.task('javascript', function(){
	gulp.src('app/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('app/js/dist'));
});

gulp.task('css', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		// .pipe(cssnano())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});