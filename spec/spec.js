/**
 * @file This file has tests for the app.js file.
 *
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @todo Trabalhar em teste de line 43
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
describe('This suite contains all the tests, to ensure the DOM is loaded, before running them', () => {
	beforeEach(() => {
		document.addEventListener('DOMContentLoaded', () => {
			console.log(document.querySelector('body'));
		});
	});
	describe('generates two cat pictures, by', () => {
		const mainDiv = document.createElement('main');
		let catDivs = [];
		for(let i = 0; i < 2; i++) {
			catDivs.push(document.createElement('div'));
			mainDiv.appendChild(catDivs[i]);
		}
		it('creating a mainDiv', () => {
			expect(mainDiv.outerHTML).toContain('<main>');
		});
		it('creating two divs inside the mainDiv', () => {
			expect(mainDiv.firstChild.outerHTML).toContain('<div>');
			expect(mainDiv.lastChild.outerHTML).toContain('<div>');
		});
		it('making each div contain a <figure> for each cat pic', () => {
			expect(mainDiv.firstChild.outerHTML).toContain('<figure>');
			expect(mainDiv.lastChild.outerHTML).toContain('<figure>');
		});
		it('each <figure> should have inside, in this order, a <figcaption>, displaying the that cat\'s name, and an <img src="" alt="">');
		it('creating a document fragment');
		it('attaching the document fragment in the body');
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
		it('above each cat\'s picture <figcaption>');
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