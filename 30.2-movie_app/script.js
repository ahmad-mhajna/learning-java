const form = document.querySelector("form");
document.addEventListener("submit", onsubmit);
let dupes = [];
function onsubmit(e) {
  e.preventDefault();
  let searchinput = document.querySelector("input");
  let movieName = searchinput.value.split(" ").join("+");
  if (!dupes.includes(movieName)) {
    dupes.push(movieName);
    getdata(movieName);
  }

  searchinput.value = "";
}
//
const getdata = async (movieName) => {
  try {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=b92ae137&" + `t=${movieName}`
    );
    response = await response.json();
    addmovie(response);
    if (response.message === "Not Found") throw new Error("No User Found");
  } catch (e) {
    console.error(e);
  }
};
//
const addmovie = (movieinfo) => {
  const container = document.querySelector(".result");
  container.innerText = "";
  const movieCard = document.createElement("div");
  let MoviePoster = movieinfo.Poster;
  const posterIMG = document.createElement("img");
  posterIMG.src = MoviePoster;
  movieCard.append(posterIMG);
  const movieKeys = ["Title", "Genre", "Year", "Plot", "Director", "Actors"];
  for (let i = 0; i < 6; i++) {
    let p = document.createElement("p");
    p.innerText = movieinfo[movieKeys[i]];
    movieCard.append(p);
  }

  let Ratings = movieinfo.Ratings;
  Ratings.forEach((rating) => {
    let p = document.createElement("p");
    p.innerText = ` Ratings:${rating.Source}: ${rating.Value} `;
    movieCard.append(p);
  });

  container.append(movieCard);
};
