// 1. TODO. Wyłap kraje, których powierzchnia jest większa niż 1000000 km2 lub mniejsza niż 30000 km2

var countrySize = countries.filter(function(country) {
    return country.area > 1000000 || country.area < 30000;

});
console.log(countrySize)

// 2. TODO. Wyłap kraje, których powierzchnia jest mniejsza niż 5000000 km2 i liczba ludności większa od 10 mln.
var countrySmaller = countries.filter(function(country) {
    return country.area < 5000000 && country.population > 10000000;
});
console.log(countrySmaller)

// 3. TODO. Wyłap kraje, które mają co najmniej 3 sasiądów

var countryLessThanThree = countries.filter(function(country) {
    return country.borders.length >= 3;
});
console.log(countryLessThanThree)
// 4. TODO. Wyłap kraje, których region to europa

var countryRegionEurope = countries.filter(function(country) {
    return country.region === 'Europe';
});
console.log(countryRegionEurope)

// 5. TODO. Wyłap kraje, których stolica zaczna się na literę przekazaną w parametrze  //#endregion

function filterByLetter(letter) {
    return function(country) {
        return country.capital.startsWith(letter);
    }    
}
var countryCapitalFirstLetter = countries.filter(filterByLetter('M'));

console.log(countryCapitalFirstLetter)

// 7. TODO. Wyłap kraje, które za sasiąda mają Niemców

var germanyAreNeighbors = countries.filter(function(country) {
    return country.borders.includes ('DEU');
});
console.log(germanyAreNeighbors)

// 8. TODO: Sprawdź, czy czy jakikolwiek kraj ma stolicę na literę "Y"


var countryCapitalOnY = countries.some(filterByLetter('Y'));
console.log(countryCapitalOnY)

// 9. TODO: Sprawdź, czy wszystkie kraje mają populację powyżej 50 tys.

var populationOver50k = countries.every(function(country) {
    return country.population > 50000;
});
console.log(populationOver50k)