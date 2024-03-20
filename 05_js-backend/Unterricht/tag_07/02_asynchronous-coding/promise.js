/*
=== Promise Class von JavaScript ===

Die Promise-Klasse in JavaScript hat drei Zustände (states):

- Pending: Initial state, neither fulfilled nor rejected (der anfängliche Zustand, weder erfüllt noch abgelehnt)
- Fulfilled: The operation completed successfully (Die Operation wurde erfolgreich abgeschlossen)
- Rejected: The operation failed (Die Operation ist fehlgeschlagen)
*/

// Erfolgreichen Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Erfolgreich');
    // reject('Etwas ist schief gelaufen');
  }, 3000);
});

// .then() wird aufgerufen, wenn etwas erfolgreich ist (resolve)
// .catch() wird aufgerufen, wenn etwas fehlschlägt (reject)
myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      'Finally: Wird ausgeführt, EGAL ob der Promise erfolgreich war oder nicht. Wird immer zum Schluss ausgeführt.'
    );
  });
