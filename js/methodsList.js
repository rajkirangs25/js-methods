'use strict';

const methodsList = [
  '.at()',
  '.concat()',
  '.copyWithin()',
  '.entries()',
  '.every()',
  '.fill()',
  '.filter()',
  '.find()',
  '.findIndex()',
  '.findLast()',
  '.findLastIndex()',
  '.flat()',
  '.flatMap()',
  '.forEach()',
  '.from()',
  '.fromASync()',
  '.includes()',
  '.indexOf()',
  '.isArray()',
  '.join()',
  '.keys()',
  '.lastIndexOf()',
  '.map()',
  '.of()',
  '.pop()',
  '.push()',
  '.reduce()',
  '.reduceRight()',
  '.reverse()',
  '.shift()',
  '.slice()',
  '.some()',
  '.sort()',
  '.splice()',
  '.toLocaleString()',
  '.toReversed()',
  '.toSorted()',
  '.toSpliced()',
  '.toString()',
  '.unshift()',
  '.values()',
  '.with()',
];

const generateListItems = arr => {
  let ele = '';
  for (let i = 0; i < arr.length; i++) {
    ele += `<div class = "met-btn"><button class = "btn-${arr[i].slice(
      1,
      -2
    )}">${arr[i]}</button></div>`;
  }
  return ele;
};

export { methodsList, generateListItems };
