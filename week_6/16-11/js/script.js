import { API, render } from './utils.js';
import { add } from './add.js';
import { list } from './list.js';

const loadList = () => {
    fetch(API)
        .then((response) => response.json())
        .then((data) => list(data));

};

document.addEventListener('DOMContentLoaded', () => {
    loadList();
})


window.addEventListener('hashchange', () => {
    console.log('hashchanged', location.hash);
    // if (location.hash === '#add') {
    //     add();
    // }
    switch (location.hash) {
        case '#add':
            add();
            break

        case '':
            loadList();
            break;
    }
})