const gulp = require('gulp');
const bSrc = require('browser-sync').create();
const bSpecRunner = require('browser-sync').create();
const jsdoc = require('gulp-jsdoc3');

gulp.task('default', () => {
	// Reloads browser
	gulp.watch("*.html").on('change', bSrc.reload);
	gulp.watch("js/*.js").on('change', bSrc.reload);
	gulp.watch("*.html").on('change', bSpecRunner.reload);
	gulp.watch("js/*.js").on('change', bSpecRunner.reload);
	gulp.watch('spec/spec.js').on('change', bSpecRunner.reload);

	// Servers
	bSrc.init({
		server: "./",
		port: 3000,
		index: "index.html",
		ui: false

	});
	bSpecRunner.init({
		server: "./",
		port: 8080,
		index: "spec/SpecRunner.html",
		ui: false
	});
});

// Generates documentation on the `doc` directory
gulp.task('jsdoc', function (cb) {
	gulp.src(['./README.md', './js/**/*.js', './spec/**/*.js'], {read: false})
		.pipe(jsdoc(cb));
});