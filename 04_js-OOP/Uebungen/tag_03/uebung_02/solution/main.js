/*
===== Aufgabe =====
1) Schreibe eine Funktion printList(), die deine Liste als String, getrennt durch Kommata, in die Konsole loggt
  - Dabei wird data nicht als Parameter übergeben, sondern als this innerhalb der Funktion genutzt

2) Rufe printList() durch call() oder apply() auf

===================
*/

const data = {
  list: ['Cheese', 'Milk', 'Butter', 'Bread'],
  id: 2,
};

function printList() {
  console.log(this);
  console.log(this.id);
  console.log(this.list.join(', ')); // => Das ist die gefragte Lösung
}

printList();

// call()
printList.call(data); // => Cheese, Milk, Butter, Bread

// apply()
printList.apply(data); // => Cheese, Milk, Butter, Bread
