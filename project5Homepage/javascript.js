//DOM selections of main components in the website
let travel = document.querySelector(".travel");
let about = document.querySelector(".about");
let game = document.querySelector(".game");
let website1 = document.querySelector(".website1");
let website2 = document.querySelector(".website2");
let website3 = document.querySelector(".website3");

//functions to call animations plane launches to different planet
function goPlanet1() {
    document.querySelector(".plane").style.animation="launchPlanet1 1200ms";     
}
function goPlanet2() {
    document.querySelector(".plane").style.animation = "launchPlanet2 1200ms";
}
function goPlanet3() {
    document.querySelector(".plane").style.animation = "launchPlanet3 1200ms";
}

//main clicking response waiting center from main Homepage
about.addEventListener('click', goPlanet1);
travel.addEventListener('click', goPlanet2);
game.addEventListener('click', goPlanet3); 
// website1.addEventListener('click', movePlane); 
// website2.addEventListener('click', movePlane); 
// website3.addEventListener('click', movePlane); 

//window reload the browser whenever the size of the screen changes
window.addEventListener('resize', function () {
    "use strict";
    window.location.reload();
});

                    // //sending locations numbers pixels to CSS
                    // for (i=0; i < location.length; i ++) {
                    //     sendLocationsCSS(document.querySelector(i))
                    // }
                    // sendLocationsCSS();

                    // function sendLocatonsCSS(element) {
                    //     locations(element)
                    // }
                    // //finding the top left corner relative position of any element
                    // function locations(element)

//finding the top left corner of the .plane location
let pdiv = document.querySelector('.plane');
let prect = pdiv.getBoundingClientRect();
let px = prect.left;
let py = prect.top;

//fiding the top left corner of different planet in various responsive screen sizes
//and setting and sending CSS variables containing locations data of different planets
let div = document.querySelector('.about');
let rect = div.getBoundingClientRect();
let x = rect.left - px - 30 +'px';
let y = rect.top - py - 30 +'px';

document.documentElement.style.setProperty(`--targetX`, x );
document.documentElement.style.setProperty(`--targetY`, y );

//.travel
let div1 = document.querySelector('.travel');
let rect1 = div1.getBoundingClientRect();
let a = rect1.left - px + 60 + 'px';
let b = rect1.top - py - 30 + 'px';

document.documentElement.style.setProperty(`--targetA`, a);
document.documentElement.style.setProperty(`--targetB`, b);

//.game
let div2 = document.querySelector('.game');
let rect2 = div2.getBoundingClientRect();
let c = rect2.left - px - 30 + 'px';
let d = rect2.top - py - 30 + 'px';

document.documentElement.style.setProperty(`--targetC`, c);
document.documentElement.style.setProperty(`--targetD`, d);