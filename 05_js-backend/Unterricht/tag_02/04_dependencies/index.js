/*
================================================
======= Dependencies vs. DevDepenendcies =======
================================================

Dependencies:

- sind Pakete, die für die Ausführung der Anwendung "zwingend" benötigt werden
- z.B. Express, Mongoose, React, etc.

DevDependencies:
- sind Pakete, die nur für die Entwicklung (Development Environment) benötigt werden
- z.B. Nodemon, ESlint, etc.
- werden nicht in der Produktionsumgebung (Production Environment) installiert, benötigt oder ausgeführt

Um Nodemon als DevDependeny zu installieren, nutzen wir den Befehl:
npm install -D nodemon ODER npm install --save-dev nodemon


Um Lodash zu installieren:
npm install lodash ODER npm i lodash
*/

const lodash = require('lodash');

console.log(lodash.random(1, 100));

console.log(Math.floor(Math.random() * 100 + 1));
