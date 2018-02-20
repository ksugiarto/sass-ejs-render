var gulp = require("gulp")
var ejs = require("gulp-ejs")
var sass = require('gulp-sass')
var rename = require('gulp-rename')

gulp.task('default', ['ejs', 'sass'])

gulp.task('ejs', function() {
  return gulp.src("./sass/_colors.scss.ejs")
    .pipe(ejs({
      primaryColor: "#475669",
      secondaryColor: "#25B9AE"
    }))
    .pipe(rename('_colors.scss'))
    .pipe(gulp.dest("./sass")
  )
});

gulp.task('sass', ['ejs'], function() {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./stylesheets'));
});

// gulp.task('css', ['sass'], function () {
//   return gulp.src('./*.scss')
//     .pipe(sass({ includePaths : ['./'] }))
//     .pipe(rename('style.css'))
//     .pipe(gulp.dest('./'));
// });

// gulp.task('sass:watch', function () {
  // gulp.watch('./*.scss', ['css']);
// });
