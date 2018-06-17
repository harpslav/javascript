/*
typ liczbowy */

var wyplata = 5000;
var premia = 1200;
var wynagrodzenie = wyplata +premia;

console.log(wynagrodzenie);
console.log( typeof wynagrodzenie );

/*

    typ string (łańcuch znaków)

*/

var wyplataStr = "5000";
var premiaStr = "1200";
//var wynagrodzenieStr = wyplataStr + premiaStr;
//var wynagrodzenieStr = parseInt( wyplataStr ) + parseInt( premiaStr );
var wynagrodzenieStr = +(wyplataStr)  + +(premiaStr);

premiaStr
console.log(wynagrodzenieStr);
console.log( typeof wynagrodzenieStr );


/* 
    typ logiczny
*/

var czyDzialaKlima = false;
if( czyDzialaKlima == true) {
    console.log("Dziala, ale co z tego?");
} else {
    console.log("Nie dziala klima");
}

/*
    typy specjalne
*/

var data;
//console.log(data);

var pustaZmienna = null;
console.log(pustaZmienna);

var str = "Zakupy robię  w \"Biedrze\" \n i jest fajnie";
console.log(str);

