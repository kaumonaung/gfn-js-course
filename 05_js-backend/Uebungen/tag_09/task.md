# Aufgabe

Baue dein eigenes Backend für eine Blogging-Plattform.

- Es sollte in der Lage sein, einen Blogpost zu erstellen, zu aktualisieren, zu lesen und zu löschen (CRUD)
- Benutze JWT, um Routen zu schützen, so dass nur eingeloggte User Posts erstellen, aktualisieren und löschen können
- Benutze Mongoose und MongoDB für die Datenbank

1. Erstelle eine REST API Struktur mit Express
2. Erstelle eine Verbindung zur MongoDB Datenbank mit Mongoose
   - Erstelle ein Model/Schema für einen Blog Post und für einen User
   - Der User sollte einen Benutzernamen und ein Passwort enthalten
   - Post Schema sollte title, content, und createdAt (default Date.now) haben
3. Erstelle eine User Registierung und Login Route
   - Erstelle einen Router Objekt von Express und lagere die Routes in einer "routes" Ordner
   - User sollten sich mit einem Benutzernamen und einem Passwort registrieren können
   - Passwörter sollten gehasht sein
   - Speichere die User in einer separaten User Collection in MongoDB
   - Gebe einen Access Token beim Login aus
4. Erstelle die CRUD-Operationen für einen Blog Post
   - Erstelle einen Router Objekt von Express und lagere die Routes in einer "routes" Ordner
5. Erstelle einen Middleware "verifyToken", die den accessToken verifiziert, um sicherzustellen, dass der User angemeldet ist
   - Erstelle einen "middlewares" Ordner und speicher den Middleware dort
6. Teste die Routes mit einer "request.rest" Datei
   - Registiere einen User
   - Logge dich ein
   - Erstelle einen Blog Post
   - Lese die Blog Posts aus (public)
   - Versuche einen Blog Post zu löschen, ohne einen Access Token
   - Aktualisiere und lösche einen Blog Post mit dem Access Token
