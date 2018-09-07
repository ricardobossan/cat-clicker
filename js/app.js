/**
 * @file THolds the logic for Project Cat Clicker Premium Pro.
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
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

	init: function() {

		view.init();
		view.event();
	},

	hideOrRevealForm: function() {

		view.newCatForm.classList.toggle('hidden-form');
		view.newCatForm.classList.toggle('shown-form');
	},

};


/**
 * @name VIEW
 * @desc Renders the data on the screen
 */
const view = {

	init: function() {
		this.adminButton = document.querySelector('#admin');
		this.newCatForm = document.querySelector('#new-cat-form');
	},
	event: function() {
		this.adminButton.addEventListener("click", function() {
			octopus.hideOrRevealForm();
		});
	}
};

octopus.init();
console.log(view.newCatForm);