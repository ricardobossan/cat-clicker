/**
 * @file This file has tests for the app.js file.
 *
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @todo The application should display two cats. Each cat includes: a) the cat's name; b) a picture of the cat; c) text showing the number of clicks.
 * @todo The specifics of the layout do not matter, so style it however you'd like.
 * @todo The number of clicks should increment when the cat picture is clicked.
 */
/*
If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with elem.addEventListener().

var elem = document.getElementById('my-elem');
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
}, false);
*/
describe('checks if DOM is loaded', () => {
	beforeEach(() => {
		document.addEventListener('DOMContentLoaded', () => {
			console.log(document.querySelector('body'));
		});
	});
	describe('generates', () => {
		it('two cat pictures', () => {
/*			const fragment = document.createDocumentFragment();
			const domBody = document.querySelector('body');
*/			expect(fragment).not.toBe(undefined);
			expect(domBody).toEqual(document.getElementsByTagName('body')[0]);
		});
	});
	xdescribe('piles the cat pictures on top of each other', () => {
		it('using CSS grid or flexbox', () => {
			expect();
		});
	});
	xdescribe('clicking each cat picture', () => {
		it('increases the number of clicks counter', () => {
			expect();
		});
		it('displays the number of counts', () => {
			expect();
		});
	});
});