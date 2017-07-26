const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const nunjucksRender = require('gulp-nunjucks-render');

// Compiling nunjucks files, copying to dist

gulp.task('njk', () => {
  return gulp.src('src/templates/layouts/base.njk')
    .pipe(nunjucksRender({
      path: ['src/templates/']
    }))
		.pipe(rename('index.html'))
    .pipe(gulp.dest('dist'));
});

// Browser-sync

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task('devel', ['njk', 'browser-sync']);

/* TODO

- live reload with wathers

*/
