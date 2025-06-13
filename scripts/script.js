const bg = document.querySelector(".main-section");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const values = "0123456789ABCDEF";
let colorCode = document.querySelector(".color-code");
let color1 = "#f8f9fa";
let color2 = "#e9ecef";
btn1.innerText = color1;
btn2.innerText = color2;
colorCode.innerText = `background-image: linear-gradient(to right, ${color1}, ${color2}`;

const handlebtn = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random() * 16)];
  }
  return color;
};

const handlebtn1 = () => {
  color1 = handlebtn();
  btn1.innerText = color1;
  bg.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2}`;
  colorCode.innerText = `background-image: linear-gradient(to right, ${color1}, ${color2}`;
  // console.log(color);
};

const handlebtn2 = () => {
  color2 = handlebtn();
  btn2.innerText = color2;
  bg.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  colorCode.innerText = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
  // console.log(color);
};

btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);
colorCode.addEventListener("click", () => {
  navigator.clipboard.writeText(colorCode.innerText);
  showAlert("Gradient code copied to clipboard!");
});

function showAlert(message) {
  document.getElementById("alert-message").innerText = message;
  document.getElementById("custom-alert").classList.remove("hidden");
}

function closeAlert() {
  document.getElementById("custom-alert").classList.add("hidden");
}
