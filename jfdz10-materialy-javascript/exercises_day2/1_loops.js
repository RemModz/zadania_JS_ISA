// FOR LOOP
// TODO.1: Przy użyciu pętli FOR, wyświetl w konsoli wszystkie napoje z listy
// UWAGA: Wyświetlone nazwy mają być wypisane wielkimi literami.

var drinksNames = ['Vodka', 'Whisky', 'Prosseco', 'Beer', 'Vine', 'Gin'];

for (var i = 0 ; i < drinksNames.length; i++ ) {
  console.log(drinksNames[i].toUpperCase())
}



// TODO.2: Przy użyciu pętli FOR, przypisz do zmiennej totalPrice sumę elementów tablicy prices
// Wykorzystaj operator +=

var totalPrice = 0;
var prices = [19.99, 40.00, 35.99, 3.20, 16.50, 23.30];

// totalPrice += prices[i];


for (var i = 0 ; i < prices.length; i++) {
  totalPrice += prices[i];
}
console.log(totalPrice)


// TODO.3: Napisz funkcję, która zwróci sumę cen drinków z tablicy drinks
var drinks = [
  {name: '  Vodka', price: 19.99},
  {name: 'Whisky  ', price: 40.00},
  {name: 'Prosseco  ', price: 35.99},
  {name: '  Beer', price: 3.20},
  {name: '   Vine  ', price: 16.50},
  {name: '  Gin  ', price: 23.30}
];
  let totalSpend = 0

for (var i = 0 ; i < drinks.length; i++) {
  totalSpend += drinks[i].price;
}
console.log(totalSpend)


function getSumOfPrices() {
  var sum = 0;

  for (var i = 0 ; i < drinks.length; i++) {
    sum += drinks[i].price;
  }
  return sum; 
}

// TODO.4: Puść pętlę po tablicy drinks i zaokrąglij w niej ceny do całości

for (var i = 0 ; i < drinks.length; i++) {
  drinks[i].price = Math.round(drinks[i].price)
  console.log(drinks[i].price)
}
console.log(drinks[1].price)
// Math.round(a)
// TODO.5. Za pomocą pętli, doklej jednostkę PLN do cen, zastosuj dekremenację!

//* var text = "PLN" 
//for (var i = 0 ; i < drinks.length; i++) {
//  drinks[i].price = drinks[i].price + text
//  console.log(drinks[i].price)
//}


for (var i = drinks.length - 1 ; i >= 0 ; i--) {
  drinks[i].price = drinks[i].price + 'PLN'
  console.log(drinks[i].price)
}


// TODO.6: Za pomocą pętli, oczyść nazwy drinków z white-spaces

for (var i = 0 ; i < drinks.length; i++ ) {
  drinks[i].name = drinks[i].name.trim();
console.log(drinks[i].name)
}
// TODO.7: Puść pętlę po tablicy drinks i do każdego obiektu (drinka) dopisz nowe pole "id":
//    - obiekt z indeksem zero ma mieć ID 1, i tak dalej, wykorzystaj dostęp do licznika pętli *



// TODO.8: Napisz funkcję, która policzy średnią cenę drinka w tablicy drinks
function calculateAverage(pricedItems) {
  var total = 0;

  for (var i = 0; i < pricedItems.length; i++) {
    // total = total + pricedItems[i].price;
    total += Number.parseFloat(pricedItems[i].price);
  }

  return total / pricedItems.length;
}

console.log('average', calculateAverage(drinks));


/* TODO.9: Za pomocą pętli while, wyświetl console.log z ceną i nazwą każdego drinka
 */






