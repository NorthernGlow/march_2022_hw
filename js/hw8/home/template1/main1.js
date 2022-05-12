// - Напишіть код,  котрий :

// -- отримує текст з параграфа з id "content"

const elementContent = document.getElementById('content');
console.log(elementContent.innerText);

// -- отримує текст з блоку з id "rules"

const elementRules = document.getElementById('rules');
console.log(elementRules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

 elementContent.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, sapiente.';

// -- замініть текст параграфа з id 'rules' на будь-який інший

elementRules.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem explicabo fugit illo non quam voluptate.';

// -- змініть кожному елементу колір фону на червоний

const elementsLi = document.getElementsByTagName('li');
const elementsUl = document.getElementsByTagName('ul');
elementContent.style.background = 'red';
elementRules.style.background = 'red';
for (const elementsLiElement of elementsLi) {
    elementsLiElement.style.background = 'red';
    elementsLiElement.style.margin = '5px';
}
for (const elementsUlElement of elementsUl) {
    elementsUlElement.style.background = '#c90711'
}

// -- змініть кожному елементу колір тексту на синій

elementContent.style.color = 'blue';
elementRules.style.color = 'blue';
for (const elementsLiElement of elementsLi) {
    elementsLiElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(elementRules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

const elementsFC = document.getElementsByClassName('fc_rules');
for (const elementsFCElement of elementsFC) {
    elementsFCElement.style.color = '#c90711';
}
