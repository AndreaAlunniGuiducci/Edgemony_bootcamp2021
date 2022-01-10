// bottone titolo 
const h1Btn = document.querySelector('.H1Rename');
const titolo = document.querySelector('.titolo');

h1Btn.addEventListener('click', () => {
    const insertTitle = prompt('inserisci un titolo');
    titolo.textContent = insertTitle;
    h1Btn.textContent = ('modifica il titolo');
})

// input sottotilo 
const inputSub = document.querySelector('#sub');
const subtit = document.querySelector('.subtit');
const subtitIns = document.querySelector('.subtitIns');
const subParagraph = document.querySelector('#subParagraph');

subtitIns.addEventListener('click', () => {
    subtit.innerHTML = inputSub.value;
    console.log(inputSub);
    subParagraph.textContent = ('modifica il tuo sottotitolo');

})

// fai la tua lista
const lista = document.querySelector('.lista');
const createList = document.querySelector('.createList');
createList.addEventListener('click', () => {   
    elem = prompt("inserisci una cosa da mettere nella lista");
    let nuovo = document.createElement("LI");
    let oggetto = document.createTextNode(elem);
    nuovo.appendChild(oggetto);
    lista.appendChild(nuovo);
})
