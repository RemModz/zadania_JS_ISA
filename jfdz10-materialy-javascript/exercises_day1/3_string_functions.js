/*=====================================================
LINK: https://developer.mozilla.org /en-US/docs/Web/JavaScript/Reference/Global_Objects/String
=====================================================
Wskazówki do zadań:
- string.replace() - zmiana dowolnego znaku lub ciągu znaków
- string.split() - konwersja stringa do tablicy
- string.trim() - usunięcie whitespaces
- string.charAt() - odczytanie znaku na zadanym indeksie
- string.substring() - ekstrakcja części znaków ze stringa
- string.toLowerCase() - konwersja na wielkie litery
- string.toUpperCase() - konwersja na małe litery
- string.length - odczytanie ilości znaków */

// TODO: 1. Napisz funkcję, która przyjmuje parametr typu string, oraz zwraca liczbę jego znaków


function getLenght(str) {
    return str.lenght;
}



// TODO: 2. Napisz funkcję, która przyjmuje parametr typu string, a następnie zwraca go oczyszczonego z tzw. trailing spaces. 

function trimSpaces(str) {
    return str.trim();
}
//  cleanText('foobar');
/* TODO: 3. Poniższe zmienne, rozbij na tablicę liter, oczekiwany wynik to: ['R','a','m','b','o']:
    - var nameOne = 'Rambo';
    - var nameTwo = 'R_a_m_b_o';
    - var nameThree = 'ROX1aOX1mOX1bOX1o';
*/
var nameOne ='Rambo';
var nameTwo = 'R_a_m_b_o';
var nameThree = 'ROX1aOX1mOX1bOX1o';

function splitLetters(str) {
    return str.split('')
};

console.log (splitLetters (nameOne));

function splitLettersUnderline(str) {
    return str.split('_')
};

console.log (splitLettersUnderline (nameTwo));

function splitLettersBySymbol(str) {
    return str.split('OX1')
};

console.log (splitLettersBySymbol (nameThree));

function splitter (str, sepearator){
    return str.split(separator);
}
 //   splitter (nameOne, sepearator '');



/* TODO: 4. Stwórz nowe zmienne na podstawie stringa name = "EXPIRED", które zawierają odpowiednio:
    - pierwsze 3 litery tego stringa
    - ostatnie 3 litery tego stringa
*/

var text = 'EXPIRED';
function firstThree(str) {
    return str.substring (0,3);
   
};
console.log (firstThree (text))


function lastThree(str) {
    return str.substring (4,7);
   
};
console.log (lastThree (text))



// TODO: 5. Napisz funkcję o nazwie capitalize, która jako parametr przyjmuje stringa i go "kapitalizuje"

function capitalize(str) {
    return str.toUpperCase ();
}
console.log (capitalize (nameOne))

// TODO: 6. W zmiennej var url = 'users/{id}' podmień "{id}" na liczbę 3 i wynik przypisz do nowej zmiennej
var urlToReplace = 'users/{id}';

let urltoChange = urlToReplace.replace( '{id}' , 3);

console.log (urltoChange)

/* TODO: 7. Napisz funkcję która przyjmuje parametr typu string, a następnie jednocześnie:
    - czyści go z whitespaceów
    - litery konwertuje na wielkie
    - zwraca 2 pierwsze znaki
*/

function setUpOperation(str) {
    return str
    .trim()
    .toUpperCase()
    .substr(from: 0, lenght: 2);
}





