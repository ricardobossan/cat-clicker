/* eslint-disable */
/**
 * @file This file has tests for the app.js file.
 *
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @todo refactor the event listener's content. Try to encapsulate it in functions, and even callbacks, if possible.
 */
describe('creates MOV paradigm:', () => {
	describe('Model', () => {
		it('is a defined object.', () => {
			expect(model).not.toBe(undefined);
			expect(typeof model).toBe("object");

		});
	});
	describe('Octopus', () => {
		it('is a defined object.', () => {
			expect(octopus).not.toBe(undefined);
			expect(typeof octopus).toBe("object");
		});
		describe('Provides the model data ', () => {
			it('to the view object:', () => {
				expect(octopus.sendCats()).toEqual(model);
			});
		});
	});
	describe('View', () => {
		it('is a defined object.', () => {
			expect(view).not.toBe(undefined);
			expect(typeof view).toBe("object");
		});
		describe('displays the cat data into the apropriate markup fields:', () => {
			describe('List of cats names', () => {
				// Waits for DOM to load
/*				setTimeout(() => {
*/					it('name', () => {
					expect(octopus.sendCats().cats[0].name).toBe("Ifrit");
					expect(view.catList.children[0].textContent).toEqual(octopus.sendCats().cats[0].name);
				});
				it('name', () => {
					expect(octopus.sendCats().cats[1].name).toBe("Shiva");
					expect(view.catList.children[1].textContent).toEqual(octopus.sendCats().cats[1].name);
				});
				it('name', () => {
					expect(octopus.sendCats().cats[2].name).toBe("Siren");
					expect(view.catList.children[2].textContent).toEqual(octopus.sendCats().cats[2].name);
				});
				it('name', () => {
					expect(octopus.sendCats().cats[3].name).toBe("Carbuncle");
					expect(view.catList.children[3].textContent).toEqual(octopus.sendCats().cats[3].name);
				});
				it('name', () => {
					expect(octopus.sendCats().cats[4].name).toBe("Bahamut");
					expect(view.catList.children[4].textContent).toEqual(octopus.sendCats().cats[4].name);
				});
/*				}, 500);
*/			});
			describe('if a cat name is clicked, the view displays it\'s', () => {
				// inside object.octopus encapsulate inside a function to be autoexecuted from the global object, after where the octopus object is defined in the code
				let selectedCat = "";
				const displayCat = document.querySelector('#display-selected');
				let clickCounter = document.querySelector('#click-count');
				for(let i = 0; i<view.catList.children.length; i++){
					view.catList.children[i].addEventListener("click",
						() => {
							// updates the cat name
							selectedCat = model.cats[i];
							displayCat.children[0].textContent = selectedCat.name;
							// updates the cat image
							displayCat.children[1].outerHTML = `<img src="${selectedCat.image}" alt="${selectedCat.name}">`
							// updates the clickCount for the model, so it iterates at each click on the same cat, and is properly shown on the respective selectedCat object
							model.cats[i].clickCount++;
							if (selectedCat.clickCount > 0) {
								clickCounter.classList.remove('click-count-hidden');
								clickCounter.classList.add('click-count-shown');
							} else {
								clickCounter.classList.remove('click-count-shown');
								clickCounter.classList.add('click-count-hidden');

							}
						});
					view.catList.children[0].click();
				};
				it('name;', () => {
					expect(displayCat.children[0].textContent).toBe(selectedCat.name);
				});
				it('image;', () => {
					expect(displayCat.children[1].outerHTML).toBe(`<img src="${selectedCat.image}" alt="${selectedCat.name}">`);
				});
				xit('amount of clicks.', () => {
					expect().to();
				});
			});
			describe('Admin button, which', () => {
				it('if not clicked, the form remains hidden;', () => {
					expect(view.newCatForm.classList.toString()).toBe('hidden-form');
				});
				it('if clicked once, will show the form;', () => {
					view.adminButton.click();
					expect(view.newCatForm.classList.toString()).toBe('shown-form');
					// returns the from back to it's original hidden form.
					view.newCatForm.classList = "hidden-form";
					expect(view.newCatForm.classList.toString()).toBe('hidden-form');
				});
				it('if clicked another time, hides the form again.', () => {
					view.adminButton.click();
					expect(view.newCatForm.classList.toString()).toBe('shown-form');
					view.adminButton.click();
					expect(view.newCatForm.classList.toString()).toBe('hidden-form');
				});
			});
			xdescribe('Form to update each cat data by it\'s position in the cats array:', () => {
				it('name', () => {
					expect().to();
				});
				it('image', () => {
					expect().to();
				});
				it('amount of clicks', () => {
					expect().to();
				});
			});
		});
	});
});