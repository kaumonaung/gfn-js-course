// Das Ziel, dass die Klasse Level NICHT instanziiert werden kann
// Abstrakte Klassen implementieren Logik und dienen als Grundlage für anderen Unterklassen
class Level {
  constructor(name, points) {
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
const level = new Level('level 1', 0);
console.log(level);
