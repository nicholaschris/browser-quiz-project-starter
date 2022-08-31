'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  const buttonElement = document.createElement('button');
  buttonElement.id = key
  buttonElement.innerHTML = String.raw`
  ${key}: ${answerText};
`;
  element.append(buttonElement)

  return element;
};
