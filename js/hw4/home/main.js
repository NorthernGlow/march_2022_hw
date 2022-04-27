// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function square1(a, b) {
//     let res = a * b;
//     return res;
// }
//
// let result = square1(12, 2);
// console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function square2(radius) {
//     const pi = 3.14;
//     let res = pi * (radius ** 2);
//     return res;
// }
//
// let result = square2(5);
// console.log(result);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function square3(radius, hight) {
//     const pi = 3.14;
//     let res = 2 * pi * radius * (hight + radius);
//     return res;
// }
//
// let result = square3(5,12);
// console.log(result);

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// function array(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// let arr = [25, 11, 25, 45, 774];
// array(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function func(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos quas totam veniam voluptatibus. Aliquid asperiores cum, ex excepturi fugit minus nihil nisi nulla odio perferendis quisquam rerum ullam voluptatum!';
// func(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function list1(text) {
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
// function func2(text, num) {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// let text = 'Lorem ipsum.';
// func2(text,5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function func3(array) {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// let array = [24, 45, 'ljjj', false, 11.1, 'fdfdf', 11];
// func3(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// function user(user) {
//     for (const userElement of user) {
//         document.write(`<div>${userElement.id} ${userElement.name} ${userElement.age}</div>`)
//     }
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
//     ];
// user(users);

// - створити функцію яка повертає найменьше число з масиву
//
// function minimum(array) {
//     let res = 0;
//     for (const arrayElement of array) {
//         if (typeof arrayElement !== 'number')
//         {
//             throw new Error('You did`t write the number in array');
//         }
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (array[i + 1]) {
//             if (array[i] < array[i + 1]) {
//                 array[i + 1] = array[i];
//                 res = array[i + 1];
//             } else {
//                 res = array[i + 1];
//             }
//         }
//     }
//     return res;
// }
//
// let array = [14, 55, -47, 1, 74, -2, 45, 5];
// let min = minimum(array);
// console.log(min);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// function add(array) {
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
//
// let array = [14, 11, 5, -5, 44];
// let sum = add(array);
// console.log(sum);