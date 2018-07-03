<!--
@todo:
* document build for this project, thinking about using it as a model later
** pass all links to ID tags, referenced in the end of this README file
** create, configure the gulpfile.js and document those steps
** don't creaste a dist task, because there's no need for a dist folder, as this is just a training project for
-->

# Project: Cat Clicker

## How to Run the App

Click on a picture of a cat display the number of clicks above the respective image.

## Building The Project With Node.js and a Building Tool

#### Node.js and Npm (Node Package Manager)

Install [Node.js](https://nodejs.org/en/).

Install the latest version of [npm](https://www.npmjs.com/get-npm) via command line:

```
$ npm install npm@latest -g
```

To initialize a node.js project, run this at the top-level directory of your project:

```
$ npm init
```
Answer the questions that pop up on the terminal, to create a basic `package.json` file.

Install the task runner [Gulp.js](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/getting-started.md) globally:

```
$ npm install --global gulp-cli
```
 Install locally the npm packages I'm going to use for this project (including the Gulp package), in your devDependencies:

* [Gulp](https://www.npmjs.com/package/gulp)
* [Browsersync](https://www.npmjs.com/package/browser-sync) (to create a server and reload the browser automaticaly)
* [Jasmine](https://jasmine.github.io/pages/getting_started.html) (tester)

```
$ npm --install --save-dev gulp browser-sync jasmine
```

#### Jasmine Configuration

To create a `spec` directory, containing a `suport` directory, with a `jasmine.json` file inside, for general configuration purporses, run at the top level directory of your project:

```
$ node node_modules/jasmine/bin/jasmine init
```

Create a `spec.js` file, for your test suites.

Create a `SpecRunner.html`, to display the test results on your browser.

#### Gulp Configuration

Create a `gulpfile.js` at the top level of your project directory, to require packages and configure tasks.

Open the `gulpfile.js` in your IDE.

Require the Gulp and Browsersync packages.

```
const gulp = require('gulp');
const bSrc = require('browser-sync').create();
const bSpecRunner = require('browser-sync').create();
```

Then set it's default task to watch the js files in the `src` directory:

Create the `default` task, with servers for the the `index.html` the `spec/SpecRunner.html` files:

```
gulp.task('default', () => {
	// Reloads browser
	gulp.watch("*.html").on('change', bSrc.reload);
	gulp.watch("js/*.js").on('change', bSrc.reload);
	gulp.watch("*.html").on('change', bSpecRunner.reload);
	gulp.watch("js/*.js").on('change', bSpecRunner.reload);
	gulp.watch('js/*.js', [/*'scripts', */'lint']);
	gulp.watch('spec/spec.js').on('change', bSrc.reload);
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
```

#### Install globally the [Eslint](https://www.npmjs.com/package/eslint) linter:

```
$ npm install -g eslint
```

Then move to the `home directory` for your projects and run this command:


```
$ eslint --init
```

Add the enviroments you want to lint. I use this configuration on the section `"env"`, of your `.eslintrc.json` file, on the `home directory`, or on the top level of you project directory

I use this configuration on my `home directory`s `.eslintrc.json` file:

```
{
	"env": {
		"browser": true,
		"es6": true,
		"jasmine": true,
		"amd": true,
		"jquery": true,
		"node": true
    },
}
```

It will create an `eslintrc.json` file, which will contain the configurations for all your projects located at the `home directory`.

If you want to create special eslint configurations for a project, just move to that project's directory run `eslint --init`, to configure a `eslintrc.json` file there.


#### Running The Build Tool

* run the `default` task, to automatically reload the browser window when a js file is modified (upon save). On the command line, enter:

```
$ gulp
```

* When the project is ready, run the `dist` task, to move all non build files to the `dist` directory:

```
$ gulp dist
```


