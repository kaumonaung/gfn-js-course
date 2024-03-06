/*
====================== THEMA ======================
Getter und Setter
===================================================
*/

// ====== Getter und Setter über Object.defineProperty() ======
class Customer {
  #name; // Ist ein private property
  #customerId; // Ist ein private property

  constructor(name, id) {
    this.#name = name;
    this.#customerId = id;

    // Alternative Art und Weise Getters und Setters zu erstellen
    Object.defineProperty(this, 'name', {
      get: function () {
        return this.#name;
      },

      set: function (newName) {
        const expression = new RegExp(/\d+/); // (d) steht für Ziffern 0-9 und (+) bedeutet mehr als eins

        // Prüft, ob 1 oder mehr Zahlen in dem Parameter "newName" enthalten sind
        if (expression.test(newName)) {
          console.log('Invalid name!');
          return; // Schließt die Funktion/Methode "setName(newName)" ab
        }

        // Wird nur ausgeführt, wenn das if-Statement false ist

        this.#name = newName;
      },
    });

    // Was JavaScript im Hintergrund macht
    // damit .customerId oder .customerId = 'neueID' möglich ist
    Object.defineProperty(this, 'customerId', {
      get: function () {
        return this.#customerId;
      },

      set: function (id) {
        return (this.#customerId = id);
      },
    });
  }

  // Getters und Setters
  getName() {}

  setName() {}
}

const customerOne = new Customer('Max', 4343434);
console.log(customerOne.name);

customerOne.name = 'Max123';
console.log(customerOne);
