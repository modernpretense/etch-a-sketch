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

function promptGrid() {
    let gridsizeinput = prompt("Please provide the grid size");
    if (gridsizeinput <= 100) {
        resetCanvas();
        makeGrid(gridsizeinput);
        startColoring();
    } else {
        alert ('Error: Input must be a number below 100');
    }
}

function startColoring() {
    const pixels = document.querySelectorAll('.gridsquare');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('colored');
        });
    });    
}

function resetCanvas() {
    content.textContent = '';
}