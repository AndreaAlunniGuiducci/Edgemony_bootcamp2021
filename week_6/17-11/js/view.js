import { render, API } from "./utils.js"

const view = (id = 0) => {
    const siparioDx = document.querySelector('#siparioDx');
    const siparioSx = document.querySelector('#siparioSx');

    siparioDx.classList = ('closeDx');
    siparioSx.classList = ('closeSx');

    setTimeout(() => {
        fetch(`${API}/${id}`)
            .then(response => response.json())
            .then(movie => {
                const container = document.querySelector('#container');
                render(container, `
    <article>
    <h2>${movie.title}</h2>
    <p>${movie.year}</p>
    <img src='${movie.poster}'>
    <p>${movie.description}</p>
    <hr>
    <a href='#' id='back'>Torna alla Home</a>
    </article>
    `);
            });
    }, 1500);

}

export { view }