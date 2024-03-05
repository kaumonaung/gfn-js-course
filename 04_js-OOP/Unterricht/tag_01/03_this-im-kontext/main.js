/*
====================== THEMA ======================
"this" im Kontext
===================================================
*/

// Kontext: Browser
console.log(this); // this bezieht sich auf das window Objekt

// Kontext: Objekt
const person = {
  age: 32,

  // greet: function() {} => Alternative Schreibweise
  greet() {
    console.log('Ich bin ' + this.age, 'alt'); // this bezieht sich auf das Objekt "person"
  },
};

person.greet();

// Kontext: Funktion
const printThis = () => {
  return console.log(this);
};

printThis();

// Kontext: Node.js
console.log(this === module.exports); // Fehlermeldung im Browser, weil "module.exports" nur im Server vorhanden ist (Node.js)
