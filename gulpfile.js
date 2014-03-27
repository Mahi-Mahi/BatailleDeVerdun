/* global require */
/* global process */
"use strict";

var gulp = require('gulp');

var spawn = require('child_process').spawn;
var gutil = require('gulp-util');
var bower = require('gulp-bower');

var autoprefix = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var sass = require('gulp-ruby-sass');

var clean = require('gulp-clean');
var replace = require('gulp-replace');
var fs = require('fs');

// Sass
gulp.task('sass', function() {
	return gulp.src(['app/scss/*.scss'])
		.pipe(sass({
			compass: true
		}))
		.pipe(autoprefix())
		.pipe(csso())
		.pipe(gulp.dest('app/css'));
});

// html
gulp.task('html', function() {
	gulp.src(['app/partials/index.html'])
		.pipe(replace("[home-tmpl]", fs.readFileSync('app/partials/home.html', 'utf8')))
		.pipe(gulp.dest(''));
});

// Bower
gulp.task('bower', function() {
	gulp.src('app/vendor', {
		read: false
	})
		.pipe(clean());
	bower()
		.pipe(gulp.dest('app/vendor/'));
});

// Clean
gulp.task('clean', function() {
	gulp.src(['app/vendor', 'app/css', 'app/data/data.json'], {
		read: false
	})
		.pipe(clean());

});

// data
gulp.task('data', function() {
	gulp.src(['app/data/data.json'])
		.pipe(gulp.dest('data'));
});

// default
gulp.task('default', ['sass', 'data']);

// setup
gulp.task('setup', ['clean', 'bower', 'default']);

// watch
gulp.task('watch', function() {
	gulp.watch('app/scss/*.scss', function() {
		gulp.run('sass');
	});
	gulp.watch('app/partials/*.html', function() {
		gulp.run('html');
	});
});

gulp.task('build', ['setup'], function() {

	gulp.src(['app/**'])
		.pipe(gulp.dest('dist/'));

	gulp.src(['app/**/*.html', 'app/**/*.js', 'app/**/*.css', 'app/.htaccess'])
		.pipe(replace("CACHE_BUST", (new Date()).getTime()))
		.pipe(gulp.dest('dist/'));

});