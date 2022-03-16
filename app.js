let root = document.getElementById("root");
let btn = document.getElementById("btn-change");
let output = document.getElementById("output");
let cp = document.getElementById("cp");

window.onload = () => {
  main();
};

function main() {
  btn.addEventListener("click", () => {
    const bgColor = changeBg();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  cp.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);
  });
}

function changeBg() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
