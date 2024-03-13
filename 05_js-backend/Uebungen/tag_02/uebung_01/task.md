# Aufgabe

1. Erstelle eine package.json Datei und installiere nodemon als DevDependency und nicht als reguläre Dependency
2. (Optional): Schreibe ein Startskript in die package.json, in dem die Datei `index.js` mit nodemon gestartet wird
3. In der Datei `index.js`, gib etwas in die Konsole aus und starte nodemon, um die Ausgabe zu sehen

Zu Aufgabe 2:

In der package.json Datei den Code unten irgendwo einfügen.

```json
 "scripts": {
    "start": "nodemon index.js"
  },
```

Um den "Script" zu starten, nutzt den Befehl `npm run start`
