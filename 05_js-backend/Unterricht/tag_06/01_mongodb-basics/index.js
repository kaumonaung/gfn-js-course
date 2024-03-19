/*

1) npm init -y
2) MongoDB installieren: npm install mongodb

*/

// Importieren einen Client für MongoDB
const { MongoClient } = require('mongodb');

// Aus MongoDB Atlas (Website) geholt
// <username> und <password> ersetzen
const mongodbURI =
  'mongodb+srv://gfn:gfn@cluster0.jsuhqtx.mongodb.net/?retryWrites=true&w=majority';

// Hier wird der Client für MongoDB erstellt
const client = new MongoClient(mongodbURI);

// Datenbank Referenz
const database = client.db('gfn_test');

// Kollektion Referenz
const students = database.collection('students'); // Das gleiche wie => client.db('gfn_test').collection('students')

// async (asynchronous) für asynchrone Programmierung
// insertOne()
const addOneStudent = async () => {
  try {
    const data = {
      name: 'GFN User',
      year: 5,
      isStudent: true,
      scores: [85, 95, 70],
      createdAt: { $date: '2003-03-26' }, // Hier ist "$" kein MongoDB-Operator sondern ist ein Name für eine Variable, die anzeigt, dass "createdAt" ein Datum ist
      currentDate: new Date(), // Erstellt ein aktuelles Datum,
    };

    await students.insertOne(data); // Das gleiche wie => await client.db('gfn_test').collection('students').insertOne(data)

    console.log('Student wurde erstellt');
  } catch (error) {
    console.log(error);
  }
};

// insertMany()
const addManyStudents = async () => {
  try {
    const data = [
      {
        name: 'John Doe',
        email: 'john_doe@fake-mail.com',
        year: 12,
        scores: [85, 95, 75],
        isStudent: true,
        dateCreated: { $date: '2005-06-14' },
      },
      {
        email: 'no_name@fake-mail.com',
        year: 4,
        scores: [90, 90, 70],
        isStudent: false,
      },
      {
        name: 'Homer Simpsons',
        year: 1,
        scores: [65, 75, 80],
        isStudent: true,
      },
    ];

    await students.insertMany(data);
    console.log('Studenten wurden erstellt');
  } catch (error) {
    console.log(error);
  }
};

// findOne()
const findOneStudent = async () => {
  try {
    const data = await students.findOne({ name: 'Max Mustermann' });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// find()
const findManyStudents = async () => {
  try {
    // Ohne ".toArray()" kriegen wir einen Cursor, müssen also ".toArray()" aufrufen, um es in einem Array umzuwandeln
    const data = await students.find({ isStudent: true }).toArray();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// updateOne()
const updateOneStudent = async () => {
  try {
    const filter = { name: 'GFN User' };

    const updatedDocument = {
      $set: {
        isStudent: false,
        year: 10,
      },
    };

    await students.updateOne(filter, updatedDocument);
    console.log('Student wurde erfolgreich aktualisiert');
  } catch (error) {
    console.log(error);
  }
};

// updateMany()
const updateManyStudents = async () => {
  try {
    await students.updateMany(
      { isStudent: true },
      {
        $set: {
          isStudent: false,
        },
      }
    );

    console.log('Studenten wurden erfolgreich aktualisiert');
  } catch (error) {
    console.log(error);
  }
};

// deleteOne()
const deleteOneStudent = async () => {
  try {
    await students.deleteOne({ email: 'no_name@fake-mail.com' });
    console.log('Student wurde erfolgreich gelöscht');
  } catch (error) {
    console.log(error);
  }
};

// deleteMany()
const deleteManyStudents = async () => {
  try {
    await students.deleteMany({ isStudent: false });
    console.log('Alle Studenten wurden gelöscht');
  } catch (error) {
    console.log(error);
  }
};

// ======== FUNKTIONSAUFRUFE ========
// addOneStudent();
// addManyStudents();

// findOneStudent();
// findManyStudents();

// updateOneStudent();
// updateManyStudents();

// deleteOneStudent();
// deleteManyStudents();
