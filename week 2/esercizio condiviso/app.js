const rubrica = [];

/*let nome = prompt("Inserisci il nome");
let secondoNome = prompt("Inserisci secondo nome");
let cognome = pompt("Inserisci il cognome");
let numeroCell = prompt("inserisci il cellulare");
let numeroFisso = prompt("inserisci il fisso");*/
function subscribe(){
let dati = prompt("inserisci i dati");
let input = dati.split(",");
return input;
}


function userCreation(){
    let arrData = subscribe();
    let user = {
    nome: arrData[0],
    secondoNome: null,
    cognome: arrData[1],
    telefono: {
        fisso: "+39 075 123456",
        cellulare: "+39 347 123456"
    }
}
}

function addUser(){
    let objUser = userCreation();
    rubrica.push(objUser);
}
console.log(userCreation());