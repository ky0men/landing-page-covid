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
// Animated toggle navbar
var hamburgerBTN = document.querySelector(".navbar-toggler-icon");

hamburgerBTN.addEventListener("click", function () {
  hamburgerBTN.classList.toggle("rotate");
});

//Language toogle event
const languageBtn = document.querySelector(".global-icon");
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
particlesJS.load("particles-js", "./assets/particles.json", function () {
  // console.log("callback - particles.js config loaded");
});

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
