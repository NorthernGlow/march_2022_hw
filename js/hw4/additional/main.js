// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function min(a, b, c) {
//     if (a < b && a < c) {
//         return a;
//     } else if (b < a && b < c) {
//         return b;
//     } else if (c < a && c < b) {
//         return c;
//     }
// }
//
// console.log(min(24, -5, 45));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function max(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else if (c > a && c > b) {
//         return c;
//     }
// }
//
// console.log(max(25, -4, 44));

// - створити функцію яка повертає найбільше число з масиву
//
// function arrayMax(array) {
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement > max) {
//             max = arrayElement;
//         }
//     }
//     return max;
// }
//
// console.log(arrayMax([14, 55, -7, 44, -77, 85, -100]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function value(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum / array.length;
// }
//
// console.log(value([14, -55, 45, 12, -2]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// function maxMin(...arguments) {
//     let min = arguments[0], max = arguments[0];
//     for (const argument of arguments) {
//         if (argument > max) {
//             max = argument;
//         }
//         if (argument < min) {
//             min = argument;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// console.log(maxMin(14, 25, -4, -8, 44));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// function arrayRundom(array,num) {
//     for (let i = 0; i < num; i++) {
//         array[i] = Math.round(Math.random()*100);
//     }
//     console.log(array);
// }
// let arr = [];
// arrayRundom(arr,25);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// function arrayRundom(array,num,limit) {
//     for (let i = 0; i < num; i++) {
//         array[i] = Math.round(Math.random()*limit);
//     }
//     console.log(array);
// }
// let arr = [];
// arrayRundom(arr,25,1452);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// function arrayRevers(array) {
//     let rev = [];
//     for (let i = 0; i < array.length; i++) {
//         rev[i] = array[array.length - 1 - i];
//     }
//     console.log(rev);
// }
//
// arrayRevers([1, 2, 3]);

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// function func1(...argument) {
//     let arg = 0;
//     for (const argumentElement of argument) {
//         arg +=1;
//     }
//     if(arg === 1){
//         console.log(argument[0]);
//     }else if (arg ===2){
//         console.log(argument[0] + argument[1]);
//     }else {
//         console.log('ERROR');
//     }
// }
// func1('4', 'mm');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// function arrays(array1, array2) {
//     let array3 = [];
//     if (array1.length === array2.length) {
//         for (let i = 0; i < array1.length; i++) {
//             array3[i] = array1[i] + array2[i];
//         }
//     } else {
//         console.log('Arrays have different lengths');
//     }
//     return array3;
// }
//
// let arr1 = [14, '5', 'dd', 11];
// let arr2 = [14, '15', '1dd', 11];
// console.log(arrays(arr1, arr2));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// function keys(array) {
//     let arrKey = [];
//     for (const arrayElement of array) {
//         for (const arrayElementKey in arrayElement) {
//             arrKey.push(arrayElementKey);
//         }
//     }
//     console.log(arrKey);
// }
// let arr =  [{name: 'Dima', age: 13}, {model: 'Camry'}];
// keys(arr);

//?????????????????????????????????????????????????????????????????????????????????7
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function keysValue(array) {
//     let arrKey = [];
//     for (let i = 0; i < array.length; i++) {
//         for (const arrayElementKey in array[i]) {
//             arrKey.push(array[i].arrayElementKey);
//         }
//     }
//     console.log(arrKey);
// }
// let arr =  [{name: 'Dima', age: 13}, {model: 'Camry'}];
// keysValue(arr);