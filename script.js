// Etch-a-Sketch Javascript

// Grid generation

const content = document.querySelector('#content');

let gridsize;

function makeLine(num) {
    const line = document.createElement('div');
    line.classList.add('gridline');
    line.id = (`line${num}`);
    content.appendChild(line);
    for (let i = 0; i < gridsize; i++) { 
        makeSquare(line.id);
    };
}

function makeSquare(lineinput) {
    const make = document.createElement('div');
    make.classList.add('gridsquare');
    const lineid = document.getElementById(lineinput);
    lineid.appendChild(make);
}

function makeGrid(number) {
    gridsize = number;
    for (let i = 0; i < number; i++) {
        makeLine(i);
    }
}

makeGrid(16);

// Coloring logic

const pixels = document.querySelectorAll('.gridsquare');

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', () => {
        pixel.classList.add('colored');
    });
}); 