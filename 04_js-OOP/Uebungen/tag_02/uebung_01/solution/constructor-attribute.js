/*
===== Aufgabe =====

1) Nutze die Konstruktoreigenschaft damit der untenstehende Code funktioniert. 

console.log(contact.name); // => Peter
console.log(contact.phoneNumber); // => 0123456789
console.log(contact.startPhoneCall()); // => Calling Peter

Tipp: Siehe tag_01/06_funktional-vs-objektorientiert/lesson-3.js für Referenz.
===================
*/

function Contact(name, phoneNumber) {
  this.name = name;
  this.phoneNumber = phoneNumber;

  this.startPhoneCall = function () {
    return 'Calling ' + this.name;
  };
}

// Wir haben ein Objekt auf Grundlage von Contact erstellt und wollen neue Objekte erschaffen
const sampleContact = new Contact();

// Ein neues Object wird erschaffen auf Basis des erstellten Objekts
const contact = new sampleContact.constructor('Peter', '0123456789');

console.log(contact.name); // => Peter
console.log(contact.phoneNumber); // => 0123456789
console.log(contact.startPhoneCall()); // => Calling Peter
