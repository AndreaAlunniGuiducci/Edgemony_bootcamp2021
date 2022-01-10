//evento addizioni
const totBtn = document.querySelector('.totBtn');
totBtn.addEventListener('click', additionNow);
const totBtnTime = document.querySelector('.totBtnTime');
totBtnTime.addEventListener('click', additionTime);
let somma = 0;

//funzioni addizioni
function addition (){
const numbers = prompt('inserisci 2 o più numeri separati da uno spazio e io te li sommerò');
arrNum = numbers.split(' ');
parsedNum = [];

for ( x of arrNum){
    parsedNum.push(parseInt(x));
}

for(let i = 0; i < parsedNum.length; i++){
    somma += parsedNum[i];
}

return somma;
}

function additionNow(){
    addition();
const tot = document.querySelector('.tot');
tot.innerText = somma;
}
function additionTime(){
    addition();
    setTimeout (() => {console.log(somma)}, 10000);
}

//cerchio colorato
const tot = document.querySelector('.tot');
const colorRnd = setInterval(() => {
    let color = Math.floor(Math.random() * 5)+1;
    if(color === 1){
        tot.style.color = 'red';
        tot.style.borderColor = 'red';
    }
    else if (color === 2){
        tot.style.color = 'blue';
        tot.style.borderColor = 'blue';
    }
    else if (color === 3){
        tot.style.color = 'purple';
        tot.style.borderColor = 'purple';
    }
    else if (color === 4){
        tot.style.color = 'pink';
        tot.style.borderColor = 'pink';
    }
    else if (color === 5){
        tot.style.color = 'grey';
        tot.style.borderColor = 'grey';
    }
}, 5000);

document.body.addEventListener('keypress', (event) =>{
    if (event.key === 'Enter'){
        clearInterval(colorRnd);
    }
})



