// Массивы и объекты

// 1.Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

let arr = [1, 2, 3, "a", "b", "c", "4", "5", "6"];

function arraySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i]) === true) {
      continue;
    } else {
      sum += Number(array[i]);
    }
  }
  alert(sum);
}
arraySum(arr);

// 2. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’

let arr2 = ["AngularJS", "jQuery"];

// 3. Добавьте в начало массива значение ‘Backbone.js’

arr2.unshift("Backbone.js");
console.log(arr2);

// 4. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’

arr2.push("React.js", "Vue.js");
console.log(arr2);

// 5. Добавьте в массив значение ‘CommonJS’ вторым элементом

arr2.splice(1, 0, "CommonJS");
console.log(arr2);

// 6. Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

let x = arr2.indexOf("jQuery");
let z = arr2.splice(x, 1);

alert(`${z} - это здесь лишнее`);

console.log(arr2);

// 7. Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

let str = "Как однажды Жак звонарь сломал фонарь головой"; // => Как Жак звонарь однажды сломал головой фонарь

let arr3 = str.split(" "); // разбиваю строку на  маасив слов
let arr4 = arr3.slice(); // делаю копию массива, с которой буду работать

let index1 = arr3.indexOf("однажды"); // вычисляю индексы 2 слов, которые надо сместить
let index5 = arr3.indexOf("фонарь");

// console.log(index1, index5); // 1 5

arr4.splice(4, 0, arr3[index1]); // ставлю слово "однажды" на новое место
arr4.splice(1, 1); // удаляю слово "однажды" с прежней позции
arr4.splice(5, 1); // удаляю слово "фонарь"
arr4.push(arr3[index5]); // пушу слово фонарь на нужное место

let newStr = arr4.join(" ");

alert(str);
alert(newStr);

// 8. Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

let person = {
  firstName: "Ivan",
  secondName: "Ivanov",
  age: 30,
};

let userKey = prompt("Введите свойство");

if (userKey in person) {
  alert(person[userKey]);
} else {
  if (userKey) {
    person[userKey] = prompt(
      "",
      "Такого свойства еще нет. Укажите значения свойства"
    );
    alert("Свойство установлено");
  }
}

console.log(person);

// 9. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

let phone = {};

phone.brand = prompt("Введите бренд"); // phone.brand = prompt() - без вспомогательных переменных
phone.model = prompt("Введите модель");
phone.resolution = prompt("Введите расширение");
phone.color = prompt("Введите цвет");

person.phone = phone;

console.log(person);

// 10. Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let arr5 = [];

for (;;) {
  let userNumber = prompt("Введите число");

  if (!isNaN(+userNumber) && userNumber) arr5.push(+userNumber);
  else if (userNumber) alert("Вы ввели не число!");
  else break;
}

let total = arr5.reduce((acc, item) => (acc += item), 0);

alert("Обащая сумма чисел:" + total);

// 11. Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения

let arr6 = "";
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    arr6 += j * i + " ";
    if (j >= 9) {
      arr6 += " \n";
    }
  }
}
console.log(arr6);
