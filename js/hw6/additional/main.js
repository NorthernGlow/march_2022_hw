// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// let cutString = (str, n) => {
//     let arrStr = [];
//     for (let i = 0; i < str.length; i += n) {
//         arrStr.push(str.slice(i, i + n));
//     }
//     return arrStr;
// }
// console.log(cutString('наслаждение', 3));
// document.writeln(cutString('наслаждение',3))

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// let str = 'Каждый охотник желает знать';
// let  delete_characters = (str, lenght) => str.slice(0, lenght)
// console.log(delete_characters(str, 7));
// document.writeln(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) =>str.toUpperCase().replaceAll(' ','-');
// console.log(insert_dash(str));
// document.writeln(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let a = 'apple';
// let charToUpper = (str) => str[0].toUpperCase() + str.substring(1);
// console.log(charToUpper(a));

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let normal = (string) => {
//     let normalString = string
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__',' ');
//     return normalString;
// }
// console.log(normal(n1));
// console.log(normal(n2));
// console.log(normal(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// let rand = (num) => {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
// let array = rand(20);
// console.log(array);
// console.log(array.sort((a, b) => a - b));
// console.log(array.filter(value => value % 2 === 0));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// let str = 'hello. how are you?';
// let capitalize = (string) => {
//     let arrayWords = string.split(' ');
//     let arr = [];
//     let i = 0;
//     for (const arrElement of arrayWords) {
//         arr[i] = arrElement[0].toUpperCase() + arrElement.substring(1);
//         i++;
//     }
//     return arr.join(' ');
// }
// console.log(capitalize(str));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// let email1 = 'someemail@gmail.com';
// let email2 = 'someeMAIL@gmail.com';
// let email3 = 'someeMAIL@i.ua';
// let email4 = 'some.email@gmail.com';
//
// let validator = (email) =>{
//     let emailLower = email.toLowerCase();
//     if (emailLower.includes('@')) {
//         let charAt = emailLower.indexOf('@');
//         if (charAt === 0) {
//             console.log('@ cannot be first char');
//         } else {
//             let charPoint = emailLower.indexOf('.');
//             if ((charPoint - charAt) > 2){
//                 console.log(`Email: ${email} - written correctly`);
//             }else {
//                 console.log('. placed not where needed');
//             }
//         }
//     }else {
//         console.log('This is not an email');
//     }
// }
// validator(email1);
// validator(email2);
// validator(email3);
// validator(email4);

// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// let sortArr = (array) => array.sort((a, b) => b.modules.length - a.modules.length);
// console.log(sortArr(coursesArray));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// let count = (str, stringsearch) => {
//     let count = 0;
//     for (const strElement of str) {
//         if (strElement === stringsearch){
//             count+=1;
//         }
//     }
//     return count;
// }
// console.log(count(str, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// let str = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) => {
//     let arr = str.split(' ');
//     let arrNew = [];
//     for (let i = 0; i < n; i++) {
//         arrNew[i] = arr[i];
//     }
//     return arrNew.join(' ');
// }
// console.log(cutString(str, 5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
//
//
// let books = [
//     {
//         name: 'Klara and the Sun',
//         pages: 352,
//         genre: ['anti-utopia'],
//         author: ['Kazuo Ishiguro']
//     },
//     {
//         name: 'Harry Potter and the Philosopher\'s Stone',
//         pages: 352,
//         genre: ['adventures', 'fantasy'],
//         author: ['J. K. Rowling']
//     },
//     {
//         name: 'The Viscount Needs A Wife',
//         pages: 424,
//         genre: ['regency romance', 'historical romance'],
//         author: ['Jo Beverley']
//     },
//     {
//         name: 'Born of Legend',
//         pages: 848,
//         genre: ['fantasy', 'romane', 'science fiction'],
//         author: ['Sherrilyn Kenyon']
//     },
//     {
//         name: 'Good Omens',
//         pages: 288,
//         genre: ['fantasy', 'comedy', 'horror'],
//         author: ['Terry Pratchett', 'Neil Gaiman']
//     }
// ]
//
// let maxPages = (books) => {
//     let max = books[0].pages;
//     for (let i = 1; i < books.length; i++) {
//         if (books[i].pages > max){
//             max = books[i].pages;
//         }
//     }
//     return books.filter(value => value.pages === max);
// }
// console.log(maxPages(books));
//
// let maxGenre = (books) => {
//     let max = books[0].genre.length;
//     for (let i = 1; i < books.length; i++) {
//         if (books[i].genre.length > max){
//             max = books[i].genre.length;
//         }
//     }
//     return books.filter(value => value.genre.length === max);
// }
// console.log(maxGenre(books));
//
// let maxName = (books) => {
//     let max = books[0].name.length;
//     for (let i = 1; i < books.length; i++) {
//         if (books[i].name.length > max){
//             max = books[i].name.length;
//         }
//     }
//     return books.filter(value => value.name.length === max);
// }
// console.log(maxName(books));
//
// console.log(books.filter(value => value.author.length === 2));
// console.log(books.filter(value => value.author.length === 1));
//
// console.log(books.sort((a, b) => a.pages - b.pages));