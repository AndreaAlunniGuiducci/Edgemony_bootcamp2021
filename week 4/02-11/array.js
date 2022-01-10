const lista = document.querySelector('#lista');
const names = ['mickey', 'donald', 'goofy'];
console.log(names[2]);
names.forEach((element) => {
    let elemento = document.createElement('li');
    lista.appendChild(elemento);
    elemento.textContent = element;
})