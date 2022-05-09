const text = document.querySelector("h1");
const getJoke = async () => {
  try {
    const response = await fetch("https://api.jokes.one/jod").json();
    text.innerText = response.contents.jokes[0].joke.text;
  } catch (e) {
    console.error(e);
  }
};
document.querySelector("button").addEventListener("click", getJoke);
