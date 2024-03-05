function RemoteControl(battery) {
  this.battery = battery;
}

RemoteControl.prototype.logBatteryStatus = function () {
  console.log(`${this.battery}% left`);
};

RemoteControl.prototype.switchProgramm = function (channel) {
  console.log(`new channel: ${channel}`);
};

const remoteControl = new RemoteControl(70);

remoteControl.logBatteryStatus(); // => 70% left

remoteControl.switchProgramm(3); // => new channel: 3
