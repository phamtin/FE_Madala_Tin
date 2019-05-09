import axios from '../../node_modules/axios';

export default class DisplayProduct {
    async getResult() {
        try {
            const res = await axios(`http://localhost:3000/products`);
            this.data = res.data;
            return this.data;
        } catch (error) {
            alert(error);
        }
    }
}
