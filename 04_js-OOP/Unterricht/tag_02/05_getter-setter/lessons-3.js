/*
====================== THEMA ======================
Getter und Setter
===================================================
*/

// ========= Getter =========
class Customer {
  #name; // Ist ein private property
  #customerId;

  constructor(name, id) {
    this.#name = name; // # weil wir das privat halten wollen
    this.#customerId = id; // # hier setzten wir das Attribut '#customerId' gleich dem parameter 'id'
  }

  // Das ist der Getter
  getCustomerId() {
    // return this.#customerId;

    const idArray = this.#customerId.toString().split('');

    return idArray
      .map((number, index, array) => (index < array.length - 2 ? '*' : number))
      .join('');
  }
}

const customerOne = new Customer('Max', 4343434);

console.log(customerOne.getCustomerId());
