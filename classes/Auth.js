class Customer {
    constructor(name, email, shippingAddress) {
      this.name = name;
      this.email = email;
      this.shippingAddress = shippingAddress;
    }
  }
  
  class Auth {
    constructor() {
      this.customers = [];
    }
  
    register(name, email, shippingAddress) {
      const newCustomer = new Customer(name, email, shippingAddress);
      this.customers.push(newCustomer);
      console.log("Registration successful!");
    }
  
    login(email) {
      const customer = this.customers.find(customer => customer.email === email);
      if (customer) {
        console.log(`Welcome back, ${customer.name}!`);
      } else {
        console.log("Login failed");
      }
      return customer;
    }
  }

  module.exports = Auth;