'use strict';
import { quizData } from './data.js';

import { initWelcomePage } from './pages/welcomePage.js';
import { createTimerElement } from './views/timerViews.js';

import { initQuestionPage } from './pages/questionPage.js';

import { setTime } from './views/timerViews.js';

const body = document.body;
export const time = createTimerElement();
time.style.position = 'absolute';
time.style.top = '6%';
time.style.left = '49.3%';
time.hidden = true;
body.appendChild(time);

const loadApp = () => {
  let currentQuestionIndex = window.sessionStorage.getItem(
    'currentQuestionIndex'
  );
  quizData.currentQuestionIndex = JSON.parse(currentQuestionIndex) || 0;

  let skippedQuestions = window.sessionStorage.getItem('skippedQuestions');
  quizData.skippedQuestions = JSON.parse(skippedQuestions) || 0;

  let wrongAnswers = window.sessionStorage.getItem('wrongAnswers');
  quizData.wrongAnswers = JSON.parse(wrongAnswers) || 0;

  let rightAnswers = window.sessionStorage.getItem('rightAnswers');
  quizData.rightAnswers = JSON.parse(rightAnswers) || 0;

  if (currentQuestionIndex) {
    initQuestionPage();
    setTime(true);
  } else {
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
