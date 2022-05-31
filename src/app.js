import TypeText from "./script.js";

const texts = [
  "Hi, how are you ?",
  "I m here to help you with web developement",
  "If you need help just drop me an email ",
  "here is my email adnen.rebai@gmail.com",
];

let element = document.getElementById("typewrite");
let t = new TypeText(element, texts);

t.rotateText();
