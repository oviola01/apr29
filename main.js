import Szemely from "./Szemely.js"

$(function() {
    console.log("helló!");
    const szuloElem = $(".tarolo");
    //példányosítás
    const szemely1 = new Szemely("Béla",1983,szuloElem);
    const szemely2 = new Szemely("Lilla",1999,szuloElem);
    console.log(szemely1);
    console.log(szemely2);

    szemely1.nev = "Kálmán";
    szemely1.masikNev = "Géza";
    //futásidőben változtathatók a példányok
}
)