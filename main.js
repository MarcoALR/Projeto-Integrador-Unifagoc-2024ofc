const mario = document.querySelector(".mario-gif");
const pipe = document.querySelector(".pipe-img");
const cloud = document.querySelector(".cloud");
const buttonRestart = document.querySelector("#reload");

const p = document.querySelector("#score");

const jumpMario = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
    canScore = true;
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudPosition = cloud.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  console.log(marioPosition);
  if (pipePosition <= 61 && pipePosition > 0 && marioPosition < 85) {
    cloud.style.animation = `none`;
    cloud.style.left = `${cloudPosition}px`;

    pipe.style.animation = `none`;
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = `none`;
    mario.style.bottom = `${marioPosition}px`;

    mario.src = `gamer-over.png`;
    mario.style.width = `5.5rem`;
    mario.style.marginLeft = `2rem`;

    buttonRestart.style.display = `flex`;
    buttonRestart.style.background = `none`;
    buttonRestart.addEventListener("click", () => {
      location.reload();
    });
    clearInterval(loop, score);
  }
}, 25);

let counter = 0;
let canScore = true;
const score = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  if (pipePosition <= 0 && canScore) {
    ++counter;
    p.innerText = `${counter}`;
    canScore = false;
    console.log(pipePosition);
  }
}, 100);

document.addEventListener("keydown", jumpMario);
document.addEventListener("touchstart", jumpMario);
