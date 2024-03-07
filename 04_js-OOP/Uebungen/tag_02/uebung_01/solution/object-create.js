/*
===== Aufgabe =====

1) Nutze die Object.create() damit der untenstehende Code funktioniert. 

console.log(contact.name); // => Peter
console.log(contact.phoneNumber); // => 0123456789
console.log(contact.startPhoneCall()); // => Calling Peter

Tipp: Siehe tag_01/06_funktional-vs-objektorientiert/lesson-3.js für Referenz.
===================
*/

// Mit Object.create() können wir direkt neue Objekte kreieren
const sampleContact = {
  name: 'Peter',
  phoneNumber: '0123456789',
  startPhoneCall: function () {
    return 'Calling ' + this.name;
  },
};

const contact = Object.create(sampleContact);
console.log(contact);

console.log(contact.name); // => Peter
console.log(contact.phoneNumber); // => 0123456789
console.log(contact.startPhoneCall()); // => Calling Peter
