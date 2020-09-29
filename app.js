// import functions and grab DOM elements
import { resetGame, updateDom } from './utils.js';

const button = document.getElementById('water-button');
const resetButton = document.getElementById('reset-button');
const removeWaterButton = document.getElementById('remove-water-button');

// initialize state
let ounces = 0;

// set event listeners to update state and DOM
// refactoring wet code means NOTICING and ABSTRACTING what the pieces have IN COMMON then ISOLATING THE DIFFERENCES
removeWaterButton.addEventListener('click', () => {
    ounces--;
    updateDom(ounces);
});

button.addEventListener('click', () => {
    ounces++;
    updateDom(ounces);
});

resetButton.addEventListener('click', () => {
    resetGame(ounces);
});


