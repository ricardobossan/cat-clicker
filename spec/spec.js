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
/*setTimeout(function() {
*//*	(function() {
*/
console.log(document.querySelector('html').children.item(3));
		describe('creates MOV paradigm:', () => {
			describe('model', () => {
				it('is a defined object', (done) => {
					setTimeout(function() {
						expect(model).not.toBe(undefined);
						expect(typeof model).toBe("object");
						expect(document.getElementById('#admin')).not.toBe(null);
						done();
						}, 2000);

				});
			});
			describe('octopus', () => {
				it('is a defined object', () => {
					expect(octopus).not.toBe(undefined);
					expect(typeof octopus).toBe("object");
				});
				it('provides a cat name to the view', () => {

				});
			});
			describe('view', () => {
				it('is a defined object', () => {
					expect(view).not.toBe(undefined);
					expect(typeof view).toBe("object");
				});
				describe('displays the cat data into the apropriate markup fields:', () => {
					it('List of cats');

				});
				describe('And also displays the Admin button', () => {
					it('which is, at first, hidden', () => {
						expect(view.newCatForm.classList).toBe('hidden-form');
					});
					it('and shown, once clicked', () => {
						view.newCatForm.click();
						expect(view.newCatForm.classList).toBe('shown-form');
					});
				});
			});
		});
/*	})();
*//*}, 1000);*/