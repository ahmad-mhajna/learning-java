let mycountry = {
  country: "israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: "9.217",
  isIsland: false,
  neighbours: [`Egypt`, `Jordan`, `Lebanon`, `Syria`],
  describe() {
    console.log(`‘${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they
      have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}’`);
  },
  checkIsland() {
    this.neighbours.length > 0
      ? (this.isIsland = false)
      : (this.isIsland = true);
    console.log(this.isIsland);
  },
};
console.log(mycountry.describe());
console.log(mycountry.checkIsland());
