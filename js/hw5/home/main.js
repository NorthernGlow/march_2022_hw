// Все стірлочними!!!!!!!!!

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let mid = (array) => {
//     let sum = 0;
//     let i = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//         i += 1;
//     }
//
//     return sum / i;
// }
// array = [12,55,-4,44,-57];
// console.log(mid(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let value = (...arguments) => {
//     let min = arguments[0], max = arguments[0];
//     for (const item of arguments) {
//         if (item < min) {
//             min = item;
//         }
//         if (item > max) {
//             max = item;
//         }
//     }
//     console.log(`Max: ${max}`);
//     return min;
// }
//
// console.log(`Min: ${value(12, 44, 5, -7, 55, -44)}`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let arr = (array, num) => {
//     for (let i = 0; i < num; i++) {
//         array[i] = Math.round(Math.random() * 100);
//     }
//     console.log(array);
// }
// let array = [];
// arr(array, 25);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let arr2 = (array, num, limit) => {
//     for (let i = 0; i < num; i++) {
//         array[i] = Math.round(Math.random() * limit);
//     }
//     return array;
// }
// let array = [];
// console.log(arr2(array, 25, 250));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let arrRev = (array) => {
//     let arrRev = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         arrRev.push(array[i]);
//     }
//     return arrRev;
// }
// let array = [24, 0, 44, -4.4, 44, 57.1];
// console.log(arrRev(array));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
//
// let user = (users) => {
//     let arr = [];
//     for (let i = users.length - 1; i >= 0; i--) {
//         arr.push(users[i]);
//     }
//     return arr;
// }
//
// let users = [
//     {
//         id: 1,
//         name: 'Vasil',
//         age: 25
//     },
//     {
//         id: 2,
//         name: 'Katya',
//         age: 15
//     }
// ];
//
// console.log(user(users));

//     Переробити на стрілочні функції з попереднього дз

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let square1 = (a, b) => a * b;
// console.log(square(12, 2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let square2 = (radius) => 3.14 * (radius ** 2);
// console.log(square2(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let square3 = (radius, hight) => 2 * 3.14 * radius * (hight + radius);
// console.log(square3(5, 12));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let array = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// let arr = [25, 11, 25, 45, 774];
// array(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let func = (text) => document.write(`<p>${text}</p>`);
// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos quas totam veniam voluptatibus. Aliquid asperiores cum, ex excepturi fugit minus nihil nisi nulla odio perferendis quisquam rerum ullam voluptatum!';
// func(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let list1 = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// let text = 'Lorem ipsum dolor.';
// list1(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let list2 = (text, num) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// let text = 'text';
// list2(text,5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let list3 = (array) =>{
//     document.write(`<ol>`);
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ol>`);
// }
// let array = [24, 45, 'ljjj', false, 11.1, 'fdfdf', 11];
// list3(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let user = (users) => {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// }
// let users = [
//     {
//         id: 1,
//         name: 'Vasil',
//         age: 25
//     },
//     {
//         id: 2,
//         name: 'Katya',
//         age: 15
//     },
//     {
//         id: 3,
//         name: 'Masha',
//         age: 45
//     },
//     {
//         id: 4,
//         name: 'Valya',
//         age: 4
//     }
// ];
// user(users);

// - створити функцію яка повертає найменьше число з масиву
//
// let minimum = (array) => {
//     for (const arrayElement of array) {
//         if (typeof arrayElement !== 'number') {
//             throw new Error('You did`t write the number in array');
//         }
//     }
//     let res = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < res) {
//             res = arrayElement;
//         }
//     }
//     return res;
// }
// let array = [14, 55, -47, 1, 74, -2, 45, 5];
// console.log(minimum(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let add = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'number') {
//             sum += array[i];
//         } else {
//             throw new Error('You did`t write the number in array');
//         }
//     }
//     return sum;
// }
// let array = [14, 11, 5, -5, 44];
// console.log(add(array));




