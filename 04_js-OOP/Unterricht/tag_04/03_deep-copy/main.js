/*
====================== THEMA ======================
Deep Copy
===================================================
*/

// Shallow Copy
const ingredientsList = [
  'noodles',
  {
    list: ['eggs', 'flour', 'water'],
  },
];

console.log(ingredientsList);
console.table(ingredientsList);

const ingredientsListCopy = [...ingredientsList]; // => Shallow Copy von ingredientsList als Array, deshalb []

console.table(ingredientsListCopy);
console.log(ingredientsList === ingredientsListCopy); // => false

ingredientsListCopy[1].list = ['rice flour', 'water'];
console.log('Shallow Copy', ingredientsListCopy[1].list); // =>  ['rice flour', 'water']

console.log('Kopie von Shallow Copy', ingredientsList[1].list); // =>  ['rice flour', 'water']

// Deep Copy
const ingredientsListTwo = [
  'noodles',
  {
    list: ['eggs', 'flour', 'water'],
  },
];

// Mit JSON.parse() und JSON.stringify() erstellen wir eine Deep Copy
const ingredientsListTwoDeepCopy = JSON.parse(
  JSON.stringify(ingredientsListTwo)
);
console.log(JSON.stringify(ingredientsListTwo));
console.log(JSON.parse(JSON.stringify(ingredientsListTwo)));

ingredientsListTwoDeepCopy[1].list = ['rice flour', 'water'];
console.log('Deep Copy', ingredientsListTwoDeepCopy[1].list);

console.log('Original vom Deep Copy', ingredientsListTwo[1].list);
