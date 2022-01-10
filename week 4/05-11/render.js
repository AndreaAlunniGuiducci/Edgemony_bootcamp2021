export const render = (container, items) => {
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