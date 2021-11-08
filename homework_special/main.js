const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//звуки
const LOOP = new Audio();
LOOP.src = "sound/loop.wav";
const HIT = new Audio();
HIT.src = "sound/hit.wav";
const CATCH = new Audio();
CATCH.src = "sound/catch.wav";

// LOOP.play();

//размер квадратика
const SIZE = 10;
//ширина поля
const ROW_COUNT = 40;
//высота поля
const COLUMN_COUNT = 20;
// стандартная скорость падения
let speed = 130;
console.log(`speed: ${speed}`);
//объявление координат
let x, y;
//таймер
let timer;
//счетчик пойманных
let countCatch = 0;
//счетчик упущенных
let countLost = 0;

//генерация позции квадратика
function generatePosition() {
  // генерация случайного X
  x = Math.floor(ROW_COUNT * Math.random());
  // генерация случайного Y (*/2 опция для генерации падения не только сверху поля)
  y = Math.floor((COLUMN_COUNT / 2) * Math.random());
  ctx.fillStyle = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  // ctx.fillStyle = "rgb(0, 0, 0)";
}
generatePosition();

//отрисовка поля
function drawSquare() {
  //очистка поля
  ctx.clearRect(0, 0, ROW_COUNT * SIZE, COLUMN_COUNT * SIZE);
  //отрисовка квадратика на сгенерированной позиции
  ctx.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);
  document.getElementById("catch").innerText = `ПОЙМАНО: ${countCatch}`;
  document.getElementById("lost").innerText = `УПУЩЕНО: ${countLost}`;
}

//рандомные цвета
function randomColor() {
  return Math.floor(Math.random() * 277);
}

//анимация падения
function offsetY() {
  //обнуление позиции
  if (y === COLUMN_COUNT) {
    HIT.play();
    generatePosition();
    //увеличение счетчика пропущенных
    countLost++;
    //смещение
  } else {
    y++;
  }
  drawSquare();
}

function fallSquare() {
  drawSquare();
  timer = setInterval(offsetY, speed);
}

fallSquare();

function getSquarePosition(clickX, clickY) {
  const row = Math.floor(clickX / SIZE);
  const column = Math.floor(clickY / SIZE);
  return { row, column };
}

//кнопки
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
  clearInterval(timer);
  timer = setInterval(offsetY, speed);
});

const stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", () => {
  clearInterval(timer);
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  countLost = 0;
  countCatch = 0;
  generatePosition();
});

const lowButton = document.getElementById("low-button");
lowButton.addEventListener("click", () => {
  speed = 200;
  console.log(`speed: ${speed}`);
  drawSquare();
});

const midButton = document.getElementById("mid-button");
midButton.addEventListener("click", () => {
  speed = 130;
  console.log(`speed: ${speed}`);
  drawSquare();
});

const highButton = document.getElementById("high-button");
highButton.addEventListener("click", () => {
  speed = 65;
  console.log(`speed: ${speed}`);
  drawSquare();
});

//обработка клика
let elem = document.getElementById("canvas"),
  elemLeft = elem.offsetLeft,
  elemTop = elem.offsetTop,
  context = elem.getContext("2d"),
  elements = [];

canvas.addEventListener("click", function (event) {
  let targetX = event.pageX - elemLeft;
  let targetY = event.pageY - elemTop;
  const { row, column } = getSquarePosition(targetX, targetY);
  console.log("x, y: ", x, y);
  console.log("row, column: ", row, column);
  if (x === row && y === column) {
    CATCH.play();
    generatePosition();
    countCatch++;
    drawSquare();
  }
});

// function buttonsLock(element) {
//   if (element.hasAttribute("disabled") == true) {
//     // element.removeAttribute("disabled");
//     console.log(есть);
//   } else {
//     element.setAttribute("disabled", "true");
//   }
// }
