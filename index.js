const a=document.querySelector(".hamburger");
const b=document.querySelector(".navbar__menu");
const c=document.querySelector(".navbar__icons");

function clickHamburger(event){
b.classList.toggle("showing");
c.classList.toggle("showing");

}


function init(){
    a.addEventListener("click",clickHamburger);
}

init();