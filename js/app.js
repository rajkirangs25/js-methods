'use strict';

import generateListItems from './methodsList.js';

document.querySelector('.methods').innerHTML = `${generateListItems}`;
