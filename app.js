'use strict';

//Greetings.
alert('Welcome to my page!');
//Asking user for name.
var username = prompt('What is your name?');
//Greet user with name. Asking to play a game.
alert('Hi, ' + username + '. Let\'s play a guessing game. Please answer question 1 through 5 in the form of yes/y or no/n answer.')

//Question 1
var response1 = prompt('Does Santa live in the North Pole?').toLowerCase();

if(response1 === 'yes' || response1 === 'y'){
  alert('Correct! You\'re a star.');
  console.log('User answered question correctly');
} else if(response1 === 'no' || response1 === 'n'){
  alert('Boo! You got it wrong. Santa lives in the North Pole.');
} else{
  alert('Try to answer with a yes/y or no/n next time.');
}

//Quetion 2
var response2 = prompt('Is Santa married?').toLowerCase();

if(response2 === 'yes' || response2 === 'y'){
  alert('Horray! You got it right!');
  console.log('User answered question correctly.');
} else if(response2 === 'no' || response2 === 'n'){
  alert('Wrong! Santa is married.');
}else{
  alert('Try to answer with a yes/y or no/n next time.');
}

//Question 3
var response3 = prompt('Does Santa drive?').toLowerCase();

if (response3 === 'yes' || response3 === 'y'){
  alert('Woohoo! Santa drive the reindeer sleight.');
  console.log('User answered questions correctly.');
}else if(response3 === 'no' || response3 === 'n'){
  alert('Sad face..You didn\'t get this right this time.');
}else{
  alert('Try to answer with a yes/y or no/n next time.');
}

//Quesiton 4
var response4 = prompt('Does Santa like the Grinch?').toLowerCase();

if(response4 === 'yes' || response4 === 'y'){
  alert('No! Santa doesn\'t like the Grinch because the Grinch stole Xmas.');
  console.log('User did not answered question correctly.');
}else if(response4 === 'no' || response4 === 'n'){
  alert('You\'re correct. Santa doesn\'t like the Grinch.');
}else{
  alert('Try to answer with a yes/y or no/n next time.');
}

//Question 5
var response5 = prompt('Is it true that Santa only give presents to good little boys and good little girls?').toLowerCase();

if(response5 === 'yes' || response5 === 'y'){
  alert('Woohoo! You must have been good this year.');
  console.log('User answered question correctly.');
}else if(response5 === 'no' || response5 === 'n'){
  alert('Wrong! Looks like somebody is getting a bag a coal this Xmas ;)');
}else{
  alert('Try to answer with a yes/y or no/n next time');
}

//Question 6. This takes in numeric input.  User to guess a number.  Alert "too high" or "to low".  Limit to 4 tries.
var numReindeer = 0;
var numAttempt = 4;

while (numReindeer !== 8 && numAttempt > 0) {
  numReindeer = parseInt(prompt('How many reindeers does Santa have?'));
//set number of attempts so that they are decreased by 1 each time an attempt is taken.
  numAttempt -= 1;

  if(!isNaN(numReindeer)) {
// if the number of attempt is less than 4 times, then proceed with validating the answer.
    if(numAttempt > 0){
// if the user input in more than 9, tell them it's too high and guess again.
      if(numReindeer > 9) {
        alert('Your guess is too high');
// if the user input is less than 9, tell them it's too low and guess again.
      }else if(numReindeer < 9) {
        alert('Your guess is too low');
// if the user input is 10, tell them it's correct.
      }else{
        alert('Wow!!! You\'re so smart. There are 9 reindeers');
      }
// if the number of attempts are more than 4 times, then alert user that no more attempts is allowed. End code.
    }else{
      alert('Sorry. Nice try but you ran out of attempts. Let\'s go look up reindeers.');
    }
  }
}


//Question 7. Add an Array for possible answers.   User has up to 6 tries or until get correct answer.  Alert ('correct') or ('you run out of attempts')

var userInput = prompt('What\'s the name of one of Santa\'s reindeers?')
var nameReindeer = ['Dasher','Dancer','Prancer','Vixen','Comet','Cupid','Dunder','Blixen','Rudolph'].toLowerCase();

//I'M STUCK!!!
for (var numNameAttempt = 0; numNameAttempt < 6; numNameAttempt++){}

for (var i = 0; i < nameReindeer.length; i++) {

  if (nameReindeer[i] === userInput) {
    alert('You are correct. Santa\'s reindeers are: Dasher, Dancer, Prance, Vixen, Comet, Cupid, Duner, Blixen and Rudolph');
  }else{
    prompt('That was incorrect. Please try again. What\'s the name of one of Santa\'s reindeers?');
  }
}
alert('You have run out of attempts.');


//Step 5: Tally up the # of correct answers.  Display message to compare it to the # of correct out of total questions.
