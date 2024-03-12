/*
================================
======= File System (fs) =======
================================

File System (fs) ist ein Modul, das in Node.js eingebaut ist und das mit Arbeiten mit Dateisystemen ermöglicht.

- Lesen von Dateien
- Schreiben von Dateien
- Dateien abfragen und überprüfen, ob die vorhanden sind
- Dateien lesen und Folder/Ordner erstellen
- Dateien umbennenen und löschen
- Mit Pfaden arbeiten
*/

const fs = require('fs');

// console.log(fs);

const contentToWrite =
  'Dieser Text wird von Node.js serverseitig in die Datei example.txt geschrieben';

// VERSION 1 (synchron schreiben + asynchron lesen)
fs.writeFileSync('example.txt', contentToWrite, (error) => {
  if (error) {
    console.log('Etwas ist schief gelaufen', error);
  } else {
    console.log('Die Datei wurde erfolgreich erstellt!');
  }
});

// VERSION 2 (beides asynchron)
fs.writeFile('example.txt', contentToWrite, (error) => {
  if (error) {
    console.log('Etwas ist schief gelaufen', error);
  } else {
    console.log('Die Datei wurde erfolgreich erstellt!');

    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        console.log('Etwas ist schief gelaufen', err);
      } else {
        console.log('Datei:', data);
      }
    });
  }
});
