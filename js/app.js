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
		{
			name: "Ifrit",
			image: "https://morawscy-vet.pl/wp-content/uploads/2018/07/yellow_tiger_cat.jpg",
			clickCount: 0,
			position: 0
		},
		{
			name: "Shiva",
			image: "https://vignette.wikia.nocookie.net/animal-jam-clans-stories/images/b/b8/Ice-cat-cats-31471539-1600-1200.jpg/revision/latest?cb=20160614065319",
			clickCount: 0,
			position: 1
		},
		{
			name: "Siren",
			image: "https://i.ytimg.com/vi/SP5RYYK3LaY/hqdefault.jpg",
			clickCount: 0,
			position: 2
		},
		{
			name: "Carbuncle",
			image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42541306/1/?bust=1534964951&width=1439",
			clickCount: 0,
			position: 3
		},
		{
			name: "Bahamut",
			image: "http://catobsessed.com/wp-content/uploads/2017/07/my-cat-in-dragon-costume.jpg",
			clickCount: 0,
			position: 4
		}
	],

	noCat: {
		name: "Click a cat name to display it's data",
		image: "https://mikecavaliere.com/wp-content/uploads/2015/05/Question-400x400.png",
		clickCount: "no clicks"
	}
};

/**
 * @name OCTOPUS
 * @desc Communication between the **model** and **view**
 */
const octopus = {

	init: function() {

		view.init();
		view.render();
	},

	hideOrRevealForm: function() {

		view.newCatForm.classList.toggle('hidden-form');
		view.newCatForm.classList.toggle('shown-form');
	},

	/**
	 * checks if data is in the model object or in local storage, then sends it to the view
	 * @method
	 */
	sendCats: () => {
		let sentCats;
		if (!localStorage.newModel) {
			sentCats = model;
		}
		else {
			sentCats = JSON.parse(localStorage.getItem("newModel"));
		}
		return sentCats;
	}

};

/**
 * @name VIEW
 * @desc Renders the data on the screen
 */
const view = {

	init: function() {

		// Set variables
		this.catList = document.querySelector('.cat-list');
		this.adminButton = document.querySelector('#admin');
		this.newCatForm = document.querySelector('#new-cat-form');
		this.selectedCat;
		this.displayCat = document.querySelector('#display-selected');
		this.clickCounter = document.querySelector('#click-count');
		this.saveButton = document.querySelector('#saveButton');
		this.cancelButton = document.querySelector('#saveButton');
		this.updatedCats;

		this.adminButton.addEventListener("click", function() {
			octopus.hideOrRevealForm();
		});

		// Form's logic
		this.saveButton.addEventListener("click", function(evt) {
			if(typeof view.selectedCat !== "object"){
				evt.preventDefault();
				alert("Click on a cat first");
			} else {
				evt.preventDefault();
				let catForm = document.querySelector('#new-cat-form');
				if(	(catForm[0].value === "" && catForm[1].value === "") ||
					(catForm[0].value !== "" && catForm[1].value === "") ||
					(catForm[0].value === "" && catForm[1].value !== "") )
				{
					evt.preventDefault();
					alert("Please, fill all the new cat fields");
				} else {
					// Saves form's input data to localStorage
					(function sendToLocalStorage() {
						let i = view.selectedCat.position;
						let updatedData = octopus.sendCats();
						updatedData.cats[i].name = catForm[0].value;
						updatedData.cats[i].image = catForm[1].value;
						catForm[2].value > 0 ? updatedData.cats[i].clickCount = catForm[2].value : updatedData.cats[i].clickCount = 0;

						localStorage.setItem('newModel', JSON.stringify(updatedData));

						for(let i = 0; i < view.catList.children.length; i++){
							view.catList.children[i].textContent = octopus.sendCats().cats[i].name;
						}

						// Displays the new cat's data on the screen
						view.selectedCat = octopus.sendCats().cats[i];
						view.displayCat.children[0].textContent = view.selectedCat.name;
						view.displayCat.children[1].outerHTML = `<img src="${view.selectedCat.image}" alt="${view.selectedCat.name}">`;
						view.clickCounter.textContent = updatedData.cats[i].clickCount;


						// Hides the form and resets it's inputs values
						(() => {
							for (let l = 0; l < 3; l++) {
								catForm[l].value = "";
							}
							view.newCatForm.classList.add('hidden-form');
							view.newCatForm.classList.remove('shown-form');

						})();
					})();
				}
			}
		});
	},

	render: () => {
		for(let i = 0; i < view.catList.children.length; i++){
			view.catList.children[i].textContent = octopus.sendCats().cats[i].name;
		}

		(function displaySelected() {
			view.displayCat.children[0].textContent = octopus.sendCats().noCat.name;
			view.displayCat.children[1].outerHTML = `<img src="${octopus.sendCats().noCat.image}" alt="${octopus.sendCats().noCat.name}">`;
			for(let i = 0; i<view.catList.children.length; i++){
				// Callback function to be executed once a cat name is clicked in the cat list.
				view.catList.children[i].addEventListener("click", () => {
					view.selectedCat = octopus.sendCats().cats[i];
					// updates the cat name
					view.displayCat.children[0].textContent = view.selectedCat.name;
					// updates the cat image
					view.displayCat.children[1].outerHTML = `<img src="${view.selectedCat.image}" alt="${view.selectedCat.name}">`;
					// updates the clickCount for the octopus.sendCats(), so it iterates at each click on the same cat, and is properly shown on the respective view.selectedCat object
					view.updatedCats = octopus.sendCats();
					view.updatedCats.cats[i].clickCount++;
					localStorage.setItem('newModel', JSON.stringify(view.updatedCats));
					view.clickCounter.textContent = `Number of clicks: ${view.selectedCat.clickCount}`;
					if (view.selectedCat.clickCount > 0) {
						view.clickCounter.classList.remove('click-count-hidden');
						view.clickCounter.classList.add('click-count-shown');
					} else {
						view.clickCounter.classList.remove('click-count-shown');
						view.clickCounter.classList.add('click-count-hidden');
					}
				});
			}
		})();
	}
};

octopus.init();