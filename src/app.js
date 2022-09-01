'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js'

import{  setTime } from './pages/questionPage.js'
const loadApp = () => {

const session = window.sessionStorage.getItem("currentQuestionIndex")

  quizData.currentQuestionIndex = JSON.parse(session) || 0;
  
  if (session) {
    initQuestionPage();
    setTime(true);


    console.log('session true',session)
  } else {
    initWelcomePage();
    console.log('session false',session)


  }



  

};

window.addEventListener('load', loadApp);
