/*for(var i = 1; i < 20; i++) {
    console.log( i );
    
}*/

var samochody = ["Opel", "Audi", "Honda", "BMW", "Fiat 126p", "Żuk"];

//
//for (var i = 0; i < samochody.length; i++ ) {
//    console.log( samochody[i]);
//}

//forEach, oprocz zmiennych, stringow i liczb mozemy przekazac inna funkcje

//samochody.forEach(function( elementTablicy, indexTablicy ){
//    console.log( elementTablicy + " ======" + indexTablicy);
//} )

//pętla while
//var iterator = 15;
//while( iterator <12 ) {
//    console.log( "Iteracja nr " + iterator);
//    iterator++;
//    //iterator zapobiega iteracji non-stop i umozliwia zamknięcie pętli
//}

//do while - kod raz się wykona dopóki nie sprawdzi że 15 nie jest <12

//var iterator = 15;
//do {
//    console.log( "DO WHILE iteracja nr " + iterator);
//    iterator++;
//} while ( iterator < 12);

//break konczy działanie pętli 
//for (var i = 1; i < 40; i++) {
//    if(i > 15) {
//        break;
//    }
//    console.log("Iteracja nr " + i);
//}

//continue - opuszcza bieżącą iteracje ale przechodzi do następnej 
//tutaj pomijane są parzyste - podzielne przez 2:

for( var i = 1; i < 26; i++) {
    if( i%2 ==0 ){
        continue;
    }
    console.log( "Iteracja nr " + i);
}