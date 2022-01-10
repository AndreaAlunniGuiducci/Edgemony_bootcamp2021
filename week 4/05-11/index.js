import { data } from './data.js';
import { q } from './queryselector.js';
import { render } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = q('#formSearch');
    const input = q('#formSearch input');
    const list = q('ul');

    render(list, data);

    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     const value = input.value.toLowerCase();
    //     const results = data.filter((element, index) =>
    //         element.name.toLocaleLowerCase().search(value) > -1
    //     );

    //     render(list, results);
    // });
    input.addEventListener('keyup', () => {
        const value = input.value.toLowerCase().trim();
        const results = data.filter((element) =>
            element.name.toLocaleLowerCase().search(value) > -1 || element.email.toLocaleLowerCase().search(value) > -1
        );

        render(list, results);
    });
    const formAdd = q('#addContact');

    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();

        const newContacts = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value
        }

        data.push(newContacts);

        render(list, data);
        formAdd.reset();
    })
});
