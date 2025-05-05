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
const kostprijs = document.querySelector("#kostprijs")

// html elementen aanmaken
const lijstGroenten = document.createElement("select")

// groenten in een lijst zetten
groenten.forEach(groente => {
  const nieuweGroente = document.createElement("option")
  nieuweGroente.innerHTML = groente.naam
  nieuweGroente.value = groente.prijs
  lijstGroenten.appendChild(nieuweGroente)
});

// prijzen in een lijst zetten
lijst.appendChild(lijstGroenten)

lijstGroenten.addEventListener("change", () => {
      const prijsgroente = document.createElement("p")
      prijsgroente.innerHTML = lijstGroenten.value
      kostprijs.appendChild(prijsgroente)
})