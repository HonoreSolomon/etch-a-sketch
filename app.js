const container = document.querySelector('.container');
const size = 16;
let color = 'black';
const btns = document.querySelectorAll(
  '.btns-color button'
);

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
const rainbow = () =>
  '#' +
  ((Math.random() * 0xffffff) << 0)
    .toString(16)
    .padStart(6, '0');
function setColor() {
  switch (color) {
    case 'black':
      for (const div of divs) {
        div.style.backgroundColor = '#fff';
      }
      console.log('black');
      break;
    case 'white':
      for (const div of divs) {
        div.style.backgroundColor = '#000';
      }
      console.log('white');
      break;
    case 'Rainbow':
      for (const div of divs) {
        div.style.backgroundColor = '#fff';
        this.style.setProperty('--rainbow', rainbow());
        console.log('rainbow');
      }
      break;
    case 'reset':
      return color === ('black' || 'rainbow')
        ? (div.style.backgroundColor = '#fff')
        : (div.style.backgroundColor = '#000');
      console.log('reset');
  }
  color = this.value;
  console.log(color);
}

function changeColor() {
  this.classList.add(`${color}`);
}
makeRows(size, size);
const divs = document.querySelectorAll('.grid-item');

for (const btn of btns) {
  btn.addEventListener('click', setColor);
}

for (const div of divs) {
  div.addEventListener('mouseover', changeColor);
}
