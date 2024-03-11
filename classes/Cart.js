const Product = require('./Product.js');

class Cart {
	constructor(products = [], total = 0){
	this.products = products;
	this.total = total;
	}
	
	addProduct(product){
		this.products.push(product);
		this.total += product.price;
	}

	removeProduct(product){
		for (let x = this.products.length -1; x >= 0; x--)
		{
			if (product.name === this.products[x].name)
			{
				console.log(product.name);
				this.total -= this.products[x].price;
				this.products.splice(x,1);
				break;
			}
		}
	}
}

let c1 = new Cart();
c1.addProduct(new Product('straw', 5, 'Descript'));
c1.removeProduct('straw');
console.log(c1);

module.exports = Cart;
