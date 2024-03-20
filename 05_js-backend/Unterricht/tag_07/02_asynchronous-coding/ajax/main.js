/*
Alte und unbeliebte Methode in JavaScript, um Daten aus einem Server abzurufen

===== ENGLISCHE ERKLÄRUNG =====

AJAX - Asynchronous JavaScript and XML (XMLHttpRequest)
- AJAX is a technique for creating fast and dynamic web pages

- It allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes

- This means that it is possible to update parts of a web page without reloading the whole page

AJAX is often used in Single Page Applications (SPAs), in which the entire web app consists of a single document, which uses Ajax to update its content as needed

Initially Ajax was implemented using the XMLHttpRequest interface, but the fetch() API is more suitable for modern web applications. It is more powerful, more flexible, and integrates better with fundamental web app technologies. Web frameworks provide higher-level abstractions for Ajax, that it has become so popular, than the term Ajax is rarely used.

===== DEUTSCHE ERKLÄRUNG =====
- AJAX ist eine Technik zur Erstellung schneller und dynamischer Webseiten.
- Es ermöglicht Webseiten, asynchronously durch den Austausch von Daten mit einem Webserver im Hintergrund aktualisiert zu werden.
- Dies bedeutet, dass Teile einer Webseite aktualisiert werden können, ohne die gesamte Seite neu zu laden.

AJAX wird häufig in Single Page Applications (SPAs) verwendet, bei denen die gesamte Webanwendung aus einem einzigen Dokument besteht, das Ajax verwendet, um seinen Inhalt bei Bedarf zu aktualisieren.

Anfangs wurde Ajax unter Verwendung der XMLHttpRequest-Schnittstelle implementiert, aber die fetch() API ist für moderne Webanwendungen besser geeignet. Sie ist leistungsfähiger, flexibler und integriert sich besser mit grundlegenden Webanwendungstechnologien. Web-Frameworks bieten höherstufige Abstraktionen für Ajax an, weshalb der Begriff Ajax so populär geworden ist, dass er kaum noch verwendet wird.
*/

const httpRequest = new XMLHttpRequest(); // Create a new XMLHttpRequest object

httpRequest.onreadystatechange = () => {
  // Event Listener
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log('There was a problem');
    }
  }
};

httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts'); // Open the request
httpRequest.send(); // Send the request
