/*
====================== THEMA ======================
Aufbau einer Klasse
===================================================
*/

// ====== Private Attribute (private properties) ======
class User {
  #privateProperty =
    'Das Attribut kann nur innerhalb der Klasse zugegriffen werden';

  printPrivateProperty() {
    // Manipulation oder Transformation oder Validierung vorher machen ...
    // Bzw. kann dadurch geändert werden
    // this.#privateProperty = 'Geändertes Attribut';
    console.log(this.#privateProperty);
  }
}

// Unterklasse von User, d.h. erbt alle Methoden und Attribute von "User"
class Admin extends User {}

const userOne = new User();
// console.log(userOne.#privateProperty); // Uncaught SyntaxError: Private field '#privateProperty'
userOne.printPrivateProperty(); // => Das Attribut kann nur innerhalb der Klasse zugegriffen werden

const adminOne = new Admin();
// console.log(adminOne.#privatePropery);
adminOne.printPrivateProperty(); // => Das Attribut kann nur innerhalb der Klasse zugegriffen werden
