function suma( l1, l2, l3) {
    var wynik = l1+l2+l3;
    console.log(wynik);
    return wynik;
//    exit
    console.log("Kod poniżej słówka return nigdy się nie wykona");
}

suma(1,15,3);
suma(5,5,100);
suma(20,21,50);

/* aby przypissać do zmiennej wynik działania funkcji, należy użyć słówka return*/

var wynikDzialania = suma(1,15,3);
alert(wynikDzialania);
console.log(wynikDzialania);