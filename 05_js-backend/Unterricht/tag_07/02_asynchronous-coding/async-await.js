/*
await und async:
- async: Die Funktion gibt immer ein Promise zurück, also entweder die Funktion ist erfolgreich oder schlägt fehlt
- await: Die Funktion pausiert und für das Programm worauf wir warten aus und wartet bis der "Promise" gelöst ist (Erfolgreich oder Fehlgeschlagen)

Von JavaScript vordefiniert:

- new Promise
- Innerhalb von Promise sind die Funktionen "resolve()" und "reject()"
- setTimeout(FUNCTION, TIME IN MILLISECONDS)

MDN Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

async function asynchroneFunktion() {}

const taskLogger = async () => {
  try {
    console.log('Task 1');

    const taskTwo = new Promise((resolve, reject) => {
      // Nach zwei Sekunden, rufe resolve() auf, also die Operation ist erfolgreich
      setTimeout(() => {
        console.log('Task 2');
        // resolve('Operation erfolgreich'); // SUCCESS
        reject('Operation fehlgeschlagen'); // FAILURE
      }, 2000);
    });

    await taskTwo;

    console.log('Task 3');
  } catch (error) {
    console.log(error);
  }
};

taskLogger();
