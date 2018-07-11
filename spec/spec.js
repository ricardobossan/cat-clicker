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
 * @desc Encapsulated the whole code for the tests inside a `setTimeout()` method, with an empty delay, so that the DOM would already have loaded when
 */
setTimeout(function() {
	(function() {
		describe('All code to be developed will be put in this suite, which will contain all the others', () => {
			const styleTag = document.createElement('style');
			styleTag.innerHTML = '@media screen and (min-width: 960px) {main {flex-direction: row;}.catDiv {width: 40%; display: flex; align-content: space-around;}}';
			document.head.appendChild(styleTag);
			const bodyDom = document.querySelector('body');
			const fragment = document.createDocumentFragment();
			const mainDiv = document.createElement('main');
			fragment.appendChild(mainDiv);
			mainDiv.setAttribute("style", "display: flex; justify-content: space-around; flex-wrap: wrap; width: 100%;");
			let catDivs = [];
			let catFigures = [];
			for(let i = 0; i < 2; i++) {
				catDivs.push(document.createElement('div'));
				catFigures.push(`<figure><figcaption>Cat ${i+1}</figcaption><img src="images/cat${i+1}.jpg" alt="Cat ${i+1}"/></figure>`);
				mainDiv.appendChild(catDivs[i]);
				mainDiv.children[i].innerHTML = catFigures[i];
				catDivs[i].classList.add('catDiv');
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
			describe('generates two cat pictures, by', () => {
				it('creating a mainDiv', () => {
					expect(mainDiv.outerHTML).toContain('main');
				});
				it('creating two divs inside the mainDiv', () => {
					expect(mainDiv.children[0].outerHTML).toContain('<div');
					expect(mainDiv.children[1].outerHTML).toContain('<div');
				});
				it('making each div contain a <figure> for each cat pic', () => {
					expect(mainDiv.children[0].outerHTML).toContain('<figure');
					expect(mainDiv.children[1].outerHTML).toContain('<figure');
				});
				it('each <figure> should have inside, in this order, a <figcaption>, displaying the that cat\'s name, and an <img src="" alt="">', () => {
					expect(mainDiv.children[0].children[0].firstChild.outerHTML).toContain('<figcaption');
					expect(mainDiv.children[1].children[0].firstChild.outerHTML).toContain('<figcaption');
					expect(mainDiv.children[0].children[0].lastChild.outerHTML).toContain('<img');
					expect(mainDiv.children[1].children[0].lastChild.outerHTML).toContain('<img');
					expect(catNames[0,1].style.textAlign).toBe('center');
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
					expect(mainDiv.style.flexWrap).toBe('wrap');
					expect(document.querySelectorAll('img')[0,1].style.height).toBe('90%');
				});
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