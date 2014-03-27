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
	return gulp.src(['sources/scss/*.scss'])
		.pipe(sass({
			compass: true
		}))
		.pipe(autoprefix())
		.pipe(csso())
		.pipe(gulp.dest('sources/css'));
});

// html
gulp.task('html', function() {
	gulp.src(['sources/partials/index.html'])
		.pipe(replace("[home-tmpl]", fs.readFileSync('sources/partials/home.html', 'utf8')))
		.pipe(gulp.dest('sources/'));
});

// Bower
gulp.task('bower', function() {
	gulp.src('sources/vendor', {
		read: false
	})
		.pipe(clean());
	bower()
		.pipe(gulp.dest('sources/vendor/'));
});

// Clean
gulp.task('clean', function() {
	gulp.src(['sources/vendor', 'sources/css', 'sources/data/data.json'], {
		read: false
	})
		.pipe(clean());

});

// data
gulp.task('data', function() {
	gulp.src(['sources/data/data.json'])
		.pipe(gulp.dest('data'));
});

// default
gulp.task('default', ['sass', 'data']);

// setup
gulp.task('setup', ['clean', 'bower', 'default']);

// watch
gulp.task('watch', function() {
	gulp.watch('sources/scss/*.scss', function() {
		gulp.run('sass');
	});
	gulp.watch('sources/partials/*.html', function() {
		gulp.run('html');
	});
});

gulp.task('build', ['setup'], function() {

	gulp.src(['sources/**'])
		.pipe(gulp.dest('dist/'));

	gulp.src(['sources/**/*.html', 'sources/**/*.js', 'sources/**/*.css', 'sources/.htaccess'])
		.pipe(replace("CACHE_BUST", (new Date()).getTime()))
		.pipe(gulp.dest('dist/'));

});