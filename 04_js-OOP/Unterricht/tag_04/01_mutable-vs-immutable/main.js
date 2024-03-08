/*
====================== THEMA ======================
Mutable vs. Immutable Objects
===================================================
*/

// Mutable Objects
// Das heißt, Objekte können verändert werden
const person = {
  name: 'Max',
};
console.log(person);

person.name = 'Neuen Namen';
console.log(person);

person.age = 27;
console.log(person);

// Immutable Objects
// Das heißt, Objekte können NICHT mehr verändert werden
const personTwo = {
  name: 'Homer',
  age: 45,
};
Object.freeze(personTwo); // => Object.freeze() macht ein Objekt immutable

console.log(personTwo);

personTwo.name = 'Lena';
personTwo.age = 20;
personTwo.address = 'Musterstraße 12';

console.log(personTwo);
