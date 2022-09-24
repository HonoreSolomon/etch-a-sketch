const container = document.querySelector('.container');
const size = 16;

const getSize = () => {
  const input = document.querySelector('.btns input');
  const size = input.value;
  return size;
};

const makeRows = (rows, cols) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    const cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  }
};

makeRows(size, size);
