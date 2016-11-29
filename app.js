'use strict';

var response1 = prompt('Does Annie live in Seattle?').toLowerCase();


if (response1 === 'yes' || response1 ==='y'){
  document.write('Correct! You\'ve earned yourself a star.');
  console.log('User answers response correctly');
} else if(response1 === 'no' || response1 ==='n'){
  document.write('Boo! You answered this question incorrectly!');
} else{
  document.write('Try to answer with a yes/y or no/n next time.');
}
