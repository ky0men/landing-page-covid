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
