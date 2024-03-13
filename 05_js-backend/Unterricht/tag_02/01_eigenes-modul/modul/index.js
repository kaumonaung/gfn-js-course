// const fs = require('fs'); // Hier wird die ganze fs Bibliothek/Libary importiert

const { writeFileSync, writeFile, readFileSync } = require('fs'); // Hier werden nur writeFileSync und readFileSync importiert, verringert die Datenmenge was importiert werden muss

// Datei wird synchron (blockierend) erstellt
const saveFileToJSON = (filename, content) => {
  writeFileSync(filename, JSON.stringify(content));
  console.log('Datei wurde erfolgreich beschrieben');
};

const readJSONFromFile = (filename) => {
  const data = readFileSync(filename);
  const parsedData = JSON.parse(data);
  return parsedData;
};

// Datei wird asynchron (nicht blockierend) erstellt
/* function saveFileToJSONAsync(filename, content) {
  return writeFile(filename, JSON.stringify(content), (err) => {
    if (err) {
      console.log('Die Datei konnte nicht erstellt werden:', err);
      return;
    }

    console.log('Die Datei wurde erfolgreich erstellt!');
  });
}

 */

const PI = 3.14; // wird nicht exportiert, weil er nicht in den "module.exports" Objekt angegeben wird

module.exports = {
  saveFileToJSON,
  readJSONFromFile,
};
