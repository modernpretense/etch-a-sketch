// Etch-a-Sketch Javascript

const content = document.querySelector('#content');

//const gridsquare = document.createElement('div').classList.add('gridsquare');

function makeSquare() {
    const make = document.createElement('div');
    make.classList.add('gridsquare');
    content.appendChild(make);
};

function makeGrid(number) {
    for (let i = 0; i < Math.pow(number,2); i++) {
        makeSquare();
    }
};

makeGrid(16);