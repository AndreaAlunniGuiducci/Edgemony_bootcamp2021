import { getData, saveData } from './data.js'


const update = (event) => {
    const id = parseInt(event.target.id);
    console.log(event.target.id)
    const newData = getData().map((item) => {
        if (item.id === id) {
            console.log({ ...item, completed: !item.completed });
            return { ...item, completed: !item.completed };
        }
        else {
            return item
        }
    });

    saveData(newData);
    render(newData);
}


export const render = (data) => {
    const todos = document.querySelector('#todos');

    const items = data.map((item, index) => `<li><label><input type='checkbox'${item.completed ? 'checked' : ''} id = '${item.id}'>${item.title}</label></li>`);

    todos.innerHTML = items.join(' ');

    const lis = [...todos.querySelectorAll('li')];
    lis.forEach((item) => {
        item.addEventListener('click',
            update)
    })
}