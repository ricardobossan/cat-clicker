/**
 * @file this file holds the logic for implementing a cat clicker page, where, once you click in a catr picture, a counter above it increments the number of clicks on that picture by 1.
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @see [lesson: FEND Nanodegree / Chapter 4: Front-End Applications / Lesson 1: Changing Expectations](https://classroom.udacity.com/nanodegrees/nd001/parts/e4e4c31c-2348-4382-826f-caac197d6f5f/modules/4db0b091-fc81-40c2-b7f0-a4ded06480e1/lessons/3417188540/concepts/34408790480923)
 */

/**
 * @desc Encapsulated the whole code for the tests inside a `setTimeout()` method, with an empty delay, so that the DOM would already have loaded when
 */

/*setTimeout(function() {
*/	/**
	 * Generates the DOM
	 *  @function
	 */
const generate = (() => {

	// Dynamically generates a breakpoint in the <head> tag, at 960px, for displaying the cat images side by side
	const styleTag = document.createElement('style');
	styleTag.innerHTML = '@media screen and (min-width: 728px) {main {flex-direction: row;}.catDiv {width: 45%; display: flex; flex-direction: column; align-content: space-around;}}';
	document.head.appendChild(styleTag);

	// Dyamically generates the HTML and CSS code, by manipulating the DOM
	const bodyDom = document.querySelector('body');
	const fragment = document.createDocumentFragment();
	const mainTag = document.createElement('main');
	fragment.appendChild(mainTag);
	mainTag.setAttribute("style", "display: flex; justify-content: space-around; flex-wrap: wrap; width: 100%;");
	let catDivs = [];
	let catFigures = [];
	let displayCount = [];
	for(let i = 0; i < 2; i++) {
		catDivs.push(document.createElement('div'));
		displayCount.push(document.createElement('div'));
		displayCount[i].textContent = '0 clicks';
		displayCount[i].setAttribute("style", "text-align: center; visibility: hidden;");
		catFigures.push(`<figure style="margin-top: 3px"><figcaption>Cat ${i+1}</figcaption><img src="images/cat${i+1}.jpg" alt="Cat ${i+1}"/></figure>`);
		mainTag.appendChild(catDivs[i]);
		catDivs[i].classList.add('catDiv');
		mainTag.children[i].innerHTML = catFigures[i];
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

	// Logic for count clicks on each cat picture, upon click
	const figures = document.querySelectorAll('figure');
	let count1 = 0;
	let count2 = 0;
	catDivs[0].insertBefore(displayCount[0], figures[0]);
	catDivs[1].insertBefore(displayCount[1], figures[1]);
	figures[0].addEventListener("click", () => {
		count1++;
		displayCount[0].textContent = `${count1} clicks`;
		displayCount[0].style.visibility = '';
	});
	figures[1].addEventListener("click", () => {
		count2++;
		displayCount[1].textContent = `${count2} clicks`;
		displayCount[1].style.visibility = '';
	});

})();
/*});*/