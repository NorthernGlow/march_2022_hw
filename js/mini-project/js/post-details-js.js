// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const post = JSON.parse(localStorage.getItem('post'));
const divPostElement = document.createElement('div');
divPostElement.setAttribute('class','postInfo')

for (const postKey in post) {
    const divElement = document.createElement('div');
    divElement.innerHTML = `<b>${postKey}:</b> ${post[postKey]}`;
    divPostElement.appendChild(divElement);
}

const divCommentsElement = document.createElement('div');
divCommentsElement.setAttribute('class','commentsAll');
document.body.append(divPostElement,divCommentsElement);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        let id = 1;
        for (const commentElement of comments) {
            const comment = document.createElement('div');
            comment.setAttribute('class','comment');
            comment.innerHTML = `<b>Comment ${id}:</b> ${commentElement.body}`;
            id++;
            divCommentsElement.appendChild(comment);
        }
    })

