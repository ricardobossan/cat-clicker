/*TODO:

* lesson: "https://classroom.udacity.com/nanodegrees/nd001/parts/e4e4c31c-2348-4382-826f-caac197d6f5f/modules/4db0b091-fc81-40c2-b7f0-a4ded06480e1/lessons/3417188540/concepts/34408790480923"
** from what I got, two cat pictures, with their names displayed above each. Think I ll use flexbox or grid to display them responsively, and add their name with figcaptions, but adding the <figcaptions> before the <img> tags
*/
const generate = (() => {
	const domBody = document.querySelector('body');
	domBody.setAttribute("style", 'margin: auto; width: 100%');
	const fragment = document.createDocumentFragment();
	const mainDiv = document.createElement('main');
	const cat1Div = document.createElement('div');
	const cat2Div = document.createElement('div');
	cat1Div.setAttribute("ID", "cat1DivID");
	cat2Div.setAttribute("ID", "cat2DivID");
	console.log(document.getElementById('cat1DivID'));
	const cat2DivIDDom = document.getElementById('cat2DivID');
	mainDiv.appendChild(cat1Div);
	mainDiv.appendChild(cat2Div);
	console.log(mainDiv);
	mainDiv.setAttribute("style", "display: flex; flex-wrap: wrap; text-align: center; margin-top: 10%");
	mainDiv.setAttribute("ID", "mainID");
/*	const cat1FigureDom = document.querySelector('#cat1FigureID'); // note of type 'Node'
	const cat2FigureDom = document.querySelector('#cat2FigureID'); // note of type 'Node'
*/
	console.log(cat1Div);
	console.log(cat2Div);
	mainDiv.appendChild(cat1Div);
	mainDiv.appendChild(cat2Div);
	cat1Div.innerHTML = '<figure><img src="images/cat1.jpg" alt="First cat picture" /><figcaption>First cat picture</figcaption></figure>' /*'<img src="images/cat1.jpg"\nalt="First cat picture">\n<figcaption>First Cat Picture</figcaption>'*/;
	cat2Div.innerHTML = '<figure><img src="images/cat2.jpg" alt="Second cat picture" /><figcaption>Second cat picture</figcaption></figure>' /*'<img src="images/cat2.jpg"\nalt="Second cat picture">\n<figcaption>Second Cat Picture</figcaption>'*/;
	console.log(cat1Div);
	console.log(cat2Div);
	fragment.appendChild(mainDiv);
	domBody.appendChild(fragment);
	const img = document.querySelector('img');
	img.setAttribute("style", "margin: auto; max-width: 80%; max-height: 80%");
})();
console.log(document.querySelectorAll('figure'));
const cat1ClickCounter = document.createElement('section');
const cat2ClickCounter = document.createElement('section');
/*instructions.setAttribute("style")
*/const instructions = document.createElement('h1');
instructions.textContent = "Click a picture to display it's number of clicks.";
let cat1Clicks = 0;
let cat2Clicks = 0;
const mainDiv = document.getElementById('mainID');
const figure1 = document.getElementById('cat1FigureID');
const figure2 = document.getElementById('cat2FigureID');
mainDiv.insertBefore(instructions, mainDiv.firstChild);
figure1.insertBefore(cat1ClickCounter, figure1.firstChild);
figure2.insertBefore(cat2ClickCounter, figure2.firstChild);
cat1ClickCounter.setAttribute("style", "visibility: hidden;");
cat2ClickCounter.setAttribute("style", "visibility: hidden;");

figure1.addEventListener('click', function() {
	cat1Clicks +=1;
	cat1ClickCounter.textContent = `${cat1Clicks} clicks`;
	cat1ClickCounter.setAttribute("style", "visibility: visible;");
});

figure2.addEventListener('click', function() {
	cat2Clicks +=1;
	cat2ClickCounter.textContent = `${cat2Clicks} clicks`;
	cat2ClickCounter.setAttribute("style", "visibility: visible;");
});
