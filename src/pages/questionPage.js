'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  ///
  userInterface.appendChild(timer);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    document.getElementById(`answer_input_${key}`).addEventListener('click', function click() {
      console.log(answerText)
    })


  }
  
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};


export const timer = document.createElement('label');
import { TIMER_Id } from '../constants.js';
timer.id = TIMER_Id;

const seconds = document.createElement('span');
timer.appendChild(seconds);
const punctuationMark = document.createElement('span');
timer.appendChild(punctuationMark);
const minutes = document.createElement('span');
timer.appendChild(minutes);
seconds.textContent = '00';
punctuationMark.textContent = ':';
minutes.textContent = '00';
let totalSeconds = 0;
let timerIntervalId = 0;
export function setTime(start) {
  if (start) {
    timerIntervalId = setInterval(increaseTimer, 1000);
  } else if (timerIntervalId) {
    clearInterval(timerIntervalId);
    timerIntervalId = 0;
  }
}
function increaseTimer() {
  ++totalSeconds;
  minutes.innerHTML = pad(totalSeconds % 60);
  seconds.innerHTML = pad(parseInt(totalSeconds / 60));
}
function pad(val) {
  let valString = val + '';
  if (valString.length < 2) {
    return '0' + valString;
  } else {
    return valString;
  }
}
