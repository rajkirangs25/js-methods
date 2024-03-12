'use strict';

import * as metList from './methodsList.js';

const inputArray = document.querySelector('#arrayInput');
const arrayConfirm = document.querySelector('.confirmArray');
const selectedArray = document.querySelector('#selectedArray');
const resetArray = document.querySelector('.revertBack');
const outputArray = document.querySelector('#outputArray');
const mets = document.querySelector('.methods');

mets.innerHTML = `${metList.generateListItems(metList.methodsList)}`;

let mainArray = [];

arrayConfirm.addEventListener('click', () => {
  mainArray = inputArray.value.split(',');
  selectedArray.value = mainArray;
  outputArray.value = mainArray.sort();
  inputArray.disabled = true;
  inputArray.value = '';
  arrayConfirm.disabled = true;
});

resetArray.addEventListener('click', () => {
  selectedArray.value = '';
  inputArray.disabled = false;
  mainArray = [];
  arrayConfirm.disabled = false;
});
