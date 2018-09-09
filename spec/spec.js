/* eslint-disable */
/**
 * @file This file has tests for the app.js file.
 *
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @todo find out why Error during loading: Uncaught TypeError: Cannot read property 'addEventListener' of null in http://localhost:8000/js/app.js line 81
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
		xdescribe('Provides each cat name to the view/cat list area. Each cat name:', () => {
			it('is a button', () => {
				expect().toBe();
			});
			xdescribe('if clicked', () => {
				xdescribe('provides the selected cat object data', () => {
					it('to the view/selected cat area.', () => {
						expect().toBe();
					});
					xdescribe('This data is the respective cat\	s', () => {
						xit('name;', () => {
							expect().to();
						});
						xit('image;', () => {
							expect().to();
						});
						xit('amount of clicks.', () => {
							expect().to();
						});
					});
				});
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
				it('name', () => {
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
			});
			xdescribe('Selected cat data:', () => {
				it('name;', () => {
					expect().to();
				});
				it('image;', () => {
					expect().to();
				});
				it('amount of clicks.', () => {
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
})