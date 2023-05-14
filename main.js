import "./style.css";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";

const typed = new Typed("#element", {
  strings: ["Food ...", "Drink ..."],
  typeSpeed: 60,
  loop: true,
  backDelay: 1000,
  backSpeed: 50,
});

var slideUp = {
  distance: "50px",
  origin: "top",
  interval: 500,
  duration: 1000,
};

ScrollReveal().reveal(".to-down", slideUp);
