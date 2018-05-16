var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var sequence = require('run-sequence');

gulp.task('start', function() {
  nodemon({
    watch: 'dist',
    srcipt: 'dist/index.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' },
  });
});

gulp.task('compile', function() {
  return gulp.src('src/**/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['compile']);
});

gulp.task('default', function(callback) {
  sequence(['watch', 'compile'], 'start', callback);
});
