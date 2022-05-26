// -створити форму з інпутами для name та age.
//  При відправці форми записати об'єкт в localstorage
//
// const form1 = document.forms.form1;
// const button = document.getElementsByTagName('button')[0];
//
// button.onclick = function (e) {
//     e.preventDefault();
//     let obj = {
//         name: form1.name.value,
//         age: form1.age.value
//     }
//     localStorage.setItem('user', JSON.stringify(obj));
//
//     form1.name.value = '';
//     form1.age.value = '';
// }

// -створити форму з інпутами для model,type та volume автівки.
//  при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//
// const form2 = document.forms.form2;
// const button2 = document.getElementsByTagName('button')[0];
// array = [];
//
// button2.onclick = function (e) {
//     e.preventDefault();
//     let obj = {
//         model: form2.model.value,
//         type: form2.type.value,
//         volume: form2.volume.value
//     }
//
//     array.push(obj);
//     localStorage.setItem('cars',JSON.stringify(array));
//
//     form2.model.value = '';
//     form2.type.value = '';
//     form2.volume.value = '';
// }