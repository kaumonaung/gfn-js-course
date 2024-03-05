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
