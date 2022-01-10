
import { render, API } from "./utils.js";

const list = (data) => {

    const elements = data.map((item) => `
    <li>
    <a class='movie' href='#view-${item.id}'>${item.title}</a> - <span id='year'>${item.year}</span>
    <a href='#edit-${item.id}' class='edit'>✏️</a>
    <button class='delete' id='${item.id}'>X</button>
    </li>`).join('');

    const container = document.querySelector('#container');

    render(container, `
    <p>Elenco schede film</p>
    <ul>${elements}</ul>
    <a href='#add' class="addBtn">aggiungi nuova scheda</a>`);

    const btns = [...document.querySelectorAll('.delete')];



    const btnDelete = (event) => {

        const id = parseInt(event.target.id);
        const filtered = data.filter((movie) => movie.id !== id);

        fetch(`${API}/${id}`, { method: "DELETE" })
            .then(response => response.json())
            .then(() => list(filtered));

    };





    const btnClick = (btn) =>
        btn.addEventListener('click', btnDelete, { once: true });
    btns.forEach(btnClick);

}

export {
    list
}
