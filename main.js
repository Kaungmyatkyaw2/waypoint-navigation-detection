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

// waypoints
// new Waypoint({
//   element: document.getElementById("about"),
//   handler: function (direction) {
//     // let old = document.querySelector("currentActive");
//     // old.classList.remove("currentActive");
//     let current = document.querySelector(`[href="#about"]`);
//     if (direction === "down") {
//       current.classList.add("currentActive");
//     } else {
//       current.classList.remove("currentActive");
//     }
//   },
//   offset: "25%",
// });

// new Waypoint({
//   element: document.getElementById("home"),
//   handler: function (direction) {
//     // let old = document.querySelector("currentActive");
//     // old.classList.remove("currentActive");
//     let current = document.querySelector(`[href="#home"]`);
//     if (direction === "down") {
//       current.classList.add("currentActive");
//     }
//   },
//   offset: "50%",
// });

// let sections = document.querySelectorAll("section");
// let navlinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.screenY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navlinks.forEach((links) => {
//         links.classList.remove("currentActive");
//         document
//           .querySelectorAll(`header nav a [href* = '+ ${id} + ']`)
//           .classList.add("currentActive");
//       });
//     }
//   });
// };

let activepage = window.location.href;

const navlinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activepage}`)) {
    // console.log(`${activepage}`);
    link.classList.add("currentActive");
  }
});
