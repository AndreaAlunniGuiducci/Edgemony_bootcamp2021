import { getData, saveData } from './data.js'


export const update = (event) => {
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


// export const render = (data) => {
//     const todos = document.querySelector('#todos');

//     const items = data.map((item, index) => `
// <li>
//     <label>
//         <input type='checkbox'${item.completed ? 'checked' : ''} id = '${item.id}'>${item.title}
//         </label>
//         </li>`);

//     todos.innerHTML = items.join(' ');

//     const lis = [...todos.querySelectorAll('li')];
//     lis.forEach((item) => {
//         item.addEventListener('click',
//             update)
//     })
// }

export const render = (data) => {
    const todos = document.querySelector('#todos');

    data.map((item) => {
        const list = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const expires = document.createElement('p')

        label.setAttribute('for', `${item.id}`);
        label.innerText = `${item.title}`;

        input.type = 'checkbox';
        input.checked = `${item.completed ? 'checked' : ''}`;
        input.id = `${item.id}`;

        expires.innerText = `${item.expires}`;

        todos.appendChild(list);
        list.appendChild(input);
        list.appendChild(label);
        list.appendChild(expires);
    }).join('');
}