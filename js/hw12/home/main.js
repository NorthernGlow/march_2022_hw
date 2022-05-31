// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// const postsElement = document.createElement('div');
// postsElement.setAttribute('id','posts');
// document.body.appendChild(postsElement);
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(value => value.json())
//     .then(posts => {
//         for (const post of posts) {
//             const divElement = document.createElement('div');
//             divElement.classList.add('post');
//             for (const postElementKey in post) {
//                 const divElementKey = document.createElement('div');
//                 divElementKey.innerText = postElementKey + ': '+ post[postElementKey];
//                 divElement.appendChild(divElementKey);
//             }
//             postsElement.appendChild(divElement);
//         }
//     })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
// const divElement = document.createElement('div');
// divElement.setAttribute('id','comments');
// document.body.appendChild(divElement);
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(comments => {
//         for (const comment of comments) {
//             const com = document.createElement('div');
//             const hr = document.createElement('hr');
//             com.classList.add('comment');
//             for (const commentKey in comment) {
//                 const divElementKey = document.createElement('div');
//                 divElementKey.innerText = commentKey + ": " + comment[commentKey];
//                 com.appendChild(divElementKey);
//             }
//             divElement.append(com,hr);
//         }
//     })
