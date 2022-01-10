const Cart = [];

function spesa(){
    let prodotto = prompt("Scegli il prodotto e premi ok");

    if (Cart.includes(prodotto) === true){
        alert( `${prodotto} già inserito`);
    }
    else if(prodotto === "" || prodotto === null){
        if(Cart.length < 1){
            alert("Non intendi inserire nulla?");
        }
        else {
            alert("Hai finito la spesa?");
        }
    }
    else{
        Cart.push(prodotto);
        alert(`Hai inserito ${prodotto} nel carrello`);
    }

    console.log(Cart);
}