/*
===== Aufgabe =====

1) Auf Basis der Klasse 'Engine', erstelle eine neue Klasse 'ElectricEngine'.

2) Modifiziere logData() so, dass 'liter per 100 km' durch 'kW/h per 100 km' ersetzt wird.

===================
*/

class Engine {
  constructor(horsepower, consumption) {
    this.horsepower = horsepower;
    this.consumption = consumption;
  }

  logData() {
    console.log(
      `This engine has ${this.horsepower} horsepower and only a consumption of ${this.consumption} liter per 100 km.`
    );
  }
}

class ElectricEngine extends Engine {
  constructor(horsepower, consumption) {
    super(horsepower, consumption);
  }

  logData() {
    console.log(
      `This engine has ${this.horsepower} horsepower and only a consumption of ${this.consumption} KW/h per 100 km.`
    );
  }
}
