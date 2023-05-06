const navbarBtnBars = document.querySelector(".navbar__burger");
const navbarBtnX = document.querySelector(".navbar__x");
const ulList = document.querySelector(".nav .center ul");
const btnBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-x");
const liItem = document.querySelector("#nav__item");
const ulList2 = document.querySelector(".nav__list-second-stage");
const liItem2 = document.querySelector("#nav__item-second-stage-nav");
const ulList3 = document.querySelector(".nav__list-third-stage");

const showNav = () => {
	ulList.classList.toggle("hide");
	iconX.classList.toggle("hide");
	btnBars.classList.toggle("hide");
};

const showNav2 = () => {
	ulList2.classList.toggle("nav--hide");
};

const showNav3 = () => {
	ulList3.classList.toggle("nav--hide");
};

navbarBtnBars.addEventListener("click", showNav);
navbarBtnX.addEventListener("click", showNav);
liItem.addEventListener("click", showNav2);
liItem2.addEventListener("click", showNav3);
