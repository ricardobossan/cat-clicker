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

	// Dyamically generates the HTML and CSS code, by manipulating the DOM
	const bodyDom = document.querySelector('body');
	const fragment = document.createDocumentFragment();
	const mainTag = document.createElement('main');
	fragment.appendChild(mainTag);
	mainTag.setAttribute("style", "display: flex; flex-direction: row; justify-content: space-around; width: 100%;");
	const leftDiv = document.createElement('div');
	const rightDiv = document.createElement('div');
	mainTag.appendChild(leftDiv);
	mainTag.appendChild(rightDiv);
	leftDiv.setAttribute("style", `overflow: scroll; display: flex; flex-direction: column; width: ${parseInt(mainTag.style.width)*0.32}%; height: 100vh; background-color: silver;`);
	console.log(leftDiv.style.width);
	rightDiv.setAttribute("style", `display: flex; justify-content: center; align-items: center; width: ${parseInt(mainTag.style.width)*0.68}%; height: 100vh; background-color: silver;`);
	console.log(rightDiv.style.width);
	let catDivs = [];
	let catFigures = [];
	for(let i = 0; i < 5; i++) {
		catDivs.push(document.createElement('div'));
		catFigures.push(`<figure style="margin-top: 3px"><figcaption>Cat ${i+1}</figcaption><img src="images/cat${i+1}.jpg" alt="Cat ${i+1}"/></figure>`);
		leftDiv.appendChild(catDivs[i]);
		catDivs[i].classList.add('catDiv');
		catDivs[i].setAttribute("style", "margin: auto; width: 60%");
		leftDiv.children[i].innerHTML = catFigures[i];
	}

	// Display selected cat picture
	const displayCatBox = document.createElement('div');
	displayCatBox.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center; width: 80%; height: 80%; border: 1px red; background-color: yellow; text-align: center");
	displayCatBox.textContent = "Click on a cat name to display its picture!";
	rightDiv.appendChild(displayCatBox);

	bodyDom.appendChild(fragment);
	bodyDom.setAttribute("style", "width: 100%; margin: 0");
	const imgs = document.querySelectorAll('img');
	imgs.forEach(function(img) {
		img.setAttribute("style", "width: 100%; height: 80%");
	});
	const catNames = document.querySelectorAll('figcaption');
	catNames.forEach(function(name) {
		name.style.textAlign = 'center';
	});

	// Logic for count clicks on each cat picture, upon click
	const catDiv = document.querySelectorAll('.catDiv');
	const displayCatFigure = document.createElement('figure');
	const displayCatClicks = document.createElement('div');
	let selectedCatNumber = 0;
	/*
	 * @func displays selected cat name, image and number of clicks, when called inside an event listener
	 */
	const catCaller = (i) => {
		displayCatFigure.setAttribute("style", "max-width: 70%");
		displayCatFigure.innerHTML = `<figcaption>Cat ${selectedCatNumber}</figcaption><img style="max-width: 100%" src="images/cat${selectedCatNumber}.jpg" alt="Cat ${selectedCatNumber}" />`;
		displayCatClicks.textContent = `This cat was clicked ${clickCount[i]} times`;
		displayCatBox.appendChild(displayCatFigure);
		displayCatBox.appendChild(displayCatClicks);
	};

	let clickCount = [0,0,0,0,0];

	catDiv.forEach(function(cat, index){
		cat.addEventListener("click", () => {
			clickCount[index]++;
			selectedCatNumber = index + 1;
			catCaller(index);
		});
	});
})();
/*});*/