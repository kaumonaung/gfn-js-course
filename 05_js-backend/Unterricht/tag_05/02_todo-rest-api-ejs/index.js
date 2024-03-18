/*
Um EJS zu konfigurieren

1. "index.js" von 01_todo-rest-api reinkopiert und "let todos = [...]" ganz nach oben in der Datei geschoben
2. EJS installieren mit "npm install ejs"
3. EJS aktivieren mit "app.set('view engine', 'ejs')"
4. Neuen "views" Ordner erstellt und eine "home.ejs" Datei erstellt
5. "res.render('home', {todos: todos})" aufgerufen in "app.get('/', ...)"

*/

// Beispiel ToDo-Liste
let todos = [
  {
    id: 1,
    text: 'Express.js durchkauen',
    done: false,
  },
  {
    id: 2,
    text: 'ToDo App bauen',
    done: false,
  },
];

const express = require('express');
const app = express();
const PORT = 3000;

// JSON-konfigurieren, d.h. wir können JSON-Formate auslesen
app.use(express.json());

// EJS konfigurieren bzw. aktivieren
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    todos: todos,
  });
});

app.listen(PORT, () => {
  console.log(`Der Server ist gestartet auf http://localhost:${PORT}`);
});

// Alle ToDos lesen (READ / GET HTTP-Methode)
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// Ein Todo-Item auslesen über die "id" (GET HTTP-Methode)
app.get('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((todo) => todo.id === id);

  // Kein Todo wurde gefunden
  if (!todo) {
    return res.status(404).send('ToDo wurde nicht gefunden');
  }

  res.status(200).json(todo);
});

// Ein neues ToDo-Item erstellen (CREATE / POST HTTP-Methode)
app.post('/todo-erstellen', (req, res) => {
  const todoText = req.body.text;
  // const { text } = req.body; // => Alternative zu "const todoText = req.body.text"

  // Wenn kein "text" da ist
  if (!todoText) {
    return res.status(400).send('Kein ToDo-Text angegeben');
  }

  const newTodo = {
    id: new Date().getTime(),
    text: todoText,
    done: false,
  };

  todos.push(newTodo);

  res.status(201).json(todos);
});

// ToDo updaten (UPDATE / PUT HTTP-Methode)
app.put('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((todo) => todo.id === id);

  // Kein Todo wurde gefunden
  if (!todo) {
    return res.status(404).send('ToDo wurde nicht gefunden');
  }

  // Wenn "todo.done = true", dann wird es "false"
  // Wenn "todo.done = false", dann wird es "true"
  todo.done = !todo.done;

  res.status(200).json(todo);
});

// ToDo löschen (DELETE / DELETE HTTP-Methode)
app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((todo) => todo.id === id);

  // Kein Todo wurde gefunden
  if (!todo) {
    return res.status(404).send('ToDo wurde nicht gefunden');
  }

  const todoIndex = todos.indexOf(todo);

  todos.splice(todoIndex, 1);

  res.status(200).json(todos);
});
