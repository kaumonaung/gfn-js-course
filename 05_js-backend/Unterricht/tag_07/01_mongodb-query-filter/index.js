const { MongoClient } = require('mongodb');

const mongodbConnectionString =
  'mongodb+srv://gfn:gfn@cluster0.jsuhqtx.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(mongodbConnectionString);

const studentCollection = client.db('gfn_test').collection('students');

const addStudents = async () => {
  try {
    const data = [
      {
        name: 'Max Mustermann',
        email: 'max.mustermann@fake-mail.com',
        year: 5,
        scores: [85, 95, 75],
        isStudent: true,
        dateCreated: { $date: '2003-03-26' }, // => MongoDB wandelt es in ISO-Format um
      },
      {
        name: 'John Doe',
        email: 'john_doe@fake-mail.com',
        year: 12,
        scores: [85, 95, 75],
        isStudent: true,
        dateCreated: { $date: '2005-06-14' }, // => MongoDB wandelt es in ISO-Format um
      },
      {
        email: 'no_name@fake-mail.com',
        year: 4,
        scores: [90, 90, 70],
        isStudent: false,
        dateCreated: { $date: '2001-04-15' }, // => MongoDB wandelt es in ISO-Format um
      },
      {
        name: 'Homer Simpsons',
        email: 'homer_simpsons@fake-mail.com',
        year: 1,
        scores: [65, 75, 80],
        isStudent: true,
        dateCreated: { $date: '1999-02-10' }, // => MongoDB wandelt es in ISO-Format um
      },
    ];

    await studentCollection.insertMany(data);
    console.log('Studenten wurden erfolgreich hinzugefügt');

    client.close(); // Hier wird die Verbindung zu MongoDB beendet
  } catch (error) {
    console.log(error);
    client.close(); // Hier wird die Verbindung zu MongoDB beendet
  }
};

// Match Single Condition (Eine Kondition muss zutreffen)
const matchSingleCondition = async () => {
  try {
    const query = { year: 5 };
    const data = await studentCollection.find(query).toArray(); // => find gibt nur den Cursor zurück, toArray() muss man aufrufen, damit wir ein Array zurückbekommen
    console.log(data);
    client.close();
  } catch (error) {
    console.log(error);
    client.close();
  }
};

// Match Multiple Conditions (Mehrere Konditionen müssen zutreffen)
const matchMultipleConditions = async () => {
  try {
    const query = { year: 5, isStudent: true }; // BEIDE Bedingungen müssen zutreffen
    const data = await studentCollection.find(query).toArray();
    console.log(data);
    client.close();
  } catch (error) {
    console.log(error);
    client.close();
  }
};

// Match Multiple Conditions mit dem AND Operator
const matchMultipleConditionsByAND = async () => {
  try {
    const query = {
      $and: [{ year: 5, isStudent: true }], // BEIDE Bedingungen müssen zutreffen
    };

    const data = await studentCollection.find(query).toArray();
    console.log(data);
    client.close();
  } catch (error) {
    console.log(error);
    client.close();
  }
};

// Match Multiple Conditons mit dem OR Operator
const matchMultipleConditionsByOR = async () => {
  try {
    const query = {
      $or: [{ year: 12 }, { name: 'Max Mustermann' }], // Entweder "year = 12" ODER "name = 'Max Mustermann'" müssen zutreffen
    };

    const data = await studentCollection.find(query).toArray();
    console.log(data);
    client.close();
  } catch (error) {
    console.log(error);
    client.close();
  }
};

// Match by NOT Operator
const matchByNot = async () => {
  try {
    // Quasi name !== 'Max Mustermann'
    const query = {
      name: {
        $not: { $eq: 'Max Mustermann' }, // => $eq steht für "equal" was im Deutschen heißt "ist gleich ..."
      },
    };

    const data = await studentCollection.find(query).toArray();
    console.log(data);
    client.close();
  } catch (error) {
    console.log(error);
    client.close();
  }
};

// Match with Comparison (Werte werden verglichen)
const matchWithComparison = async () => {
  try {
    // EN: $lte = less than or equal (<=), $lt = less than (<), $gte = greater than or equal (>=), $gt = greater than (>)
    // DE: $lte = kleiner als oder gleich (<=), $lt = kleiner als (<), $gte = größer als oder gleich (>=), $gt = größer als (>)
    const query = {
      year: {
        $lte: 4, // Alle Dokumente, wo das Jahr kleiner oder gleich 4 ist
      },
    };

    const data = await studentCollection.find(query).toArray();
    console.log(data);
    client.close();
  } catch (error) {
    console.log(error);
    client.close();
  }
};

// Match by Date (Nach Datum vergleichen)
const matchByDate = async () => {
  try {
    const query = {
      'dateCreated.$date': {
        $gt: new Date('2000-01-01').toISOString(), // Gibt den Date Objekt in ISO Format zurück
      },
    };

    const data = await studentCollection.find(query).toArray();
    console.log(data);
    client.close();
  } catch (error) {
    console.log(error);
    client.close();
  }
};

// Match by Array Conditions (Werte in einem Array)
const matchByArrayConditions = async () => {
  try {
    const query = {
      scores: {
        // MINDESTENS einen Wert muss zwischen 80 und 90 sein, DANN trifft es zu
        $elemMatch: {
          $gt: 80, // Ein Element innerhalb von "scores" muss größer als 80 sein UND
          $lt: 90, // UND kleiner als 90
        },
        // $all: [85, 95, 75], // => ALLE Werte müssen genau gleich sein
      },
    };

    const data = await studentCollection.find(query).toArray();
    console.log(data);
    client.close();
  } catch (error) {
    console.log(error);
    client.close();
  }
};

// Match by Substring (Ein bestimmter Wert muss in einem String vorhanden sein)
const matchBySubstring = async () => {
  try {
    const query = {
      email: {
        $regex: 'homer_simpsons', // Hier wird nachgeguckt ob der Text "homer_simpsons" in der E-Mail vorhanden ist
      },
    };

    const data = await studentCollection.find(query).toArray();
    console.log(data);
    client.close();
  } catch (error) {
    console.log(error);
    client.close();
  }
};

// Delete One Field (löscht nur ein Datenfeld, in dem Fall "isStudent")
const deleteOneField = async () => {
  try {
    const query = {
      name: 'Homer Simpsons',
    };

    const data = await studentCollection.updateOne(query, {
      $unset: { isStudent: '' },
    });

    console.log(data);
    client.close();
  } catch (error) {
    console.log(error);
    client.close();
  }
};

// Delete Many Field (löscht alle Dokumente mit dem Feld "scores", wenn scores vorhanden)
const deleteManyField = async () => {
  try {
    const query = {
      scores: {
        $exists: true,
      },
    };

    const data = await studentCollection.updateMany(query, {
      $unset: { scores: '' },
    });

    console.log(data);
    client.close();
  } catch (error) {
    console.log(error);
    client.close();
  }
};

// ======== FUNKTIONSAUFRUFE ========
// addStudents();

// matchSingleCondition();
// matchMultipleConditions();
// matchMultipleConditionsByAND();
// matchMultipleConditionsByOR();
// matchByNot();
// matchWithComparison();
// matchByDate();
// matchByArrayConditions();
// matchBySubstring();

// deleteOneField();
// deleteManyField()
