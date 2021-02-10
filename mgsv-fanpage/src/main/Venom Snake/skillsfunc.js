const combatLevel = document.getElementsByClassName("combat-level");
const rdLevel = document.getElementsByClassName("rd-level");
const bdLevel = document.getElementsByClassName("bd-level");
const supportLevel = document.getElementsByClassName("support-level");
const intelLevel = document.getElementsByClassName("intel-level");
const medicalLevel = document.getElementsByClassName("medical-level");

const qCombatLevel = document.getElementsByClassName("q-combat-level");
const qrdLevel = document.getElementsByClassName("q-rd-level");
const qbdLevel = document.getElementsByClassName("q-bd-level");
const qSupportLevel = document.getElementsByClassName("q-support-level");
const qIntelLevel = document.getElementsByClassName("q-intel-level");
const qMedicalLevel = document.getElementsByClassName("q-medical-level");

vsStatsIntoView(combatLevel);
vsStatsIntoView(rdLevel);
vsStatsIntoView(bdLevel);
vsStatsIntoView(supportLevel);
vsStatsIntoView(intelLevel);
vsStatsIntoView(medicalLevel);

qStatsIntoView(qCombatLevel);
qStatsIntoView(qrdLevel);
qStatsIntoView(qbdLevel);
qStatsIntoView(qSupportLevel);
qStatsIntoView(qIntelLevel);
qStatsIntoView(qMedicalLevel);

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

function qStatsIntoView(element) {
  var windowHeight = window.innerHeight;
  window.addEventListener("scroll", () => {
    for (var x = 0; x < element.length; x++) {
      var elem = element[x];
      var position = element[x].getBoundingClientRect().top;
      if (position - windowHeight <= 0) {
        elem.style.transition = "all 2s";
        switch (elem) {
          case document.getElementsByClassName("q-combat-level")[0]:
          case document.getElementsByClassName("q-intel-level")[0]:
            elem.style.width = "70%";
            break;
          case document.getElementsByClassName("q-rd-level")[0]:
          case document.getElementsByClassName("q-medical-level")[0]:
            elem.style.width = "20%";
            break;
          case document.getElementsByClassName("q-bd-level")[0]:
            elem.style.width = "10%";
            break;
          case document.getElementsByClassName("q-support-level")[0]:
            elem.style.width = "30%";
            break;
          default:
            alert("something went wrong");
            break;
        }
      } else if (position - windowHeight > 0) {
        elem.style.transition = "all 2s";
        switch (elem) {
          case document.getElementsByClassName("q-combat-level")[0]:
          case document.getElementsByClassName("q-intel-level")[0]:
          case document.getElementsByClassName("q-rd-level")[0]:
          case document.getElementsByClassName("q-medical-level")[0]:
          case document.getElementsByClassName("q-bd-level")[0]:
          case document.getElementsByClassName("q-support-level")[0]:
            elem.style.width = "5%";
            break;
          default:
            alert("something went wrong");
            break;
        }
      }
    }
  });
}
