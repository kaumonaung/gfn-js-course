/*
===== Aufgabe =====
1) Ergänze den nachfolgenden Code um eine Klasse Friend.

2) Friend sollte ein Attribut "name" und eine Methode "getName()" haben"

3) getName() sollte z.B. "Friend Lisa" zurückgeben.

4) Vergiss dabei nicht eine Instanz von Bell und Friend zu erstellen.

// Erwartete Ausgabe:
bell.handleClick(friend.getName); // Ding Dong, Friend Lisa is ringing

===================
*/

class Bell {
  constructor(sound) {
    this.sound = sound;
  }

  handleClick(callback) {
    console.log(`${this.sound}, ${callback()} is ringing`);
  }
}

// Bell Instanz erstellen

// Class Friend erstellen
