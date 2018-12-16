/* 1. TODO: stworz obiekt MyMath który posiada trzy metody: do liczenia wierzchołka Y, wierzchołka X oraz delty. Metody
wzory:  peekY = - delta/4a
        peekX = - a / 2b
        delta = b * b - 4 * a * c

        Wykorzystaj stworzony obiekt i wywołaj jego metody z odpowiednimi parametrami, sprwadz czy zwraca dobre wartości
 */

 var myMath = {
     delta: function(a, b, c) {
         return b * b - 4 * a * c;
     },
     peekX: function(a, b) {
         return - a / 2 * b;
     },
     peekY: function(a, b, c) {
        return this.delta(a, b, c) / 4 * 2
     },    
 }

/* other taks */

 var names = ['Remek' , 'Justyna' , 'Seba' , 'Karol' , 'Jan' , 'Roman'];
// undefined
var namesLongerThan6Chars = names.filter(function(name) {
	return name.length > 6;
});
// undefined
namesLongerThan6Chars
["Justyna"]
var namesStartsWithR = names.filter(function(name) {
return name.startsWith('R')
});
// undefined
namesStartsWithR
// (2) ["Remek", "Roman"]