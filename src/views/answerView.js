'use strict';

/*E
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
const element = document.createElement('li');
let btn = document.createElement("button");


  element.innerHTML = String.raw`<button>${key}: ${answerText}</button>`;

  
  return element;
};
