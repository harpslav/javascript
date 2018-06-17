class Ogloszenie {
    constructor(tytul, opis, miasto, telefon, stan) {
            this.tytul = tytul;
            this.opis = opis;
            this.miasto = miasto;
            this.telefon = telefon;
            this.stan = stan;
        }
    pobierz() {
        var ogl = this.tytul + "\n" + this.opis + "\n" + this.miasto+ "\n" + this.telefon + "\n" + this.stan;
        return ogl;
        }
}

var kolekcja = [];

var ogloszenieItem = new Ogloszenie( "Sprzedam Opla", "Kilka dzwonów", "Szczecin", "112", "używany" );

var ogloszenieTresc = ogloszenieItem.pobierz();

kolekcja.push(ogloszenieTresc);


ogloszenieItem = new Ogloszenie ("Wynajmę rower", "Wynajem długoterminowy Rometa", "Płock", "600700500", "używany");

ogloszenieTresc = ogloszenieItem.pobierz();

kolekcja.push(ogloszenieTresc);

console.log(kolekcja);

/* ogłoszenie 1 i 2 to obiekty umieszczone w tablicy Kolekcja */

console.log(kolekcja[0]);