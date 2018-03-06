const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');



gulp.task('default',function(){

    // TODO Gulf Task Write here..

    // eslint
    // gulp.src(["es6/**/*.js","public/es6/**/*.js"])
    //     .pipe(eslint())
    //     .pipe(eslint.format());

    // node.js
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));

    // browser
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));


    // Error Solution ==> cannot find module 'babel-core' ==> https://stackoverflow.com/questions/35215461/error-in-cannot-find-module-babel-core-using-react-js-webpack-and-express-s


});