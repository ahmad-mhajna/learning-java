let trplayer1 = document.querySelector("#player1-race");
let trplayer2 = document.querySelector("#player2-race");
let finish = document.querySelector(".finish");
let gameover = false;
let counterP1 = 0;
let counterP2 = 0;
let btn = document.querySelector("button");
addEventListener("keyup", (evt) => {
  let event = String.fromCharCode(evt.keyCode).toLowerCase();
  if (gameover === true) return;
  else if (event === "d") {
    if ([...trplayer1.children[counterP1].classList].includes("finish")) {
      gameover = true;
      btn.style.display = "inline-block";
      alert("Player 1 Wins!");
    } else {
      trplayer1.children[counterP1].classList.remove("active");
      counterP1++;
      trplayer1.children[counterP1].classList.add("active");
    }
  } else if (event === "'") {
    if ([...trplayer2.children[counterP2].classList].includes("finish")) {
      gameover = true;
      btn.style.display = "inline-block";
      alert("Player 2 Wins!");
    } else {
      trplayer2.children[counterP2].classList.remove("active");
      counterP2++;
      trplayer2.children[counterP2].classList.add("active");
    }
  }
});
btn.addEventListener("click", () => {
  document.location.reload();
});
