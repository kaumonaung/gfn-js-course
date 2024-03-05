/*
====================== THEMA ======================
Grundpfeiler der objektorientierten Programmierung
===================================================
*/

// ========== Kapselung (Encapsulation) ==========
// Daten und Funktionen werden in einer Einheit gepackt (z.b. in einem Objekt oder Klasse)
const person = {
  name: 'Lisa',
  sayHello: function () {
    console.log('Hallo, mein Name ist ' + this.name);
  },
};

// ========== Vererbung (Inheritance) ==========
// Klassen können Attribute (Variablen) und Methoden (Funktionen) einer anderen Klasse übernehmen, ohne sie neu zu definieren

/*
Wenn wir "Animal" in eine "Funktion" umwandeln
function animal(name) {
  const _name = name;
  return _name;
}
*/

class Animal {
  // Wir brauchen die constructor() Funktion, um Parameter der Klasse zu übergeben
  constructor(name) {
    this._name = name; // das gleiche wie "const _name = name"
  }

  getInfo() {
    return `Ich bin ein Tier namens ${this._name}`;
  }
}

class Dog extends Animal {
  bark() {
    return 'Wuff! Wuff!';
  }
}

const myAnimal = new Animal('Wal');
console.log(Animal);
console.log(myAnimal.getInfo()); // => Ich bin ein Tier namens Wal

const myDog = new Dog('Bello');
console.log(myDog.bark()); // => Wuff! Wuff!
console.log(myDog.getInfo()); // => Ich bin ein Tier namens Bello

// constructor() muss nicht unbedingt definiert
class NewClass {}
const newInstanceOfNewClass = new NewClass();
console.log(newInstanceOfNewClass);

// ========== Polymorphismus (Polymorphism) ==========
// Polymorphismus ermöglicht es, eine Funktionen auf verschiedene Weisen zu implementieren bzw. zu überschreiben
class Car {
  drive() {
    console.log('Ich fahre ein Auto');
  }
}

class LKW extends Car {
  // Überschreibt die Methode drive() von class Car
  drive() {
    console.log('Ich fahre einen LKW/Truck');
  }
}

const einAuto = new Car();
einAuto.drive(); // => Ich fahre ein Auto

const einLKW = new LKW();
einLKW.drive(); // => Ich fahre einen LKW/Truck

// ========== Abstraktion (Abstraction) ==========
// Abstraktion reduzieren Komplexität, da komplexe Methoden (Funktionen) oft "versteckt" werden
const array = [1, 2, 3];
const sum = array.reduce((accumlated, current) => accumlated + current, 0); // Abstrakte Methode .reduce()
console.log(sum);
