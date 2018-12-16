(function() {

/*
// TODO: 1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem
/* TODO: 2. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName a następnie:
    - zwraca stringa z powitaniem, np: 'Hello my dear Tomek!'
    - wynik funkcji przypisz do zmiennej o nazwie greeting
    - zadeklaruj funkcję jako function declaration oraz jako function expression */
/* TODO: 3. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName. Następnie:
    - zwraca stringa z powitaniem (wykorzystaj z funkcję z TODO1!) a do powitania
      dokleja stringa "I love you!"*
    - oczekiwana zwrotka: "Hello my dear firstName lastName! I love you!" */

// TODO: 4. Opakuj kod z tego pliku w IIFE.



// TODO: 1.
function showConsol () {
    console.log('Hello') ;
}
showConsol () ;
// TODO: 2.

function showName (firstName , lastName) {
    console.log ( 'Hello my dear ' + firstName + " " + lastName);
}
showName ('Remek' ,'Modz') ;

let sayHi = function (firstName , lastName) {
    return  'Hello my dear ' + firstName + " " + lastName;
}
    var greeting = sayHi ("Justyna" , "Modz") ;
    console.log (greeting) ;

// TODO: 3.
function sayLovelyHello (firstName, lastName) {
    return showName (firstName, lastName) + ', i love you'
}

sayLovelyHello ("Justyna" , "Modz");
// TODO: 4.

})();