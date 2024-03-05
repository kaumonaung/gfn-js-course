/*
===== Aufgabe =====
1) Rekonstruiere die Klasse 'User' neu, aber dieses Mal mit JavaScript-Konstruktoren und -Prototypen es tun. Sowie es JavaScript im Hintergrund macht.

2) Erstelle dazu die FunktionUser(username, password), die die Eigenschaft 'username' und 'password' initialisiert.

3) Erstelle anhand 'prototype' die Methoden 'login' und 'changePassword'.

4) Erstelle dann eine Instanz der Klasse: User('Christine', 'TopSecret123') und rufe die Methoden 'login' und 'changePassword' auf der Instanz auf.

4) Führe den Code aus und überprüfe, ob das Ergebnis dem untenstehenden entspricht.
===================
*/

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login(userPassword) {
    return this.password === userPassword ? 'login successful' : 'login failed';
  }

  changePassword(userPassword) {
    if (this.password === userPassword) return 'new passowrd must be different';
    this.password = userPassword;
    return 'password changed successfully';
  }
}

const user = new User('Christine', 'TopSecret123');

console.log(user.login('TopSecret123')); // => login successful

console.log(user.changePassword('EvenMoreSecret42')); // => password changed successfully
