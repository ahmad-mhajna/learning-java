const peopleArr = [];
const getfirstTen = async () => {
  for (let i = 1; i <= 10; i++) {
    const person = await axios.get("https://swapi.dev/api/people/" + i);
    console.log(person);
    const planet = await axios.get(person.data.homeworld);
    console.log(planet);
    const personObj = {
      name: person.data.name,
      height: person.data.height,
      hairColor: person.data.hair_color,
      homeWorld: planet.data.name,
      homeWorldPop: planet.data.population,
    };
    makeCard(personObj);
    peopleArr.push(personObj);
  }
};
getfirstTen();
const makeCard = (person) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const nameText = document.createElement("p");
  nameText.innerText = `Name : ${person.name}`;
  cardDiv.append(nameText);
  const heightText = document.createElement("p");
  heightText.innerText = `Height : ${person.height}cm`;
  const hairColorText = document.createElement("p");
  hairColorText.innerText = `Hair color : ${person.hairColor}`;
  const homeWorldText = document.createElement("p");
  homeWorldText.innerText = `Home world : ${person.homeWorld}`;
  const homeWorldPop = document.createElement("p");
  homeWorldPop.innerText = `Home world population : ${person.homeWorldPop}`;
  cardDiv.append(
    nameText,
    heightText,
    hairColorText,
    homeWorldText,
    homeWorldPop
  );
  document.querySelector(".card-container").append(cardDiv);
};
