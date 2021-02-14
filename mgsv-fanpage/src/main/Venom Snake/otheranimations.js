const quiet = document.getElementsByClassName("quiet");
const buddies_1 = document.getElementsByClassName("b-info-container-1");
const buddies_2 = document.getElementsByClassName("b-info-container-2");
const about_text = document.getElementsByClassName("about-content");
const vs_skills = document.getElementsByClassName("skills-container");

moveElemWhenInView(quiet);
moveElemWhenInView(buddies_1);
moveElemWhenInView(buddies_2);
moveElemWhenInView(about_text);
moveElemWhenInView(vs_skills);

function moveElemWhenInView(element) {
  var windowHeight = window.innerHeight;
  window.addEventListener("scroll", () => {
    for (var x = 0; x < element.length; x++) {
      var elem = element[x];
      var position = element[x].getBoundingClientRect().top;
      if (position - windowHeight <= 0) {
        elem.style.transition = "all 1s";
        elem.style.opacity = "1";
        elem.style.transform = "translate(0, 0)";
      } else if (position - windowHeight > 0) {
        elem.style.transition = "all 1s";
        if (element != buddies_1 && element != vs_skills) {
          elem.style.opacity = "0";
          elem.style.transform = "translate(100px, 0)";
        } else {
          elem.style.opacity = "0";
          elem.style.transform = "translate(-100px, 0)";
        }
      }
    }
  });
}
