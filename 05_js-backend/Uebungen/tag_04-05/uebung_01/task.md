# Aufgabe

1. Erstelle eine "auth/login" POST Route, die aus dem auth Router Objekt erstellt wird
   - Erstelle den auth Router in den Ordner "routes"
2. Erstelle ein Middleware, welches überprüft ob ein "username" und "password" vorhanden ist
   - Wenn beides vorhanden ist, sollen die in der Konsole ausgeloggt werden, wenn nicht, wird ein 400 Error gesendet
   - Erstelle den Middleware in dem Ordner "middlewares"
3. Mithilfe einer "requests.rest" Datei, prüfe die "auth/login" Route mit jeweils "username" und "password" und ohne

## Hinweise

- Siehe tag_04/01_Routing und tag_03/04_middlewares als Orientierung in

- Router Objekte werden über `express.Router()` erstellt und müssen über `module.exports = router` expotiert werden
- Vergiss nicht json() in deinem Server zu erlauben
- Setzte in der "requests.rest" Datei für die POST Route "Content-Type: application/json"
