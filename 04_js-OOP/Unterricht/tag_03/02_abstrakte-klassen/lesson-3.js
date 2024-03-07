// Das Ziel, dass die Klasse Level NICHT instanziiert werden kann
// Abstrakte Klassen implementieren Logik und dienen als Grundlage für anderen Unterklassen

// new.target ist ein Meta-Attribut, das nur existiert, wenn zuvor der Operator "new" verwendet wurde
// new.target erzeugt eine Referenz auf den Constructor oder die Funktion, mit der "new" aufgerufen wurde
// Bei normalen Funktionen ist es "undefined"

class Level {
  constructor(name, points) {
    if (new.target === Level) {
      console.error(
        'Level ist eine abstrakte Klasse und kann nicht instanziiert werden'
      );
      throw new Error(); // throw "schmeißt" alles hin und erzeugt für uns einen neuen Error
    }

    if (this.addPoints === undefined || typeof this.addPoints !== 'function') {
      console.error('addPoints must definiert werden');
      throw new Error();
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

  // addPoints() {}
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

  // #addPoints => Error, weil keine Funktion
  addPoints() {
    this.points += 10;
  }
}

// const occasionalBuyer = new OccasionalBuyer('Ocasional Buyer', 250); // => Error
// const intermediateBuyer = new IntermediateBuyer('Intermediate Buyer', 500); // => Error
const loyaltyKing = new LoyaltyKing('Loyalty King', 1000);
console.log(loyaltyKing);
