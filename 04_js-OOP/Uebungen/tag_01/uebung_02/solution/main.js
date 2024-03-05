let username = 'Christine';
let password = 'TopSecret123';

function login(userPassword) {
  return password === userPassword ? 'login successful' : 'login failed';
}

function changePassword(userPassword) {
  if (password === userPassword) return 'new passowrd must be different';
  password = userPassword;
  return 'password changed successfully';
}

console.log(login('TopSecret123')); // => login successful

console.log(changePassword('EvenMoreSecret42')); // => password changed successfully
