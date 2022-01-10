/**
 * querySelector shortcut
 */
const q = (selector) => document.querySelector(selector);

const render = (container, items) => {
    const elements = items.map((element) => {
        // return element.name + ', ' + element.phone + ', ' + element.email;
        return `
        <li>
        <h3>${element.name}</h3> 
        <p><strong>Phone:</strong><a href="tel:${element.phone}">${element.phone}</a></p>
        <p><strong>E-mail:</strong><a href="mailto:${element.email}">${element.email}</a></p>
        </li>`;
    });

    const content = elements.join();
    console.log(content);
    container.innerHTML = content;

};

document.addEventListener('DOMContentLoaded', () => {
    const form = q('form');
    const input = q('form input');
    const list = q('ul');

    render(list, data);
});
