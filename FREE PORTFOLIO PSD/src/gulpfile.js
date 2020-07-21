let gulp = require('gulp'),
    sass = require('gulp-sass'),
    pugs = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');

gulp.task('scss', function() {
    return gulp.src('scss/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBowserslist: ['last 8 versions']
        }))
        .pipe(gulp.dest('../build/css/'))
});

gulp.task('pug', function() {
    return gulp.src('pug/index.pug')
        .pipe(pugs())
        .pipe(gulp.dest('../build/'))
});


gulp.task('components', function() {
    return gulp.src('scss/components/*.scss')
        .pipe(concat('_components.scss'))
        .pipe(gulp.dest('scss/'));
})
gulp.task('sections', function() {
    return gulp.src('scss/sections/*.scss')
        .pipe(concat('_sections.scss'))

    .pipe(gulp.dest('scss/'));
})

gulp.task('watch', function() {
    gulp.watch('pug/**/*.pug', gulp.parallel('pug'));
    gulp.watch('scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('scss/sections/*.scss', gulp.parallel('sections'))
    gulp.watch('scss/components/*.scss', gulp.parallel('components'));
});

gulp.task('default', gulp.parallel('watch'));