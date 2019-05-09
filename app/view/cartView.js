
export const renderCart = product => {
    const markup = `
    <tr>
        <td scope="row"><img src="${product.linkImage}"></td>
        <td style="vertical-align:middle">${product.heading}</td>
        <td style="vertical-align:middle"><strong>${product.price}đ</strong></td>
        <td style="vertical-align:middle">${product.value}</td>
        <td style="vertical-align:middle"><strong>345000đ</strong></td>
        <td style="vertical-align:middle"><a href="#"><img src="../../asset/images/bin.png"></a></td>
    </tr>
    `;

    document.querySelector('.products').insertAdjacentHTML('beforeend', markup);
}
