var gulp = require("gulp"),
    sass = require("gulp-ruby-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    concat = require("gulp-concat"),
    livereload = require("gulp-livereload"),
    del = require('del'),
    runSequence = require('run-sequence'),
    changed = require('gulp-changed');

 var jslibs = [];
 var csslibs = [];

 //Styles
 gulp.task('sass', function(){
 	return sass('source/sass/app.sass', {
 		style: 'expanded',
 		bundleExec: true,
    loadPath: ['bower_components/susy/sass']
 	})
 	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
 	.pipe(gulp.dest('build/css'))
 	.pipe(livereload());
 });

// Scripts
gulp.task('scripts', function(){
  gulp.src('source/js/**/*.js')
  //jshint
  //uglify
  //concat
  .pipe(gulp.dest('build/js'));
});


gulp.task('copy', function(){

	// Copy
	gulp.src(['**','!js','!js/**','!sass','!sass/**'], {cwd: 'source'})
  .pipe(changed('build/'))
	.pipe(gulp.dest('build/'));

	// Copy lib and vendor files
	/*
  // js
  gulp.src(jslibs, {cwd: 'bower_components'})
  .pipe(gulp.dest('build/js/vendor/'));

  //css
  gulp.src(csslibs, {cwd: 'bower_components'})
  .pipe(gulp.dest('build/css/vendor/'));
  */
});

// Watch
gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('source/sass/**/*.sass', ['sass']);
  gulp.watch('source/js/**/*.js', ['scripts']);
  gulp.watch('source/**/*.html', ['copy']);
});

// Clean
gulp.task('clean', function(cb){
	del(['build'], cb);
});

// Build task
gulp.task('build', ['sass','scripts', 'copy']); 

// Default task
gulp.task('default', function(cb){
  runSequence('clean', 'build', cb);
}); 