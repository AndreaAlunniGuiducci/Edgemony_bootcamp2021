import { add } from "./add.js";
import { render, API } from "./utils.js";

const list = (data) => {
    const element = data.map(item => `<li>
    ${item.title} - ${item.year}
    <button class='delete' id='${item.id}'>X</button>
    </li>`).join('');

    const container = document.querySelector('#container');

    render(container, `
    <p>Elenco schede film</p>
    <ul>${element}</ul>
    <a href='#add' class="addBtn">aggiungi nuova scheda</a>`);

    const btns = [...document.querySelectorAll('.delete')];
    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const id = parseInt(event.target.id);
            const filtered = data.filter((movie) => movie.id !== id)

            // list(filtered);

            fetch(`${API}/${id}`, { method: "DELETE" })
                .then(response => {
                    if (response.status === 404) {
                        console.log('error')
                    } else { response.json() }
                })
                .then(() => list(filtered));
        },

            { once: true });
    })
};

export {
    list
}