/*
====================== THEMA ======================
Aufbau einer Klasse
===================================================
*/

const personOne = {
  name: 'Max',
  age: 30,
  address: 'Musterstraße 25',
  greet() {
    console.log('Hallo, mein Name ist ', this.name);
  },
  goodbye() {
    console.log('Tschüss ' + this.name + ' bis nachher!');
  },
};

const personTwo = {
  name: 'Lana',
  age: 35,
  address: 'Talweg 73',
  greet() {
    console.log('Hallo, mein Name ist ', this.name);
  },
  goodbye() {
    console.log('Tschüss ' + this.name + ' bis nachher!');
  },
};

const personThree = {
  name: 'Mario',
  age: 44,
  address: 'Main Street 123',
  greet() {
    console.log('Hallo, mein Name ist ', this.name);
  },
  goodbye() {
    console.log('Tschüss ' + this.name + ' bis nachher!');
  },
};

// ====== Leere Klasse ======
// class Person {}

// ====== Constructor ======
class Person {
  constructor({ name = 'Homer', age, address }) {
    this.name = name; // Erstellen neue Attribute/Variablen für die Klasse Person
    this.age = age; // Erstellen neue Attribute/Variablen für die Klasse Person
    this.address = address; // Erstellen neue Attribute/Variablen für die Klasse Person
  }

  // Methoden einer Klasse
  greet() {
    console.log('Hallo, mein Name ist ', this.name);
  }

  goodbye() {
    console.log('Tschüss ' + this.name + ' bis nachher!');
  }
}

/* class PersonModified extends Person {
  constructor({ name, age, address }) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
 */

// ====== "new" Keyword ======
// - Erzeugt ein neues leeres Objekt
// - Ruft die Konstruktur-Funktion auf
// - Setzt das "this"-Keyword auf das neu erstellte Objekt
const homer = new Person('Homer', 44, 'Springfield Avenue 24');
const max = new Person('Max', 30, 'Musterstraße 25');
const lana = new Person('Lana', 35, 'Talweg 73');
// const mario = new PersonModified(personThree);

console.log(personOne); // => Objekt
console.log(max); // => Objekt

max.greet(); // Dot Notation, um Methoden aufzurufen
lana.goodbye(); // Dot Notation, um Methoden aufzurufen
