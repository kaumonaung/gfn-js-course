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

// Fertigen Code von Step 1 hier einfügen und erweitern durch...
const food = {
  name: 'alga',
};

function getFoodName() {
  return this.name;
}

// ===== ERWARTENE AUSGABE =====
const bird = new Bird(4, 'female', 20);

console.log(bird.getAge()); // 4 years

bird.setSpeed('30 km/h'); // Invalid speed!

console.log(bird.fly()); // The bird flys with a maximum speed of 20 km/h

const fish = new Fish(2, 'male', 10);

console.log(fish.getGender()); // male

console.log(fish.swim()); // The fish swims with a maximum speed of 10 km/h

console.log(bird.eatAnimal(fish.getSpecies)); // The bird is eating the Fish

console.log(fish.eatFood(getFoodName.call(food))); // The Fish eats the alga
