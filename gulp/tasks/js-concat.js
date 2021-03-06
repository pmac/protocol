const gulp = require('gulp');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const handleErrors = require('../utils/handleErrors');
const config = require('../config').concatJS;
const merge = require('merge-stream');

// Concatenate main Protocol & docs JS files.
gulp.task('js:concat', () => {
    let tasks = [];

    Object.keys(config).forEach((key) => {
        let val = config[key];
        tasks.push(gulp.src(val.src)
            .pipe(plumber({ errorHandler: handleErrors }))
            .pipe(concat(key + '.js'))
            .pipe(gulp.dest(val.dest)));
    });

    return merge(tasks);
});
