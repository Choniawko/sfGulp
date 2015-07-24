var gulp       = require('gulp');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS  = require('gulp-minify-css');
var util       = require('gulp-util');
var gulpif     = require('gulp-if');

console.log(util.env.production);

var config     = {
	assetsDir: 'app/Resources/public',
	sassPattern: 'sass/**/*.scss',
	production: !!util.env.production,
	sourceMaps: !util.env.production
}

gulp.task('sass', function() {
	gulp.src(config.assetsDir+'/'+config.sassPattern)
	    .pipe(gulpif(config.sourceMaps, sourcemaps.init()))
	    .pipe(sourcemaps.init())
	    .pipe(sass())
	    .pipe(config.production ? minifyCSS() : util.noop())
	    .pipe(gulpif(config.sourceMaps, sourcemaps.write('.')))
	    .pipe(gulp.dest('web/css'));
});

gulp.task('watch', function(){
	gulp.watch(config.assetsDir+'/'+config.sassPattern, ['sass']);
})

gulp.task('default', ['sass', 'watch']);

