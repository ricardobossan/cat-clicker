/**
 * @file This file has tests for the app.js file.
 *
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @todo find out why Error during loading: Uncaught TypeError: Cannot read property 'addEventListener' of null in http://localhost:8000/js/app.js line 81
 */

/**
 * @desc Encapsulated the whole code for the tests inside a `setTimeout()` method, with an empty delay, so that the DOM would already have loaded when
 */
console.log(document.querySelector('main'));
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
		xit('provides a cat name to the view.', () => {
			expect().toBe();
		});
	});
	describe('View', () => {
		it('is a defined object.', () => {
			expect(view).not.toBe(undefined);
			expect(typeof view).toBe("object");
		});
		describe('displays the cat data into the apropriate markup fields:', () => {
			xit('List of cats.', () => {
				expect().to();
			});
			xdescribe('Selected cat proper data:', () => {
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
			describe('Admin button,', () => {
				it('which is, at first, hidden;', () => {
					expect(view.newCatForm.classList.toString()).toBe('hidden-form');
				});
				it('shown, once clicked;', () => {
					view.adminButton.click();
					expect(view.newCatForm.classList.toString()).toBe('shown-form');
					// returns the from back to it's original hidden form.
					view.newCatForm.classList = "hidden-form";
					expect(view.newCatForm.classList.toString()).toBe('hidden-form');
				});
				it('then hid again, when clicked another time.', () => {
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