// 1.	Создайте три переменные. Присвойте первой переменной числовое значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Выведите на экран все три.

let firstVariable = 2;
let secondVariable = firstVariable * 3;
let thirdVariable = firstVariable + secondVariable;

console.log(firstVariable);
console.log(secondVariable);
console.log(thirdVariable);

// 2.	Создайте переменные firstName и lastName для хранения имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие “What’s up John Doe”.

let firstName = prompt("What's your first name?", "John");
let lastName = prompt("What's your last name?", "Doe");

console.log(`What's up ${firstName} ${lastName}?`);

// 3.	Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.

let x = +prompt("Enter the number 'x'");
let y = +prompt("Enter the number 'y'");

let multiplication = x * y;
let division = x / y;
let subtraction = x - y;
let addition = x + y;

alert(`multiplication 'x' and 'y' is: ${multiplication}`);
alert(`division 'x' and 'y' is: ${division}`);
alert(`subtraction 'x' and 'y' is: ${subtraction}`);
alert(`addition 'x' and 'y' is: ${addition}`);

// 4.	Напишите в переменных формулу для расчета з/п за июль с учетом, что количество рабочий часов, количество рабочих дней в неделе и рейт за час – переменные значения и читаются из prompt.(Просчитывать какой это месяц, 30 или 31 день не нужно).

let workingHours = +prompt("Your working hours?");
let workingDays = +prompt("Your working days?");
let rate = +prompt("Your rate?");

let salary = rate * workingHours * workingDays;

console.log(`Your salary: ${salary}$`);

// 5.	Напишите программу, которая без использования оператора сравнения определяет, является ли число, введенное пользователем, нечётным.

let num = +prompt("Enter the number");

num % 2 ? alert("Odd number!") : alert("Even number!");

// 6.	Напишите программу, которая проверяет, является ли значение, введенное пользователем, числом.

let value = prompt("Enter the value");

let res = Number.isNaN(+value)
  ? console.log("is not a number")
  : console.log("is a number");

// 7.	Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения.

let random = parseInt(Math.random() * 100);
let userValue = prompt("Enter the number");

if (random < userValue) {
  alert(`Random value: ${random} < your value: ${userValue}`);
} else {
  alert(`Random value: ${random} > your value: ${userValue}`);
}
// 8.	Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end». Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать. С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str. Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в переменной. Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать » и то что вам нравится изучать (примените для этого обратные кавычки ` `). Отобразите результат в модальном окне.

let str = prompt("", "Мне нравится изучать Front-end");
let myStr = prompt("Что Вам нравится изучать?");

let find = str.indexOf("F");

let search = str.includes(myStr);
console.log(`Совпадение: ${search}`);

let newStr = str.slice(0, find);

let result = `${newStr}${myStr}`;

alert(result);
