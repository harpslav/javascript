//zasięg globalny - zmienne tworzone w tym zasięgu widoczne sąw całym programie

/*var zmiennaGlobalna = "Czołem! Jestem zmienna globalna!";

console.log(zmiennaGlobalna);


function pokazZmienne() {
    console.log(zmiennaGlobalna);
    
    var zmiennaLokalna = "A ja jestem zmienna lokalna i nie widać mnie w zasięgu globalnym!";
    console.log( zmiennaLokalna );
}

pokazZmienne();*/

//console.log( zmiennaLokalna );

var config = "localhost";

function update() {
    var config = "newlocalhost";
//    config = "newlocalhost"; 
    /* jeśli będzie config, to w logu będzie wyświetlana dwa razy zmienna globalna  localhost, natomiast z var config najpierw wyświetli się zmienna lokalna newlocalhost*/
    
    console.log("Zasieg lokalny zmienna config = " + config);
}
    update();
    
    console.log("Zasieg lokalny zmienna config = " + config);
