/*
===== Aufgabe =====

1) Erstelle drei Klassen. Die Klassen AnalogClock und DigitalClock sollen je von der Klasse Clock erben.

2) Clock soll mithilfe eines Konstruktors das Attribut timeStamp initialisieren.

3) AnalogClock und DigitalClock sollen jeweils eine Methode getTime() haben, die den timeStamp zurückgibt.
  - AnalogClock soll die Uhrzeit im 12-Stunden-Format ausgeben mit AM oder PM
  - DigitalClock soll die Uhrzeit im 24-Stunden-Format mit "o'clock" ausgeben

// Erwartete Ausgabe:
const analog = new AnalogClock('1524')
console.log(analog.getTime()) // => It's 03:24 PM.

const digital = new DigitalClock('1524')
console.log(digital.getTime()) // => It's 15:24 o'clock.

// Tipp
- Wenn die Stunden größer als 12 sind, ziehe 12 ab (z.B. 15 - 12 = 3) für 3 PM

===================
*/

class Clock {
  constructor(timeStamp) {
    this.timeStamp = timeStamp;
  }
}

class AnalogClock extends Clock {
  constructor(timeStamp) {
    super(timeStamp);
  }

  getTime() {
    let hours = this.timeStamp.substring(0, 2);
    const minutes = this.timeStamp.substring(2, 4);
    const daytime = Number(hours) < 12 ? 'AM' : 'PM';
    hours = hours > 12 ? `0${hours - 12}` : hours;
    return `It's ${hours}:${minutes} ${daytime}.`;
  }
}

class DigitalClock extends Clock {
  constructor(timeStamp) {
    super(timeStamp);
  }

  getTime() {
    let time = this.timeStamp.split('');
    time.splice(2, 0, ':');
    return `It's ${time.join('')} o'clock.`;
  }
}

const analog = new AnalogClock('1524');
console.log(analog.getTime()); // => It's 03:24 PM.

const digital = new DigitalClock('1524');
console.log(digital.getTime()); // => It's 15:24 o'clock.
