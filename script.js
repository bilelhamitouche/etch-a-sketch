
// gridSize
let gridSize = 16;

// create the grid
function createGrid(size) {
    let columns = [];
    let cells = [];
    grid = document.querySelector('.grid');
    for(let i = 0; i < size; i++) {
	columns[i] = document.createElement('div');
	columns[i].classList.add('column');
	for(let j = 0; j < size; j++) {
	    cells[j] = document.createElement('div');
	    cells[j].classList.add('cell');
	    columns[i].appendChild(cells[j]);
	}
	grid.appendChild(columns[i]);
    }
}

window.onLoad = createGrid(gridSize);

let color = '#282a36';

// Random color function
function setRandom() {
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}

// Clear grid function
function clearGrid() {
    document.querySelectorAll('.cell').forEach((item) => {
	item.style.backgroundColor = '#f8f8f2';
    })
}

// Event listener for buttons
const normal = document.querySelector('.normal');
normal.addEventListener('click', () => {
    color = '#282a36';
});

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
    color = '#f8f8f2';
});

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', () => {
    setRandom();
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    clearGrid();
});

const picker = document.querySelector('.picker');
picker.addEventListener('change', () => {
    color = picker.value;
})

// Event listener for hover effect
const gridList = document.querySelectorAll('.cell');
for(let i = 0; i < gridList.length; i++) {
    gridList[i].addEventListener('mouseover', () => {
	gridList[i].style.backgroundColor = color;
    })
}
