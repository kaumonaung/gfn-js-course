class Enemy {
  constructor(lives, damage) {
    this.lives = lives;
    this.damage = damage;
  }
}

class EnemyTypeA extends Enemy {
  constructor(leben, schaden, cooldown) {
    super(leben, schaden); // Abstraktion, weil die Klasse "Enemy" sich um "lives" und "damage" kümmern
    this.cooldown = cooldown;
  }
}

class EnemyTypeB extends Enemy {
  constructor(lives, damage, dropItems) {
    super(lives, damage); // Abstraktion, weil die Logik für lives und damage in der Klasse "Enemy" sich befindet
    this.dropItems = dropItems;
  }
}

// Hier erstellen wir eine neue Unterklasse von 'Array'
class NewArray extends Array {
  constructor(items) {
    super(items);
  }

  // Hier wird die native Funktion .map() von einem Array überschrieben
  map() {
    console.log('Map');
  }
}

/*
const numbers = new NewArray([4, 2, 3, 1]);
numbers.map();
const sorted = numbers.sort();
console.log(sorted);
*/
