/**
 * @file This file has tests for the app.js file.
 *
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 */

/**
 *@func returns variable displayCount to _0_, and it's visibility to _hidden_
 */
const resetDisplayCount = () => {
	displayCount.forEach(function(displayed) {
		displayed.style.visibility = 'hidden';
		displayed.textContent = '0 clicks';
	});
};

/**
 * @desc Encapsulated the whole code for the tests inside a `setTimeout()` method, with an empty delay, so that the DOM would already have loaded when
 */
setTimeout(function() {
	(function() {
		describe('All code to be developed will be put in this suite, which will contain all the others', () => {

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

			describe('generates five cat pictures, by', () => {
				it('creating a mainTag', () => {
					expect(mainTag.outerHTML).toContain('main');
				});
				it('create two divs inside the mainTag', () => {
					expect(mainTag.children[0].outerHTML).toContain('<div');
					expect(mainTag.children[1].outerHTML).toContain('<div');
				});
				it('divide the mainTag by half it\'s width', () => {
					expect(mainTag.children[0].style.width).toEqual(mainTag.style.width/2);
				});
				describe('mainTag.children[0] should be', () => {
					it('sliced in 5 divs', () => {
						expect(mainTag.querySelectorAll('div').length).toEqual(5);
					});
					it('on top of each other, using css grid or flexbox', () => {
						expect(mainTag.children[0].style.display).toBe('flex');
						expect(mainTag.children[0].style.flexWrap).toBe('wrap');
						expect(document.querySelectorAll('img')[0,1,2,3,4].style.height).toBe('80%');
					});
				});
				it('each cat should have the correct <figure> element', () => {
					expect(mainTag.children[0].children[0].outerHTML).toContain(figures[0]);
					expect(mainTag.children[0].children[1].outerHTML).toContain(figures[1]);
					expect(mainTag.children[0].children[2].outerHTML).toContain(figures[2]);
					expect(mainTag.children[0].children[3].outerHTML).toContain(figures[3]);
					expect(mainTag.children[0].children[4].outerHTML).toContain(figures[4]);
				});
				it('each <figure> should have inside, in this order, a <figcaption>, displaying the that cat\'s name, and an <img src="" alt="">', () => {
					expect(mainTag.children[0].children[0].children[1].firstChild.outerHTML).toContain('<figcaption');
					expect(mainTag.children[0].children[0].children[1].lastChild.outerHTML).toContain('<img');
					expect(mainTag.children[0].children[1].children[1].firstChild.outerHTML).toContain('<figcaption');
					expect(mainTag.children[0].children[1].children[1].lastChild.outerHTML).toContain('<img');
					expect(mainTag.children[0].children[2].children[1].firstChild.outerHTML).toContain('<figcaption');
					expect(mainTag.children[0].children[2].children[1].lastChild.outerHTML).toContain('<img');
					expect(mainTag.children[0].children[3].children[1].firstChild.outerHTML).toContain('<figcaption');
					expect(mainTag.children[0].children[3].children[1].lastChild.outerHTML).toContain('<img');
					expect(mainTag.children[0].children[4].children[1].firstChild.outerHTML).toContain('<figcaption');
					expect(mainTag.children[0].children[4].children[1].lastChild.outerHTML).toContain('<img');
					expect(catNames[0,1,2,3,4].style.textAlign).toBe('center');
				});
				it('creating a document fragment', () => {
					expect(fragment.toString()).toBe('[object DocumentFragment]');
				});
				it('attaching the document fragment in the body', () => {
					expect(document.querySelector('main')).not.toBe(null);
				});
			});
			describe('clicking each cat picture', () => {
				it('increases the number of clicks at the counter', () => {
					expect(count1).toBe(0);
					figures[0].click();
					expect(count1).toBe(1);
					figures[0].click();
					expect(count1).toBe(2);
					expect(count2).toBe(0);
					figures[1].click();
					expect(count2).toBe(1);
					figures[1].click();
					expect(count2).toBe(2);
					expect(count3).toBe(0);
					figures[2].click();
					expect(count3).toBe(1);
					figures[2].click();
					expect(count3).toBe(2);
					expect(count4).toBe(0);
					figures[3].click();
					expect(count4).toBe(1);
					figures[3].click();
					expect(count4).toBe(2);
					expect(count5).toBe(0);
					figures[4].click();
					expect(count5).toBe(1);
					figures[4].click();
					expect(count5).toBe(2);

					count1 = 0;
					count2 = 0;
					count3 = 0;
					count4 = 0;
					count5 = 0;

					resetDisplayCount();

/*
					displayCount[0].style.visibility = 'hidden';
					displayCount[1].style.visibility = 'hidden';
					displayCount[2].style.visibility = 'hidden';
					displayCount[3].style.visibility = 'hidden';
					displayCount[4].style.visibility = 'hidden';

					displayCount[0].textContent = '0 clicks';
					displayCount[1].textContent = '0 clicks';
					displayCount[2].textContent = '0 clicks';
					displayCount[3].textContent = '0 clicks';
					displayCount[4].textContent = '0 clicks';
*/				});
				it('displays the number of clicks', () => {
					expect(displayCount[0].textContent).toBe('0 clicks');
					figures[0].click();
					expect(displayCount[0].textContent).toBe('1 clicks');
					expect(displayCount[1].textContent).toBe('0 clicks');
					figures[1].click();
					expect(displayCount[1].textContent).toBe('1 clicks');
					expect(displayCount[2].textContent).toBe('0 clicks');
					figures[2].click();
					expect(displayCount[2].textContent).toBe('1 clicks');
					expect(displayCount[3].textContent).toBe('0 clicks');
					figures[3].click();
					expect(displayCount[3].textContent).toBe('1 clicks');
					expect(displayCount[4].textContent).toBe('0 clicks');
					figures[4].click();
					expect(displayCount[4].textContent).toBe('1 clicks');

					count1 = 0;
					count2 = 0;
					count3 = 0;
					count4 = 0;
					count5 = 0;

					resetDisplayCount();
				});
				it('above each cat\'s picture <figcaption>', () => {
					expect(catDivs[0].children[0].textContent).toBe(`${count1} clicks`);
					expect(catDivs[1].children[0].textContent).toBe(`${count2} clicks`);
					expect(catDivs[2].children[0].textContent).toBe(`${count2} clicks`);
					expect(catDivs[3].children[0].textContent).toBe(`${count2} clicks`);
					expect(catDivs[4].children[0].textContent).toBe(`${count2} clicks`);
				});
				it('except when the number of clicks is zero, when the counter field is hidden', () => {
					expect(displayCount[0].style.visibility).toBe('hidden');
					expect(displayCount[1].style.visibility).toBe('hidden');
					expect(displayCount[2].style.visibility).toBe('hidden');
					expect(displayCount[3].style.visibility).toBe('hidden');
					expect(displayCount[4].style.visibility).toBe('hidden');
					figures[0].click();
					figures[1].click();
					figures[2].click();
					figures[3].click();
					figures[4].click();
					expect(displayCount[0].style.visibility).toBe('');
					expect(displayCount[1].style.visibility).toBe('');
					expect(displayCount[3].style.visibility).toBe('');
					expect(displayCount[4].style.visibility).toBe('');
					expect(displayCount[5].style.visibility).toBe('');

					count1 = 0;
					count2 = 0;
					count3 = 0;
					count4 = 0;
					count5 = 0;

					resetDisplayCount();
				});
			});
		});
	})();
});