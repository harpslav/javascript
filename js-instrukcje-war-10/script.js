/*
var wzrostJanek = 156;
var wzrostAnia = 166;
if( wzrostJanek < wzrostAnia ) {
    console.log( "Ania jest wyższa");
} else {
    console.log ("Janek jest wyższy");
}

function wiadomosc( str ) {
    console.log( str );
}
//str - dowolna nazwa parametru

if( wzrostJanek > wzrostAnia){
    wiadomosc( "Janek jest wyższy od Ani");
} else if( wzrostJanek == wzrostAnia) {
   wiadomosc( "Janek i Ania są tego samego wzrostu");
} else {wiadomosc( "Janek jest niższy od Ani");
       }
*/

function wiadomosc( str ) {
    console.log( str );
    }

var imie = "Duda";

switch (imie) {
    case "Marta":
        wiadomosc("Czołem, jestem Marta");
        break;
        //break jest konieczny 
    case "Monika":
        wiadomosc("Czołem, jestem Monika");
          break;
        case "Ola":
        wiadomosc("Czołem, jestem Ola");
        break;
    default: 
        wiadomosc("Nie ma tu nikogo");
}