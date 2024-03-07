/*
====================== THEMA ======================
Die Methoden bind(), call() und apply() in JS
===================================================
*/

class Person {
  constructor(name) {
    this.name = name;
  }

  // Getter
  getName() {
    return this.name;
  }
}

const person = new Person('Max');
console.log(person);
console.log(person.name);
console.log(person.getName());

// funktion = callback Function
function sayHello(funktion) {
  return 'Hallo, ' + funktion();
}

// sayHello wird im globalen Kontext aufgerufen, weil sayHello() außerhalb der Klasse definiert wurde
// Im globalen Kontext ist "this" undefined und löst deswegen den Fehler
console.log(sayHello(person.getName())); // => Uncaught TypeError
