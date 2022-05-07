// - Знайти та вивести довижину настипних стрінгових значень
// console.log('hello world'.length);
// console.log(('lorem ipsum'.length));
// console.log(('javascript is cool'.length));

// - Перевести до великого регістру наступні стрінгові значення
// console.log(('hello world'.toUpperCase()));
// console.log(('lorem ipsum'.toUpperCase()));
// console.log(('javascript is cool'.toUpperCase()));

// - Перевести до нижнього регістру настипні стрінгові значення
// console.log(('HELLO WORLD'.toLowerCase()));
// console.log(('LOREM IPSUM'.toLowerCase()));
// console.log(('JAVASCRIPT IS COOL'.toLowerCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// let stringToarray = (string) => string.split(' ');
// let arr = stringToarray(str);
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(arr.map((value) => value + ''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11, 21, 3];
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         array.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         array.sort((a, b) => b - a)
//     } else {
//         console.log('Error');
//     }
//     return array;
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value
// :
//     '', // '6'-'10', 'ace','jack','queen','king','joker'
//         color
// :
//     '', // 'red','black'
// }
//
// let cards = [{
//     cardSuit: 'spade',
//     value: '6',
//     color: 'black'
// }, {
//     cardSuit: 'spade',
//     value: '7',
//     color: 'black'
// }, {
//     cardSuit: 'spade',
//     value: '8',
//     color: 'black'
// }, {
//     cardSuit: 'spade',
//     value: '9',
//     color: 'black'
// }, {
//     cardSuit: 'spade',
//     value: '10',
//     color: 'black'
// }, {
//     cardSuit: 'spade',
//     value: 'jack',
//     color: 'black'
// }, {
//     cardSuit: 'spade',
//     value: 'queen',
//     color: 'black'
// }, {
//     cardSuit: 'spade',
//     value: 'king',
//     color: 'black'
// }, {
//     cardSuit: 'spade',
//     value: 'ace',
//     color: 'black'
// }, {
//     cardSuit: 'clubs',
//     value: '6',
//     color: 'black'
// }, {
//     cardSuit: 'clubs',
//     value: '7',
//     color: 'black'
// }, {
//     cardSuit: 'clubs',
//     value: '8',
//     color: 'black'
// }, {
//     cardSuit: 'clubs',
//     value: '9',
//     color: 'black'
// }, {
//     cardSuit: 'clubs',
//     value: '10',
//     color: 'black'
// }, {
//     cardSuit: 'clubs',
//     value: 'jack',
//     color: 'black'
// }, {
//     cardSuit: 'clubs',
//     value: 'queen',
//     color: 'black'
// }, {
//     cardSuit: 'clubs',
//     value: 'king',
//     color: 'black'
// }, {
//     cardSuit: 'clubs',
//     value: 'ace',
//     color: 'black'
// }, {
//     cardSuit: 'diamond',
//     value: '6',
//     color: 'red'
// }, {
//     cardSuit: 'diamond',
//     value: '7',
//     color: 'red'
// }, {
//     cardSuit: 'diamond',
//     value: '8',
//     color: 'red'
// }, {
//     cardSuit: 'diamond',
//     value: '9',
//     color: 'red'
// }, {
//     cardSuit: 'diamond',
//     value: '10',
//     color: 'red'
// }, {
//     cardSuit: 'diamond',
//     value: 'jack',
//     color: 'red'
// }, {
//     cardSuit: 'diamond',
//     value: 'queen',
//     color: 'red'
// }, {
//     cardSuit: 'diamond',
//     value: 'king',
//     color: 'red'
// }, {
//     cardSuit: 'diamond',
//     value: 'ace',
//     color: 'red'
// }, {
//     cardSuit: 'diamond',
//     value: 'joker',
//     color: 'red'
// }, {
//     cardSuit: 'heart',
//     value: '6',
//     color: 'red'
// }, {
//     cardSuit: 'heart',
//     value: '7',
//     color: 'red'
// }, {
//     cardSuit: 'heart',
//     value: '8',
//     color: 'red'
// }, {
//     cardSuit: 'heart',
//     value: '9',
//     color: 'red'
// }, {
//     cardSuit: 'heart',
//     value: '10',
//     color: 'red'
// }, {
//     cardSuit: 'heart',
//     value: 'jack',
//     color: 'red'
// }, {
//     cardSuit: 'heart',
//     value: 'queen',
//     color: 'red'
// }, {
//     cardSuit: 'heart',
//     value: 'king',
//     color: 'red'
// }, {
//     cardSuit: 'heart',
//     value: 'ace',
//     color: 'red'
// }, {
//     value: 'joker',
//     color: 'black'
// }, {
//     value: 'joker',
//     color: 'red'
// }];
// console.log(cards.filter(value => value.cardSuit === 'spade' && value.value === 'ace'));
// console.log(cards.filter(value => value.value === '6'));
// console.log(cards.filter(value => value.color === 'red'));
// console.log(cards.filter(value => value.cardSuit === 'diamond'));
// console.log(cards.filter(value => value.cardSuit === 'clubs' && (value.value > '9' || value.value === '10')));
