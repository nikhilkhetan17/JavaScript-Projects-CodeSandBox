// document.getElementById("demo").innerHTML = bin2dec(10001);

// function bin2dec(bin) {
//   return parseInt(bin, 2).toString(10);
// }

let btn = document.querySelector(".btn");
// console.log(btn);

btn.addEventListener("click", function () {
  let inputText = document.querySelector(".row #binary").value;

  document.querySelector(".result").innerText = parseInt(inputText, 2).toString(
    10
  );
});
