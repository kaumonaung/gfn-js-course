/*
================= THEMA: LESSON 1 =================
Funktionale vs. objektorientierte Programmierung in JavaScript
===================================================
*/

// ============ FUNKTION ZU KLASSE ============
let volume = 50;

function logVolume() {
  console.log(`Lautstärke: ${volume}%`);
}

function increaseVolume(amount) {
  console.log(`Lautstärke jetzt bei ${volume + amount}%`);
}

logVolume(); // => Lautstärke: 50%
increaseVolume(15); // => Lautstärke jetzt bei 65%

// In einer Klasse umwandeln
class Speaker {
  constructor() {
    this.volume = 50;
  }

  logVolume() {
    console.log(`Lautstärke: ${this.volume}%`);
  }

  increaseVolume(amount) {
    console.log(`Lautstärke jetzt bei ${this.volume + amount}%`);
  }
}

const newSpeaker = new Speaker();
newSpeaker.logVolume(); // => Lautstärke: 50%
newSpeaker.increaseVolume(15); // => Lautstärke jetzt bei 65%
