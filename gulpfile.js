'use strict';

const gulp = require('gulp');
const fs = require('fs');

fs.readdirSync('./gulp')
    .filter((file) => (/\.(js|coffee)$/i).test(file))
    .map((file) => require('./gulp/' + file));

gulp.task('default', ['clean', 'uglify'], () => gulp.start('build'));
