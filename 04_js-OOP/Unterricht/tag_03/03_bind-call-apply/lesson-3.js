/*
====================== THEMA ======================
Die Methoden bind(), call() und apply() in JS
===================================================
*/

// ======== this-Kontext übertragen mit call() ========
// call() setzt auch den "this"-Kontext, ruft aber die Methode oder Funktion direkt auf statt eine zu kreieren
// => ...args nimmt endlose Parameter auf
function print(...args) {
  console.log(this.greeting + args);
}

print.call({ greeting: 'Hey hey hey' }, ['ds', 23], 43); // => Hey hey heyds,23,43

// Funktionale Schreibweise
/* 
function printWithoutThis(greeting, ...args) {
  console.log(greeting + args);
}

printWithoutThis('Hey hey hey', ['ds', 23], 43);
 */

// ======== this-Kontext übertragen mit apply() ========
// apply() ist genau wie call(), nimmt aber nur zwei Argumente, wobei das ein Array sein muss
function printWithApply(...args) {
  console.log(this.greeting + args);
}

printWithApply.apply({ greeting: 'Hey, Hey, hey' }, ['Max', 42]);

// ======= Funktionale Schreibweise Beispiel ======
function addieren(x, y) {
  return x + y;
}

function subtrahieren(x, y) {
  return x - y;
}

function ausrechnen(operation, x, y) {
  return operation.call(null, x, y);
}

console.log(ausrechnen(addieren, 3, 5));
