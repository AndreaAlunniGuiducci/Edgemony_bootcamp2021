// import lodash from 'lodash'; sintassi ES6

// sintassi commonJS per nodeJS 

// fs sta per file system, con promises la lettura e scrittura dei file avvinee in maniera asincrona
const fs = require('fs').promises;
// .slice(2) elimina i primi 2 argomenti che sono le directory
const argument = process.argv.slice(2);
const lodash = require('lodash');

console.log(argument);

async function readFile(file) {
    const data = await fs.readFile(file);
    console.log(data.toString());
}


async function writeFile(file, content, flag) {
    await fs.writeFile(file, content, flag)
}

const spesa = `${argument[0]} - ${argument[1]} \n`

writeFile('spesa.txt', spesa, { flag: 'a+' });
console.log(readFile('./spesa.txt'));

// ------------------------------------------------------------------------------------------------------------------

// chiama il file.json
const lista = require('./lista.json');

// pusha dentro l'array nell'oggetto JSON
lista.list.push({
    product: argument[0],
    qta: argument[1]
})

const mapList = lista.list.map(el => {
    const element = `<li>${el.qta} - ${el.product}</li>`
    return element
})

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
${mapList.join('\n')}
</ul>
</body>
</html>
`;

async function printHtml() {
    const newLista = JSON.stringify(lista);
    await fs.writeFile('./lista.json', newLista);
    await fs.writeFile('./index.html', html);
}

printHtml();
