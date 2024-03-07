/*
====================== THEMA ======================
Verwendung von Statischen Klassen
===================================================
*/

// Statische Methoden und Funktionen
class MathHelper {
  static squareVolume(length) {
    return length ** 2;
  }

  // Static Properties sind oft nützlich für Caches, feste Konfigurationen von Daten
  static PI = 3.14;

  // Static Methods/Functions sind oft Hilfsfunktionen für z.B. erstellen von Objekten
  static func() {}
}

// Statische Methoden und Attribute werden nur direkt über die Klasse angesprochen und nicht über Instanzen von der Klasse
const mathHelperInstance = new MathHelper();
console.log(mathHelperInstance);

// Static Methoden und Funktionen werden weiter geerbt an Unterklassen, private properties dagegen nicht
class SmallMathHelper extends MathHelper {
  constructor() {
    super();
  }
}

console.log(MathHelper.squareVolume(3)); // => 9
// console.log(mathHelperInstance.squareVolume(3)); // => main.js:20 Uncaught TypeError: mathHelper.squareVolume is not a function
