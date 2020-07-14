const cover = document.getElementById("cover");
const aboutButton = document.getElementById("about-btn");

onload = moveCover;
aboutButton.addEventListener("mouseover", buttonAnimation1);
aboutButton.addEventListener("mouseout", buttonAnimation2);

//This is going to be useful later on.
//skillLevel.scrollIntoView({behavior: 'smooth', block: 'center'});

function moveCover () {
    cover.style.transition = "all 2s 2s";
    cover.style.transform = "translate(-100%, 0)";
}

function buttonAnimation1 () {
    aboutButton.style.transition = "all 0.5s";
    aboutButton.style.color = "#26262a";
    aboutButton.style.backgroundColor = "#dc626a";
}

function buttonAnimation2 () {
    aboutButton.style.transition = "all 0.5s";
    aboutButton.style.color = "#dc626a";
    aboutButton.style.backgroundColor = "transparent";
}
