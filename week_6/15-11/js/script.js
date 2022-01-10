import { API, render } from './utils.js';
import { add } from './add.js';
import { list } from './list.js';

document.addEventListener('DOMContentLoaded', () => {
    fetch(API)
        .then((response) => response.json())
        .then((data) => list(data));

    const addBtn = document.querySelector('.addBtn');

    addBtn.addEventListener('click', add);
})