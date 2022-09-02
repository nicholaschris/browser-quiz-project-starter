'use strict';

import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { setTime, resetTotalSeconds } from '../views/timerViews.js';
import { quizData } from '../data.js';
import { time } from '../app.js';
import { questionsArray } from './questionPage.js';
export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

// let totalSeconds = 0;

export const startQuiz = () => {
  resetTotalSeconds();
  quizData.currentQuestionIndex = 0;
  for (let i = 0; i < questionsArray.length; i++) {
    questionsArray[i].selected = null;
  }
  quizData.rightAnswers = 0;
  quizData.wrongAnswers = 0;
  quizData.skippedQuestions = 0;
  quizData.result.right = 0;
  quizData.result.wrong = 0;
  quizData.result.skipped = 0;
  initQuestionPage();
  time.hidden = false;
  setTime(true);
};
