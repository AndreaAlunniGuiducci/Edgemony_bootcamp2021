
const fs = require('fs').promises;
const argument = process.argv.slice(2);
const lista = require('./lista.json');

lista.list.push({
    prodotto: argument[0],
    quantita: argument[1]
})

const htmlList = lista.list.map(el => `<li>${el.quantita} - ${el.prodotto}</li>`);

const html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <ul>
            ${htmlList.join('\n\t\t\t')}
        </ul>
    </body>
</html>
`;

async function printHtml() {
    const newLista = JSON.stringify(lista);
    await fs.writeFile('./lista.json', newLista);
    await fs.writeFile('./index.html', html);
}

printHtml()