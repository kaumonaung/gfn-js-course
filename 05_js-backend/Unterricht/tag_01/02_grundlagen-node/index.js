/*
======================================
======= Grundlagen von Node.js =======
======================================

======= Was ist Node.js =======

- Node.js ist eine Laufzeitumgebung, die auf der V8 JavaScript Engine von Chrome basiert

- Es ermöglicht die Verwendung von JavaScript außerhalb des Browsers, wie z.B. serverseitig

- Open Source mit öffentlich zugänglichem Quellcode auf GitHub

- Erlaubt es JavaScript-Entwickler, ihre Webpräsenz vollständig zu gestalten (Full-Stack), ohne zwischen verschiedenen Sprachen wechseln zu müssen

======= Was ist ein Package? =======

- JavaScript Libraries/Packages können über Node.js bzw. NPM bezogen werden

- Node.js verwendet einen Package-basierten Ansatz, um Libraries/Packages separat anzufragen und zu installieren

- Packages können in einzelne Module aufgeteilt sein

- Begriffe wie Package und Module werden oft synonym verwendet

- Libraries meint man häufig eine große Ansammlung an Module/Packages

======= Was ist die Registry =======

- Verwaltet die Vielzahl von Packages, die über Node.js verfügbar sind

- Node.js bzw. NPM kommuniziert mit der Registry, um spezifische Package-Versionen anzufordern

======= Was ist NPM (Node Package Manager) =======

- NPM ist ein Paketmanager für Node.js

- Verwantwortlich für die Anforderung und Installation von Packages

- Standardmäßig in Node.js enthalten

======= Was ist NPX (Node Package Executor) =======

- NPX ist ein Tool, das mit NPM ausgeliefert wird und es ermöglicht, Packages auszuführen und zu testen, ohne sie zu installieren

*/

console.log('Hello, World!'); // => "Hello, World!"

console.log(global); // => Objekt, was in Node.js verfügbar ist, ist quasi das Equivalente zu window Objekt, was im Browser automatisch vorhanden ist

console.log(global.myVar); // => undefined

global.myVar = 'Hallo, vom global Object';

console.log(global.myVar); // => "Hallo, vom global Object"

console.log(__dirname); // => Pfad des aktuellen Verzeichnisses

console.log(process.platform); // => Betriebssystem des Systems (z.B. linux, darwin)

process.on('exit', function () {
  console.log('Code wird beendet'); // => "Code wird beendet", wenn Node.js fertig (deswegen exit) mit der Ausführung ist
});
