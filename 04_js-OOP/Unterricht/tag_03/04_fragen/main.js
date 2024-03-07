console.log(this); // => Window Object

const data = {
  brands: ['Audi', 'BMW', 'Mercedes', 'VW'],
};

function listBrands() {
  // console.log(this); // => "this" ist window, wenn wir data nicht übergeben
  // => WENN listBrands.call() DANN this = Window Object
  // => WENN listBrands.call(data) DANN this = { brands: ['Audi', 'BMW', 'Mercedes', 'VW'] }
  console.log(this.brands.join(', ')); // => RICHTIG
  console.log(this.join(', ')); // => FALSCH
}

// Mit call() setzten wir den "this"-Kontext zu "data" statt den globalen (window Object)
listBrands.call(data); // => "this" wird zu dem Objekt, dass wir in call() eingeben
