/*
================= THEMA: LESSON 2 =================
Funktionale vs. objektorientierte Programmierung in JavaScript
===================================================
*/

/* 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Ich heiße ${this.name} und bin ${this.age} Jahre alt.`;
  }
}

const homer = new Person('Homer', 34);
console.log(homer.name); // => Homer
console.log(homer.age); // => 34
console.log(homer.greet()); // => Ich heiße Homer und bin 34 Jahre alt.

// In JavaScript gibt es keine "Klassen", da es im Hintergrund als Funktion angelegt wird
console.log(typeof Person); // => function 
*/

// ====== WIE JAVASCRIPT KLASSEN IM HINTERGRUND ERSTELLT ======
// Quasi die Konstruktor-Funktion
function Person(name, age, nationality) {
  this.name = name;
  this.age = age;
  this.nationality = nationality;
}

Person.nationality = 'Amerikanisch';
console.log(Person.nationality); // => Amerikanisch

// Methode greet() wird vom Prototypen von Person hinzugefügt
// Keine Arrow-Funktion, da "this" auf das Objekt verweisen und nicht auf den globalen Kontext
Person.prototype.greet = function () {
  return `Ich heiße ${this.name} und bin ${this.age} Jahre alt.`;
};

const bart = new Person('Bart', 12, 'Amerikanisch');

// In JavaScript, erbt jedes Objekt, egal ob Array oder Date, von "Object.prototype"
console.log(bart);
