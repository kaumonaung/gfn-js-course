/*
====================== THEMA ======================
Objekte "kopieren" bzw. klonen mit dem spread-Operator
===================================================
*/

const person = {
  name: 'Max',
  age: 45,
};
Object.freeze(person);

const personTwo = {
  ...person, // '...' (spread Operator) erstellt eine Kopie von "person"
  address: 'Musterstraße 25',
};

console.log(personTwo);

const personThree = {
  ...person,
};

console.log(personThree);

// Der Spread Operator erstellt einen Shallow Copy
console.log(person === personThree); // => false
