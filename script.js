
// gridSize
let gridSize = 16;
let size = 16;

// create the grid
function createGrid(gridsize) {
    let columns = [];
    let cells = [];
    const grid = document.querySelector('.grid');
    for(let i = 0; i < gridsize; i++) {
	columns[i] = document.createElement('div');
	columns[i].classList.add('column');
	for(let j = 0; j < size; j++) {
	    cells[j] = document.createElement('div');
	    cells[j].classList.add('cell');
	    columns[i].appendChild(cells[j]);
	}
	grid.appendChild(columns[i]);
    }

    // Event listener for hover effect
    const gridList = document.querySelectorAll('.cell');
    for(let i = 0; i < gridList.length; i++) {
        gridList[i].addEventListener('mouseover', () => {
        	gridList[i].style.backgroundColor = color;
        })
    }
}


let color = '#1a1a1d';

// Random color function
function setRandom() {
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}

// Clear grid function
function clearGrid() {
    document.querySelectorAll('.cell').forEach((item) => {
	item.style.backgroundColor = '#6f2232';
    })
}

function removeGrid() {
    const grid = document.querySelector('.grid');
    for(let i = 0; i < size; i++) {
	grid.removeChild(grid.firstChild);
    }

    // Remove event listeners 
    const gridList = document.querySelectorAll('.cell');
    for(let i = 0; i < gridList.length; i++) {
        gridList[i].removeEventListener('mouseover', () => {
        	gridList[i].style.backgroundColor = color;
        })
    }
}

function changeGridSize() {
    createGrid(size);
}

// Creating the grid on page load
window.onLoad = createGrid(gridSize);

// Event listener for buttons
const normal = document.querySelector('.normal');
normal.addEventListener('click', () => {
    color = '#282a36';
});

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
    color = '#6f2232';
});

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', () => {
    setRandom();
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    clearGrid();
});

const resize = document.querySelector('.size');
resize.addEventListener('click', () => {
    removeGrid();
    size = prompt('Input a new size: ');
    if (size > 100) {
	size = 100;
    }
    changeGridSize();
})

const picker = document.querySelector('.picker');
picker.addEventListener('change', () => {
    color = picker.value;
})

