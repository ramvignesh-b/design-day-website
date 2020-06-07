const blockStyle = document.querySelector("#block").style.flexWrap;

function mobile(x) {
    if (x.matches) {
        document.querySelector("#block").style.flexWrap = "wrap";
        document.querySelector("#block").style.backgroundImage = "url('/assets/img/loginic.png')";
        document.querySelector("#image").style.display = "none";
    }
    else {
        document.querySelector("#block").style.flexWrap = blockStyle;
        document.querySelector("#block").style.backgroundImage = "";
        document.querySelector("#image").style.display = "flex";
    }
}

var x = window.matchMedia("(max-width: 50em)");
mobile(x);
x.addListener(mobile);