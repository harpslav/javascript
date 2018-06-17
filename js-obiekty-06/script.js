var ogloszenie = {
    tytul: "Poszukiwany Developer",
    //MUSI byc przecinek
    opis: "Wymagane doświadczenie: 1 rok",
    data: "2018-06-17",
    wyswietlone: false,
    wyswietl:function (){
        if(this.wyswietlone ==true) {
            console.log( this.tytul + "\n" + this.opis + "\n" + this.data );
            } else {
                console.log("Brak ogloszenia");
            }
    }
}

ogloszenie.wyswietlone = true;

ogloszenie.tytul = "Sprzedam Opla";
ogloszenie.opis = "Świerzynka od Niemca";

ogloszenie.wyswietl();