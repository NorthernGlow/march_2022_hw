// - є масив
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// for (const simpson of simpsons) {
//     const divElement = document.createElement('div');
//     divElement.classList.add('member');
//     document.body.appendChild(divElement);
//     // for (const simpsonKey in simpson) {
//     //     const elementDivKey = document.createElement('div');
//     //     elementDivKey.innerText = `${simpson.simpsonKey}`
//     //     divElement.appendChild(elementDivKey);
//     // }
//     // // divElement.innerHTML = '<hr/>'
//     const nameDiv = document.createElement('h2');
//     const surnameDiv = document.createElement('h2');
//     const ageDiv = document.createElement('h3');
//     const infoDiv = document.createElement('p');
//     const imgDiv = document.createElement('img');
//
//     nameDiv.innerText = simpson.name;
//     surnameDiv.innerHTML = `<hr/> ${simpson.surname}`;
//     ageDiv.innerText =`Age: ${simpson.age}`;
//     infoDiv.innerText = simpson.info;
//     imgDiv.setAttribute('src',simpson.photo);
//
//     divElement.append(surnameDiv,nameDiv,ageDiv,infoDiv,imgDiv);
// }

// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
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
// for (const coursesArrayElement of coursesArray) {
//     const divElement = document.createElement('div');
//     document.body.appendChild(divElement);
//
//     const titleElement = document.createElement('h2');
//     const monthElement = document.createElement('div');
//     const blockDivElement = document.createElement('div');
//     const hourElement = document.createElement('div');
//     const modulesElement = document.createElement('div');
//     const modulesListElement = document.createElement('ul');
//
//     blockDivElement.classList.add('blockElement');
//     monthElement.classList.add('elementModule');
//     hourElement.classList.add('elementHour');
//
//     blockDivElement.append(monthElement, hourElement);
//     modulesElement.appendChild(modulesListElement);
//
//     titleElement.innerText = coursesArrayElement.title;
//     monthElement.innerText = `Month Duration: ${coursesArrayElement.monthDuration}`;
//     hourElement.innerText = `Hour Duration: ${coursesArrayElement.hourDuration}`;
//     for (let i = 0; i < coursesArrayElement.modules.length; i++) {
//         const liElement = document.createElement('li');
//         liElement.innerText = coursesArrayElement.modules[i];
//         modulesListElement.append(liElement);
//     }
//
//     const element1 = document.getElementsByClassName('elementModule');
//     for (const element1Element of element1) {
//         element1Element.style.width = '25%'
//     }
//
//     const element2 = document.getElementsByClassName('elementHour');
//     for (const element2Element of element2) {
//         element2Element.style.width = '74%';
//         element2Element.style.marginLeft = '15px';
//         element2Element.style.boxSizing = 'border-box'
//     }
//
//     const element3 = document.getElementsByClassName('blockElement');
//     for (const element3Element of element3) {
//         element3Element.style.display = 'flex'
//     }
//
//     divElement.append(titleElement, blockDivElement, modulesElement);
// }

// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// const divElement = document.createElement('div');
// document.body.appendChild(divElement);
//
// divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
// divElement.innerText = 'Lorem ipsum dolor sit amet.';
//
// const divEl = document.getElementsByTagName('div');
// for (const divElement of divEl) {
//     divElement.style.background = '#254511';
//     divElement.style.color = '#F77E14';
//     divElement.style.fontSize = '25px';
//     divElement.style.textAlign = 'center';
//     divElement.style.margin = '5px';
// }
//
// const cloneDiv = divElement.cloneNode(true);
// document.body.appendChild(cloneDiv);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// let array = ['Main','Products','About us','Contacts'];
// const menu = document.getElementsByClassName('menu');
// for (const arrayElement of array) {
//     const liElement = document.createElement('li');
//     liElement.innerText = arrayElement;
//     for (const menu1 of menu) {
//         menu1.appendChild(liElement);
//     }
// }

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
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
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     const divElement = document.createElement('div');
//     const title = document.createElement('h1');
//     const monthDuration = document.createElement('p');
//     document.body.appendChild(divElement);
//     divElement.append(title, monthDuration);
//
//
//     divElement.classList.add('item');
//     title.classList.add('heading');
//     monthDuration.classList.add('description')
//
//     title.innerText = coursesAndDurationArrayElement.title;
//     monthDuration.innerHTML = `Month Duration: ${coursesAndDurationArrayElement.monthDuration} <hr/>`;
//
// }
