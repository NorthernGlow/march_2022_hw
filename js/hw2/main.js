// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0; //1, 0, -3
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 5;//від 0 до 59
if (time >= 0 && time < 15) {
    console.log('Число попадає до 1 четверті години');
} else if (time >= 15 && time < 30) {
    console.log('Число попадає до 2 четверті години');
} else if (time >= 30 && time < 45) {
    console.log('Число попадає до 3 четверті години');
} else if (time >= 45 && time < 60) {
    console.log('Число попадає до 4 четверті години');
} else {
    console.log('Число не попадає до жодної четверті години');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 0; //число від 1 до 31.
if (day > 0 && day < 11) {
    console.log('Число у першій декаді місяця');
} else if (day >= 11 && day < 21) {
    console.log('Число у другій декаді місяця');
} else if (day >= 21 && day <= 31) {
    console.log('Число у третій декаді місяця');
} else {
    console.log('Число не потрапляє у жодну декаду місяця');
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekdays = 7; //порядковий номер дня тижня
switch (weekdays) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('This isn`t the day of the week');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = 5, b = 5;
if (a > b) {
    console.log('a is the max number');
} else if (a < b) {
    console.log('b is the max number');
} else if (a === b) {
    console.log('Numbers are equal');
}