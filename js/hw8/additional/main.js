// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

function foo(start) {
    console.log(start);
    const array = [];
    const arr = [];
    let children = start.children;
    for (const child of children) {
        if (child.classList !== null){
            for (const classListElement of child.classList) {
                arr.push(classListElement);
            }
            if (arr.length > array.length){
                for (let i = 0;i<arr.length;i++){
                    array[i] = arr[i];
                }
            }
        }
        foo(child);
    }

    console.log(array);
    return array;
}

const foo1 = foo(document.body);
console.log(foo1);
