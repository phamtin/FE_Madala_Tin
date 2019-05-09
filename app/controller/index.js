import DisplayProduct from '../model/List.js'
import * as listProductsView from '../view/listView.js';

//----------------- LIST CONTROLLER -------------------

const controlListProduct = async () => {
    const data = new DisplayProduct();
    const dataList = await data.getResult();
    listProductsView.renderResults(dataList);

    setupEventListener();
}

var setupEventListener = function () {
    var nodesArray = Array.prototype.slice.call(document.querySelectorAll(".buy-btn"));
    nodesArray.forEach(element => {
        element.addEventListener('click', control);
    })
};
var idItem;
const control = (e) => {
    idItem = e.target.parentNode.parentNode.id;
    console.log(idItem);
    localStorage.setItem('idItem', idItem);
}


['load'].forEach(event => window.addEventListener(event, controlListProduct));
