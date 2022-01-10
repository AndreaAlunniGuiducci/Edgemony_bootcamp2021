import { render } from './render.js';
import { getData, saveData } from './data.js';
import { add } from './add.js';

const addForm = document.querySelector('#addForm');

const connectionAlert = () => {

    const isOnline = window.navigator.onLine;

    const connection = document.querySelector('#connection strong');
    connection.innerText = isOnline ? 'online' : 'offline';
}

document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('online', connectionAlert);
    window.addEventListener('offline', connectionAlert);

    const API = 'https://edgemony-backend.herokuapp.com/todos';

    fetch(API)
        .then((response) => response.json())
        .then((data) => saveData(data))
        .then(() => render(getData()));

    addForm.addEventListener('click', () => add(), { once: true })
})

