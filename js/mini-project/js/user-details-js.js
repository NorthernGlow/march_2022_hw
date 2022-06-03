// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

const user = JSON.parse(localStorage.getItem('user'));
const divUserElement = document.createElement('div');
divUserElement.setAttribute('class', 'userInfo');
divUserElement.innerHTML = `<b>ID:</b> ${user.id} <br>
                            <b>Name:</b> ${user.name} <br>
                            <b>Username:</b> ${user.username}\ <br>
                            <b>Email:</b> ${user.email} <br>
                            <b>Addres:</b><br>
                            <b>street:</b> ${user.address.street} <br>
                            <b>suite:</b> ${user.address.suite} <br>
                            <b>city:</b> ${user.address.city} <br>
                            <b>zipcode:</b> ${user.address.zipcode} <br>
                            <b>Geo:</b> 
                            <b>lat:</b> ${user.address.geo.lat} <br>
                            <b>lng:</b> ${user.address.geo.lng} <br>
                            <b>Phone:</b> ${user.phone} <br>
                            <b>Website:</b> ${user.website} <br>
                            <b>Company:</b> 
                            <b>name:</b>  ${user.company.name} <br>
                            <b>catch phrase:</b> ${user.company.catchPhrase} <br>
                            <b>bs:</b> ${user.company.bs} <br>`

const buttonElementPost = document.createElement('button');
buttonElementPost.innerText = 'post of current user';
buttonElementPost.setAttribute('class', 'buttonPosts')

const divTitle = document.createElement('div');
divTitle.setAttribute('class', 'posts');
document.body.append(divUserElement, buttonElementPost, divTitle);


buttonElementPost.onclick = () => {
    divTitle.innerText = '';
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            let id = 1;
            for (const post of posts) {
                const divElement = document.createElement('div');
                divElement.setAttribute('class', 'postTitle')
                const divPostTitleElement = document.createElement('div');
                divPostTitleElement.innerHTML = `<b>Post ${id}:</b> ${post.title}`;
                id++;
                const formElement = document.createElement('form');
                formElement.setAttribute('action', 'post-details.html');
                const buttonElement = document.createElement('button');
                buttonElement.innerText = 'Information';
                buttonElement.setAttribute('class', 'buttonElementInfo')
                formElement.append(buttonElement);
                divElement.append(divPostTitleElement, formElement);
                divTitle.append(divElement);
                buttonElement.onclick = () => {
                    localStorage.setItem('post', JSON.stringify(post));
                }
            }
        })
}
