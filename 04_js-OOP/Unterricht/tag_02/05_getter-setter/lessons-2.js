/*
====================== THEMA ======================
Getter und Setter
===================================================
*/

// ===== Setter implementieren =====
class Customer {
  #name; // Ist ein private property
  #customerId;

  constructor(name, id) {
    this.#name = name; // # weil wir das privat halten wollen
    this.#customerId = id; // # hier setzten wir das Attribut '#customerId' gleich dem parameter 'id'
  }

  // Das ist der Setter
  setName(newName) {
    const expression = new RegExp(/\d+/); // (d) steht für Ziffern 0-9 und (+) bedeutet mehr als eins

    // Prüft, ob 1 oder mehr Zahlen in dem Parameter "newName" enthalten sind
    if (expression.test(newName)) {
      console.log('Invalid name!');
      return; // Schließt die Funktion/Methode "setName(newName)" ab
    }

    // Wird nur ausgeführt, wenn das if-Statement false ist
    this.#name = newName;
  }
}

const customerOne = new Customer('Max', 433434234);

customerOne.setName('Lana');
