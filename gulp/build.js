const gulp = require('gulp');
const path = require('path');

const del = require('del');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const usemin = require('gulp-usemin');
const minifyHtml = require('gulp-minify-html');
const minifyCss = require('gulp-minify-css');
const rev = require('gulp-rev');

const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('clean', () => del(['dist/**/*']));
// gulp.task('clean', () => $.del([path], {}))

gulp.task('uglify', function () {
    // return gulp.src('src/**/*.js') //src 폴더 아래의 모든 js 파일을
    return gulp.src('src/*.js') //src 폴더 아래의 모든 js 파일을
        .pipe(concat('main.min.js')) //main.min.js 라는 파일명로 모두 병합한 뒤에,
        .pipe(uglify()) //minify 해서
        .pipe(gulp.dest('dist')); //dist 폴더에 저장
});

// gulp.task('minifycss', function () {
//     return gulp.src('src/assets/main.css') //css 폴더의 main.css 파일을
//         .pipe(concat('main.min.css')) //main.min.js 라는 파일명로 모두 병합한 뒤에,
//         .pipe(minifyCss()) //포함되어 있는 @import를 분석해서 하나의 파일로 병합하고 minify 해서
//         .pipe(gulp.dest('dist'));
// });


gulp.task(
    'build',
    () => gulp.src('src/*.html')
        .pipe(usemin({
            html: [minifyHtml({ empty: true, conditionals: true })],
            js: [uglify(), 'concat', rev()]
        }))
        .pipe(gulp.dest('dist'))
);
