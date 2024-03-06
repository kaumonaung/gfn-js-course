/*
====================== THEMA ======================
Polymorphismus Beispiel
===================================================
*/

// Basis Klasse für mathematische Formen
class Shape {
  calculateArea() {
    console.log('Berechnung der Fläche einer allgemeinen Form');
  }

  // Funktion 2

  // Funktion 3
}

// Rechteck: Fläche = width * height
class Rectangle extends Shape {
  constructor(width, height) {
    super(); // Ruft den Superclass (Shape) Konstruktor-Funktion auf
    this.breite = width;
    this.hoehe = height;
  }

  calculateArea() {
    console.log('Fläche eines Rechtecks: ', this.breite * this.hoehe);
  }
}

const rectangle = new Rectangle(3, 6);
rectangle.calculateArea();

// Kreis: Fläche = PI * r^2
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    console.log('Fläche eines Kreises: ', Math.PI * this.radius ** 2);
  }
}

const circle = new Circle(24);
circle.calculateArea();

// Dreieck: Fläche = 0.5 * c * h
class Triangle extends Shape {
  constructor(base, height) {
    super(); // Wenn super() weggelassen wird, dann => Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.basis = base;
    this.hoehe = height;
  }

  calculateArea() {
    console.log('Fläche eines Dreiecks: ', 0.5 * this.basis * this.hoehe);
  }
}

const triangle = new Triangle(4, 7);
triangle.calculateArea();
