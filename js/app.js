/**
 * @file this file holds the logic for implementing a cat clicker page, where, once you click in a catr picture, a counter above it increments the number of clicks on that picture by 1.
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @see [lesson: FEND Nanodegree / Chapter 4: Front-End Applications / Lesson 1: Changing Expectations](https://classroom.udacity.com/nanodegrees/nd001/parts/e4e4c31c-2348-4382-826f-caac197d6f5f/modules/4db0b091-fc81-40c2-b7f0-a4ded06480e1/lessons/3417188540/concepts/34408790480923)
 *
 * @todo TDD approach to implement the ../js/app.js file, from scratch
 * @todo From what I got, two cat pictures, with their names displayed above each. Think I ll use flexbox or gridCSS to display them responsively, and add their names with figcaptions, but adding the <figcaptions> before the <img> tags
 */

/**
 * @desc Encapsulated the whole code for the tests inside a `setTimeout()` method, with an empty delay, so that the DOM would already have loaded when
 */

setTimeout(function() {
	/**
	 * Generates the DOM
	 *  @function
	 */
	const generate = (() => {

		// Dynamically generates a breakpoint in the <head> tag, at 960px, for displaying the cat images side by side
		const styleTag = document.createElement('style');
		styleTag.innerHTML = '@media screen and (min-width: 960px) {main {flex-direction: row;}.catDiv {width: 40%; display: flex; align-content: space-around;}}';
		document.head.appendChild(styleTag);

		// Dyamically generates the HTML and CSS code, by manipulating the DOM
		const bodyDom = document.querySelector('body');
		const fragment = document.createDocumentFragment();
		const mainDiv = document.createElement('main');
		fragment.appendChild(mainDiv);
		mainDiv.setAttribute("style", "display: flex; justify-content: space-around; flex-wrap: wrap; width: 100%;");
		let catDivs = [];
		let catFigures = [];
		let clickCountField = [];
		for(let i = 0; i < 2; i++) {
			catDivs.push(document.createElement('div'));
			catFigures.push(`<figure><figcaption>Cat ${i+1}</figcaption><img src="images/cat${i+1}.jpg" alt="Cat ${i+1}"/></figure>`);
			mainDiv.appendChild(catDivs[i]);
			mainDiv.children[i].innerHTML = catFigures[i];
			catDivs[i].classList.add('catDiv');
			clickCountField.push(document.createElement('div'));
		}
		bodyDom.appendChild(fragment);
		bodyDom.setAttribute("style", "width: 100%;");
		const imgs = document.querySelectorAll('img');
		imgs.forEach(function(img) {
			img.setAttribute("style", "width: 100%; height: 90%");
		});
		const catNames = document.querySelectorAll('figcaption');
		catNames.forEach(function(name) {
			name.style.textAlign = 'center';
		});

		// Logic for incrementing the clicker count for each cat picture, upon click
		const figures = document.querySelectorAll('figure');
		let cat1ClickCount = 0;
		let cat2ClickCount = 0;
		figures[0].addEventListener("click", () => {
			cat1ClickCount++;
		});
		figures[1].addEventListener("click", () => {
			cat2ClickCount++;
		});
		catDivs[0].insertAdjacentHTML("afterbegin", clickCountField[0].outerHTML);
		catDivs[1].insertAdjacentHTML("afterbegin", clickCountField[1].outerHTML);
		let cat1ClickField = catDivs[0].children[0];
		let cat2ClickField = catDivs[1].children[0];
		cat1ClickField.textContent = cat1ClickCount;
		cat2ClickField.textContent = cat2ClickCount;
	})();
});