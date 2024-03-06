class Animal {
  getInfo() {
    console.log('Ich bin ein Tier');
  }
}

class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  getInfo() {
    console.log('Ich bin ein Hund und heiße ' + this.name);
  }
}

const bello = new Dog('Bello');
bello.getInfo();

class Cat extends Animal {
  constructor(age) {
    super(); // Setzt den this keyword und ruft die Konstruktor() von Animal
    this.alter = age;
  }

  getInfo() {
    console.log('Ich bin eine Katze und bin ' + this.alter + ' Jahre alt');
  }
}
const mautzi = new Cat(5);
mautzi.getInfo();

class Pferd extends Animal {
  constructor(rasse) {
    super();
    this.rasse = rasse;
  }
}

const pferdEins = new Pferd('Schwarzkleeblatt');
