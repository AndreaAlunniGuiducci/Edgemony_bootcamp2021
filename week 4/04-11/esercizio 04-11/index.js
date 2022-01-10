/**
 * querySelector shortcut
 */
const q = (selector) => document.querySelector(selector);

const render = (container, items) => {
    items.sort((a, b) => {

        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
        return 0;

    });

    const elements = items.map((element) => {
        // return element.name + ', ' + element.phone + ', ' + element.email;
        return `
        <li>
        <h3>${element.name}</h3> 
        <p><strong>Phone:</strong><a href="tel:${element.phone}">${element.phone}</a></p>
        <p><strong>E-mail:</strong><a href="mailto:${element.email}">${element.email}</a></p>
        </li>`;
    });

    const content = elements.join('');
    container.innerHTML = content;

};

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
