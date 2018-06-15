const generate = (() => {
	const domBody = document.querySelector('body');
	domBody.setAttribute("style", 'margin: auto; width: 100%');
	const fragment = document.createDocumentFragment();
	const mainDiv = document.createElement('main');
	mainDiv.setAttribute("style", "text-align: center; margin-top: 10%");
	mainDiv.setAttribute("ID", "mainID");
	const figure = document.createElement('figure');
	mainDiv.appendChild(figure);
	figure.innerHTML = '<img src="images/cat.jpg"\nalt="A cat picture">\n<figcaption>Cat Picture</figcaption>';
	figure.setAttribute("ID", "figureID");
	fragment.appendChild(mainDiv);
/*	mainDiv.textContent = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo, labore optio ab omnis eos, eius corrupti cum! Ad eaque, consequatur accusamus porro eligendi. Ipsum tempora repellendus hic eum dolor in asperiores ut molestiae voluptatem sint eos dolorum, magni illo blanditiis! Nihil nulla atque placeat rem cumque, consequatur rerum iste neque eligendi et, animi debitis sequi possimus voluptatibus blanditiis facilis, officia maiores repellendus cupiditate laborum iusto illo iure quasi pariatur? Neque laboriosam quae voluptas minima dolorum ullam esse, at pariatur placeat possimus perferendis! Quisquam obcaecati, accusamus, hic id nobis accusantium sit pariatur ullam, quos aliquid, incidunt ea error. Quia, eaque!";
*/	domBody.appendChild(fragment);
	const img = document.querySelector('img');
	img.setAttribute("style", "margin: auto; max-width: 80%; max-height: 80%");
})();

const img = document.querySelector('img');
console.log(img);
const clickCounter = document.createElement('section');
let clicks = 0;
const mainDiv = document.getElementById('mainID');
const figure = document.getElementById('figureID');
mainDiv.insertBefore(clickCounter, mainDiv.firstChild);
clickCounter.setAttribute("style", "visibility: hidden;");
/*figure.insertAdjacentHTML('beforebegin', clickCounter);
*/
figure.addEventListener('click', function() {
	clicks +=1;
	clickCounter.textContent = `${clicks} clicks`;
	clickCounter.setAttribute("style", "visibility: visible;");
});
