const text = document.querySelector("h1");
const getJoke = async () => {
  try {
    let response = await fetch("https://api.jokes.one/jod");
    response = await response.json();
    text.innerText = response.contents.jokes[0].joke.text;
  } catch (e) {
    console.error(e);
  }
};
document.querySelector("button").addEventListener("click", getJoke);
