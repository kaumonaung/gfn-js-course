/*
===== Aufgabe =====
1) Abstrahiere die Klasse Animal, sodass Animal alleine nicht instanziiert werden kann
  - Stichwort: new.target, siehe tag_03/02_abstrakte-Klassen/lesson-2.js

2) Erstelle einen Konstruktor-Funktion für die Klasse Animal mit den Eigenschaften age, gender und speed

3) Zu allen Eigenschaften soll es Getter und Setter geben (getAge, setAge, getGender, setGender, getSpeed, setSpeed)
  - Nutze dafür die Prototypen-Methode
  - Die Setter nehmen 1 Parameter entgegen, z.B. age, gender, speed
  - getAge() => '4 years'
  - Ansonsten return alle nur die Eigenschaften, z.B. return this.property


4) Die Getter von age und speed sollen nur positive Zahlen annehmen.
  - Tipp: new RegExp(/\d+/) => gibt true zurück, wenn es sich um eine positive Zahl handelt
  - Aufrufen kann man es über test(), z.B. expression.test(age)

5) Animal besitzt eine Methode move(). Diese gibt einen String mit der maximalen Geschwindigkeit des Tiers zurück.
  - Beispiel: 'with a maximum speed of 20 km/h' sollte zurückgegeben werden

6) Animal besitzt eine zweite Methode eatAnimal(). Diese erwartet einen Callback und gibt einen String zurück, der besagt, welches Tier welches andere frisst. Die Information über die Beute wird dem Callback entnommen.
  - Nutze dafür die Prototypen-Methode
  - Tipp: Animal.prototype.eatAnimal = function(callback) {}
  - Beispiel: 'The bird is eating the Fish' sollte zurückgegeben werden
  - 'bird' ist eine Referenz auf das aktuelle Objekt mit this.species welches in den Klassen Bird und Fish definiert wird
  - 'Fish' wird durch callback() aufgerufen, siehe console.log(bird.eatAnimal(fish.getSpecies));

7) Rufe mithilfe von super() die Konstruktor-Funktion von Animal in den Klassen Bird und Fish auf.

8) Setze den this-Kontext von getSpecies() in der Klasse Fish auf das aktuelle Objekt im Konstruktor.

===================
*/

// ===== SOLUTION PART =====
function Animal(age, gender, speed) {
  if (new.target === Animal) throw 'abstract class cannot be instantiated';

  this.age = age;
  this.gender = gender;
  this.speed = speed;
}

// Animal Methoden hinzufügen mithilfe von Prototypen
Animal.prototype.getAge = function () {
  return `${this.age} years`;
};

Animal.prototype.setAge = function (age) {
  const expression = new RegExp(/\d+/);

  if (!expression.test(age) || age < 0) {
    console.log('Invalid age!');
    return;
  }

  this.age = age;
};

Animal.prototype.getGender = function () {
  return this.gender;
};

Animal.prototype.setGender = function (gender) {
  this.gender = gender;
};

Animal.prototype.getSpeed = function () {
  return this.speed;
};

Animal.prototype.setSpeed = function (speed) {
  if (typeof speed !== 'number' || speed <= 0) {
    console.log('Invalid speed!');
    return;
  }

  this.speed = speed;
};

Animal.prototype.move = function () {
  return `with a maximum speed of ${this.speed} km/h`;
};

Animal.prototype.eatAnimal = function (callback) {
  return `The ${this.species} is eating the ${callback()}`;
};

// ===== SOLUTION END =====

// Bird
class Bird extends Animal {
  constructor(age, gender, speed) {
    super(age, gender, speed);
    this.species = 'bird';
  }
}

// Fish
class Fish extends Animal {
  constructor(age, gender, speed) {
    super(age, gender, speed);
    this.species = 'Fish';
    this.getSpecies = this.getSpecies.bind(this);
  }

  getSpecies() {
    return this.species;
  }
}

// ===== FINALE AUSGABE =====

const bird = new Bird(4, 'female', 20);

console.log(bird.getAge()); // 4 years

bird.setSpeed('30 km/h'); // Invalid speed!

const fish = new Fish(2, 'male', 10);

console.log(bird.eatAnimal(fish.getSpecies)); // The bird is eating the Fish
