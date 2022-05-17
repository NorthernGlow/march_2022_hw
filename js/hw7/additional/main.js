// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// let m = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
//
// class Object {
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street: street,
//             suite: suite,
//             city: city,
//             zipcode: zipcode,
//             geo: {
//                 lat: lat,
//                 lng: lng
//             }
//         };
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             name: nameCompany,
//             catchPhrase: catchPhrase,
//             bs: bs
//         }
//
//     }
//
// }
//
// let ob = new Object(1, "Leanne Graham", 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough',
//     '92998-3874','-37.3159','81.1496','1-770-736-8031 x56442','hildegard.org','Romaguera-Crona',
//     'Multi-layered client-server neural-net','harness real-time e-markets');
// console.log(ob);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// class Tag {
//     constructor(nameTag, description,attribute) {
//         this.nameTag = nameTag;
//         this.description = description;
//         this.attribute = attribute;
//     }
// }
//
// class Attribute{
//     constructor(titleOfAttr,actionOfAttr) {
//         this.titleOfAttr = titleOfAttr;
//         this.actionOfAttr = actionOfAttr;
//     }
// }
//
// const a = new Tag('a', 'The <a> tag defines a hyperlink, which is used to link from one page to another.',
//     [{titleOfAttr: 'href', actionOfAttr: 'Specifies the URL of the page the link goes to'},
//              {titleOfAttr: 'download', actionOfAttr: 'Specifies that the target will be downloaded when a user clicks on the hyperlink'}]);
// console.log(a);
//
// const nameDIV = 'div';
// const descriptionDIV = 'The <div> tag defines a division or a section in an HTML document.';
// const attributeDIV = [{titleOfAttr: 'class', actionOfAttr: 'Specifies one or more classnames for an element (refers to a class in a style sheet'},
//     {titleOfAttr: 'id', actionOfAttr: 'Specifies a unique id for an element'}];
// console.log(new Tag(nameDIV,descriptionDIV,attributeDIV));
//
// const nameH1 = 'h1';
// const descriptionH1 = 'Only use one <h1> per page - this should represent the main heading/subject for the whole page.';
// const attributeH1 = [new Attribute('class','Specifies one or more classnames for an element (refers to a class in a style sheet)'),
// new Attribute('style','Specifies an inline CSS style for an element')];
// console.log(new Tag(nameH1,descriptionH1,attributeH1));
//
// const nameSPAN = 'span';
// const descriptionSPAN = 'The <span> tag is an inline container used to mark up a part of a text, or a part of a document.';
// const attributeSPAN = [new Attribute('title','Specifies extra information about an element'),
// new Attribute('style','Specifies an inline CSS style for an element')];
// console.log(new Tag(nameSPAN,descriptionSPAN,attributeSPAN));
//
// const nameINPUT = 'input';
// const descriptionINPUT = 'The <input> tag specifies an input field where the user can enter data.';
// const attributeINPUT = [new Attribute('alt','Specifies an alternate text for images (only for type="image")'),
// new Attribute('form','Specifies the form the <input> element belongs to')];
// console.log(new Tag(nameINPUT,descriptionINPUT,attributeINPUT));
//
// const nameForm = 'form';
// const descriptionForm = 'The <form> tag is used to create an HTML form for user input.';
// const attributeForm = [new Attribute('action','Specifies where to send the form-data when a form is submitted'),
//     new Attribute('rel','Specifies the relationship between a linked resource and the current document')];
// console.log(new Tag(nameForm,descriptionForm,attributeForm));
//
// const nameOPTION = 'option';
// const descriptionOPTION = 'The <option> tag defines an option in a select list.';
// const attributeOPTION = [new Attribute('label','Specifies a shorter label for an option'),
//     new Attribute('value','Specifies the value to be sent to a server')];
// console.log(new Tag(nameOPTION,descriptionOPTION,attributeOPTION));
//
// const nameSELECT = 'select';
// const descriptionSELECT = 'The <select> element is used to create a drop-down list.';
// const attributeSELECT = [new Attribute('form','Defines which form the drop-down list belongs to'),
//     new Attribute('name','Defines a name for the drop-down list')];
// console.log(new Tag(nameSELECT,descriptionSELECT,attributeSELECT));



