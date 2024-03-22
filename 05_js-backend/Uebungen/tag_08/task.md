# Aufgabe

1. Wandle die mongoose Methoden für das Model User in einer REST API um (mithilfe von Express)
   - Erstelle mit Mongoose ein User Model (`new mongoose.Schema()` und `module.exports = mongoose.model('User', userSchema)`)
2. Erstelle zwei GET Routen
   1. Um alle User zu finden oder um einen User nach Name oder Email zu finden (Nutze query parameters `req.query`)
   2. Um mehrere User nach min und max Alter zu finden
3. Erstelle eine POST Route, um einen neuen User zu erstellen
4. Erstelle eine PUT Route, die einen User anhand seiner ID aktualisiert
5. Erstelle eine DELETE Route, um einen User zu löschen
6. Teste alle Routes mit einer "request.rest" Datei

## Tipps

- Installiere `mongoose` und `express`
- Vergiss NICHT `app.use(express.json())` aufzurufen
- Erstelle `app.get('/users')`, `app.get('/users/age?min=10&max=50')`, `app.post('/users')`, `app.put('/users/:id')`, `app.delete('/users')` Routes
- Nutze Mongoose
