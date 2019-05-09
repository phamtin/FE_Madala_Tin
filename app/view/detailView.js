import { elements } from './base';

export const renderDetail = detail => {

    const markup = `
    <div class="col-9 col-md-6">
        <div><img class="ml-5" style="width:55%" src="${detail.linkImage}"></div>
    </div>
    <div class="col-md-5">
            <h5 class="mb-0">${detail.heading}</h5><small class="text-muted">TIFFANY MS 8050</small><br>
            <h2>${detail.price}đ</h2>
            <small><i><strike>499.000đ</strike></i></small>
            <p class="para para--detail">
                ${detail.description}
            </p>
            <div class="form-group">
                <label for=""><strong> MÀU SẮC</strong></label>
                <input class="form-control custom-input--detail" type="text" name="" id="" aria-describedby="helpId" placeholder="Màu bạc"><br>
                <label for=""><strong> SỐ LƯỢNG</strong></label>
                <input class="form-control custom-input--detail input-amount" type="text" name="" id="" value="1">
            </div>
            <a class="btn btn-light custom-btn custom-btn--detail add-cart-btn" name="" id="submit" href="${localStorage.getItem('switchPage') ? 'shoppingCart.html' : '#'}" role="button">Thêm vào giỏ hàng</a>
            <img class="ml-1 mt-n2" src="../../asset/images/green-heart.png"><br>
            <small>Shipping &<a href="#"> return</a></small>
            <a href="./page404.html">
                <img class="col-lg-10 detail__img" src="../../asset/images/links.png">
            </a>
    </div>
    `;

    elements.wrapDetail.insertAdjacentHTML('beforeend', markup);
}
