/*
===== Aufgabe =====

1) Nutze die Konstruktorfunktion damit der untenstehende Code funktioniert. 

console.log(contact.name); // => Peter
console.log(contact.phoneNumber); // => 0123456789
console.log(contact.startPhoneCall()); // => Calling Peter

Tipp: Siehe tag_01/06_funktional-vs-objektorientiert/lesson-3.js für Referenz.
===================
*/

// Da wir eine Funktion haben, in der die Parameter den this-Kontext haben, können wir damit neue Objekte erstellen
function Contact(name, phoneNumber) {
  this.name = name;
  this.phoneNumber = phoneNumber;

  this.startPhoneCall = function () {
    return 'Calling ' + this.name;
  };
}

const contact = new Contact('Peter', '0123456789');

console.log(contact.name); // => Peter
console.log(contact.phoneNumber); // => 0123456789
console.log(contact.startPhoneCall()); // => Calling Peter
