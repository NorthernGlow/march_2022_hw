// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули



fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.setAttribute('class','user')
            const h2Element = document.createElement('h2');
            h2Element.innerText = user.id + ". " + user.name;
            const formElement = document.createElement('form');
            formElement.setAttribute('action','user-details.html');
            const buttonElement = document.createElement('button');
            buttonElement.innerText = 'Information';
            buttonElement.setAttribute('class','button');
            formElement.append(buttonElement);
            userDiv.append(h2Element,formElement);
            document.body.append(userDiv);
            buttonElement.onclick = () => {
                localStorage.setItem('user',JSON.stringify(user));
            }
        }
    })
