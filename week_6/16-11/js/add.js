import { render, API } from "./utils.js"

const add = () => {
    const container = document.querySelector('#container');
    const date = new Date();
    render(container, `
    <div>
    <h3>Aggiungi una nuova scheda</h3>
        <form id='create'>
            <div class='row'>
                <label for='title'>Titolo:</label>
                <input type='text' id='title' name='title'></input>
            </div>

            <div class='row'>
                <label for='poster'>Poster:</label>
                <input type='text' id='poster'></input>
            </div>

            <div class='row'>
                <label for='year'>Anno:</label>
                <input type='number' min='1900' id='year' value='${date.getFullYear()}'></input>
            </div>

            <div class='row'>
                <label for='desc'>Descrizione:</label>
                <textarea  id='desc'></textarea>
            </div>

            <button>Salva scheda</button>
        </form>
        <a href='#' class="back">Torna alla home</a>
    </div>
    `);

    const form = document.querySelector('#create');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const movie = {
            title: event.target.title.value,
            poster: event.target.poster.value,
            year: parseInt(event.target.year.value),
            desc: event.target.desc.value,
        }

        document.querySelector('.alert').classList.add('show');

        fetch(API, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        })
            .then(response => response.json())
            .then((data) => (location.hash = ''));
    });

};

export { add };