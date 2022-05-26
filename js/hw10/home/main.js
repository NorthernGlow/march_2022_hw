// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// const text = document.getElementById('text');
// const button = document.getElementsByTagName('button')[0];
//
// button.onclick = function () {
//     text.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користува
//
// const input = document.getElementsByTagName('input')[0];
// const button = document.getElementsByTagName('button')[0];
//
// button.addEventListener('click', function () {
//     const age = input.value;
//     if (age < 18) {
//         console.log('Age less than 18');
//     } else {
//         console.log('Age greater than 18');
//     }
//     input.value = '';
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// const form1 = document.forms.form1;
// const form2 = document.forms.form2;
// const button = document.getElementsByTagName("button")[0];
//
//
// button.onclick = function () {
//     const name = form1.name.value;
//     const surname = form1.surname.value;
//     const age = form2.age.value;
//     const email = form2.email.value;
//
//     console.log(`Info with form1\nName: ${name}\nSurname: ${surname}\nInfo with form2\nAge: ${age}\nEmail: ${email}`);
//
//     form1.name.value = '';
//     form1.surname.value = '';
//     form2.age.value = '';
//     form2.email.value = '';
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// const lines = document.getElementById('lines');
// const columns = document.getElementById('columns');
// const value = document.getElementById('value');
// const button = document.getElementsByTagName('button')[0];
// const block = document.getElementById('block');
//
// button.onclick = function () {
//     block.innerHTML = '';
//     const line = lines.value;
//     const column = columns.value;
//     const content = value.value;
//     for (let i = 0; i < line; i++) {
//         const divElementLine = document.createElement('div');
//         divElementLine.classList.add('line');
//         for (let j = 0; j < column; j++) {
//             const divElementColumn = document.createElement('div');
//             divElementColumn.classList.add('column');
//             divElementColumn.style.width = `calc( 100%/${column})`
//             divElementColumn.innerText = content;
//             divElementLine.appendChild(divElementColumn);
//         }
//         block.appendChild(divElementLine);
//     }
//
//     lines.value = '';
//     columns.value = '';
//     value.value = '';
// }