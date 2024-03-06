/*
===== Aufgabe =====

Im Buch Übung 8: Zeit

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

// Tipp für die Umwandlung zu PM
- Wenn die Stunden größer als 12 sind, ziehe 12 ab (z.B. 15 - 12 = 3) für 3 PM

===================
*/
