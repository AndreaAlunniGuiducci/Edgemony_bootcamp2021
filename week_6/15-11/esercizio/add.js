import { render } from "./render.js";
import { getData, saveData } from './data.js';

export const add = () => {
    const form = document.querySelector('#add');

    const labelTitle = document.createElement('label');
    const labelExpires = document.createElement('label');
    const inputTitle = document.createElement('input');
    const inputExpires = document.createElement('input');
    const btn = document.createElement('button');

    form.id = 'add';

    labelTitle.innerText = 'elemento da mettere in lista:';
    labelTitle.className = 'form';
    labelExpires.innerText = 'seleziona qunado lo farai:';
    labelExpires.className = 'form';

    inputTitle.type = 'text';
    inputTitle.className = 'form';
    inputTitle.id = 'title'
    inputExpires.type = 'date';
    inputExpires.className = 'form';
    inputExpires.id = 'date';

    btn.innerText = 'aggiungi evento';
    btn.id = 'addBtn';

    form.appendChild(labelTitle);
    form.appendChild(inputTitle);
    form.appendChild(labelExpires);
    form.appendChild(inputExpires);
    form.appendChild(btn);


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const todo = {
            completed: false,
            title: event.target.title.value,
            expires: event.target.date.value
        }

        fetch('https://edgemony-backend.herokuapp.com/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        })
        console.log(todo);
        render(getData(todo));
    })
}