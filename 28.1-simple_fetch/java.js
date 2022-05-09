const text = document.querySelector("h1");
const getJoke = () => {
  fetch("https://api.jokes.one/jod")
    .then((response) => response.json())
    .then((data) => (text.innerText = data.contents.jokes[0].joke.text))
    .catch((err) => ((text.innerText = "try again"), console.log(err)));
};
document.querySelector("button").addEventListener("click", getJoke);
