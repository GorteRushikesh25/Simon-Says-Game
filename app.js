let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let highLevel = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}


function checkAns(idx) {
    // console.log("curr level ",level)

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if (level > highLevel) {
            highLevel = level;
        }
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b>. And highest Score is </b>${highLevel} </b> .Press Any key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
        highScore();
    }
}
function btnPress() {
    console.log(this);
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);

    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0; 
}

