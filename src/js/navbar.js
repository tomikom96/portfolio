const navbarBtnBars = document.querySelector(".navbar__burger");
const navbarBtnX = document.querySelector(".navbar__x");
const ulList = document.querySelector(".nav__list");
const btnBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-x");
const liItem = document.querySelector("#nav__item");
const ulList2 = document.querySelector(".nav__list-second-stage");
const liItem2 = document.querySelector("#nav__item-second-stage");
const ulList3 = document.querySelector(".nav__list-third-stage");
const liItemBox = document.querySelector("#nav__item-box");
const liItemBox2 = document.querySelector("#nav__item-box2");
const minWidth = window.matchMedia("(min-width: 768px)");
const mobile = window.matchMedia("(max-width: 768px)");

const showNavSmall = () => {
	ulList.classList.toggle("hide");
	iconX.classList.toggle("hide");
	btnBars.classList.toggle("hide");
};

const showNav = () => {
	if (ulList2.classList.contains("nav--hide")) {
		ulList2.classList.remove("nav--hide");
	} else {
		ulList2.classList.add("nav--hide");
	}
};

const showNav2 = () => {
	if (ulList3.classList.contains("nav--hide")) {
		ulList3.classList.remove("nav--hide");
	} else {
		ulList3.classList.add("nav--hide");
	}
};

const hideNav = () => {
	if (minWidth.matches && !ulList2.classList.contains("nav--hide")) {
		ulList2.classList.toggle("nav--hide");
	}
};

const hideNav2 = () => {
	if (minWidth.matches && !ulList3.classList.contains("nav--hide")) {
		ulList3.classList.toggle("nav--hide");
	}
};

const hideNavMobile = () => {
	if ((document.body.style.width = "max-width: 768px")){
		ulList.classList.toggle("hide");
		iconX.classList.toggle("hide");
		btnBars.classList.toggle("hide");
		ulList2.classList.add("nav--hide");
		ulList3.classList.add("nav--hide");
	}
};

navbarBtnBars.addEventListener("click", showNavSmall);
navbarBtnX.addEventListener("click", showNavSmall);
liItemBox.addEventListener("click", showNav);
liItemBox2.addEventListener("click", showNav2);
liItem.addEventListener("mouseleave", hideNav);
liItem2.addEventListener("mouseleave", hideNav2);
ulList.addEventListener("mouseleave", hideNavMobile);
