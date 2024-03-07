/*
====================== THEMA ======================
Die Methoden bind(), call() und apply() in JS
===================================================
*/

// bind gibt eine neue Funktion zurück, die den "this"-Kontext festlegt
// Braucht den "this"-Kontext als Parameter
// Muss im Konstruktor gerufen werden

class Person {
  constructor(name) {
    this.name = name;
    this.getName = this.getName.bind(this); // Hier wird der "this"-Kontext explizit festgelegt
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
console.log(sayHello(person.getName)); // => Hallo, Max
