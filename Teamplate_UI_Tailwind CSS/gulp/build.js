const gulp = require('gulp')

gulp.task('build', gulp.series([
    'clean',
    'vendor',
    'font',
    'image',
    'html-hbs',
    'style',
    'js',
]))
