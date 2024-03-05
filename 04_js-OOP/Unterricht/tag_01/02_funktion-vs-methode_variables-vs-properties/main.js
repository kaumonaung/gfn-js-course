/*
====================== THEMA ======================
Funktionen vs. Methoden & Variablen (variables) vs. Attribute (properties)
===================================================
*/

// Funktion
function sayHello() {}

const sayGoodbye = () => {};

// Variable
const PI = 3.14;
let car;

// Objekt
const person = {
  name: 'Homer', // => ein Attribut (aka. Variable)
  PI: 3.14, // => Attribut
  car, // => Attribut

  // Methode (aka. Funktion)
  sayHello: function () {
    console.log('Hallo, mein Name ist ' + this.name); // this bezieht sich auf das zugehörige Objekt "person"
  },
};

console.log(person); // Object {}
console.log(person.name); // => Homer
person.sayHello(); // => Hallo, mein Name ist Homer
