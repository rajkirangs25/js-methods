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

const generateListItems = () => {
  let ele = '';
  for (let i = 0; i < methodsList.length; i++) {
    ele += `<div><a href="#" class = "met">${methodsList[i]}</a></div>`;
  }
  return ele;
};

export default generateListItems(methodsList);
