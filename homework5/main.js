// Методы объектов и контекст исполнения функции

// 1 Создайте объект calculator с методами:
// read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// sum() возвращает сумму этих двух значений
// multi() возвращает произведение этих двух значений
// diff() возвращает разницу
// div() возвращает частное

const calculator = {
  read() {
    this.x = +prompt("введите X");
    this.y = +prompt("введите Y");
  },
  sum() {
    return this.x + this.y;
  },
  multi() {
    return this.x * this.y;
  },
  diff() {
    return this.x - this.y;
  },
  div() {
    return this.x / this.y;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());

//2 Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.

const coffeeMachine = {
  message: "Your coffee is ready!",
  start() {
    return setTimeout(() => alert(this.message), 3000);
  },
};

coffeeMachine.start();

//3 Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. Используйте концепцию chaining для создания цепочки вызовов.

const counter = {
  value: 0,
  inc() {
    this.value++;
    return this;
  },
  dec() {
    this.value--;
    return this;
  },
  getValue() {
    return this.value;
  },
};

var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); // 1

// 4. Есть следующий код:
var country = {
  name: "Ukraine",
  language: "ukrainian",
  capital: {
    name: "Kyiv",
    population: 2907817,
    area: 847.66,
  },
};

function format(start, end) {
  console.log(start + this.name + end);
}

// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

format.call(country, "", ""); // Ukraine
format.apply(country, ["[", "]"]); // [Ukraine]
format.call(country.capital, "", ""); // Kyiv
format.apply(country.capital, ["", ""]); // Kyiv
format.apply(country.blabla, [""]); // undefined

// 5. Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

const user = {
  name: "Ruslan",
};

// function format(start, end) {
//   console.log(start + this.name + end);
// }                                                      // такая же функция выше создана?

// Реализуйте решение текущего задания используя метод bind().

const formatUser = format.bind(user, "", "");
formatUser();

// 6. Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

const concat = (strOne) => (separator) => (strTwo) =>
  strOne + separator + strTwo;

const hello = concat("Hello")(" ");

console.log(hello("World")); // Hello World
console.log(hello("John")); // Hello John

// Level Up
// Рекурсия

// 7. Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

function cubeLoop(value) {
  let result = 1;
  for (let i = 0; i < 3; i++) {
    result *= value;
  }
  return result;
}

console.log(cubeLoop(2)); // 8

function cubeRec(value, n) {
  if (n == 1) {
    return value;
  } else {
    return value * cubeRec(value, n - 1);
  }
}

console.log(cubeRec(2, 3)); // 8

// 8. Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

function sum(...args) {
  if (args.length === 0) return 0;
  return args[0] + sum(...args.slice(1));
}

console.log(sum(1, 2, 3, 4, 5)); // 15
