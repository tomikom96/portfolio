const navbarBtnBars = document.querySelector(".navbar__burger");
const navbarBtnX = document.querySelector(".navbar__x");
const ulList = document.querySelector(".nav .center ul");
const btnBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-x");
const liItem = document.querySelector("#nav__item");
const ulList2 = document.querySelector(".nav__list-second-stage");
const liItem2 = document.querySelector("#nav__item-second-stage");
const ulList3 = document.querySelector(".nav__list-third-stage");
const liItemBox = document.querySelector("#nav__item-box");
const liItemBox2 = document.querySelector("#nav__item-box2");
const minWidth = 768;

const showNavSmall = () => {
	ulList.classList.toggle("hide");
	iconX.classList.toggle("hide");
	btnBars.classList.toggle("hide");
};

const showNavSmall2 = () => {
	if (screen.width < minWidth) {
		ulList2.classList.toggle("nav--hide");
	}
};

const showNavSmall3 = () => {
	if (screen.width < minWidth) {
		ulList3.classList.toggle("nav--hide");
	}
};

const showNav2 = () => {
	if (screen.width >= minWidth && ulList2.classList.contains("nav--hide")) {
		ulList2.classList.remove("nav--hide");
	}
};

const hideNav2 = () => {
	if (screen.width >= minWidth) {
		ulList2.classList.add("nav--hide");
		ulList3.classList.add("nav--hide");
	}
};

const showNav3 = () => {
	if (screen.width >= minWidth && ulList3.classList.contains("nav--hide")) {
		ulList3.classList.remove("nav--hide");
	}
};

const hideNav3 = () => {
	if (screen.width >= minWidth) {
		ulList3.classList.add("nav--hide");
	}
};

navbarBtnBars.addEventListener("click", showNavSmall);
navbarBtnX.addEventListener("click", showNavSmall);
liItemBox.addEventListener("click", showNavSmall2);
liItemBox2.addEventListener("click", showNavSmall3);
liItem.addEventListener("mouseenter", showNav2);
liItem.addEventListener("mouseleave", hideNav2);
liItem2.addEventListener("mouseenter", showNav3);
liItem2.addEventListener("mouseleave", hideNav3);
