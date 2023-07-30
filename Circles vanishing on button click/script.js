const bodyEl = document.querySelector("body");
let nOfCircles = getRandomNumber(10, 80);
for (let i = 0; i < nOfCircles; i++) {
  let circles = document.createElement("span");
  circles.style.backgroundColor = getRandomColor();
  let size = getRandomSize();
  circles.style.height = size + "px";
  circles.style.width = size + "px";
  let { x, y } = getRandomPosition(size);
  circles.style.top = y + "px";
  circles.style.left = x + "px";
  bodyEl.appendChild(circles);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + min));
}
function getRandomSize() {
  return getRandomNumber(10, 100);
}
function getRandomPosition(size) {
  const x = getRandomNumber(0, window.innerWidth - size);
  const y = getRandomNumber(0, window.innerHeight - size);

  return { x, y };
}
function getRandomColor() {
  let red = getRandomNumber(0, 255);
  let green = getRandomNumber(0, 255);
  let blue = getRandomNumber(0, 255);
  return `rgb(${red},${green},${blue})`;
}
const btnEL = document.querySelector("button");
btnEL.addEventListener("click", () => {
  let circle = document.querySelectorAll("span");
  // console.log(circle);
  let length = circle.length;
  if (length != 0) {
    for (let j = 0; j < length; j++) {
      // circle[j].classList.add(".animate");
      circle[j].remove();
    }
  }
  let nOfCircles = getRandomNumber(10, 80);
  for (let i = 0; i < nOfCircles; i++) {
    let circles = document.createElement("span");
    circles.style.backgroundColor = getRandomColor();
    let size = getRandomSize();
    circles.style.height = size + "px";
    circles.style.width = size + "px";
    let { x, y } = getRandomPosition(size);
    circles.style.top = y + "px";
    circles.style.left = x + "px";
    bodyEl.appendChild(circles);
  }
});
