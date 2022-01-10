/**
 * Project REST API endpoint
 */
const API = 'https://edgemony-backend.herokuapp.com/movies';

/**
 * render some content whitin a container HTML tag
 */
const render = (container, content) => {
    container.innerHTML = content;
}

export {
    API, render
};