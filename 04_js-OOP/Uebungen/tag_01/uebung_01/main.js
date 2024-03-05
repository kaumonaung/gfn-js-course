/*
===== Aufgabe =====
1) Wandle die Funktion 'logBatteryStatus' in eine Klasse um. Die Klasse soll den Namen 'RemoteControl' tragen und die Methoden 'logBatteryStatus' und 'switchProgramm' beinhalten, sowie einen Konstruktor, der die Eigenschaft 'battery' initialisiert.

2) Erstelle dann eine Instanz der Klasse 'RemoteControl' mit dem Wert 70 als Argument für den Konstruktor:
const remoteControl = new RemoteControl(70); 

3) Rufe dann die Methoden 'logBatteryStatus' und 'switchProgramm' auf der Instanz auf.

4) Führe den Code aus und überprüfe, ob das Ergebnis dem untenstehenden entspricht.
===================
*/

let battery = 70;

function logBatteryStatus() {
  console.log(`${battery}% left`);
}

function switchProgramm(channel) {
  console.log(`new channel: ${channel}`);
}

logBatteryStatus(); // => 70% left

switchProgramm(3); // => new channel: 3
