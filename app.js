'use strict';

/*
alert('Hello! We will pay a guessing game. Please answer the questions the form of yes/y or no/no.')

var response1 = prompt('Does Annie live in Seattle?').toLowerCase();

if(response1 === 'yes' || response1 === 'y'){
  alert('Correct! You\'re a star.');
  console.log('User answered question correctly');
} else if(response1 === 'no' || response1 === 'n'){
  alert('Boo! You answered this question incorrectly!');
} else{
  alert('Try to answer with a yes/y or no/n next time.');
}


var response2 = prompt('Does Annie have a dog?').toLowerCase();

if(response2 === 'yes' || response2 === 'y'){
  alert('Correct! Annie has a small dog');
  console.log('User answered question correctly.');
} else if(response2 === 'no' || response2 === 'n'){
  alert('You got it wrong! Annie has a small dog.');
}else{
  alert('Try to answer with a yes/y or no/n next time.');
}


var response3 = prompt('Does Annie like to travel?').toLowerCase();

if (response3 === 'yes' || response3 === 'y'){
  alert('Woohoo! Let\'s go!');
  console.log('User answered questions correctly.');
}else if(response3 === 'no' || response3 === 'n'){
  alert('But Annie likes to travel...sad face!');
}else{
  alert('Try to answer with a yes/y or no/n next time.');
}


var response4 = prompt('Does Annie like sushi?').toLowerCase();

if(response4 === 'yes' || response4 === 'y'){
  alert('Yes! Let\'s go get some sushi.');
  console.log('User answered question correctly.');
}else if(response4 === 'no' || response4 === 'n'){
  alert('You got it wrong!  Annie likes sushi.');
}else{
  alert('Try to answer with a yes/y or no/n next time.');
}


var response5 = prompt('Does Annie like to skydive?').toLowerCase();

if(response5 === 'yes' || response5 === 'y'){
  alert('No way!!! Annie is afraid of height');
  console.log('User did not answer question correctly.');
}else if(response5 === 'no' || response5 === 'n'){
  alert('No skydiving unless there is something wrong with the plane.');
}else{
  alert('Try to answer with a yes/y or no/n next time');
}
*/

//Step 3: Add a 6th question.  This takes in numeric input.  User to guess a number.  Alert "too high" or "to low".  Limit to 4 tries.


var numState = 0;
var numAttempt = 4;

while (numState !== 10 && numAttempt > 0) {
  numState = parseInt(prompt('How many states has Annie traveled to?'));
//set number of attempts so that they are decreased by 1 each time an attempt is taken.
  numAttempt -= 1;

  if(!isNaN(numState)) {
// if the number of attempt is less than 4 times, then proceed with validating the answer.
    if(numAttempt > 0){
// if the user input in more than 10, tell them it's too high and guess again.
      if(numState > 10) {
        alert('Your guess is too high');
// if the user input is less than 10, tell them it's too low and guess again.
      }else if(numState < 10) {
        alert('Your guess is too low');
// if the user input is 10, tell them it's correct.
      }else{
        alert('You got it');
      }
// if the number of attempts are more than 4 times, then alert user that no more attempts is allowed. End code.
    }else{
      alert('You ran out of attempts');
    }
  }
}


//Step 4 Add a 7th question.   Add an Array ["state1", "state2", "state3", "state4"] for possible answer.   User has up to 6 tries or until get correct answer.  Alert ('correct') or ('you run out of attempts')
//Step 5: Tally up the # of correct answers.  Display message to compare it to the # of correct out of total questions.

//var stateName = ['Washington', 'Oregon','California','New York'];
