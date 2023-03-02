const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const image = document.getElementById("img");
const inputText = document.getElementById("input");
const btn = document.getElementById("submit");

btn.addEventListener("click", function () {
  if (inputText.value) {
    image.src = url + inputText.value;
    image.style.display = "block";
  } else {
    alert("Type Something");
  }
});
