const container = document.querySelector('.container');
let color = 'black';
const btns = document.querySelectorAll(
  '.btns-color button'
);

const setSize = () => {
  removeRows();
  const input = document.querySelector('.btns input');
  let size = input.value;
  makeRows(size, size);
  divs = document.querySelectorAll('.grid-item');
  divEvent();
};

const makeRows = (rows, cols) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-item');
    container.appendChild(cell).className = 'grid-item';
  }
};
const randomColor = () =>
  '#' +
  ((Math.random() * 0xffffff) << 0)
    .toString(16)
    .padStart(6, '0');

const reset = () =>
  divs.forEach((div) =>
    div.style.setProperty('background-color', '')
  );
function etchColor(buttonColor) {
  color = buttonColor;
}

const removeRows = () => {
  divs = document.querySelectorAll('.grid-item');
  divs.forEach((div) => div.remove());
};
function divEvent() {
  for (const div of divs) {
    div.addEventListener('mouseover', changeColor);
  }
}

function setColor() {
  switch (this.value) {
    case 'black':
      console.log(this.value);
      etchColor(this.value);
      break;
    case 'white':
      console.log(this.value);
      etchColor(this.value);
      break;
    case 'random':
      console.log(this.value);
      etchColor(randomColor());

      break;
    case 'reset':
      console.log(this.value);
      reset();
      break;
  }
}

function changeColor() {
  this.style.setProperty('background-color', color);
}
makeRows(16, 16);
let divs = document.querySelectorAll('.grid-item');
const sizeBtn = document.querySelector('.btns-size button');
sizeBtn.addEventListener('click', setSize);

for (const btn of btns) {
  btn.addEventListener('click', setColor);
}
divEvent();
