const gulp = require('gulp');
const uglify = require('gulp-uglify');

// HTML task - copy html files from src to dist
function html() {
  return gulp.src('src/*.html').pipe(gulp.dest('dist'));
}

// JavaScript Task - move to dist and minify
function js() {
  return gulp.src('src/*.js').pipe(uglify()).pipe(gulp.dest('dist'));
}

// Default task
exports.default = gulp.series(html, js);
