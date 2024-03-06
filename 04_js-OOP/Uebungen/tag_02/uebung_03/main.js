/*
===== Aufgabe =====

Im Buch Übung 7: Alles unter Kontrolle

1) Ergänze die gegebene Klasse Blogpost um Getter und Setter. Erstelle hierbei eine setContent() und getContent() Methode.

2) In der setContent(content) Methode soll überprüft werden, ob es sich um einen String handelt. Dann iteriere über den "content" und füge es zu #content hinzu, was ein Array ist.
  - Dabei soll stückchenweise (.substring()) der Inhalt des "content" in das Array #content hinzugefügt werden
  - Wenn das übergebene Element größer als 20 Zeichen ist, soll es in einem neuen Array-Element hinzugefügt werden.

3) In der getContent() Methode soll #content wieder als String, nicht als Array, zurückgegeben werden.

// Erwartete Ausgabe:
post.setContent('Every year, the amount of people who play computer games increases.') => in einem Array umwandeln
console.log(post.getContent()) // => 'Every year, the amount of people who play computer games increases.'

===================
*/

class Blogpost {
  #content;

  constructor(content) {
    this.#content = content;
  }
}

const post = new Blogpost([]);
