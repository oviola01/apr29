class Szemely {
    #szulNev
    constructor(nev, szulDatum, szuloElem) {
        //publikus adattagok
        this.nev = nev;
        this.szulDatum = szulDatum;
        this.#szulNev = nev;
        this.setSzulNev(nev);
        //megjelenítés a html oldalon
        szuloElem.append(`
            <div class="szemely">
                <h3>${this.nev}</h3>
                <p>${this.kor()}</p>
            </div>
        `);
        //csak az utolsó html elem megjelenítése
        this.szemelyElem=$(".szemely:last-child");
        console.log(this.szemelyElem);
        //kiválasztott objektum megjelenítése
        this.szemelyElem.on("click",function(){
            console.log(this);
        })
        //aktuális objektum megjelenítése, hatókör az, amiben van
        this.szemelyElem.on("click",()=>{
            console.log(this);
        })
    }

    //privát adattagok elérése
    getSzulNev(){
        return this.#szulNev;
    }

    //ellenőrzötten beállítható ellenőrzés
    setSzulNev(ertek){
        this.#szulNev = ertek;
    }

    kor() {
        //aktuális dátum
        const d = new Date();
        //csak az év
        let year = d.getFullYear();
        return year-this.szulDatum;
    }
}

export default Szemely;

