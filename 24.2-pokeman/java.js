const Pikachu = new Pokemon("Pikachu", "Lightning", [
  "Thunderbolt",
  "Slam",
  "Wild Charge",
]);
const Charmander = new Pokemon("Charmander", "Fire", [
  "Fireball",
  "Fire Tail",
  "Fire Breath",
]);
const Squirtle = new Pokemon("Squirtle", "Water", [
  "Water Gun",
  "Rain Dance",
  "Tail Whip",
]);

function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
  this.callPokemon = function () {
    console.log(`I Choose You ${this.name}`);
  };
  this.attack = function (attackNumber) {
    console.log(`${this.name} used ${this.attackList[attackNumber]}`);
  };
}
Pikachu.callPokemon();
Pikachu.attack(0);
Charmander.callPokemon();
Charmander.attack(0);
Squirtle.callPokemon();
Squirtle.attack(0);
