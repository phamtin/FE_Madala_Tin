const path = require('path');

module.exports = {
    entry: {
        list: './app/controller/index.js',
        detail: './app/controller/detail.js',
        shoppingCart: './app/controller/shoppingCart.js'
    },
    output: {
        path: path.resolve(__dirname, 'asset'),
        filename: 'js/[name].bundle.js',
    },
    devServer: {
        contentBase: './asset'
    },
    watch: true
};
