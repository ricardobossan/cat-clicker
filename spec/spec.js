/**
 * @file This file has tests for the app.js file.
 *
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @todo fix tests for this version of the app
 *
 */

/**
 * @desc Encapsulated the whole code for the tests inside a `setTimeout()` method, with an empty delay, so that the DOM would already have loaded when
 */
setTimeout(function() {
	(function() {
		describe('All code to be developed will be put in this suite, which will contain all the others', () => {
			/*
			// Dynamically generates a breakpoint in the <head> tag, at 960px, for displaying the cat images side by side
			const styleTag = document.createElement('style');
			styleTag.innerHTML = '@media screen and (min-width: 728px) {main {flex-direction: row;}.catDiv {width: 45%; display: flex; flex-direction: column; align-content: space-around;}}';
			document.head.appendChild(styleTag);
			*/

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
			console.log(leftDiv.children[0].innerHTML);
			describe('generates cat pictures, by', () => {
				it('creating a mainTag', () => {
					expect(mainTag.outerHTML).toContain('main');
				});
				it('spliting the mainTag in two divs, by the right proportion (3.2) of it\'s width', () => {
					expect(parseInt(mainTag.children[0].style.width)).toEqual(parseInt(mainTag.style.width)*0.32);
				});
				describe('leftDiv should be', () => {
					it('sliced in 5 divs', () => {
						expect(leftDiv.children.length).toEqual(5);
					});
					it('on top of each other, using css grid or flexbox', () => {
						expect(mainTag.children[0].style.display).toBe('flex');
						expect(mainTag.children[0].style.flexDirection).toBe('column');
						expect(document.querySelectorAll('img')[0,1,2,3,4].style.height).toBe('80%');
					});
				});
				it('each cat should have the correct <figure> element', () => {
					expect(leftDiv.children[0]).toBe(catDiv[0]);
					expect(leftDiv.children[1]).toBe(catDiv[1]);
					expect(leftDiv.children[2]).toBe(catDiv[2]);
					expect(leftDiv.children[3]).toBe(catDiv[3]);
					expect(leftDiv.children[4]).toBe(catDiv[4]);
				});
				it('each <figure> should have inside, in this order, a <figcaption>, displaying that cat\'s name, and an <img src="" alt="">', () => {
					expect(leftDiv.children[0].innerHTML).toContain('<figcaption');
					expect(leftDiv.children[0].innerHTML).toContain('<img');
					expect(leftDiv.children[1].innerHTML).toContain('<figcaption');
					expect(leftDiv.children[1].innerHTML).toContain('<img');
					expect(leftDiv.children[2].innerHTML).toContain('<figcaption');
					expect(leftDiv.children[2].innerHTML).toContain('<img');
					expect(leftDiv.children[3].innerHTML).toContain('<figcaption');
					expect(leftDiv.children[3].innerHTML).toContain('<img');
					expect(leftDiv.children[4].innerHTML).toContain('<figcaption');
					expect(leftDiv.children[4].innerHTML).toContain('<img');
					expect(catNames[0,1,2,3,4].style.textAlign).toBe('center');
				});
				describe('create the area to display the selected cat image on the second div of the mainTag, displaying that cat\'s', () => {
					console.log(catFigures);
					it('unique', () => {

						let catNameSet = new Set();
						catNames.forEach(function(name){
							catNameSet.add(parseInt(name.textContent[name.textContent.length -1]));
						});
						// extra layer of security for ensuring the catNameSet is a Set type
						catNameSet.add(1);
						catNameSet.add(1);
						console.log(Array.isArray(catNameSet)); // should output `false`
						console.log(catNameSet); // should output a Set, with a size of 5

						let catImgSet = new Set();
						let catImgs = leftDiv.querySelectorAll('img');
						catImgs.forEach(function(image){
							catImgSet.add(parseInt(image.alt[image.alt.length -1]));
							//console.log(image.alt[image.alt.length -1]); /*= parseInt(catImgSet[ind].textContent);*/
						});
						// extra layer of security for ensuring the catImgSet is a Set type
						catImgSet.add(1);
						catImgSet.add(1);
						console.log(Array.isArray(catImgSet)); // should output `false`
						console.log(catImgSet); // should output a Set, with a size of 5

						expect(catNameSet.toString()).toEqual("[object Set]");
						expect(catNameSet.size).toBe(5);
						expect(catImgSet.toString()).toEqual("[object Set]");
						expect(catImgSet.size).toBe(5);
					});
					it('name', () => {


						let catNameSet = new Set();
						catNames.forEach(function(name){
							catNameSet.add(parseInt(name.textContent[name.textContent.length -1]));
						});
						console.log(catNameSet);

						let catNameArray = [];
						console.log(Array.isArray(catNameArray));
						catNameSet.forEach(function(nome) {
							let newName = nome;
							catNameArray.push(newName.toString());
						});
						console.log(catNameArray);

						expect(catNameArray[0,1,2,3,4]).not.toBe(null);
						expect(typeof catNameArray[0,1,2,3,4]).toBe("string");
					});
					it('image', () => {
						console.log(catFigures[0]);
						expect(imgs[0]).not.toBe(null);
						expect(imgs[0].outerHTML).toContain('cat');
						expect(imgs[1]).not.toBe(null);
						expect(imgs[1].outerHTML).toContain('cat');
						expect(imgs[2]).not.toBe(null);
						expect(imgs[2].outerHTML).toContain('cat');
						expect(imgs[3]).not.toBe(null);
						expect(imgs[3].outerHTML).toContain('cat');
						expect(imgs[4]).not.toBe(null);
						expect(imgs[4].outerHTML).toContain('cat');
					});
					it('and respective number of clicks', () => {
						expect(clickCount[0]).toEqual(0);
						catDiv[0].click();
						expect(clickCount[0]).toEqual(1);
						catDiv[0].click();
						expect(clickCount[0]).toEqual(2);
						expect(clickCount[1]).toEqual(0);
						catDiv[1].click();
						expect(clickCount[1]).toEqual(1);
						catDiv[1].click();
						expect(clickCount[1]).toEqual(2);
						expect(clickCount[2]).toEqual(0);
						catDiv[2].click();
						expect(clickCount[2]).toEqual(1);
						catDiv[2].click();
						expect(clickCount[2]).toEqual(2);
						expect(clickCount[3]).toEqual(0);
						catDiv[3].click();
						expect(clickCount[3]).toEqual(1);
						catDiv[3].click();
						expect(clickCount[3]).toEqual(2);
						expect(clickCount[4]).toEqual(0);
						catDiv[4].click();
						expect(clickCount[4]).toEqual(1);
						catDiv[4].click();
						expect(clickCount[4]).toEqual(2);

						displayCatFigure.innerHTML = '';
					});
					it('all centered', () => {
						expect(mainTag.children[1].style.display).toBe('flex');
						expect(mainTag.children[1].style.justifyContent).toBe('center');
						expect(mainTag.children[1].style.alignItems).toBe('center');
					});
				});
			});
			describe('Append the generated HTML to the main tag by', () => {
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
					catDiv[0].click();
					expect(count1).toBe(1);
					catDiv[0].click();
					expect(count1).toBe(2);
					expect(count2).toBe(0);
					catDiv[1].click();
					expect(count2).toBe(1);
					catDiv[1].click();
					expect(count2).toBe(2);
					expect(count3).toBe(0);
					catDiv[2].click();
					expect(count3).toBe(1);
					catDiv[2].click();
					expect(count3).toBe(2);
					expect(count4).toBe(0);
					catDiv[3].click();
					expect(count4).toBe(1);
					catDiv[3].click();
					expect(count4).toBe(2);
					expect(count5).toBe(0);
					catDiv[4].click();
					expect(count5).toBe(1);
					catDiv[4].click();
					expect(count5).toBe(2);

					displayCatFigure.innerHTML = '';
				});
				it('displays the number of clicks', () => {
					expect(displayCount[0].textContent).toBe('0 clicks');
					catDiv[0].click();
					expect(displayCount[0].textContent).toBe('1 clicks');
					expect(displayCount[1].textContent).toBe('0 clicks');
					catDiv[1].click();
					expect(displayCount[1].textContent).toBe('1 clicks');
					expect(displayCount[2].textContent).toBe('0 clicks');
					catDiv[2].click();
					expect(displayCount[2].textContent).toBe('1 clicks');
					expect(displayCount[3].textContent).toBe('0 clicks');
					catDiv[3].click();
					expect(displayCount[3].textContent).toBe('1 clicks');
					expect(displayCount[4].textContent).toBe('0 clicks');
					catDiv[4].click();
					expect(displayCount[4].textContent).toBe('1 clicks');

					displayCatFigure.innerHTML = '';
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
					catDiv[0].click();
					catDiv[1].click();
					catDiv[2].click();
					catDiv[3].click();
					catDiv[4].click();
					expect(displayCount[0].style.visibility).toBe('');
					expect(displayCount[1].style.visibility).toBe('');
					expect(displayCount[3].style.visibility).toBe('');
					expect(displayCount[4].style.visibility).toBe('');
					expect(displayCount[5].style.visibility).toBe('');

					displayCatFigure.innerHTML = '';
				});
			});
		});
	})();
});