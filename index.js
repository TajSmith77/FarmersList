// Import Classes Here
const Product = require('./classes/Product.js');
const Cart = require('./classes/Cart.js')
const Account = require('./classes/Customer.js');


const Auth = require('./Auth');

const auth = new Auth();




// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}