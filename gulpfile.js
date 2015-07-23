var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
	gulp.src('app/Resources/public/sass/**/*.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('web/css'));
});

