const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const browserSync = require('browser-sync').create();

// styles
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

// scripts
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug',
        dest: 'build/assets/'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'build/assets/styles/'
    },
    fonts: {
        src: 'src/styles/fonts/*.*',
        dest: 'build/assets/styles/fonts/'
    },
    images: {
        src: 'src/images/*.*',
        dest: 'build/assets/images/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'build/assets/scripts/'
    }
}

// pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({ pretty: true}))
        .pipe(gulp.dest(paths.root));
}

// scss
function styles() {
    return gulp.src('./src/styles/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest));
}

// очистка
function clean() {
    return del(paths.root);
}

// webpack
function scripts() {
    return gulp.src('src/scripts/app.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}

// следим за исходниками, папка src
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch("build/assets/styles/*.css").on('change', browserSync.reload);
}

// следим за build и релоадим браузер
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '**/*.*', browserSync.reload);
}

// просто переносим картинки
function images() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}

// просто переносим шрифты
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}

exports.templates = templates;
exports.styles = styles;
exports.del = del;
exports.images = images;

// протсо работаем
gulp.task('default', gulp.series(
    gulp.parallel(styles, templates, scripts, images, fonts),
    gulp.parallel(watch, server)
));

// контрольная сборка на продакшн
gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, templates, scripts, images, fonts)
));