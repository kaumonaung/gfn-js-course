/*
===== Aufgabe =====
9) Erstelle die neue Methode fly() in der Klasse Bird.
  - Gibt einen String zurück, der mittels Methode move() besagt, wie schnell der Vogel fliegen kann.
  - Die Methode move() wurde zur Klasse Animal in Step 1 erstellt

10) Erstelle die neue Methode swim() in der Klasse Fish, der genau wie fly() funktioniert und die Methode move() nutzt, um die Geschwindigkeit des Fisches zurückzugeben.

11) Die Klasse Fish besitzt zudem eine Methode eatFood(). Diese Methode erwartet den Namen des Essens als Parameter. Der Rückgabewert der Methode ist ein String, der ausdrückt, was der Fisch frisst.
  - Beispiel: 'The Fish is eating the alga' sollte zurückgegeben werden
  - 'Fish' ist eine Referenz auf das aktuelle Objekt mit this.species und 'food' kommt als Parameter in die Methode eatFood()

12) swim() und eatFood() sind anonyme Funktionen und müssen entsprechenden Attributen zugewiesen werden.
  - Erstelle dazu passende Attribute in der Konstruktor-Funktion von Fish
  - getSpecies() ist die einzige Methode, die außerhalb der Konstruktor-Funktion definiert wird

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
  const exp = new RegExp(/\d+/);

  if (!exp.test(age) || age < 0) {
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

  fly() {
    return `The ${this.species} flys ${this.move()}`;
  }
}

// Fish
class Fish extends Animal {
  constructor(age, gender, speed) {
    super(age, gender, speed);
    this.species = 'Fish';
    this.getSpecies = this.getSpecies.bind(this);

    this.swim = function () {
      return `The ${this.species} swims ${this.move()}`;
    };

    this.eatFood = function (food) {
      return `The ${this.species} eats ${food}`;
    };
  }

  getSpecies() {
    return this.species;
  }
}

const food = {
  name: 'alga',
};

function getFoodName() {
  return this.name;
}

// ===== FINALE AUSGABE =====
const bird = new Bird(4, 'female', 20);

console.log(bird.getAge()); // => 4 years

bird.setSpeed('30 km/h'); // => Invalid speed!

console.log(bird.fly()); // => The bird flys with a maximum speed of 20 km/h

const fish = new Fish(2, 'male', 10);

console.log(fish.getGender()); // => male

console.log(fish.swim()); // => The fish swims with a maximum speed of 10 km/h

console.log(bird.eatAnimal(fish.getSpecies)); // => The bird is eating the Fish

console.log(fish.eatFood(getFoodName.call(food))); // => The Fish eats the alga
