// declaring global variables
const containerChanger = document.querySelector(".container");
const hexChanger = document.querySelector(".hex");
const rgbChanger = document.querySelector(".rgb");
const colorCodeChanger = document.querySelector(".color-code");
const btnChanger = document.querySelector(".btn");

// adding eventListeners

hexChanger.addEventListener("click", () => {
  btnChanger.addEventListener("click", hexColorGen);
});

rgbChanger.addEventListener("click", () => {
  btnChanger.addEventListener("click", rgbColorGen);
});

// making functions

const hexColorGen = () => {
  let symbols = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  containerChanger.style.backgroundColor = color;
  colorCodeChanger.innerHTML = color;

  console.log(color);
  return color;
};

console.log(hexColorGen());

const rgbColorGen = () => {
  let rgbColor = "";
  let red = rbgGen();
  let green = rbgGen();
  let blue = rbgGen();
  function rbgGen() {
    for (let i = 0; i < 6; i++) {
      rgbColor = rgbColor + [Math.floor(Math.random() * 255)];
    }
    // containerChanger.style.backgroundColor = rgbColor;
    // colorCodeChanger.innerHTML = rgbColor;
  }
  console.log(rgbColor);
  return rgbColor;
};
