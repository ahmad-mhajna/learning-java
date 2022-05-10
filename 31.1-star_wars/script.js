const form = document.querySelector("form");
document.addEventListener("submit", onsubmit);
let dupes = [];
function onsubmit(e) {
  e.preventDefault();
  let searchinput = document.querySelector("input");
  let chrName = searchinput.value.split(" ").join("");
  if (!dupes.includes(chrName)) {
    dupes.push(chrName);
    getdata(chrName);
  }

  searchinput.value = "";
}
//
const getdata = async (chrName) => {
  try {
    let response = await fetch(`https://swapi.dev/api/people/${chrName}`);
    response = await response.json();
    if (response.message === "Not Found") throw new Error("No User Found");

    const chrInfo = {
      name: response.data.name,
      height: response.data.height,
      hairColor: response.data.hair_color,
      homeWorld: {
        name: response.data.planet.name,
      },
    };
    addchar(chrInfo);
  } catch (e) {
    console.error(e);
  }
};
//
const addchar = (chrInfo) => {
  console.log(chrInfo);
  const container = document.querySelector(".result");
  const user = document.createElement("div");
  user.append();
  container.append(user);
};
