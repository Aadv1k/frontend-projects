/*
 * File: gulpfile.js
 * Author: Aadvik<aadv1k@outlook.com>
 * Description: A simple gulp based js and sass setup with browser reload
 * Source: https://gist.github.com/Aadv1k/b5b67161877357fbf5992dd34f0e7143
 * License: GNU Public licence
 * Build: `npm init -y && npm install -D gulp gulp-cli uglify gulp-uglify sass gulp-sass browser-sync`
 */

const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

path = {
  styles: {
    src: "./src/scss/**/*.scss",
    dest: "./dist/styles/",
  },

  scripts: {
    src: "./src/js/**/*.js",
    dest: "./dist/scripts/",
  },
};

function styles() {
  return gulp
    .src(path.styles.src, { sourcemaps: true })
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest(path.styles.dest, { sourcemaps: "." }));
}

function scripts() {
  return gulp
    .src(path.scripts.src, { sourcemaps: true })
    .pipe(uglify())
    .pipe(gulp.dest(path.scripts.dest, { sourcemaps: "." }));
}

function watchFiles(cb) {
  gulp.watch("./dist/*.html", reloadBrowserSync);
  gulp.watch(path.styles.src, gulp.series(styles, reloadBrowserSync));
  gulp.watch(path.scripts.src, gulp.series(scripts, reloadBrowserSync));
  cb();
}

function initBrowserSync(cb) {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
  cb();
}

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function cpHtml() {
  return gulp.src("./index.html").pipe(gulp.dest("./dist"));
}

function cpImg() {
  return gulp.src("./images/*").pipe(gulp.dest("./dist/images/"));
}

exports.watch = gulp.series(
  styles,
  scripts,
  cpHtml,
  cpImg,
  initBrowserSync,
  watchFiles
);
exports.build = gulp.series(styles, scripts, cpHtml, cpImg);
