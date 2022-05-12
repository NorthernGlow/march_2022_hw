// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

const elementMainHeader = document.getElementById('main_header');
elementMainHeader.classList.add('march-2022');
console.log(elementMainHeader.classList);

// b) робить шириниу елементу ul 400px

const elementsUl = document.getElementsByTagName('ul');
for (const elementsUlElement of elementsUl) {
    elementsUlElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

const elementLinkList = document.getElementsByClassName('linkList');
for (const elementLinkListElement of elementLinkList) {
    elementLinkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

const elements = document.getElementsByClassName('listElement2');
for (const element of elements) {
    console.log(element.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

const elementsLi = document.getElementsByTagName('li');
for (const elementsLiElement of elementsLi) {
    elementsLiElement.style.background = 'silver';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

const elementsA = document.getElementsByTagName('a');
for (const elementsAElement of elementsA) {
    elementsAElement.classList.add('anchor');
//    console.log(elementsAElement);
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (const elementsAElement of elementsA) {
    if (elementsAElement.innerText === 'link3'){
        elementsAElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const elementsAElement of elementsA) {
    elementsAElement.classList.add(`element_${elementsAElement.innerText}`);
    console.log(elementsAElement);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

const elementsSubHeader = document.getElementsByClassName('sub-header');
const color = prompt('Enter the background color');
for (const elementsSubHeaderElement of elementsSubHeader) {
    elementsSubHeaderElement.style.background = color;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

const colorText = prompt('Enter the color of the text');
for (const elementsSubHeaderElement of elementsSubHeader) {
    if (elementsSubHeaderElement.innerText === 'content 2 segment'){
        elementsSubHeaderElement.style.color = colorText;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

const elContent1 = document.getElementsByClassName('content_1');
const Text = prompt('Enter the text');
for (const elContent1Element of elContent1) {
    elContent1Element.innerText = Text;
}

// l) отримати елементи p та змінити їм padding на 20px

const elementsP = document.getElementsByTagName('p');
for (const elementsPElement of elementsP) {
    elementsPElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

const elText2 = document.getElementsByClassName('text2');
for (const elText2Element of elText2) {
    elText2Element.innerText = 'march-2022';
}