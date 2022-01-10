import { render } from "./utils.js";

const list = (data) => {
    const element = data.map(item => `<li>${item.title}- ${item.year}</li>`).join('');

    const container = document.querySelector('#container');

    render(container, `
    <p>Elenco schede film</p>
    <ul>${element}</ul>`);
};

export {
    list
}