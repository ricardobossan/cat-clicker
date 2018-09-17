/* eslint-disable */
/**
 * @file This file has tests for the app.js file.
 *
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @todo
 * how to first declare a localStorage.newModel object;
 * implement the last section, the form for substituting cats (name, image, and click count), in the model.
 */
describe('creates MOV paradigm:', () => {
	// resets all variables, once called:
	const reset = () => {
		model.cats[0].clickCount = 0;
		view.displayCat.children[0].textContent = model.noCat.name;
		view.displayCat.children[1].outerHTML = `<img src="${model.noCat.image}" alt="${model.noCat.name}">`;
		view.clickCounter.classList.remove('click-count-shown');
		view.clickCounter.classList.add('click-count-hidden');

		view.clickCounter.textContent = "";
		view.selectedCat = '';
	};
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
				let modelOfLocalStorage = localStorage.getItem("newModel") === null ? model : JSON.parse(localStorage.getItem("newModel"));
				expect(octopus.sendCats()).toEqual(modelOfLocalStorage);
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
/*					view.catList.children[0].click();
*/
				beforeAll((done) => {
					view.catList.children[0].click();
					done();
				});

				afterAll((done) => {
					reset();
					done();
				})
				it('name;', () => {
					expect(view.displayCat.children[0].textContent).toBe(view.selectedCat.name);
				});
				it('image;', () => {
					expect(view.displayCat.children[1].outerHTML).toBe(`<img src="${view.selectedCat.image}" alt="${view.selectedCat.name}">`);
				});
				it('amount of clicks.', () => {
					expect(document.querySelector('#display-selected-section').children[1].textContent).toEqual(view.selectedCat.clickCount.toString());
				});
			});
			describe('Admin button, which', () => {
				afterEach((done) => {
					view.clickCounter.classList.remove('click-count-shown');
					view.clickCounter.classList.add('click-count-hidden');
					done();
				});
				it('if not clicked, the form remains hidden;', () => {
					expect(view.newCatForm.classList.toString()).toBe('hidden-form');
				});
				it('if clicked once, will show the form;', () => {
					view.adminButton.click();
					expect(view.newCatForm.classList.toString()).toBe('shown-form');
					// returns the from back to it's original hidden form.
					view.adminButton.click();

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
				xdescribe('either', () => {
/*					beforeAll((done) => {
						view.catList.children[0].click();
						saveButton.click();
						done();
						}
					);
					afterAll((done) => {
						reset();
						done();
						}
					);
*/					xit('localStorage is set, or  ', () => {
						expect(JSON.parse(localStorage.getItem("newModel"))).not.toBe(undefined);
					});
				})
			});
		});
	});
});