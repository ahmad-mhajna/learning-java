const form = document.querySelector("form");
document.addEventListener("submit", onsubmit);
let dupes = [];
function onsubmit(e) {
  e.preventDefault();
  let searchinput = document.querySelector("input");
  let username = searchinput.value.split(" ").join("");
  if (!dupes.includes(username)) {
    dupes.push(username);
    getdata(username);
  }

  searchinput.value = "";
}
//
const getdata = async (username) => {
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    response = await response.json();
    if (response.message === "Not Found") throw new Error("No User Found");

    let name = response.login;
    let avatar = response.avatar_url;
    let repos = response.public_repos;
    addUser(name, avatar, repos);
  } catch (e) {
    console.error(e);
  }
};
//
const addUser = (name, avatar, repos) => {
  const container = document.querySelector(".result");
  const user = document.createElement("div");
  const username = document.createElement("h2");
  const useravatar = document.createElement("img");
  const userrepos = document.createElement("p");
  username.innerText = name;
  useravatar.src = avatar;
  userrepos.innerText = `Repositories: ${repos}`;
  user.append(username, useravatar, userrepos);
  container.append(user);
};
