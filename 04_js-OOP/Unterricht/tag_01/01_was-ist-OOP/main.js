/*
====================== THEMA ======================
Was ist objektorientierte Programmierung? (OOP bzw. Object Oriented Programming)
===================================================
*/

const cars = ['Mercedes', 'VW', 'Audi'];
console.log(cars); // => ['Mercedes', 'VW', 'Audi']
console.log(cars.length); // => 3
console.log(cars.sort()); // => ['Audi', 'Mercedes', 'VW']

console.log(this); // => window object herausgegeben

const array = []; // Object
const object = {}; // Object { }
function eineFunktion() {} // Object (First-class Object)

// Viele Datentypen erben von Object.prototype

// ABER nicht alles sind Objekte, z.B. primitive Datentypen (primitive types)
const string = 'JavaScript'; // String (kein Object)
const number = 10; // Number (kein Objekt)
const boolean = false; // Boolean (kein Objekt)
const undefinedType = undefined; // undefined (kein Objekt)
const nullType = null; // null (kein Objekt)

// JavaScript wandelt im Hintergrund primitive Datentypen in Objekte um, damit bestimmte Methoden aufgerufen werden können
// Im Hintergrund wird "string" in ein Objekt umwickelt
console.log(string.length);
console.log(new String(string).length); // das gleiche wie "string.length"
