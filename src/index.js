'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopup';
import tabs from './modules/Tabs';
import slider from './modules/slider';
import changeImg from './modules/changeImg';
import validation from './modules/validation';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';




//Timer
let deadline = new Date(Date.parse(new Date()) + 154689 * 1000);
countTimer(deadline);

// Menu
toggleMenu();

// popup
togglePopUp();

// Tab's
tabs();

// Slider
slider();

//Change img
changeImg();

//Validation 
validation();

//Calculator
calculator(100);

//Send-ajax-form
sendForm();