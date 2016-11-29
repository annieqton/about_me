'use strict';

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
