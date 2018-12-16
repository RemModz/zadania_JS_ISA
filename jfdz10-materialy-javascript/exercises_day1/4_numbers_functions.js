/*====================================================
NUMBERS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
=====================================================
Wskazówki do zadań:
- Number.parseFloat(val) - konwersja stringa na liczbę
- val.toFixed() - dokładność liczb po przecinku
- val.toString() - konwersja number do string */

// TODO: 1. Napisz funkcję, która pobiera liczbę i zwraca ją skonwertowaną na string



// TODO: 2. Napisz funkcję, która pobiera stringa i zwraca go skonwertowanego na number

/* TODO: 3. W poniższych zmiennych, doprecyzuj rozwinięcie dziesiętne. Nadpisz wartość zmiennych nową wartością.
    - var powerHorses = 233; do 3 liczb po przecinku
    - var score = 10.33344; do 2 liczb po przecinku */

var powerHorses = 233;
var score = 10.33344;

// TODO: 1.

function onNumber(str) {
    return parseFloat(str)

}
console.log (parseFloat ("233"))

// TODO: 2.

function onString(number) {
    return number.toString()
}
console.log (onString(2555))

// TODO: 3.

function  toFixed(int, fixed) {
    return int.toFixed (fixed)
}

console.log (toFixed(powerHorses, 3))
console.log (toFixed(score, 2))

