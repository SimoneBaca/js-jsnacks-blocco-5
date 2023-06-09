/*Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. (modificato)*/
//aggiungo levarietà di zucchine
const zucchine = [
    {
      varieta: "Romanesca",
      peso: 3,
      lunghezza: 20
    },
    {
      varieta: "Napoletana",
      peso: 2,
      lunghezza: 15
    },
    {
      varieta: "Fiorentina",
      peso: 4,
      lunghezza: 18
    },
    {
      varieta: "Tonda",
      peso: 1,
      lunghezza: 22
    },
    {
      varieta: "Trombetta",
      peso: 1.5,
      lunghezza: 12
    },
    {
      varieta: "Gialla",
      peso: 5,
      lunghezza: 7
    },
    {
      varieta: "Friulana",
      peso: 6,
      lunghezza: 14
    },
    {
      varieta: "Rugosa",
      peso: 2.5,
      lunghezza: 10
    },
    {
      varieta: "Arancione",
      peso: 1.5,
      lunghezza: 15
    },
    {
      varieta: "Piemontese",
      peso: 3.5,
      lunghezza: 19
    }
  ];
  //calcolo il peso totale di tutte le zucchine (should be 30 kg)
  let somma = 0;
zucchine.forEach(zucchina => somma += zucchina.peso);
console.log(`Il peso totale delle zucchine è di ${somma.toFixed(2)}kg`);
