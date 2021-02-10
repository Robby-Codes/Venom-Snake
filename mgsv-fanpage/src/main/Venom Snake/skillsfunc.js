const combatLevel = document.getElementsByClassName("combat-level");
const rdLevel = document.getElementsByClassName("rd-level");
const bdLevel = document.getElementsByClassName("bd-level");
const supportLevel = document.getElementsByClassName("support-level");
const intelLevel = document.getElementsByClassName("intel-level");
const medicalLevel = document.getElementsByClassName("medical-level");

vsStatsIntoView(combatLevel);
vsStatsIntoView(rdLevel);
vsStatsIntoView(bdLevel);
vsStatsIntoView(supportLevel);
vsStatsIntoView(intelLevel);
vsStatsIntoView(medicalLevel);

function vsStatsIntoView(element) {
  var windowHeight = window.innerHeight;
  window.addEventListener("scroll", () => {
    for (var x = 0; x < element.length; x++) {
      var elem = element[x];
      var position = element[x].getBoundingClientRect().top;
      if (position - windowHeight <= 0) {
        elem.style.transition = "all 2s";
        elem.style.width = "70%";
      } else if (position - windowHeight > 0) {
        elem.style.transition = "all 2s";
        elem.style.width = "5%";
      }
    }
  });
}
