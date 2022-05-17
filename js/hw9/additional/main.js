// - Є масив :
// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.
//
// let usersList = [
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         address: {
//             street: 'Kulas Light',
//             suite: 'Apt. 556',
//             city: 'Gwenborough',
//             zipcode: '92998-3874',
//             geo: {
//                 lat: '-37.3159',
//                 lng: '81.1496'
//             }
//         },
//         phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//         company: {
//             name: 'Romaguera-Crona',
//             catchPhrase: 'Multi-layered client-server neural-net',
//             bs: 'harness real-time e-markets'
//         }
//     },
//     {
//         id: 2,
//         name: 'Ervin Howell',
//         username: 'Antonette',
//         email: 'Shanna@melissa.tv',
//         address: {
//             street: 'Victor Plains',
//             suite: 'Suite 879',
//             city: 'Wisokyburgh',
//             zipcode: '90566-7771',
//             geo: {
//                 lat: '-43.9509',
//                 lng: '-34.4618'
//             }
//         },
//         phone: '010-692-6593 x09125',
//         website: 'anastasia.net',
//         company: {
//             name: 'Deckow-Crist',
//             catchPhrase: 'Proactive didactic contingency',
//             bs: 'synergize scalable supply-chains'
//         }
//     },
//     {
//         id: 3,
//         name: 'Clementine Bauch',
//         username: 'Samantha',
//         email: 'Nathan@yesenia.net',
//         address: {
//             street: 'Douglas Extension',
//             suite: 'Suite 847',
//             city: 'McKenziehaven',
//             zipcode: '59590-4157',
//             geo: {
//                 lat: '-68.6102',
//                 lng: '-47.0653'
//             }
//         },
//         phone: '1-463-123-4447',
//         website: 'ramiro.info',
//         company: {
//             name: 'Romaguera-Jacobson',
//             catchPhrase: 'Face to face bifurcated interface',
//             bs: 'e-enable strategic applications'
//         }
//     },
//     {
//         id: 4,
//         name: 'Patricia Lebsack',
//         username: 'Karianne',
//         email: 'Julianne.OConner@kory.org',
//         address: {
//             street: 'Hoeger Mall',
//             suite: 'Apt. 692',
//             city: 'South Elvis',
//             zipcode: '53919-4257',
//             geo: {
//                 lat: '29.4572',
//                 lng: '-164.2990'
//             }
//         },
//         phone: '493-170-9623 x156',
//         website: 'kale.biz',
//         company: {
//             name: 'Robel-Corkery',
//             catchPhrase: 'Multi-tiered zero tolerance productivity',
//             bs: 'transition cutting-edge web services'
//         }
//     },
//     {
//         id: 5,
//         name: 'Chelsey Dietrich',
//         username: 'Kamren',
//         email: 'Lucio_Hettinger@annie.ca',
//         address: {
//             street: 'Skiles Walks',
//             suite: 'Suite 351',
//             city: 'Roscoeview',
//             zipcode: '33263',
//             geo: {
//                 lat: '-31.8129',
//                 lng: '62.5342'
//             }
//         },
//         phone: '(254)954-1289',
//         website: 'demarco.info',
//         company: {
//             name: 'Keebler LLC',
//             catchPhrase: 'User-centric fault-tolerant solution',
//             bs: 'revolutionize end-to-end systems'
//         }
//     },
//     {
//         id: 6,
//         name: 'Mrs. Dennis Schulist',
//         username: 'Leopoldo_Corkery',
//         email: 'Karley_Dach@jasper.info',
//         address: {
//             street: 'Norberto Crossing',
//             suite: 'Apt. 950',
//             city: 'South Christy',
//             zipcode: '23505-1337',
//             geo: {
//                 lat: '-71.4197',
//                 lng: '71.7478'
//             }
//         },
//         phone: '1-477-935-8478 x6430',
//         website: 'ola.org',
//         company: {
//             name: 'Considine-Lockman',
//             catchPhrase: 'Synchronised bottom-line interface',
//             bs: 'e-enable innovative applications'
//         }
//     },
//     {
//         id: 7,
//         name: 'Kurtis Weissnat',
//         username: 'Elwyn.Skiles',
//         email: 'Telly.Hoeger@billy.biz',
//         address: {
//             street: 'Rex Trail',
//             suite: 'Suite 280',
//             city: 'Howemouth',
//             zipcode: '58804-1099',
//             geo: {
//                 lat: '24.8918',
//                 lng: '21.8984'
//             }
//         },
//         phone: '210.067.6132',
//         website: 'elvis.io',
//         company: {
//             name: 'Johns Group',
//             catchPhrase: 'Configurable multimedia task-force',
//             bs: 'generate enterprise e-tailers'
//         }
//     },
//     {
//         id: 8,
//         name: 'Nicholas Runolfsdottir V',
//         username: 'Maxime_Nienow',
//         email: 'Sherwood@rosamond.me',
//         address: {
//             street: 'Ellsworth Summit',
//             suite: 'Suite 729',
//             city: 'Aliyaview',
//             zipcode: '45169',
//             geo: {
//                 lat: '-14.3990',
//                 lng: '-120.7677'
//             }
//         },
//         phone: '586.493.6943 x140',
//         website: 'jacynthe.com',
//         company: {
//             name: 'Abernathy Group',
//             catchPhrase: 'Implemented secondary concept',
//             bs: 'e-enable extensible e-tailers'
//         }
//     },
//     {
//         id: 9,
//         name: 'Glenna Reichert',
//         username: 'Delphine',
//         email: 'Chaim_McDermott@dana.io',
//         address: {
//             street: 'Dayna Park',
//             suite: 'Suite 449',
//             city: 'Bartholomebury',
//             zipcode: '76495-3109',
//             geo: {
//                 lat: '24.6463',
//                 lng: '-168.8889'
//             }
//         },
//         phone: '(775)976-6794 x41206',
//         website: 'conrad.com',
//         company: {
//             name: 'Yost and Sons',
//             catchPhrase: 'Switchable contextually-based project',
//             bs: 'aggregate real-time technologies'
//         }
//     },
//     {
//         id: 10,
//         name: 'Clementina DuBuque',
//         username: 'Moriah.Stanton',
//         email: 'Rey.Padberg@karina.biz',
//         address: {
//             street: 'Kattie Turnpike',
//             suite: 'Suite 198',
//             city: 'Lebsackbury',
//             zipcode: '31428-2261',
//             geo: {
//                 lat: '-38.2386',
//                 lng: '57.2232'
//             }
//         },
//         phone: '024-648-3804',
//         website: 'ambrose.net',
//         company: {
//             name: 'Hoeger LLC',
//             catchPhrase: 'Centralized empowering task-force',
//             bs: 'target end-to-end models'
//         }
//     }
// ];
//
// const divElement = document.createElement('div');
// document.body.appendChild(divElement);
//
// for (const usersListElement of usersList) {
//     const id = document.createElement('div');
//     const name = document.createElement('h1');
//     const username = document.createElement('h4');
//     const email = document.createElement('div');
//     const address = document.createElement('ul');
//     const phone = document.createElement('div');
//     const website = document.createElement('div');
//     const company = document.createElement('ul');
//
//     id.innerHTML = `<hr/> ID: ${usersListElement.id}`;
//     name.innerText = `${usersListElement.name}`;
//     username.innerText = `Username: ${usersListElement.username}`;
//     email.innerText = `Email: ${usersListElement.email}`;
//     address.innerText = `Address: `;
//
//     for (const addressKey in usersListElement.address) {
//         const liElements = document.createElement('li');
//         liElements.innerText = `${addressKey}: ${usersListElement.address[addressKey]}`;
//         if (addressKey === 'geo') {
//             const geo = document.createElement("ul");
//             for (const geoKey in usersListElement.address.geo) {
//                 const liGeoElement = document.createElement('li');
//                 liGeoElement.innerText = `${geoKey}: ${usersListElement.address.geo[geoKey]}`;
//                 geo.appendChild(liGeoElement);
//             }
//             address.appendChild(geo);
//         }
//         address.appendChild(liElements);
//     }
//
//     phone.innerText = `Phone: ${usersListElement.phone}`;
//     website.innerText = `Website: ${usersListElement.website}`;
//     company.innerText = `Company: `;
//
//     for (const companyKey in usersListElement.company) {
//         const liElement = document.createElement('li');
//         liElement.innerText = `${companyKey}: ${usersListElement.company[companyKey]}`;
//         console.log(liElement);
//         company.appendChild(liElement);
//     }
//     divElement.append(id, name, username, email, address, phone, website, company);
// }

//     за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику headings,всі параграфи покласти в характеристику (масив) paragraphs
//
// function foo(start) {
//     // console.log(start);
//     let children = start.children;
//     const heading = [];
//     const paragraphs = [];
//     let object = {
//         heading: heading,
//         paragraphs: paragraphs
//     };
//     for (const child of children) {
//         console.log(child);
//         if (child.tagName.toLowerCase() === 'h1'|| child.tagName.toLowerCase() === 'h2'|| child.tagName.toLowerCase() === 'h3'|| child.tagName.toLowerCase() === 'h4'|| child.tagName.toLowerCase() === 'h5' ||  child.tagName.toLowerCase() === 'h6'){
//             heading.push(child.innerText);
//             console.log(object);
//         }
//         if (child.tagName.toLowerCase() === 'p'){
//             paragraphs.push(child.innerText);
//             console.log(object);
//         }
//         foo(child);
//     }
// }
//
// foo(document);

//     зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>
//
// const divElement = document.createElement('div');
// document.body.appendChild(divElement);
//
// divElement.setAttribute('contenteditable','true');
// const tagName = document.getElementsByTagName('div')[0];
// tagName.style.height = '100px';
// tagName.style.border = 'solid 2px black';
// tagName.style.fontSize = '20px';
//
// console.log(divElement.innerText);
// divElement.onkeydown = (e) =>{
//     let name = e.key;
//
//     if (name === 'Tab'){
//        divElement.innerText = `<${divElement.innerText}></${divElement.innerText}>`;
//     }
// }

// super_additional9

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// const array = [];
// for (const user of users) {
//     array.push(user.address);
// }
// for (const user of users) {
//     const divElement = document.createElement('div');
//     divElement.innerHTML = `Name: ${user.name}<br> Age: ${user.age}<br> Status: ${user.status}<br> Address: <br>City: ${user.address.city} <br>Country: ${user.address.country} <br>Street: ${user.address.street}<br>House number: ${user.address.houseNumber}<hr/>`;
//     document.body.appendChild(divElement);
// }
//
// const divElement = document.createElement('div');
// document.body.appendChild(divElement);
// for (const user of users) {
//     const name = document.createElement('div');
//     const age = document.createElement('div');
//     const status = document.createElement('div');
//     const address = document.createElement('div');
//
//     name.innerHTML = `<hr/>Name: ${user.name}`;
//     age.innerText = `Age: ${user.age}`;
//     status.innerText = `Status: ${user.status}`;
//     address.innerText = `Address: \nCity: ${user.address.city} \nCountry: ${user.address.country} \nStreet: ${user.address.street}\nHouse number: ${user.address.houseNumber} `
//
//     divElement.append(name,age,status,address);
// }
//
// for (const user of users) {
//     const name = document.createElement('div');
//     const age = document.createElement('div');
//     const status = document.createElement('div');
//     const address = document.createElement('div');
//
//     name.innerHTML = `<hr/>Name: ${user.name}`;
//     age.innerText = `Age: ${user.age}`;
//     status.innerText = `Status: ${user.status}`;
//     for (const address1 in user.address) {
//         const divElementAddress = document.createElement('div');
//         divElementAddress.innerText = `${address1}: ${user.address[address1]}`;
//         address.appendChild(divElementAddress);
//     }
//
//     divElement.append(name,age,status,address);
// }

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// const content = document.getElementById('content');
// const elementH2 = document.getElementsByTagName('h2');
// const elementUl = document.createElement('ul');
// for (const elementH2Element of elementH2) {
//     const elementLi = document.createElement('li');
//     elementLi.innerText = elementH2Element.innerText;
//     elementUl.appendChild(elementLi);
// }
// content.appendChild(elementUl);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// for (const rule of rules) {
//     const divElement = document.createElement('div');
//     const headingElement = document.createElement('h2');
//     const paragraphElement = document.createElement('p');
//
//     headingElement.innerText = rule.title;
//     paragraphElement.innerText = rule.body;
//
//     divElement.append(headingElement,paragraphElement);
//     document.body.appendChild(divElement);
// }