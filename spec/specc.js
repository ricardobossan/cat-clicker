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
/*setTimeout(function() {
*/
/*	(function() {
*/
/**
 * @name MODEL
 * @desc Holds the project's data
 */
let model = {
	cats: [
		ifrit = {
			name: "Ifrit",
			image: "https://morawscy-vet.pl/wp-content/uploads/2018/07/yellow_tiger_cat.jpg",
			clickCount: 0
		},
		shiva = {
			name: "Shiva",
			image: "https://vignette.wikia.nocookie.net/animal-jam-clans-stories/images/b/b8/Ice-cat-cats-31471539-1600-1200.jpg/revision/latest?cb=20160614065319",
			clickCount: 0
		},
		carbuncle = {
			name: "Carbuncle",
			image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42541306/1/?bust=1534964951&width=1439",
			clickCount: 0
		},
		siren = {
			name: "Siren",
			image: "https://i.ytimg.com/vi/SP5RYYK3LaY/hqdefault.jpg",
			clickCount: 0
		},
		bahamut = {
			name: "Bahamut",
			image: "http://catobsessed.com/wp-content/uploads/2017/07/my-cat-in-dragon-costume.jpg",
			clickCount: 0
		}
	]
};

/**
 * @name OCTOPUS
 * @desc Communication between the **model** and **view**
 */
const octopus = {

	init: () => {

		view.init();
	},

	hideOrRevealForm: () => {

		view.newCatForm.classList.toggle('hidden-form');
		view.newCatForm.classList.toggle('shown-form');
	},

};


/**
 * @name VIEW
 * @desc Renders the data on the screen
 */
const view = {

	init: () => {
		const adminButton = document.getElementById('admin');
		this.newCatForm = document.querySelector('#new-cat-form');

		adminButton.addEventListener("click", () => {
			octopus.hideOrRevealForm();
		});
	}
};

octopus.init();

describe('creates MOV paradigm:', () => {
	describe('model', () => {
		it('is a defined object', () => {
			expect(model).not.toBe(undefined);
			expect(typeof model).toBe("object");
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
/*})();
*//*});*/