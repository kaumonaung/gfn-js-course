/*
====================== THEMA ======================
Getter und Setter
===================================================
*/

class Customer {
  constructor(name, id) {
    this.name = name;
    this.customerId = id;
  }
}

const customerOne = new Customer('Max', 4242424);

console.log(customerOne.name);

// Ohne Setter und Getter können wir Attribute unkontrolliert zugreifen und überschreiben
customerOne.name = 'Lana';
console.log(customerOne.name);
