// 1. TODO: Zmapuj tablicę countries tak, aby zwrócić tablicę samych nazw krajów

var countryNames = countries.map(function(country) {
return country.name;
});
console.log(countryNames);

// 2. TODO: Zmapuj tablicę countries, oczekiwany string w tablicy wynikowej:
// "NAME ma powierzchnię AREA km2 a populacja wynosi POPULATION ludzi"
// Przykład: "Afganistan ma powierzchnię 652230 km2 a populacja wynosi 27657145 ludzi"

var countryDescription = countries.map(function(country) {
return country.name + ' ma powierzchnie ' + country.area + ' km2 a populacja wynosi ' + country.population + ' ludzi ';
});
console.log(countryDescription);

// 3. TODO: Zmapuj tablicę countries, oczekiwane obiekty w tablicy wynikowej:
/*

    kraj: NAME, (wielkimi literami!)
    stolica: CAPITAL
    region: REGION,
    sasiedzi: TUTAJ STRING Z WSZYSTKIMI SASIADAMI (borders) - jeśli sasiadów nie ma, to sasiedzi = 'BRAK'
    domena: 'Domena internetowa to TOPLEVELDOMAIN'
    strefaCzasowa: "Strefa czasowa UTC+XX:XX" (lub więcej jeśli są)
    numerKierunkowy: "48" (lub więcej jeśli są)
}
*/

var countryInformation = countries.map(function(country) {
    return {
        kraj: country.name.toUpperCase(' '),
        stolica: country.capital.toUpperCase(' '),
        region: country.region.toUpperCase(' '),
        sasiedzi: country.borders.length > 0 ? country.borders.join(' ') : 'brak',
        domena: country.topLevelDomain.join(' '),
        strefaCzasowa: country.timezones.join(' '),
        numerKierunkowy: country.callingCodes.join(''),
    }
    });
    console.log(countryInformation);
