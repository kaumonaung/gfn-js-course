/*
===== Aufgabe =====
1) Rekonstruiere die Klasse 'RemoteControl' neu, aber dieses Mal mit JavaScript-Konstruktoren und -Prototypen es tun. Sowie es JavaScript im Hintergrund macht.

2) Erstelle dazu die Funktion RemoteControl(battery), die die Eigenschaft 'battery' initialisiert.

3) Erstelle anhand 'prototype' die Methoden 'logBatteryStatus' und 'switchProgramm'.

4) Erstelle dann eine Instanz der Klasse: RemoteControl(70) und rufe die Methoden 'logBatteryStatus' und 'switchProgramm' auf der Instanz auf.

4) Führe den Code aus und überprüfe, ob das Ergebnis dem untenstehenden entspricht.
===================
*/

class RemoteControl {
  constructor(battery) {
    this.battery = battery;
  }

  logBatteryStatus() {
    console.log(`${this.battery}% left`);
  }

  switchProgramm(channel) {
    console.log(`new channel: ${channel}`);
  }
}

const remoteControl = new RemoteControl(70);

remoteControl.logBatteryStatus(); // => 70% left

remoteControl.switchProgramm(3); // => new channel: 3
