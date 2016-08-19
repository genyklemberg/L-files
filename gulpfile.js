
var gulp = require('gulp'),
    sass = require('gulp-sass') ,
    notify = require("gulp-notify") ,
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    bower = require('gulp-bower');

var config = {
     sassPath: './resources/sass',
     bowerDir: './bower_components' 
}

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});

/*gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/fontawesome/fonts/!**.*') 
        .pipe(gulp.dest('./public/fonts')); 
});*/

/*gulp.task('old-css', function() { 
    return gulp.src(config.sassPath + '/main.scss')
         .pipe(sass({
             style: 'compressed',
             loadPath: [
                 './resources/sass',
                 config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                 config.bowerDir + '/fontawesome/scss',
             ]
         }) 
            .on("error", notify.onError(function (error) {
                 return "Error: " + error.message;
             }))) 
         //.pipe(gulp.dest('public/css')); 
});*/
/**/
gulp.task('minifyCSS', function () {
    console.log('***start autoprefixer');
    return gulp.src('./public/css/main.css')
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(minifyCss()) //minify css
      .pipe(gulp.dest('./public/css'));//save to './public/css' as main.css
});

gulp.task('css', function () {
    gulp.src(config.sassPath + '/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css'));//save to './public/css' as main.css
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
    gulp.watch('./public/css/main.css', ['minifyCSS']);
});

  gulp.task('default', ['bower', 'css']);
