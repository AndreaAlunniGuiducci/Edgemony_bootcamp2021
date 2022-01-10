import { render, API } from "./utils.js";

const edit = (id = 0) => {
    const resource = `${API}/${id}`;

    fetch(resource)
        .then((response) => response.json())
        .then((movie) => {
            const container = document.querySelector('#container');
            render(container, `
        <div>
    <h3>Modifica la scheda</h3>
        <form id='create'>
            <div class='row'>
                <label for='title'>Titolo:</label>
                <input type='text' id='title' name='title' value='${movie.title}'></input>
            </div>

            <div class='row'>
                <label for='poster'>Poster:</label>
                <input type='text' id='poster'value='${movie.poster}'></input>
            </div>

            <div class='row'>
                <label for='year'>Anno:</label>
                <input type='number' min='1900' id='year' value='${movie.year}'></input>
            </div>

            <div class='row'>
                <label for='desc'>Descrizione:</label>
                <textarea  id='desc'>${movie.description}</textarea>
            </div>

            <button>Modifica scheda</button>
        </form>
        <a href='#' class="back">Torna alla home</a>
    </div >
    `);

            const form = document.querySelector('#create');
            form.addEventListener('submit', (event) => {
                event.preventDefault();

                const updateMovie = {
                    title: event.target.title.value,
                    poster: event.target.poster.value,
                    year: parseInt(event.target.year.value),
                    description: event.target.description.value,
                };

                console.log(updateMovie);

                fetch(resource, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updateMovie)
                })
                    .then((response) => response.json())
                    .then(() => (location.hash = ""));
            });

        })
}

export { edit }