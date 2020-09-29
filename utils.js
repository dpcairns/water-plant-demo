/*
ways to get variables from the other file:

1) try importing (cause state issues)
2) copy and paste (WET)
3) pass this stuff in as arguments/parameters
*/

const image = document.getElementById('plant-image');
const ouncesSpan = document.getElementById('ounces-span');
const healthSpan = document.getElementById('health-span');

export function resetGame(ounces, ouncesSpan, image, healthSpan) {
    ounces = 0;

    ouncesSpan.textContent = ounces;
    image.src = 'assets/dry.png';
    healthSpan.textContent = 'Oh, jeeze. That plant needs some water, huh?';
}

export function updateDom(ounces) {
    ouncesSpan.textContent = ounces;
    //      1) Check if the current ounces has reached a certain threshold. If so:
    const tooDry = 5;
    const tooWet = 20;
    const resetLimit = 30;

    if (ounces < tooDry) {
        image.src = 'assets/dry.png';
        healthSpan.textContent = 'Oh, jeeze. That plant needs some water, huh?';
    } else if (ounces >= tooDry && ounces < tooWet) {
        image.src = 'assets/healthy.png';
        healthSpan.textContent = 'Nice healthy plant! Just perfect.';
    } else if (ounces >= tooWet && ounces < resetLimit) {
        image.src = 'assets/over.png';
        healthSpan.textContent = 'Oh no. You ruined a good thing.';
    } else if (ounces >= resetLimit) {
        resetGame(ounces);
    }
}