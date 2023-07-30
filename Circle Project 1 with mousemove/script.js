const spanEl = document.querySelector("span");
let color = getRandomColor();
document.addEventListener("mousemove", (e) => {
  spanEl.style.left = e.clientX - 37.5 + "px";
  spanEl.style.top = e.clientY - 37.5 + "px";
  spanEl.style.backgroundColor = color;
});
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + min));
}
function getRandomSize() {
  return getRandomNumber(30, 80);
}
function getRandomColor() {
  let red = getRandomNumber(0, 255);
  let green = getRandomNumber(0, 255);
  let blue = getRandomNumber(0, 255);
  return `rgb(${red},${green},${blue})`;
}
let bodyEl = document.querySelector("body");
bodyEl.addEventListener("click", (e) => {
  let circle = document.createElement("span");
  //   color = getRandomColor();
  circle.style.backgroundColor = color;
  let size = getRandomSize();
  circle.style.height = size + "px";
  circle.style.width = size + "px";
  circle.style.top = e.clientY - size / 2 + "px";
  circle.style.left = e.clientX - size / 2 + "px";
  bodyEl.appendChild(circle);
  color = getRandomColor();
});
