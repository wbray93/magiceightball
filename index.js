let userName = '';

userName === 'Jane' ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'What is my future career';

console.log(`${userName}${userQuestion}?`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'Programmer';
    	break;
  case 1:
    eightBall = 'Drop Out';
    	break;
  case 2:
    eightBall = 'Retire at 25';
    	break;
  case 3:
    eightBall = 'Dental Hygenist';
    	break;
  case 4:
    eightBall = 'Go home and re-think your life!';
    	break;
  case 5:
    eightBall = 'Uncertain';
    	break;
  case 6:
    eightBall = 'Ask again';
    	break;
  case 7:
    eightBall = 'What your mom tells you!';
    	break;
  case 8:
    eightBall = 'I don\'t get the question';
    	break;
};

console.log(`The eight ball answered: ${eightBall}`);