var sound = new Audio("https://ramvignesh.me/3AM.mp3");

function radio(event) {
    const radio = document.querySelector("#radioo");
    const radio1 = document.querySelector("#radioo1");
    radio.classList.toggle('rad-modular');
    radio1.classList.toggle('rad-modular');
    if(sound.paused === true){
        sound.play();
    }    
    else{
        sound.pause();
    }       
}

function radioStop(){
    const radio = document.querySelector("#radioo");
    const radio1 = document.querySelector("#radioo1");
    radio.classList.toggle('rad-modular');
    radio1.classList.toggle('rad-modular');
}

sound.addEventListener('ended', radioStop, false);

//const before = document.querySelector('#mood').innerHTML;

function dark(event) {
    const item = document.querySelector('body');
    item.style.background = '#101010';
    item.style.color = 'white';
    document.querySelector('svg').style.filter = 'invert(1)';
    const imgs = document.querySelectorAll('img');
    
    //document.querySelector('#mood').innerHTML = '<h3 style="font-family:'+ "'Josefin Sans'" + ', sans-serif; padding-left:10px"> Set the mood... 🎼</h3>';
    document.querySelector('#logo').src = "./assets/img/Component 1 – 1.png";

    const links = document.querySelectorAll('.sideLink');
    for(linked of links){
        linked.children[0].style.color = "#fff";
    }
}

function light(event) {
    const item = document.querySelector('body');
    item.style.background = 'transparent';
    item.style.color = 'black';
    document.querySelector('svg').style.filter = 'invert(0)';
    //ocument.querySelector('#mood').innerHTML = before;
    document.querySelector('#logo').src = "./assets/img/Component 1 – 3.png";

    const links1 = document.querySelectorAll('.sideLink');
    for(linked of links1){
        linked.children[0].style.color = "#000";
    }
}

function mobile(x) {
    const bars = document.querySelector('.mobile2').style;
    if (x.matches) {
        document.querySelector("#icon-radio").removeEventListener("mouseover", dark, false);
        const items = document.querySelectorAll('.desktop-view');
        for(item of items){
            item.style.display = 'none';
        }
        document.querySelector('#head').style.marginLeft = "10vw";
        document.querySelector('.mobile2').style.display = "none !important";
    } 
    else {
        document.querySelector("#icon-radio").addEventListener("mouseover", dark, false);
        const items = document.querySelectorAll('.desktop-view');
        for(item of items){
            item.style.display = 'block';
        }
        document.querySelector('#head').style.marginLeft = "0px";
        document.querySelector('.mobile2').style.zIndex = "-10"
    }
}

const displa = document.querySelector(".mobile-view").style.display;

function desktop(x){
    if (x.matches) {
        document.querySelector(".mobile-view").style.display = "none";
        document.querySelector("#sect").style.height = "82vh";
        const links = document.querySelectorAll('.sideLink');
        let link;
        for(link of links){
            link.style.display = 'block';
        }
        document.querySelector('#typeform1').style.width = "95vw";
        const footer = document.querySelector('footer');
        footer.style.position = "absolute";
        footer.style.bottom = "0px";
    } 
    else {
        document.querySelector(".mobile-view").style.display = displa;
        document.querySelector("#sect").style.height = "100vh";
        const links = document.querySelectorAll('.sideLink');
        let link;
        for(link of links){
            link.style.display = 'none';
        }
        document.querySelector('#typeform1').style.width = "100vw";
        const footer = document.querySelector('footer');
        footer.style.position = "relative";
    }
}

var x = window.matchMedia("(max-width: 800px)");
mobile(x);
var y = window.matchMedia("(min-width: 800px)");
desktop(y);
x.addListener(mobile);
y.addListener(desktop)

const link = document.querySelectorAll('.links');
for(linkItem of link){
    linkItem.addEventListener('mouseover', linkHover);
    linkItem.addEventListener('mouseout', linkOut);
}

function linkHover(event){
    const thisLink = event.target;
    //console.log(thisLink);
    //thisLink.style.background = "#000";
    //thisLink.style.color = "#fff";
    thisLink.classList.add('hovered');
}

function linkOut(event){
    const thisLink = event.target;
    thisLink.classList.remove('hovered');
}

