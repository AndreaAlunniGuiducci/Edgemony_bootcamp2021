
const fs = require('fs').promises;
const argument = process.argv.slice(2);


async function readFile(file) {
    const data = await fs.readFile(file);
    const dataToString = data.toString();
    console.log(dataToString)
}

async function writeFile(file, content) {
    await fs.writeFile(file, content, { flag: 'a+' });
}

const content = `\n product: ${argument[0]} - quantity: ${argument[1]}`;

async function writeAndRead() {
    await writeFile('spesa.txt', content)
    await readFile('spesa.txt');
}

writeAndRead();

