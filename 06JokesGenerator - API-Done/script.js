// https://icanhazdadjoke.com/api

const jokeBtn = document.querySelector("#jokeBtn");
const jokePara = document.querySelector("#joke");

jokeBtn.addEventListener("click", getJoke);

async function getJoke() {
  let url = "https://icanhazdadjoke.com/";

  let response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  let dataResponse = await response.json();
  //   console.log(dataResponse.joke);

  jokePara.innerText = dataResponse.joke;
}
