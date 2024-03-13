/*
'new Date' = wird verwendet, um ein Date-Objekt zu erstellen, das den aktuellen Zeitpunkt repräsentiert;
'toISOString'=  erhält man eine Darstellung des Date-Objekts als Zeichenkette im Format des ISO-8601-Standards.
*/

const fs = require('fs');

// Function to generate current timestamp
function getCurrentTimestamp() {
  const now = new Date(); // Fassen wir den aktuellen Zeitpunkt auf
  return now.toString(); // Wandelt den "Date Object" in einem String um
}

const timestampContent = getCurrentTimestamp();

fs.writeFile('timestamp.txt', timestampContent, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Timestamp has been written to file successfully!');

  fs.readFile('timestamp.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading from file:', err);
      return;
    } else {
      console.log('Timestamp content:', data);
    }
  });
});
