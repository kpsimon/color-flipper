let simple_btn = document.getElementById("btn-simple");
let hex_btn = document.getElementById("btn-hex");
let change_color_btn = document.getElementById("change-color");
let display_color_text = document.getElementById("color-val");
let background = document.getElementById("main-bkg");

let mode = true;
let default_colors = [
  "Red",
  "Aqua",
  "Blue",
  "Chartreuse",
  "Coral",
  "DarkGreen",
  "Bisque",
  "Gold",
  "Indigo",
  "Magenta",
  "Orange",
  "Peru",
  "Silver",
  "Turquoise",
];

const updatePage = (color) => {
  background.style.background = color;
  display_color_text.innerText = color;
};

simple_btn.addEventListener("click", () => {
  simple_btn.style.fontSize = "1.3em";
  hex_btn.style.fontSize = "1.1em";
  simple_btn.style.color = "var(--theme-color-blue)";
  hex_btn.style.color = "black";
  mode = true;
});

hex_btn.addEventListener("click", () => {
  simple_btn.style.fontSize = "1.1em";
  hex_btn.style.fontSize = "1.3em";
  simple_btn.style.color = "black";
  hex_btn.style.color = "var(--theme-color-blue)";
  mode = false;
});

change_color_btn.addEventListener("click", () => {
  if (mode) {
    let random_number = Math.floor(Math.random() * default_colors.length);
    while (default_colors[random_number] === display_color_text.innerText) {
      random_number = Math.floor(Math.random() * default_colors.length);
    }
    updatePage(default_colors[random_number]);
  } else {
    let random_color =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).toUpperCase();
    updatePage(random_color);
  }
});
