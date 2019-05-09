import axios from '../../node_modules/axios';

export default class DisplayDetailProduct {
    async getResult() {
        try {
            const res = await axios(`http://localhost:3000/products`);
            this.dataDetail = res.data;
            return this.dataDetail;
        } catch (error) {
            alert(error)
        }
    }
}
