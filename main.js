import "./style.css";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import "waypoints/lib/noframework.waypoints";

const typed = new Typed("#element", {
  strings: ["Food ...", "Drink ..."],
  typeSpeed: 60,
  loop: true,
  backDelay: 1000,
  backSpeed: 50,
});

let toDown = {
  distance: "50px",
  origin: "top",
  interval: 300,
  duration: 800,
};
ScrollReveal().reveal(".to-down", toDown);

let toRight = {
  distance: "50px",
  origin: "left",
  interval: 300,
  duration: 2000,
};
ScrollReveal().reveal(".toRight", toRight);

let toLeft = {
  distance: "50px",
  origin: "right",
  interval: 300,
  duration: 800,
};
ScrollReveal().reveal(".toLeft", toLeft);

const home = document.querySelector("#home");
const tabs = document.querySelectorAll(".link");

window.addEventListener("scroll", () => {
  if (window.scrollY < 100) {
    tabs.forEach((i) => {
      if (i.getAttribute("href") === "#home") {
        i.classList.add("currentActive");
      } else {
        i.classList.remove("currentActive");
      }
    });
    return;
  } else {
    return;
  }
});

tabs.forEach((i) => {
  const href = i.getAttribute("href");
  const formattedHref = href.substring(1, i.getAttribute("href").length);
  const ele = document.getElementById(formattedHref);
  new Waypoint({
    element: ele,
    handler: function () {
      tabs.forEach((i) => i.classList.remove("currentActive"));
      i.classList.add("currentActive");
    },
    continuous: false,
  });
});

// tabs[0].classList.add("currentActive");
