// Notiz: "../" um ein Verzeichnis zurückzugehen und "./" um in das gleiche Verzeichnis zu gehen

// Wir benötigen eine package.json Datei mit dem "type": "module", um import und export zu verwenden
import { add, multiply } from './math/math.js';

console.log(add(2, 3)); // => 5

console.log(multiply(2, 3)); // => 6
