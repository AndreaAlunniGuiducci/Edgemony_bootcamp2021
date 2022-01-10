import { products } from "./products.js";

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        renderData(data);
    })

const wrapperProduct = document.querySelector('.wrapper__products');

function createProduct(parent, imgUrl, imgTitle, textTitle, textPrice) {
    const product = document.createElement('div');
    product.className = 'product';

    createImg(product, imgUrl, imgTitle);
    createText(product, textTitle, textPrice);
    parent.appendChild(product);
}

function createImg(parent, imgUrl, imgTitle) {
    const image = document.createElement('img');
    image.src = imgUrl;
    image.alt = imgTitle;
    parent.appendChild(image);
}

function createText(parent, textTitle, textPrice) {
    const title = document.createElement('h4');
    title.textContent = textTitle;

    const price = document.createElement('p');
    price.textContent = textPrice;

    parent.appendChild(title);
    parent.appendChild(price);
}

function renderData() {
    products.map((product) => createProduct(wrapperProduct, product.image, 'title', product.title, `${product.price} €`));
}