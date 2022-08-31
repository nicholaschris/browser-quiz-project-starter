'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  const label = document.createElement('label')
  label.id = `answer_${key}`;
  const radioInput = document.createElement("input");
  radioInput.name = "question";
  radioInput.type = "radio";
  radioInput.id = `answer_input_${key}`;
  element.appendChild(radioInput)
  element.appendChild(label)
  label.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};

