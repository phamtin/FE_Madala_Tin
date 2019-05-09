import { elements } from './base.js'

const renderResult = info => {
    const markup = `
        <div class="row mt-5" id=${info.id}>
            <div class="col-5 offset-3 offset-sm-0 col-sm-3">
                <img class="gird__img" src="${info.linkImage}">
            </div>
            <div class="col-sm-9">
                <h5>${info.heading}</h5>
                <img src="../../asset/images/4heart.png" alt="">
                <p class="para para--detail mt-3">${info.description}</p>
                <p>${info.price}</p>
                <br>
                <a class="btn btn-light custom-btn custom-btn--radius buy-btn mt-3 mr-1" href="detail.html">MUA HÀNG</a>
                <img class="mt-2" src="../../asset/images/green-heart.png">
            </div>
        </div>`;

    elements.productList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = (info) => {
    info.forEach(renderResult);
}

