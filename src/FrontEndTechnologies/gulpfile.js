/// <binding AfterBuild='src2dist, uglify' Clean='clean' />
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    rimraf = require("rimraf");

/**** Paths ****/
var paths = { webroot: './wwwroot/' };
paths.app = paths.webroot + 'app/';
paths.shared = paths.app + 'shared/';
paths.dist = paths.app + 'dist/';


/**** Clean ****/
gulp.task("clean:js", function (cb) {
    return rimraf(paths.dist + '*', cb);
});

gulp.task("clean", ["clean:js"]);


/**** Copy ****/
gulp.task('src2dist', ["clean"], function () {
    return gulp.src([paths.shared + '**/*.js'])
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.dist));
});


/**** Uglify ****/
gulp.task('uglify', ['src2dist'], function () {
    return gulp.src([paths.dist + '**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist));
});