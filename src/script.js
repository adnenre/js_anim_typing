class TypeText {
  txt = "";
  loopNum = 0;
  delta = 0;
  isDeleting = false;

  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.period = parseInt(period, 10) || 2000;
  }

  rotateText() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = this.txt;

    this.delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      this.delta = 50;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      this.delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      this.delta = 500;
    }

    setTimeout(() => this.rotateText(), this.delta);
  }
}

const texts = [
  "Hi, how are you ?",
  "I m here to help you with web developement",
  "If you need help just drop me an email ",
  "here is my email adnen.rebai@gmail.com",
];

let element = document.getElementById("typewrite");
let t = new TypeText(element, texts);

t.rotateText();
