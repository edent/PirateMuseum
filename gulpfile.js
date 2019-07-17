var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var browsersync = require('browser-sync').create();

var paths = {
  src: ['./src/**', '!./src/**/*.zip'],
  dist: './dist'
}

// Watch the src directory for changes, and rebuild if anything changes
gulp.task('watch', ['build'], function () {
  gulp.watch(paths.src, ['build']);
});


// Copy files from src to dist
gulp.task('build', function () {
  return gulp.src(paths.src)
    .pipe(gulp.dest(paths.dist));
});

// Start a server to view the files in dist
gulp.task('serve', ['watch'], function () {
  browsersync.init({
    files: [paths.dist + '/**'],
    server: {
      baseDir: paths.dist
    }
  })
  gulp.watch(paths.dist, browsersync.reload);
});

// Deploy dist to gh-pages
gulp.task('deploy', ['build'], function () {
  return gulp.src(paths.dist)
    .pipe(deploy());
});

// Default task: serve
gulp.task('default', ['serve']);
