"use strict";

const {src, dest, watch, parallel, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const inject = require('gulp-inject');
//css
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
//js
const rollup = require('gulp-better-rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const babel = require('rollup-plugin-babel');
const uglify = require('gulp-uglify');
//img
const imagemin = require('gulp-imagemin');
// svg
const svgstore = require('gulp-svgstore');

const path = {
    css: {
        src: 'source/scss/style.scss',
        dest: 'build/css'
    },
    js: {
        src: 'source/js/main.js',
        dest: 'build/js'
    },
    img: {
        src: 'source/img/**/*',
        dest: 'build/img'
    },
    sprite: {
        src: 'source/sprite/**/*',
        dest: 'build/img'
    },
}

const styles = () => {
    return src(path.css.src)
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest(path.css.dest))
        .pipe(browserSync.stream());
}

const js = () => {
    return src(path.js.src)
        .pipe(sourcemaps.init())
        .pipe(rollup({plugins: [babel()]}, 'umd'))
        .pipe(sourcemaps.write())
        .pipe(dest(path.js.dest))
        .pipe(browserSync.stream());
}

const styles_deploy = () => {
    return src(path.css.src)
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gcmq())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest(path.css.dest))
}

const js_deploy = () => {
    return src(path.js.src)
        .pipe(rollup({plugins: [babel()]}, 'umd'))
        .pipe(uglify())
        .pipe(dest(path.js.dest))
}

const img = () => {
    return src(path.img.src)
        // .pipe(imagemin([
        //   imagemin.optipng({optimizationLevel: 7}),
        //   imagemin.svgo({
        //     plugins: [
        //         {removeViewBox: false},
        //         {cleanupIDs: false}
        //     ]
        //   })
        // ]))
        .pipe(dest(path.img.dest))
}

const sprite = () => {
    const svgs = src(path.sprite.src)
        .pipe(svgstore({ inlineSvg: true }));

    function fileContents (filePath, file) {
        return file.contents.toString();
    }

    return src('build/index.html')
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(dest('build'));
}

const browsersync = () => {
    browserSync.init({
        server: {
            baseDir: 'build/',
        },
        notify: false,
    });
};

const watching = () => {
    watch('source/*.html').on('change', browserSync.reload);
    watch('source/scss/**/*.scss', styles);
    watch('source/js/**/*.js', js);
};

exports.styles = styles;
exports.styles_deploy = styles_deploy;
exports.js = js;
exports.js_deploy = js_deploy;
exports.img = img;
exports.sprite = sprite;

exports.serve = series(parallel(browsersync, watching));
exports.deploy = series(styles_deploy, js_deploy);
