// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let l = 'hello', r = 'owu', m = 'com', d = 'ua';
let num1 = 1, num2 = 10, num3 = -999, num4 = 123, num5 = 3.14, num6 = 2.7, num7 = 16;
let bool1 = true, bool2 = false;

console.log(l);
alert(l);
document.write(l);
console.log(r);
alert(r);
document.write(r);
console.log(m);
alert(m);
document.write(m);
console.log(d);
alert(d);
document.write(d);

console.log(num1);
alert(num1);
document.write(num1);
console.log(num2);
alert(num2);
document.write(num2);
console.log(num3);
alert(num3);
document.write(num3);
console.log(num4);
alert(num4);
document.write(num4);
console.log(num5);
alert(num5);
document.write(num5);
console.log(num6);
alert(num6);
document.write(num6);
console.log(num7);
alert(num7);
document.write(num7);

console.log(bool1);
alert(bool1);
document.write(bool1);
console.log(bool2);
alert(bool2);
document.write(bool2);


// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)

let book = {
    name: 'Klara and the Sun',
    pages: 352,
    genre: 'anti-utopia'
}
console.log(book);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

let book2 = {
    name: 'Harry Potter and the Philosopher\'s Stone',
    pages: 352,
    genre: 'fantasy',
    author: ['J. K. Rowling']
}
console.log(book2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Оксана', middleName = 'Василівна', lastName = 'Боцько';
let person;
person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

firstName = prompt('Enter your first name');
console.log(firstName);
middleName = prompt('Enter your middle name');
console.log(middleName);
lastName = prompt('Enter your last name');
console.log(lastName);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [
    {name: 'Klara and the Sun', pages: 352, genre: 'anti-utopia',author: 'Kazuo Ishiguro'},
    {name: 'Harry Potter and the Philosopher\'s Stone', pages: 352, genre: 'fantasy', author:'J. K. Rowling'},
    {name: 'The Viscount Needs A Wife', pages: 424, genre: 'romance',author: 'Jo Beverley'},
    {name: 'Born of Legend', pages: 848, genre: 'fantasy',author: 'Sherrilyn Kenyon'}
]

console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
console.log(books[3]);
