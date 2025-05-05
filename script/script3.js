const groenten = [
  {
    id: 1,
    naam: "prei",
    prijs: 2.1,
  },
  {
    id: 1,
    naam: "brocoli",
    prijs: 1.5,
  },
  {
    id: 1,
    naam: "tomaat",
    prijs: 3.4,
  },
  {
    id: 1,
    naam: "erwten",
    prijs: 0.7,
  },
];

// html elementen ophalen
const lijst = document.querySelector("#lijst")


// groenten in een lijst zetten
groenten.forEach(groente => {
  const nieuweGroente = document.createElement("p")
  nieuweGroente.innerHTML = groente.naam
  lijst.appendChild(nieuweGroente)
});