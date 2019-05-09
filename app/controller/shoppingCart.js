import CartProduct from '../model/Cart.js'
import * as cartView from '../view/cartView.js';

const controlCart = async () => {
    const productCart = localStorage.getItem('productSelected');
    const productCartObject = JSON.parse(productCart);
    cartView.renderCart(productCartObject);
    console.log(productCartObject);
}

['load'].forEach(event => window.addEventListener(event, controlCart));
