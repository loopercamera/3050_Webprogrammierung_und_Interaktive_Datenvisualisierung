//  Übung Lektion 1

// Gegeben ist ein folgendes Array:

const einkaufswagen = [
  {
    id: 1,
    name: "Die unendliche Geschichte - Buch",
    aufLager: true,
    lieferZeitTage: 1,
    menge: 3,
    preis: "12.99€",
    hersteller: {
      name: "BookSales",
      rating: 3,
    },
  },
  {
    id: 2,
    name: "The Beatles - Abbey Road CD",
    aufLager: false,
    lieferZeitTage: 4,
    menge: 1,
    preis: "14.80€",
    hersteller: {
      name: "CDSales",
      rating: 5,
    },
  },
  {
    id: 3,
    name: "Harry Potter und der Stein der Weisen - Blu-ray",
    aufLager: true,
    lieferZeitTage: 2,
    menge: 2,
    preis: "18.50€",
    hersteller: {
      name: "BookSales",
      rating: "",
    },
  },
  {
    id: 4,
    name: "Kindle Paperwhite",
    aufLager: true,
    lieferZeitTage: 1,
    menge: 1,
    preis: "119.99€",
    hersteller: {
      name: "Amazon",
      rating: 3,
    },
  },
  {
    id: 5,
    name: "Sony WH-1000XM4 Kopfhörer",
    aufLager: false,
    lieferZeitTage: 7,
    menge: 1,
    preis: "279.90€",
    hersteller: {
      name: "Sony",
      rating: 4,
    },
  },
];

// AUFGABE 1
// ---------
// - Gib die Namen aller Artikel im Einkaufswagen aus.

console.log("Gib die Namen aller Artikel im Einkaufswagen aus")
for (let i=0; i <einkaufswagen.length;i++){
  console.log(einkaufswagen[i].name)
}

// - Berechne den Gesamtbetrag des Einkaufswagens. (Hinweis: Achte auf den Datentyp der Preise!)
// (_Hinweis_: `preisString.replace("€", "")` kann in eine Zahl konvertiert werden)
console.log("-------------------------------------------------------------------")
console.log("Berechne den Gesamtbetrag des Einkaufswagens")
let summe = 0;

for (let i=0; i <einkaufswagen.length;i++){
  preis_mit_euro_zeichen = (einkaufswagen[i].preis);
  preis = preis_mit_euro_zeichen.replace("€", "");
  preis = parseFloat(preis);
  menge = (einkaufswagen[i].menge);
  menge = parseFloat(menge);
  preis = menge * preis;
  summe = (preis  + summe);
}

console.log(summe)


// AUFGABE 2
// ---------
// - Finde alle Artikel, die auf Lager (`aufLager: true`) sind.
console.log("-------------------------------------------------------------------")
console.log("Finde alle Artikel, die auf Lager (`aufLager: true`) sind.")
for (let i=0; i <einkaufswagen.length;i++){

  if (einkaufswagen[i].aufLager == true) {
    console.log(einkaufswagen[i].name)
  }
 }


// - Zeige die Artikel an, die länger als 3 Tage Lieferzeit benötigen.

console.log("-------------------------------------------------------------------")
console.log("Zeige die Artikel an, die länger als 3 Tage Lieferzeit benötigen.")
for (let i=0; i <einkaufswagen.length;i++){

  if (einkaufswagen[i].lieferZeitTage > 3 == true) {
    console.log(einkaufswagen[i].name)
  }
 }


// AUFGABE 3
// ---------
// - Erstelle eine Liste aller Hersteller-Namen aus dem Einkaufswagen.
console.log("-------------------------------------------------------------------")
console.log("Erstelle eine Liste aller Hersteller-Namen aus dem Einkaufswagen")

let liste_hersteller_name = [];

for (let i=0; i <einkaufswagen.length;i++){
  liste_hersteller_name.push(einkaufswagen[i].hersteller.name);
}
console.log("Liste:" , liste_hersteller_name)

// - Finde alle Artikel von dem Hersteller "BookSales".

console.log("-------------------------------------------------------------------")
console.log("Finde alle Artikel von dem Hersteller 'BookSales'")

let liste_produkte_BookSales = [];

for (let i=0; i <einkaufswagen.length;i++){

  if (einkaufswagen[i].hersteller.name == "BookSales") {
    liste_produkte_BookSales.push(einkaufswagen[i].name);
  }
 }

 console.log("Liste aller Produkte von BoockSales",liste_produkte_BookSales)
// - Bonus: verwende Objekt-Zerlegung (Destructuring)

// AUFGABE 4
// ---------
// - Verwende die `map` Methode, um einen neuen Array zu erstellen, der nur die Namen und Preise der Artikel enthält.
console.log("-------------------------------------------------------------------")
console.log("Verwende die `map` Methode, um einen neuen Array zu erstellen,")
console.log("der nur die Namen und Preise der Artikel enthält.")

const map_einkauswagen = einkaufswagen.map((elem) =>({
  name: elem.name,
  preis: elem.preis,
}));
console.log(map_einkauswagen);

// - Verwende die `filter` Methode, um alle Artikel herauszufiltern, die mehr als 100€ kosten.
console.log("-------------------------------------------------------------------")
console.log("Verwende die `filter` Methode, um alle Artikel herauszufiltern, die mehr als 100€ kosten.")
const filter_einkauswagen = einkaufswagen.filter((elem) => {
  const filter_preis = Number(elem.preis.replace("€", ""));
  return filter_preis > 100;
});
console.log(filter_einkauswagen);

// - Erstelle eine Funktion, die den durchschnittlichen Preis der Artikel im Einkaufswagen berechnet (For-Schleife).
console.log("-------------------------------------------------------------------")
console.log("Erstelle eine Funktion, die den durchschnittlichen Preis der")
console.log("Artikel im Einkaufswagen berechnet (For-Schleife).")

total = 0
summe_produkte = 0
for (let i=0; i <einkaufswagen.length;i++){
  
  preis_mit_euro_zeichen = (einkaufswagen[i].preis);
  preis = Number(einkaufswagen[i].preis.replace("€", ""))
  summe_produkte = summe_produkte + preis
  anzahl_produkte = i + 1
}
total = summe_produkte / anzahl_produkte

console.log(total)
