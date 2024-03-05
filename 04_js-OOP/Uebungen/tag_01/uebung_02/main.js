/*
===== Aufgabe =====
1) Wandle die Klasse 'User' in funktionalen Stil um. Erstelle dazu zwei Funktionen 'login' und 'changePassword'.

2) Erstelle zwei Variablen 'username' und 'password' und weise ihnen die Werte 'Christine' und 'TopSecret123' zu.

3) Rufe die Funktionen 'login' und 'changePassword' auf.

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
