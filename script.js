//Smooth scroll Safari
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("safari") != -1) {
  if (ua.indexOf("chrome") > -1) {
    // console.log("Chrome");
  } else {
    // console.log("Safari");
    $(document).ready(function () {
      $(".navbar a").on("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            500,
            function () {
              window.location.hash = hash;
            }
          );
        }
      });
    });
  }
}

//Language toogle event
const languageBtn = document.querySelector(".language-toogle");
languageBtn.addEventListener("click", changeLanguage);

const vietnamese = document.querySelectorAll(".vietnamese");
const english = document.querySelectorAll(".english");

function changeLanguage(e) {
  // console.log(e.target.nextElementSibling.classList.contains("active"));
  if (e.target.nextElementSibling.classList.contains("active")) {
    e.target.nextElementSibling.classList.remove("active");
    e.target.nextElementSibling.nextElementSibling.classList.add("active");
    vietnamese.forEach((element) => {
      element.style.display = "none";
    });
    english.forEach((element) => {
      element.style.display = "block";
    });
    document.title = "Fight against Covid-19";
  } else {
    e.target.nextElementSibling.classList.add("active");
    e.target.nextElementSibling.nextElementSibling.classList.remove("active");
    vietnamese.forEach((element) => {
      element.style.display = "block";
    });
    english.forEach((element) => {
      element.style.display = "none";
    });
    document.title = "Chống dịch Covid-19";
  }
}
// particlesJS statistical background animated
// particlesJS.load("particles-js", "./assets/particles.json", function () {
//   console.log("callback - particles.js config loaded");
// });
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");
// update = function () {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);

// Statistical number animated
function animateNumber(
  finalNumber,
  duration = 5000,
  startNumber = 0,
  callback
) {
  let currentNumber = startNumber;
  const interval = window.setInterval(updateNumber, 17);
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval);
    } else {
      let inc = Math.ceil(finalNumber / (duration / 17));
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber;
        clearInterval(interval);
      } else {
        currentNumber += inc;
      }
      callback(currentNumber);
    }
  }
}
function numberAnimate() {
  animateNumber(1158186, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("new-case-count").innerText = formattedNumber;
  });

  animateNumber(457948427, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("total-case-count").innerText = formattedNumber;
  });

  animateNumber(392046556, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("recovered-case-count").innerText = formattedNumber;
  });

  animateNumber(6044143, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("death-case-count").innerText = formattedNumber;
  });
}
document.addEventListener("DOMContentLoaded", function () {
  numberAnimate();
});
const statisticalNav = document.getElementById("statistical-nav");
statisticalNav.addEventListener("click", function () {
  numberAnimate();
});
