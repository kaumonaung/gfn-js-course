// IIFE (Immediately Invoked Function Expression)
(() => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  // ===== DOM =====
  const myObject = {};
  myObject.num0 = $('[id="0"]'); // => document.getElementById("0")
  myObject.num1 = $('[id="1"]');
  myObject.num2 = $('[id="2"]');
  myObject.num3 = $('[id="3"]');
  myObject.num4 = $('[id="4"]');
  myObject.num5 = $('[id="5"]');
  myObject.num6 = $('[id="6"]');
  myObject.num7 = $('[id="7"]');
  myObject.num8 = $('[id="8"]');
  myObject.num9 = $('[id="9"]');
  myObject.addition = $('[id="+"]');
  myObject.subtraction = $('[id="-"]');
  myObject.multiplication = $('[id="x"]');
  myObject.division = $('[id="÷"]');
  myObject.equal = $('[id="="]');
  myObject.clear = $('[id="AC"]');
  myObject.calculation = $('#calculation');
  myObject.output = $('#output');

  console.log(myObject);

  // ===== INIT =====
  const init = () => {
    addButtonEventListeners();
    // Aufgabe 24: Event Listener für "keydown" Events hinzufügen
  };

  // ===== EVENT LISTENERS =====
  const addButtonEventListeners = () => {
    const numbers = [
      myObject.num0,
      myObject.num1,
      myObject.num2,
      myObject.num3,
      myObject.num4,
      myObject.num5,
      myObject.num6,
      myObject.num7,
      myObject.num8,
      myObject.num9,
    ];

    // Numbers 0-9
    numbers.forEach((num) => {
      num.addEventListener('click', () => {
        myObject.output.innerHTML += num.textContent;
      });
    });

    // Addition (+)
    myObject.addition.addEventListener('click', () => {
      myObject.output.innerHTML += '+';
    });

    // Subtraction (-)
    myObject.subtraction.addEventListener('click', () => {
      myObject.output.innerHTML += '-';
    });

    // Multiplication (x)
    myObject.multiplication.addEventListener('click', () => {
      myObject.output.innerHTML += '*';
    });

    // Division (÷)
    myObject.division.addEventListener('click', () => {
      myObject.output.innerHTML += '/';
    });

    // Equal Sign (=)
    myObject.equal.addEventListener('click', calculate);

    // Clear (AC)
    myObject.clear.addEventListener('click', () => {
      myObject.output.innerHTML = '';
      myObject.calculation.innerHTML = '';
    });
  };

  // ===== FUNCTIONS =====
  const calculate = () => {
    const expression = myObject.output.innerHTML;
    myObject.calculation.innerHTML = expression + ' ='; // nicht wichtig für die Rechnung

    // const result = eval(expression); // Sicherheitsrisiko
    const result = new Function('return ' + expression)(); // hier wird gerechnet
    myObject.output.innerHTML = result;
  };

  // ===== CALL INIT =====
  init();
})();

/* const main = () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  // ===== DOM =====
  const myObject = {};
  myObject.num0 = $('[id="0"]'); // => document.getElementById("0")
  myObject.num1 = $('[id="1"]');
  myObject.num2 = $('[id="2"]');
  myObject.num3 = $('[id="3"]');
  myObject.num4 = $('[id="4"]');
  myObject.num5 = $('[id="5"]');
  myObject.num6 = $('[id="6"]');
  myObject.num7 = $('[id="7"]');
  myObject.num8 = $('[id="8"]');
  myObject.num9 = $('[id="9"]');
  myObject.addition = $('[id="+"]');
  myObject.subtraction = $('[id="-"]');
  myObject.multiplication = $('[id="x"]');
  myObject.division = $('[id="÷"]');
  myObject.equal = $('[id="="]');
  myObject.clear = $('[id="AC"]');
  myObject.calculation = $('#calculation');
  myObject.output = $('#output');

  console.log(myObject);

  // ===== INIT =====
  const init = () => {
    addButtonEventListeners();
  };

  // ===== EVENT LISTENERS =====
  const addButtonEventListeners = () => {
    const numbers = [
      myObject.num0,
      myObject.num1,
      myObject.num2,
      myObject.num3,
      myObject.num4,
      myObject.num5,
      myObject.num6,
      myObject.num7,
      myObject.num8,
      myObject.num9,
    ];

    // Numbers 0-9
    numbers.forEach((num) => {
      num.addEventListener('click', () => {
        myObject.output.innerHTML += num.textContent;
      });
    });

    // Addition (+)
    myObject.addition.addEventListener('click', () => {
      myObject.output.innerHTML += '+';
    });

    // Subtraction (-)
    myObject.subtraction.addEventListener('click', () => {
      myObject.output.innerHTML += '-';
    });

    // Multiplication (x)
    myObject.multiplication.addEventListener('click', () => {
      myObject.output.innerHTML += '*';
    });

    // Division (÷)
    myObject.division.addEventListener('click', () => {
      myObject.output.innerHTML += '/';
    });

    // Equal Sign (=)
    myObject.equal.addEventListener('click', calculate);

    // Clear (AC)
    myObject.clear.addEventListener('click', () => {
      myObject.output.innerHTML = '';
      myObject.calculation.innerHTML = '';
    });
  };

  // ===== FUNCTIONS =====
  const calculate = () => {
    const expression = myObject.output.innerHTML;
    myObject.calculation.innerHTML = expression + ' ='; // nicht wichtig für die Rechnung

    // const result = eval(expression); // Sicherheitsrisiko
    const result = new Function('return ' + expression)(); // hier wird gerechnet
    myObject.output.innerHTML = result;
  };

  // ===== CALL INIT =====
  init();
};

main(); */
