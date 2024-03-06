/*
====================== THEMA ======================
Vererbung einer Klasse
===================================================
*/

class Customer {
  constructor(name, id) {
    this.name = name;
    this.customerID = id;
  }

  // Setter: Hier wird überprüft, ob Zahlen im Namen vorhanden sein
  setName(name) {
    const expression = new RegExp(/\d+/); // (d) steht für Ziffern 0-9 und (+) bedeutet mehr als eins

    // Prüft, ob 1 oder mehr Zahlen in dem Parameter "name" enthalten sind
    if (expression.test(name)) {
      console.log('Invalid name!');
      return; // Schließt die Funktion/Methode "setName(name)" ab
    }

    // Wird nur ausgeführt, wenn das if-Statement false ist
    this.name = name;
  }

  // Getter: Transformation, statt den ganzen ID bekommen wir eine veränderte Version der ID
  getCustomerID() {
    const idArray = this.customerID.toString().split('');
    // Beispiel: this.customerID = 98765
    // idArray = ['9', '8', '7', '6', '5']

    const modifiedId = idArray
      .map((number, index, array) => (index < array.length - 2 ? '*' : number))
      .join('');
    // Beispiel: this.customerID = 98765
    // modifiedId = '***65'
    return modifiedId;
  }
}

const customerOne = new Customer('Max', 2345323);
customerOne.setName('Max123'); // "Invalid name!", hier rufen wir einen Setter auf
console.log(customerOne.getCustomerID()); // "*****23", hier rufen wir einen Getter auf

class VIPCustomer extends Customer {
  constructor(name, id) {
    super(name, id); // Rufen den constructor() der Mutterklasse "Customer"
  }
}

class President extends VIPCustomer {
  constructor(name, id) {
    super(name, id); // Rufen den constructor() der Mutterklasse "VIPCustomer"
  }

  setName(name) {
    this.name = name;
    console.log('Ich heiße ' + name);
  }
}

const vipCustomerOne = new VIPCustomer('Lisa', 543484324);
console.log(vipCustomerOne); // => { name: 'Lisa', customerID: 543484324 }
vipCustomerOne.setName('Olaf'); // => "Invalid name!" sobald irgendeine Zahl im Namen vorhanden ist also 'Olaf' würde funktionieren aber 'Ol344af' würde 'Invalid name!' ausgeben
console.log(vipCustomerOne.name); // => Olaf, wenn setName('Olaf') ansonsten 'Lisa' wegen der Zeile 'new VIPCustomer('Lisa', 543484324)'
console.log(vipCustomerOne.getCustomerID()); // "*******24"

const presidentOne = new President('Steinmeier', 43263454);
console.log(presidentOne);
presidentOne.setName('Gauck');
