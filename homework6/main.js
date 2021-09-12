// Задача 1
// 1. Создайте h2 c текстом "События"
// 2. Создайте блок div размером 400px на 400px
// 3. Создайте над блоком текст с отображением координат по примеру X: 150 Y: 120
// 4. Добавьте внизу блока еще один текст с содержанием "Координаты внутри блока: х 180, у 200"
// 5. При движении мышки над блоком должны обновляться данные о расположении курсора и отображаться координаты в тексте над блоком соответственно осям х и у по отношению к странице
// 6. Внизу должны отображаться текущие координаты по x и y, но по отношению блока

document.body.style.background = "#61B4CF";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";

const events = document.createElement("h2");
events.innerHTML = "События";
document.body.append(events);

const field = document.createElement("div");
field.className = "field";
field.style.height = "400px";
field.style.width = "400px";
field.style.border = "solid";
field.style.color = "#024E68";
field.style.backgroundColor = "white";
document.body.append(field);

const cursorOut = document.createElement("p");
cursorOut.innerHTML = "Координаты снаружи блока:";
field.before(cursorOut);

const cursorIn = document.createElement("p");
cursorIn.innerHTML = "Координаты внутри блока:";
document.body.append(cursorIn);

window.addEventListener("mousemove", (e) => {
  cursorOut.innerHTML = `Координаты снаружи блока: X: ${e.clientX} Y: ${e.clientY}`;
});

document.querySelector(".field").addEventListener("mousemove", (e) => {
  cursorIn.innerHTML = `Координаты внутри блока: X: ${e.clientX} Y: ${e.clientY}`;
});

// Задача 2

// 1. Создайте h2 c текущим временем, к примеру " Время: 13:34:45";
// 2. Примените setInterval для отображения времени каждую секунду, чтобы были идущие чаcы
// 3. Создайте кнопки Start и Stop
// 4. Навесьте обработчики события на клик.
// 5. При клике на Stop время должно остановиться
// 6. При клике на Start время должно продолжить свой ход (скачек времени, это нормально)

const time = document.createElement("h2");
time.id = "clock";
document.body.append(time);

function updateTime(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }
}

function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = `Время: ${hour}:${min}:${sec}`;
}

let timer = setInterval(currentTime, 1000);

const startButton = document.createElement("button");
startButton.innerHTML = "Start";
startButton.style.height = "50px";
startButton.style.width = "100px";
startButton.style.border = "solid";
startButton.style.backgroundColor = "024E68";
document.body.append(startButton);

startButton.addEventListener("click", () => {
  clearInterval(timer);
  timer = setInterval(currentTime, 1000);
});

const stopButton = document.createElement("button");
stopButton.innerHTML = "Stop";
stopButton.style.height = "50px";
stopButton.style.width = "100px";
stopButton.style.border = "solid";
stopButton.style.backgroundColor = "024E68";
document.body.append(stopButton);

stopButton.addEventListener("click", () => {
  clearInterval(timer);
});
