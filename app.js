/* Imports */

/* Get DOM Elements */
const submitBtn = document.getElementById('submit-btn');
const againBtn = document.getElementById('again-btn');
const promptSection = document.getElementById('prompt-section');
const answerSection = document.getElementById('answer-section');
const answerP = document.getElementById('answer-p');

/* State */

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

/* Events */

submitBtn.addEventListener('click', () => {
    console.log('submit clicked');
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
