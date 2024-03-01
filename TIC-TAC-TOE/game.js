let boxex = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let turnX = true;
let msgContainer = document.querySelector(".msgContainer");
let newGame = document.querySelector(".newGame");
let para = document.querySelector("p");
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnX = true;
  enableBttn();
  msgContainer.classList.add("hide");
  count = 0;
};
const disabledBttn = () => {
  for (let i of boxex) {
    i.disabled = true;
  }
};
const enableBttn = () => {
  for (let i of boxex) {
    i.disabled = false;
    i.innerText = "";
  }
};

let postMsg = (pos1) => {
  para.innerText = "Congratulation Winner is " + pos1;
  msgContainer.classList.remove("hide");
  disabledBttn();
};
const showMessage = () => {
  para.innerText = "Tie, No Winner ";
  msgContainer.classList.remove("hide");
  disabledBttn();
};
let count = 0;
boxex.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    console.log(count);
    if (count == 9) {
      showMessage();
    }
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
let checkWinner = () => {
  for (pattern of winPattern) {
    // console.log(pattern[0], parent[1], parent[2]);
    // console.log(boxex[pattern[0]], boxex[pattern[1]], boxex[pattern[2]]);
    let pos1 = boxex[pattern[0]].innerText;
    let pos2 = boxex[pattern[1]].innerText;
    let pos3 = boxex[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        postMsg(pos1);
      }
    }
  }
};
reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
