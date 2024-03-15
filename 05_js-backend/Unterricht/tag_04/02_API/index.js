/*
REST – Representational State Transfer
- Representational State Transer (REST) ist eine Software-Architektur, die Bedinungen zur Funktionsweise einer API festlegt

API - Application Programming Interface
- API sind Kommunikationskanäle zwischen der App/Client und der Dankenbank/Backend-Systemen

RESTful API
- Implementiert APIs nach REST-Architektur, da sichere, zuverlässige und effiziente Software-Standards befolgt werden
- Bedeutet wir nutzen einheitliche Schnittschnellen (URL/URI) und HTTP-Methoden (GET, POST, PUT, DELETE etc.)

Artikel von AWS (DE): https://aws.amazon.com/de/what-is/restful-api/
Artikel von AWS (EN): https://aws.amazon.com/what-is/restful-api/?nc1=h_ls

CRUD (Akronym)
C - Create
R - Read
U - Update
D - Delete

CREATE: HTTP-Methode POST
READ: HTTP-Methode GET
UPDATE: HTTP-Methoden PUT/PATCH (PUT, um alles zu updaten und PATCH, für einzelne Datenteile)
DELETE: HTTP-Methode DELETE

req: request (Incoming Data)
res: response (Outgoing Data)
next: next ist eine function

res.cookie() - Ermöglicht es dir, einen Cookie im Client zu erstellen.
res.download() - Sendet eine Datei als Download an den Client.
res.json() - Ermöglicht es dir, ein Objekt in Form eines JSON-Strings an den Client zu senden.
res.redirect('URL') - Ermöglicht es dir, den Client auf eine andere URL weiterzuleiten.
res.render() - Rendert eine angegebene View (z.B. HTML, EJS) und sendet diese an den Client.
res.send() - Sendet die erstellte HTTP-Response an den Client.
res.status() - Legt den HTTP-Statuscode der Response fest.
res.sendStatus() - Legt den HTTP-Statuscode der Response fest und sendet den HTTP-Response an den Client 
*/

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Damit wird Express so eingestellt, dass wird "application/json" auslesen/parsen können

// Quasi unsere Datenbank
const products = [
  {
    productId: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    productId: 2,
    name: 'Product 2',
    price: 200,
  },
];

// Lesen wir Produkte aus
// GET HTTP-Methode (Read)
app.get('/products', (req, res) => {
  res.status(200).json({
    data: products,
  });
});

// Erstellen ein neues Produkt
// POST HTTP-Methode (Create)
app.post('/create-product', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!name || !price) {
    return res.sendStatus(400);
  }

  const newProduct = {
    productId: new Date().getTime(),
    name: name,
    price: price,
  };

  products.push(newProduct);

  res.status(201).json({
    data: products,
  });
});

// Updaten ein Produkt
// PUT HTTP-Methode (Update)
app.put('/products/:productId', (req, res) => {
  const id = req.params.productId;
  const newName = req.body.name;
  const newPrice = req.body.price;

  if (!newName || !newPrice) {
    return res.sendStatus(400);
  }

  const gesuchtesProdukt = products.find((product) => {
    return product.productId === Number(id);
  });

  if (!gesuchtesProdukt) {
    return res.status(404).send('Produkt nicht gefunden');
  }

  gesuchtesProdukt.name = newName;
  gesuchtesProdukt.price = newPrice;

  res.status(200).json({
    product: gesuchtesProdukt,
  });
});

// Produkt wird gelöscht
// DELETE HTTP-Methode (Delete)
app.delete('/products/:productId', (req, res) => {
  const id = req.params.productId;

  const gesuchtesProdukt = products.find((product) => {
    return product.productId === Number(id);
  });

  if (!gesuchtesProdukt) {
    return res.status(404).send('Produkt konnte nicht gefunden werden');
  }

  // Entfernt das Produkt aus dem Array "products"
  products.splice(products.indexOf(gesuchtesProdukt), 1);

  res.status(200).json({
    message: 'Produkte wurde erfolgreich gelöscht',
    products: products,
  });
});

app.listen(PORT);
