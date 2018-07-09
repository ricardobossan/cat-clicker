const gulp = require('gulp');
const bSrc = require('browser-sync').create();
const bSpecRunner = require('browser-sync').create();
const bDocumentation = require('browser-sync').create();
const jsdoc = require('gulp-jsdoc3');

gulp.task('default', ['jsdoc'], () => {
	// Reloads browser
	gulp.watch("*.html").on('change', bSrc.reload);
	gulp.watch("js/*.js").on('change', bSrc.reload);
	gulp.watch("*.html").on('change', bSpecRunner.reload);
	gulp.watch("js/*.js").on('change', bSpecRunner.reload);
	gulp.watch('spec/spec.js').on('change', bSpecRunner.reload);
	gulp.watch("js/*.js").on('change', bDocumentation.reload);
	gulp.watch('spec/spec.js').on('change', bDocumentation.reload);

	/** @tutorial https://scotch.io/tutorials/prevent-errors-from-crashing-gulp-watch*/
	// when saving a watched file, the `jsdoc` task takes needs a second save, after a few seconds, to update the documentation
	gulp.watch("js/*.js", ['jsdoc']);
	gulp.watch('spec/spec.js', ['jsdoc']);

	// Servers
	bSrc.init({
		server: "./",
		port: 3000,
		index: "index.html",
		ui: false

	});
	bSpecRunner.init({
		server: "./",
		port: 8000,
		index: "SpecRunner.html",
		ui: false
	});
	bDocumentation.init({
		server: "./docs/gen",
		port: 8080,
		index: "index.html",
		ui: false
	});
});

// Generates documentation on the `doc` directory
gulp.task('jsdoc', function (cb) {
	gulp.src(['README.md', './js/app.js', './spec/spec.js'], {read: false})
		.pipe(jsdoc(cb));
});