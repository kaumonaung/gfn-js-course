/*
JSON Placeholder API: https://jsonplaceholder.typicode.com

OHNE async await würden wir nur "Promise {<pending>}" bekommen
*/

const fetchData = async () => {
  console.log('Daten abrufen');

  const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // => "response" wird als JSON-Format zurückgegeben
  const data = await response.json(); // .json() kommt von JavaScript

  console.log(data);
};

fetchData();
