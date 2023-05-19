const gulp = require('gulp');
const path = require('path');

const del = require('del');
const uglify = require('gulp-uglify');
const usemin = require('gulp-usemin');
const minifyHtml = require('gulp-minify-html');
const rev = require('gulp-rev');

const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('clean', () => del(['dist/**/*']));

// gulp.task('clean', () => $.del([path], {}))

gulp.task(
    'build',
    () => gulp.src('src/*.html')
        .pipe(usemin({
            html: [minifyHtml({ empty: true, conditionals: true })],
            js: [uglify(), 'concat', rev()]
        }))
        .pipe(gulp.dest('dist'))
);
