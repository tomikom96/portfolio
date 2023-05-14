const navbarBtnBars = document.querySelector(".navbar__burger");
const navbarBtnX = document.querySelector(".navbar__x");
const ulList = document.querySelector(".nav .center ul");
const btnBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-x");
const liItem = document.querySelector("#nav__item");
const ulList2 = document.querySelector(".nav__list-second-stage");
const liItem2 = document.querySelector("#nav__item-second-stage");
const ulList3 = document.querySelector(".nav__list-third-stage");

const showNav = () => {
	ulList.classList.toggle("hide");
	iconX.classList.toggle("hide");
	btnBars.classList.toggle("hide");
};

const showNav2 = () => {
	if (ulList2.classList.contains("nav--hide")) {
		ulList2.classList.remove("nav--hide");
	}
};

const hideNav2 = () => {
	ulList2.classList.add("nav--hide");
	ulList3.classList.add("nav--hide");
};

const showNav3 = () => {
	if (ulList3.classList.contains("nav--hide")) {
		ulList3.classList.remove("nav--hide");
	}
};
const hideNav3 = () => {
	ulList3.classList.add("nav--hide");
};


navbarBtnBars.addEventListener("click", showNav);
navbarBtnX.addEventListener("click", showNav);
liItem.addEventListener("mouseenter", showNav2);
liItem.addEventListener("mouseleave", hideNav2);
liItem2.addEventListener("mouseenter", showNav3);
liItem2.addEventListener("mouseleave", hideNav3);

