/*
===== Aufgabe =====

1) Ergänze die gegebene Klasse Blogpost um Getter und Setter. Erstelle hierbei eine setContent() und getContent() Methode.

2) In der setContent(content) Methode soll überprüft werden, ob es sich um einen String handelt. Dann iteriere über den "content" und füge es zu #content hinzu, was ein Array ist.
  - Dabei soll stückchenweise der Inhalt des "content" in das Array #content hinzugefügt werden.
  - Wenn das Stück größer als 20 Zeichen ist, soll es in einem neuen Array-Element hinzugefügt werden.

3) In der getContent() Methode soll #content wieder als String, nicht als Array, zurückgegeben werden.

// Erwartete Ausgabe:
post.setContent('Every year, the amount of people who play computer games increases.')
console.log(post.getContent()) // 'Every year, the amount of people who play computer games increases.'

===================
*/

class Blogpost {
  #content;

  constructor(content) {
    this.#content = content;
  }

  setContent(content) {
    if (typeof content !== 'string') return;

    if (content.length >= 20) {
      for (let i = 0; i < content.length; i = i + 20) {
        // substr(startIndex, length) ist deprecated also lieber substring(startIndex, endIndex) nutzen
        this.#content.push(content.substring(i, i + 20));
        console.log(this.#content);
      }
      return;
    }
    this.#content.push(content);
  }

  getContent() {
    return this.#content.join('');
  }
}

const post = new Blogpost([]);

post.setContent(
  'Every year, the amount of people who play computer games increases.'
);
console.log(post.getContent()); // 'Every year, the amount of people who play computer games increases.'
