//calcolatrice

//funzioni
const sum = (num1, num2) => num1 + num2;
const mult = (num1, num2) => num1 * num2;
const sott = (num1, num2) => num1 - num2;
const divi = (num1, num2) => num1 / num2;
const power = (num1, num2) => Math.pow(num1, num2);

function calculator(operator, numbers){
    let totOp = 0;
    totOp = operator(...numbers);
    alert(totOp);
}

//variabili
let sceltaOp = prompt(`scegli l'operazione\n + per la somma\n * per la moltiplicazione\n - per la sottrazione\n / per la divisione\n q perla radice quadrata\n p per l'elevamento a potenza`);
let sceltaNum = prompt("scegli i numeri separati da uno spazio");
const numbers = sceltaNum.split(" ");
const parsedNum = [];

for (x of numbers){
    parsedNum.push(parseInt(x));
}

//casi
if (parsedNum.length === 2){
switch(sceltaOp){
case "*":
    calculator(mult, parsedNum);
break;
case "+":
    calculator(sum, parsedNum);
break;
case "-":
    calculator(sott, parsedNum);
break;
case "/":
    calculator(divi, parsedNum);
break;
case "p":
    calculator(power, parsedNum);
break;
default:
    alert("Non hai selezionato nessuna operazione valida");
}
}
else if(parsedNum.length === 1){
    switch(sceltaOp){
case "q":
    alert(Math.sqrt(sceltaNum));
break;
default:
    alert(sceltaNum);
}
}
else{
    alert("seleziona 1 o 2 numeri")
}

