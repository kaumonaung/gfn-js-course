/*
================= THEMA: LESSON 3 =================
Funktionale vs. objektorientierte Programmierung in JavaScript
===================================================
*/

// ====== ANDERE METHODEN UM OBJEKTE ZU ERSTELLEN ======

// ====== Konstruktor-Funktion ======
function User(name, email) {
  this.name = name;
  this.email = email;
}

const user1 = new User('Max Mustermann', 'max.mustermann@musterfirma.de');
console.log(user1); // => {name: 'Max Mustermann', email: max.mustermann@musterfirma.de}
console.log(typeof user1); // => object

// ====== Konstruktoreigenschaft ======
function Company(name, established) {
  this.name = name;
  this.established = established;
}

const emptyCompany = new Company();
console.log(emptyCompany); // => { name: undefined, established: undefined }
console.log(typeof emptyCompany); // => object

const apple = new emptyCompany.constructor('Apple', 1976); // Konstruktoreigenschaft
console.log(apple); // => { name: 'Apple', established: 1976 }
console.log(typeof apple); // => object

// ====== Factory Function ======
// Wenn eine Funktion ein Objekt zurückgibt, ist es eine Factory Function
function createCompany(name, established) {
  const object = {
    name: name,
    established: established,
  };
  return object;
}

const microsoft = createCompany('Microsoft', 1975);
console.log(microsoft); // => { name: 'Microsoft', established: 1975 }
console.log(typeof microsoft); // => object

// ====== Object.create() ======
const cocaCola = {
  name: 'Coca Cola',
  established: 1892,
};

const cocoColaCompany = Object.create(cocaCola);
console.log(cocoColaCompany); // => {} (leeres Objekt), weil es nur die Eigenschaften von "cocaCola" erbt
console.log(cocoColaCompany.name); // => Coca Cola
console.log(typeof cocoColaCompany); // => object
