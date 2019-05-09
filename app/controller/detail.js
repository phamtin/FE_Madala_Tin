import DetailProduct from '../model/Detail.js'
import * as detailView from '../view/detailView.js';


const controlDetails = async () => {
    const idItem = localStorage.getItem('idItem');

    const dataDetail = new DetailProduct();
    let listData = await dataDetail.getResult();

    const itemClick = listData[idItem];
    console.log(itemClick.heading);
    detailView.renderDetail(itemClick);

    const addCartbtn = document.getElementById('submit');
    addCartbtn.onclick = function () {
        const amount = parseInt(document.querySelector('.input-amount').value);
        const product = itemClick;
        product.value = parseInt(amount);
        localStorage.setItem('productSelected', JSON.stringify(product));
        console.log(product);
    };
}



['load'].forEach(event => window.addEventListener(event, controlDetails));
