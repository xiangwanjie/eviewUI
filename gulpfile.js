const gulp = require('gulp');  // 打包样式
const sass = require('gulp-sass'); // sass -> css
const minifyCSS = require('gulp-minify-css'); // 压缩css

gulp.task('sass', async function () { 
  return gulp.src('packages/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('lib/css'));
})