'use strict';

// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var question1 = prompt('Does Annie live in Seattle?').toLowerCase();

/*if (condition is true) {
  do something
  maybe do something else
  ext. until done
} else {
  do this other thing
  and maybe yet another thing
}*/

if (question1 === 'yes' || question1 ==='y'){
  document.write('Correct! You\'ve earned yourself a star.');
  console.log('User answers question correctly');
} else if(question1 === 'no' || question1 ==='n'){
  document.write('Boo! You answered this question incorrectly!');
} else{
  document.write('Try to answer with a yes/no or y/n next time.');
}
