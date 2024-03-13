/*
Ein Modul (Module) ist eine JavaScript-Datei, die Code enthält, der in anderen JavaScript-Dateien wiederverwendet werden kann

Es gibt externe Module und interne Module.

Externe Module werden installiert, beispielsweise über "NPM"

Interne Module werden von uns erstellt und in Ordnern gespeichert

JSON steht für JavaScript Object Notation
*/

const { saveFileToJSON, readJSONFromFile } = require('./modul');

const data = {
  name: 'Max Mustermann',
  age: 34,
  email: 'max.mustermann@firma.de',
};

console.log(data);

saveFileToJSON('data.json', data);

console.log('Datei laden:', readJSONFromFile('data.json'));
