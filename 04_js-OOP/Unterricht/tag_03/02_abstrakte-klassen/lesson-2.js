// Das Ziel, dass die Klasse Level NICHT instanziiert werden kann
// Abstrakte Klassen implementieren Logik und dienen als Grundlage für anderen Unterklassen

class Level {
  constructor(name, points) {
    // new.target ist ein Meta-Attribut, das nur existiert, wenn zuvor der Operator "new" verwendet wurde
    // new.target erzeugt eine Referenz auf den Constructor oder die Funktion, mit der "new" aufgerufen wurde
    // Bei normalen Funktionen ist es "undefined"
    if (new.target === Level) {
      console.log(
        'Level ist eine abstrakte Klasse und kann nicht instanziiert werden'
      );
      throw new Error(); // throw "schmeißt" alles hin und erzeugt für uns einen neuen Error
    }

    this.name = name;
    this.points = points;
  }
}

class OccasionalBuyer extends Level {
  constructor(name, points) {
    super(name, points);

    this.boni = ['3% discount', 'buy 5, pay 4'];
  }
}

class IntermediateBuyer extends Level {
  constructor(name, points) {
    super(name, points);

    this.boni = ['3% discount', 'buy 5, pay 4', 'free delivery'];
  }
}

class LoyaltyKing extends Level {
  constructor(name, points) {
    super(name, points);

    this.boni = [
      '3% discount',
      'buy 5, pay 4',
      'free delivery',
      'birthday gift',
    ];
  }
}

// Das sollte nicht funktionieren
// const level = new Level('level 1', 0);
const loyaltyKing = new LoyaltyKing('level 2', 0);
// console.log(level);
console.log(loyaltyKing);

('use strict');
