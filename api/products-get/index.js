const data = require('../shared/product-data')

module.exports = async function (context, req) {
    try {
        const products = data.getProducts();
        context.res.status(200).json(products);
        console.log(200);
    }
    catch (err) {
        context.res.status(500).send(err);
        console.log(500);
        console.log(err);

    }
}; 