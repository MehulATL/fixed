var gulp    = require('gulp'),
    stylus  = require('gulp-stylus');
    notify  = require('gulp-notify');
    concat  = require('gulp-concat');

var paths = {
  stylus: 'www/stylus/**.styl',
  css: 'www/css'
};

gulp.task('stylus', function(){
  gulp.src(paths.stylus)
    .pipe(stylus())
    .pipe(gulp.dest(paths.css))
    .pipe(notify({message: 'Stylus Compiled!'}));
});

gulp.task('build', ['stylus']);

gulp.task('watch', function(){
  gulp.watch(paths.stylus, ['build']);
});

gulp.task('default', ['build' ,'watch']);