// --------------------esercizio 1-------------------------------
function calc1(numbers) {
    function sum() {
        let totalSum = 0;
        for (num of numbers) totalSum += num;
        return totalSum;
    }
    function sub() {
        let totalSub = numbers[0];
        for (num of numbers) totalSub -= num;
        return totalSub + numbers[0];
    }
    function mul() {
        let totalmul = 1;
        for (num of numbers) totalmul *= num;
        return totalmul;
    }
    function diviso() {
        let totalDiviso = numbers[0];
        for (num of numbers) totalDiviso /= num;
        return totalDiviso * numbers[0];
    }

    return {
        sum: sum(),
        sub: sub(),
        mul: mul(),
        diviso: diviso()
    }
}

// ------------------------esercizio 2 + avanzato-----------------------------------
function calc2(numbers) {
    function sum() {
        let totalSum = numbers.reduce((acc, num) => acc + num);
        return totalSum;
    }
    function sub() {
        let totalSub = numbers.reduce((acc, num) => acc / num);
        return totalSub;
    }
    function mult() {
        let totalMult = numbers.reduce((acc, num) => acc * num);
        return totalMult;
    }
    function diviso() {
        let totalDiviso = numbers.reduce((acc, num) => acc / num);
        return totalDiviso;
    }
    function pow() {
        num1 = numbers[0];
        num2 = numbers[1];
        let totalPow = (Math.pow(num1, num2));
        return totalPow;
    }
    function square() {
        num = numbers[0];
        let totalSquare = (Math.pow(num, 0.5));
        return totalSquare
    }

    return {
        sum: sum(),
        sub: sub(),
        mult: mult(),
        diviso: diviso(),
        pow: pow(),
        square: square()
    };

}

const q = (selector) => document.querySelector(selector);
const numeri = q('#numeri');
const risultato = q('#risultato');
const addizione = q('#addizione');
const sottrazione = q('#sottrazione');
const moltiplicazione = q('#moltiplicazione');
const divisione = q('#divisione');
const potenza = q('#potenza');
const radice = q('#radice');

addizione.addEventListener('click', () => {

    let arrNum = []
    arrNum.push(numeri.value);
    let par = arrNum.split('');

    // for (x of arrNum) {
    //     parsedNum.push(parseInt(x));
    // }
    console.log(par);
})
    // parsedNum = [];
    // console.log(calc1([100, 5]).diviso);
