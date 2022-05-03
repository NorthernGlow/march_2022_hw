// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// let min = (a, b, c) => {
//     if (a < b && a < c) {
//         return a;
//     } else if (b < a && b < c) {
//         return b;
//     } else if (c < a && c < b) {
//         return c;
//     }
// }
// console.log(min(1, 5, 4));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let max = (a,b,c) =>{
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else if (c > a && c > b) {
//         return c;
//     }
// }
// console.log(max(1, 5, 4));

// - створити функцію яка повертає найбільше число з масиву
//
// let maxArr = (array) =>{
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement>max){
//             max=arrayElement;
//         }
//     }
//     return max;
// }
// console.log(maxArr([12, 4, -5, 88, 4]));

// - створити функцію яка повертає найменьше число з масиву
//
// let minArr = (array) => {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
// console.log(minArr([12, 4, -5, 88, 4]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let sum = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
// console.log(sum([12, 44, -7, -51, 25]));

// - Дано натуральное число n. Выведите все числа от 1 до n.
//
// let number = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// number(25);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
// let AandB = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
// }
// AandB(2, 9);
// AandB(9, 2);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let foo = (array, index) => {
//     if (array.length > index) {
//         let temp = array[index];
//         array[index] = array[index + 1];
//         array[index + 1] = temp;
//         console.log(array);
//     } else {
//         console.log('Error');
//     }
// }
// foo([1, 5, 7, 5,-7], 3);

//????????????????????????????????????????????????????????????????????????????????????????????????7
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// let func = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             for (let j = i; j < array.length; j++) {
//                 array[j] = array[j + 1];
//             }
//             array[array.length - 1] = 0;
//         }
//     }
//     console.log(array);
// }
// func([1, 0, 6, 0, 3]);
// func([0, 1, 2, 3, 4]);
// func([0, 0, 1, 0]);