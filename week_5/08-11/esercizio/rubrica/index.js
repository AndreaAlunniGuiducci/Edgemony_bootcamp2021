import { data } from './data.js';
import { q } from './queryselector.js';
import { render } from './render.js';
import { solarSystem, monkeysEquipe } from './script.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = q('#formSearch');
    const input = q('#formSearch input');
    const list = q('ul');

    render(list, data);

    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     const value = input.value.toLowerCase();
    //     const results = data.filter((element, index) =>
    //         element.name.toLocaleLowerCase().search(value) > -1
    //     );

    //     render(list, results);
    // });
    input.addEventListener('keyup', () => {
        const value = input.value.toLowerCase().trim();
        const results = data.filter((element) =>
            element.name.toLocaleLowerCase().search(value) > -1 || element.email.toLocaleLowerCase().search(value) > -1
        );

        render(list, results);
    });
    const formAdd = q('#addContact');

    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();

        const newContacts = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value
        }

        data.push(newContacts);

        render(list, data);
        formAdd.reset();
    })
});

// ----------------------esercizio 08/11-----------------------
const accept = q('#accept');
const deny = q('#deny');
const modal = q('.modal');
const badModal = q('.badModal');
const sistemaSolare = q('#sistemaSolare');
const italia = q('#italia');
const solarH3 = q('#solarH3');
const esercizioSistemaSolare = q('#esercizioSistemaSolare');
const main = q('#main');
const scimmie = q('#scimmie')

const hide = (child) => {
    modal.style.opacity = 0;

    setTimeout(() => { document.body.removeChild(child); }, 550);
}

accept.addEventListener('click', () => hide(modal));

const nomi = solarSystem.map((pianeta => {
    return `${pianeta.name} diametro = ${pianeta.radius * 2}`
}));

const nomiOrdinati = nomi.join(`\n`);
sistemaSolare.innerText = nomiOrdinati;


italia.addEventListener('click', () => {
    const nomiPianeti = solarSystem.map((pianeta) => {
        if (pianeta.name === 'Mercury') {
            pianeta.name = 'Mercurio';
        }
        if (pianeta.name === 'Sun') {
            pianeta.name = 'Sole';
        }
        if (pianeta.name === 'Venus') {
            pianeta.name = 'Venere';
        }
        if (pianeta.name === 'Earth') {
            pianeta.name = 'Terra';
        }
        if (pianeta.name === 'Mars') {
            pianeta.name = 'Marte';
        }
        if (pianeta.name === 'Jupiter') {
            pianeta.name = 'Giove';
        }
        if (pianeta.name === 'Uranus') {
            pianeta.name = 'Urano';
        }
        if (pianeta.name === 'Neptune') {
            pianeta.name = 'Nettuno';
        }
        if (pianeta.name === 'Saturn') {
            pianeta.name = 'Saturno';
        }
        return pianeta.name;
    });

    const nomiPianetiOrdinati = nomiPianeti.join(`\n`);
    sistemaSolare.innerText = nomiPianetiOrdinati;
});

deny.addEventListener('click', () => {
    document.body.removeChild(main);
    document.body.removeChild(esercizioSistemaSolare,);
    hide();

    setTimeout(() => {
        badModal.style.display = 'block';
    }, 500);

    setTimeout(() => {
        hide(badModal);

        const scimmia = (index) => {
            const nome = monkeysEquipe[index].name;
            const aka = monkeysEquipe[index].aka;
            const surname = monkeysEquipe[index].surname;
            scimmie.innerText = (`${nome} ${aka} ${surname}`);
        }
        setInterval(() => {

            const index = Math.floor(Math.random() * 5);
            scimmia(index);

        }, 2000);

    }, 1000);
})