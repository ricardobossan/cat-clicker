/**
 * @file this file holds the logic for implementing a cat clicker page, where, once you click in a catr picture, a counter above it increments the number of clicks on that picture by 1.
 * @author Ricardo Bossan <ricardobossan@gmail.com>
 *
 * @see [lesson: FEND Nanodegree / Chapter 4: Front-End Applications / Lesson 1: Changing Expectations](https://classroom.udacity.com/nanodegrees/nd001/parts/e4e4c31c-2348-4382-826f-caac197d6f5f/modules/4db0b091-fc81-40c2-b7f0-a4ded06480e1/lessons/3417188540/concepts/34408790480923)
 *
 * @todo TDD approach to implement the ../js/app.js file, from scratch
 * @todo From what I got, two cat pictures, with their names displayed above each. Think I ll use flexbox or gridCSS to display them responsively, and add their names with figcaptions, but adding the <figcaptions> before the <img> tags
 */

/**
 * Generates the DOM
 *  @function
 */
const generate = (() => {
	const fragment = document.createDocumentFragment();
	const domBody = document.querySelector('body');
})();
