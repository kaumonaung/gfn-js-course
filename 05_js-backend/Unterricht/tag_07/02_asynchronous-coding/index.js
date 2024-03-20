/*
======= ENGLISH EXPLAINATION =======
In JavaScript, synchronous and asynchronous programming refer to different approaches for handling tasks and managing the flow of execution in a program.

Synchronous Programming:

- In synchronous programming, tasks are executed sequentially, one after another.
- Each task must wait for the previous one to complete before it can start.
- This can lead to blocking behavior, where the execution of code halts until a particular task completes.
- Synchronous code is easier to read and reason about, as the flow of execution is straightforward.

Asynchronous Programming:

- In asynchronous programming, tasks can be executed concurrently, and the program doesn't have to wait for a task to finish before starting another one.
- Asynchronous operations are typically non-blocking, meaning the rest of the code can continue to execute while waiting for an asynchronous task to complete.
- Asynchronous programming is commonly used for I/O operations (such as fetching data from a server or reading a file), timers, and events.
- Promises and async/await are common mechanisms used for handling asynchronous operations in JavaScript.

======= DEUTSCHE ERKLÄRUNG =======

In JavaScript beziehen sich synchrone und asynchrone Programmierung auf unterschiedliche Ansätze zur Behandlung von Aufgaben und zur Verwaltung des Ablaufs der Ausführung in einem Programm.

Synchrones Programmieren:
- Beim synchronen Programmieren werden Aufgaben sequenziell nacheinander ausgeführt.
- Jede Aufgabe muss auf die vorherige warten, bevor sie gestartet werden kann.
- Dies kann zu blockierendem Verhalten führen, bei dem die Ausführung des Codes anhält, bis eine bestimmte Aufgabe abgeschlossen ist.
- Synchrone Codes sind einfacher zu lesen und zu verstehen, da der Ablauf der Ausführung geradlinig ist.


Asynchrones Programmieren:

- Beim asynchronen Programmieren können Aufgaben gleichzeitig ausgeführt werden, und das Programm muss nicht auf das Abschließen einer Aufgabe warten, bevor eine andere gestartet wird.
- Asynchrone Operationen sind typischerweise nicht blockierend, was bedeutet, dass der restliche Code weiter ausgeführt werden kann, während auf das Abschließen einer asynchronen Aufgabe gewartet wird.
- Asynchrones Programmieren wird häufig für I/O-Operationen (wie das Abrufen von Daten von einem Server oder das Lesen einer Datei), Timer und Ereignisse/Events verwendet.
- Versprechungen (Promises) und async/await sind gängige Mechanismen, um asynchrone Operationen in JavaScript zu behandeln.
*/

// Synchronous Programming
console.log('Synchronous: Task 1');
console.log('Synchronous: Task 2');
console.log('Synchronous: Task 3');

// Asynchronous Programming
console.log('Asynchronous: Task 1');

setTimeout(() => {
  console.log('Asynchronous: Task 2');
}, 5000);

console.log('Asynchronous: Task 3');
