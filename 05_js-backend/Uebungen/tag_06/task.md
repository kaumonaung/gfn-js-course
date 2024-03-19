# Aufgabe

Spielt mit MongoDB herum und probiere folgende Methoden aus:

- insertOne()
- insertMany()
- findOne()
- findMany()
- updateOne()
- updateMany()
- deleteOne()
- deleteMany()

Erstelle dir eine eigene Datenbank und eine eigene Kollektion oder lade dir die "sample_database" von MongoDB herunter.

## TIPP: Referenz zur Datenbank und Kollektion

```js
const { MongoClient } = require('mongodb');

const client = new MongoClient('URL_VON_MONGODB_WEBSITE_KOPIEREN');

const database = client.db('DATENBANK_NAME'); // => Referenz zur Datenbank
const collection = database.collection('COLLECTION_NAME'); // Refrenz zur Kollektion
```
