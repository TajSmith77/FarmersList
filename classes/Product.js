class Product {
	constructor(name, price, description, inStock){
		this.name = name;
		this.price = price || 0;
		this.description = description;
		this.inStock = inStock || true;
	}
	
	display(){
	let returnString = `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`;
	return returnString;
	}
}
module.exports = Product;
