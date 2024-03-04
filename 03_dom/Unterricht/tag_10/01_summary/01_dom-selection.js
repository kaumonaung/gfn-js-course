document.getElementById('myId'); // => document.querySelector('#myId')
document.getElementsByClassName('myClass'); // document.querySelectorAll('.myClass')
document.getElementsByTagName('div'); // document.querySelectorAll('div')
document.getElementsByName('myName'); // document.querySelectorAll('[name='myName']')

/* 
// HTML
<div class="admin-password container">
    <input name="password" />
    <input name="username" />
</div>

// CSS
<style>

div {

}

.admin-password {

}

</style>
*/
document.querySelector('div.admin-password.container input[name="username"]');

// QuerySelector erlaubt auch komplexere Selektoren mit CSS-Notation
// Beispiel: <img src="funny_cat.png" />
document.querySelectorAll('[src]'); // Alle Elemente mit dem src-Attribut werden selektiert
document.querySelector('[src="funny_cat.png"]'); // Genau das Element mit dem src="funny_cat.png"
document.querySelector('[src$=".png"]'); // Endet mit ".png" ($)
document.querySelector('[src*="cat"]'); // Enhält "cat" im String (*)
document.querySelector('[src^="funny"]'); // Beginnt mit "funny" (^)
