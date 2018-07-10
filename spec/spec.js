/**
 * @file This file has tests for the app.js file.
 *
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @todo Implement the the second suite onward, removing the "x" from before the "describe".
 * @todo The application should display two cats. Each cat includes: a) the cat's name; b) a picture of the cat; c) text showing the number of clicks.
 * @todo The specifics of the layout do not matter, so style it however you'd like.
 * @todo The number of clicks should increment when the cat picture is clicked.
 */
/*
If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with elem.addEventListener().

var elem = document.getElementById('my-elem');
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
}, false);
*/
describe('generates two cat pictures, by', () => {
	const mainDiv = document.createElement('main');
	let catDivs = [];
	let catFigures = [];
	for(let i = 0; i < 2; i++) {
		catDivs.push(document.createElement('div'));
		catFigures.push(`<figure><figcaption>cat ${i+1}</figcaption><img src="images/cat${i+1}.jpg" alt="cat ${i+1}"/></figure>`);
		mainDiv.appendChild(catDivs[i]);
		mainDiv.children[i].innerHTML = catFigures[i];
	}
	const fragment = document.createDocumentFragment();
	fragment.appendChild(mainDiv);

	// This listener ensures that the DOM is loaded, in order to be able to append the fragment to the <body>
	document.addEventListener('DOMContentLoaded', () => {
		const bodyDom = document.querySelector('body');
		bodyDom.appendChild(fragment);
	});
	it('creating a mainDiv', () => {
		expect(mainDiv.outerHTML).toContain('<main>');
	});
	it('creating two divs inside the mainDiv', () => {
		expect(mainDiv.children[0].outerHTML).toContain('<div>');
		expect(mainDiv.children[1].outerHTML).toContain('<div>');
	});
	it('making each div contain a <figure> for each cat pic', () => {
		expect(mainDiv.children[0].outerHTML).toContain('<figure>');
		expect(mainDiv.children[1].outerHTML).toContain('<figure>');
	});
	it('each <figure> should have inside, in this order, a <figcaption>, displaying the that cat\'s name, and an <img src="" alt="">', () => {
		expect(mainDiv.children[0].children[0].firstChild.outerHTML).toContain('<figcaption>');
		expect(mainDiv.children[1].children[0].firstChild.outerHTML).toContain('<figcaption>');
		expect(mainDiv.children[0].children[0].lastChild.outerHTML).toContain('<img');
		expect(mainDiv.children[1].children[0].lastChild.outerHTML).toContain('<img');
	});
	it('creating a document fragment', () => {
		expect(fragment.toString()).toBe('[object DocumentFragment]');
	});
	it('attaching the document fragment in the body', () => {
		expect(document.querySelector('main')).not.toBe(null);
	});
});
xdescribe('piles the cat pictures on top of each other,', () => {
	it('using CSS grid or flexbox', () => {
		expect();
	});
	it('when page width < 960px');
	it('but cat pictures are side by side, when >= 960px');
});
xdescribe('clicking each cat picture', () => {
	it('increases the number of clicks at the counter', () => {
		expect();
	});
	it('displays the number of counts', () => {
		expect();
	});
	it('above each cat\'s picture <figcaption>', () => {
		expect();
	});
});

/*		const domBody = document.querySelector('body');
		const mainDiv = document.createElement('main');
		let catDiv = [];
		for(let i = 0; i < 2; i++) {
			catDiv[i] = document.createElement('div');
			mainDiv.appendChild(catDiv[i]);
			catDiv[i].innerHTML = `<figure><figcaption>Cat ${i+1}</figcaption><img src="images/cat${i+1}.jpg" alt="cat ${i+1}" /></figure>`;
		}
		const fragment = document.createDocumentFragment();

		domBody.setAttribute("style", 'margin: auto; width: 100%');

		expect(fragment).not.toBe(undefined);
		expect(domBody).toEqual(document.getElementsByTagName('body')[0]);
		expect(mainDiv.children.length).toEqual(2);
		expect(mainDiv.firstChild.firstChild).not.toBe(undefined);
	});
});
*/