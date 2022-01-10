const q = (selector) => document.querySelector(selector);
const list = q('ul');
const popBtn = q('#popBtn');

const render = (container, items) => {
    const elements = items.map((element) => {
        if (!element.completed) {
            return `
        <li>
        <input type="checkbox" name="checkComplete">
        <label for="checkComplete">${element.title}</label>
        </li>`
        }
        else {
            return `
            <li>
            <input type="checkbox" name="checkComplete" checked>
            <label for="checkComplete">${element.title}</label>
            </li>`
        }
    });

    const content = elements.join('');
    container.innerHTML = (content);

};

const pop = (arr) => arr.pop();

document.addEventListener('DOMContentLoaded', () => {
    render(list, control);
});

popBtn.addEventListener('click', () => {
    pop(control);
    render(list, control)
})