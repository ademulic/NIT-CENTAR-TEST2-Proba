//map

/*
Z1:
    Dodavanje prefiksa:

    Kreiraj niz koji datom nizu dodaje prefiks super
    [heroj, auto, pas]

*/

    const nazivi = ["heroj", "auto", "pas"];
    const superNazivi = nazivi.map(rec => "Super " + rec );
    console.log("Z1: Map", superNazivi);

/*
Z2:
    20 posto popusta

    Kreirajk niz sa 20 posto popusta
    [100, 200, 300]
*/

    const brojevi = [100, 200, 300];
    const popusti = brojevi.map(broj => broj * 0.8);

    console.log("Z2: Map", popusti);

/*
Z3:
    duplirane vrednosti

    Kreirajk niz gde je svaki broj dupliran
    [1,2,3]
*/
    const brojevi2 = [1,2,3];
    const dupliraneVrednosti = brojevi2.map(broj => broj*2);
    console.log("Z3: Map", dupliraneVrednosti);

//Filter

/*
Z1:
    Veci od 10:

    kreiraj funkciju koja prima niz brojeva i vraca novi niz koji sadrzi samo brojeve vece od 10

    [5,12,18,7,9]
*/
    const brojevi3 = [5,12,18,7,9];
    const veciOd10 = brojevi3.filter(broj => broj >10); 
    console.log("Z1: Filter", veciOd10);

/*
Z2:
    Pocinje na A:

    kreiraj funkciju koja prima niz reci i vraca novi niz koji pocinju na slovo a

    ["apple","banana", "apricot","cherry"]
*/
    const reci =["apple","banana", "apricot","cherry"];
    const pocinjeNaA = reci.filter(rec=> rec[0]==='a');
    
    console.log("Z2: Filter", pocinjeNaA);

/*
Z3:
   Neparni brojevi:

    kreiraj funkciju koja prima niz brojeva i vraca novi niz koji sadryi samo neparne brojeve

    [1,2,3,4,5,6,7,8,9]
*/
    const brojevi4 = [1,2,3,4,5,6,7,8,9]
    const neparniBrojevi = brojevi4.filter(rec=>rec%2!==0);

    console.log("Z3: Filter", neparniBrojevi);
 
// Reduce


/*
Z1:
    Zbir brojeva:

    zbir brojeva u nizu

    [1,2,3,4,5]
*/
    const brojevi5 =  [1,2,3,4,5];
    const zbir = brojevi5.reduce((prethodni, trenutni) => prethodni+trenutni);
    console.log("Z1: Reduce", zbir);
/*
Z2:
    Proizvod brojeva

    proizvod brojeva u nizu

    [1,2,3,4]
*/
    const brojevi6 =  [1,2,3,4];
    const proizvod = brojevi6.reduce((prethodni, trenutni) => prethodni*trenutni);
    console.log("Z2: Reduce", proizvod);
/*
Z3:
   Konkatenacija recii:

    kreiraj funkciju koja prima niz reci i vraca recenicu sastavljenu od tih reci razvdvojene razmakom

    ["Hello", "World", "this", "is", "Javascript"]
*/

const reci2 = ["Hello", "World", "this", "is", "Javascript"];
const recenica = reci2.reduce((prethodni, trenutni) => prethodni + " " + trenutni);
console.log("Z3: Reduce", recenica);