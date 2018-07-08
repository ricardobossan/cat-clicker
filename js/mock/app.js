/**
 * @file this file holds the logic for implementing a cat clicker page, where, once you click in a catr picture, a counter above it increments the number of clicks on that picture by 1.
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @see [lesson: FEND Nanodegree / Chapter 4: Front-End Applications / Lesson 1: Changing Expectations](https://classroom.udacity.com/nanodegrees/nd001/parts/e4e4c31c-2348-4382-826f-caac197d6f5f/modules/4db0b091-fc81-40c2-b7f0-a4ded06480e1/lessons/3417188540/concepts/34408790480923)
 *
 * @todo From what I got, two cat pictures, with their names displayed above each. Think I ll use flexbox or gridCSS to display them responsively, and add their names with figcaptions, but adding the <figcaptions> before the <img> tags
 * @todo Move app.js to a ../js/mock directory and create a new app.js file in its place, from scratch, to implement TDD
 */

/**
 * Generates the DOM
 *  @function
 */
const generate = (() => {
	const domBody = document.querySelector('body');
	domBody.setAttribute("style", 'margin: auto; width: 100%');
	const fragment = document.createDocumentFragment();
	const mainDiv = document.createElement('main');
	const cat1Div = document.createElement('div');
	const cat2Div = document.createElement('div');
	cat1Div.setAttribute("ID", "cat1DivID");
	cat2Div.setAttribute("ID", "cat2DivID");
	console.log(document.getElementById('cat1DivID'));
	const cat2DivIDDom = document.getElementById('cat2DivID');
	mainDiv.appendChild(cat1Div);
	mainDiv.appendChild(cat2Div);
	console.log(mainDiv);
	mainDiv.setAttribute("style", "display: flex; flex-wrap: wrap; text-align: center; margin-top: 10%");
	mainDiv.setAttribute("ID", "mainID");
	console.log(cat1Div);
	console.log(cat2Div);
	mainDiv.appendChild(cat1Div);
	mainDiv.appendChild(cat2Div);
	cat1Div.innerHTML = '<figure><figcaption>First cat picture</figcaption><img src="images/cat1.jpg" alt="First cat picture" /></figure>';
	cat2Div.innerHTML = '<figure><figcaption>Second cat picture</figcaption><img src="images/cat2.jpg" alt="Second cat picture" /></figure>';
	console.log(cat1Div);
	console.log(cat2Div);
	fragment.appendChild(mainDiv);
	domBody.appendChild(fragment);
	const img = document.querySelector('img');
	img.setAttribute("style", "margin: auto; max-width: 80%; max-height: 80%");
})();
console.log(document.querySelectorAll('figure'));
const cat1ClickCounter = document.createElement('section');
const cat2ClickCounter = document.createElement('section');
/*instructions.setAttribute("style")
*/const instructions = document.createElement('h1');
instructions.textContent = "Click a picture to display it's number of clicks.";
let cat1Clicks = 0;
let cat2Clicks = 0;
const mainDiv = document.getElementById('mainID');
const figure1 = document.getElementById('cat1FigureID');
const figure2 = document.getElementById('cat2FigureID');
mainDiv.insertBefore(instructions, mainDiv.firstChild);
figure1.insertBefore(cat1ClickCounter, figure1.firstChild);
figure2.insertBefore(cat2ClickCounter, figure2.firstChild);
cat1ClickCounter.setAttribute("style", "visibility: hidden;");
cat2ClickCounter.setAttribute("style", "visibility: hidden;");

figure1.addEventListener('click', function() {
	cat1Clicks +=1;
	cat1ClickCounter.textContent = `${cat1Clicks} clicks`;
	cat1ClickCounter.setAttribute("style", "visibility: visible;");
});

figure2.addEventListener('click', function() {
	cat2Clicks +=1;
	cat2ClickCounter.textContent = `${cat2Clicks} clicks`;
	cat2ClickCounter.setAttribute("style", "visibility: visible;");
});
