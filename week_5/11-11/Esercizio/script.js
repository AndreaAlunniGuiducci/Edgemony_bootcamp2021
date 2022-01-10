import { products } from "./products.js";
const q = (selector) => document.querySelector(selector);
const create = (element) => document.createElement(element);

const wrapperProducts = q('.wrapper__products');
const cart = q('.cart');
const modal = q('.modal');
const wrapperCart = q('.wrapper__cart');

let totalCart = 0;
let userCart = [];


products.map((prod) => {

    // crea contenitore prodotto-------------------------------------------------------------------------------
    const product = create('div');
    product.className = 'product';
    wrapperProducts.appendChild(product);

    // crea l'immagine del prodotto --------------------------------------------------------
    const productImg = create('img');
    productImg.className = 'productImg';
    productImg.src = prod.image;
    product.appendChild(productImg);

    // crea descrizione prodotto -------------------------------------------
    const productTitle = create('h3');
    productTitle.className = 'productTitle';
    productTitle.innerText = prod.title;
    product.appendChild(productTitle);

    // crea prezzo prodotto---------------------------------------
    const productPrice = create('p');
    productPrice.className = productPrice;
    productPrice.innerText = `${prod.price} €`;
    product.appendChild(productPrice);

    // aggiungi prodotti al carrello ------------------------------------------------
    product.addEventListener('click', () => {

        totalCart += prod.price;
        cart.innerText = Math.round(100 * totalCart) / 100;

        userCart.push(prod.title, `${prod.price} €`, `\n`);

        modal.innerText = userCart.join(`\n`) + `\n` + `Totale ${Math.round(100 * totalCart) / 100} €`;
    })

}
)

