/**
 * @file This file has tests for the app.js file.
 *
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @todo The application should display two cats. Each cat includes: a) the cat's name; b) a picture of the cat; c) text showing the number of clicks.
 * @todo The specifics of the layout do not matter, so style it however you'd like.
 * @todo The number of clicks should increment when the cat picture is clicked.
 */

/**
 * @desc Encapsulated the whole code for the tests inside a `setTimeout()` method, so that the dom would already have loaded when
 */
setTimeout(function() {
	(function() {
		describe('All code to be developed will be put in this suite, which will contain all the others', () => {
			console.log(document.querySelector('body'));
			const mainDiv = document.createElement('main');
			mainDiv.setAttribute("style", "display: flex; flex-direction: column; flex-wrap: wrap; width: 100%;");
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
			const bodyDom = document.querySelector('body');
			bodyDom.setAttribute("style", "width: 100%;");
			bodyDom.appendChild(fragment);
			console.log(document.querySelector('main'));
			/*
			for(let j = 0; j <= 1; j++){
				document.querySelectorAll('figure').setAttribute("style", "width: 80%;");
			}
			*/
			describe('generates two cat pictures, by', () => {
				it('creating a mainDiv', () => {
					expect(mainDiv.outerHTML).toContain('main');
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
			describe('piles the cat pictures on top of each other,', () => {
				it('using CSS grid or flexbox', () => {
					expect(document.querySelector('body').style.width).toEqual('100%');
					expect(mainDiv.style.width).toBe('100%');
					expect(mainDiv.style.display).toBe('flex');
					expect(mainDiv.style.flexDirection).toBe('column');
					expect(mainDiv.style.flexWrap).toBe('wrap');
					expect(document.querySelectorAll('figure').style.width).toBe('80%');
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
		});

	})();
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