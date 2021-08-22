// Функции

// 1. Напишите функцию max, которая сравнивает два числа и возвращает большее:
// console.log( max(0, -1) ); // 0

function max(num1, num2) {
  let maxNum = 0;

  if (num1 > num2) {
    maxNum = num1;
    return maxNum;
  } else {
    maxNum = num2;
    return maxNum;
  }
}

console.log(max(0, -1));

// 2. Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:
// console.log( min(0, -1, 100, 500, 100500) ); // -1

function min() {
  let minNum = Infinity;

  for (let i in arguments) {
    if (arguments[i] < minNum) {
      minNum = arguments[i];
    }
  }
  return minNum;
}

console.log(min(0, -1, 100, 500, 100500));

// 3. Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:
// - Отфильтруйте пользователей младше 18 лет
// - Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// - Сформируйте новый массив, который содержит только полное имя пользователей

let users = [
  (person1 = {
    firstname: "Иван",
    lastname: "Иванов",
    age: 30,
  }),
  (person2 = {
    firstname: "Петр",
    lastname: "Петров",
    age: 13,
  }),
  (person3 = {
    firstname: "Николай",
    lastname: "Сидоров",
    age: 33,
  }),
  (person4 = {
    firstname: "Ольга",
    lastname: "Иванова",
    age: 18,
  }),
  (person5 = {
    firstname: "Татьяна",
    lastname: "Петрова",
    age: 22,
  }),
  (person6 = {
    firstname: "Анна",
    lastname: "Соколова",
    age: 43,
  }),
  (person7 = {
    firstname: "Иван",
    lastname: "Николаенко",
    age: 12,
  }),
  (person8 = {
    firstname: "Виктор",
    lastname: "Орлов",
    age: 7,
  }),
  (person9 = {
    firstname: "Максим",
    lastname: "Воронов",
    age: 76,
  }),
  (person10 = {
    firstname: "Николай",
    lastname: "Конев",
    age: 17,
  }),
];

let result1 = users.filter(function (el) {
  return el.age < 18;
});
console.log(result1);

let result2 = users.forEach(function (el) {
  return (users["fullname"] = `${users.firstname} + ${users.lastname}`);
});
console.log(result2);
// 4. Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.

// 5. Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

// 6. Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.
// var source = {firstname: 'Tom', age: 10}
// var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

// 7. Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате:
// 				<имя_автора>, <дата>
// 				<текст_сообщения>

// setComment('2016-11-02', 'Everything is ok', 'John');

// John, 2016-12-22
// Everything is ok

// setComment('2016-11-02', 'You could do it better!');

// Anonymous, 2016-12-22
// You could do it better!
