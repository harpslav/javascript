var imiona = ["Agata", "Janek", "Justyna", "Jolka", "Rafał"];
//console.log(imiona);
//
//console.log ( imiona [0], imiona [2] );

//dodawanie elementów do tablicy na koncu

imiona[5] = "Marta";
console.log (imiona);

imiona.push('Anna', 'Olka', 'Magda', 'Kasia');
console.log (imiona);

// usuwanie ostatniego elementu ztablicy

imiona.pop();
console.log (imiona);

//dodawanie na początku tablicy

imiona.unshift('Kasia', 'Adam');
console.log (imiona);

//usuwanie z początku tablicy

imiona.shift();
console.log (imiona);

//usuwanie ze srodka - Janek i Justyna
imiona.splice(2,2);
console.log (imiona);

//ile elementów w tablicy?
console.log (imiona.length);

// array.join() - rozbicie tablicy na ciąg znaków

console.log (imiona.join(" "));
console.log (imiona.join(" + "));
console.log (imiona.join());

//nowa tablica z odwróconym porządkiem

var noweImiona = imiona.reverse();
console.log (noweImiona);

// array.sort() - sortowanie alfabetyczne

noweImiona.sort();
console.log(noweImiona);