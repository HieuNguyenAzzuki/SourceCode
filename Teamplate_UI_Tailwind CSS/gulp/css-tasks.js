const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const {argv} = require('yargs')
const config = require('../gulp.config.json')
const sourcemaps = require('gulp-sourcemaps')
const gulpIf = require("gulp-if");
const postcss = require('gulp-postcss')

let directory = argv.output
let mini = argv.mini
if (directory === undefined) {
    directory = config.output
}
if (mini === undefined) {
    mini = config.mini
}
const AUTOPREFIXER_BROWSERS = [
];

gulp.task('style:main', function () {
  const tailwindcss = require('tailwindcss');
  return gulp.src(`src/assets/scss/**/*.scss`).pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`./${directory}/assets/css/`))
    .pipe(postcss([
      tailwindcss('./tailwind.config.js'),
      require('autoprefixer'),
    ]))
    .pipe(concat({ path: 'style.css'}))
    .pipe(gulp.dest(`./${directory}/assets/css/`));
})

gulp.task('style:libs', function(){
    let styles = config.assets.style;
    let paths = []
    styles.forEach((js) => {
        paths.push(js.replace('{directory}', directory))
    })

    return gulp
      .src(paths)
      .pipe(
        sass({
          includePaths: ["./node_modules"],
          outputStyle: "compressed",
        }).on("error", sass.logError)
      )
      .pipe(cleanCSS())
      .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
      .pipe(concat("libs.min.css"))
      .pipe(gulp.dest(`./${directory}/assets/css/`));
})

gulp.task('style', gulp.series('style:libs', 'style:main'));
