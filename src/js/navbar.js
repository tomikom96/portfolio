const navbarBtnBars = document.querySelector(".navbar__burger");
const navbarBtnX = document.querySelector(".navbar__x");
const ulList = document.querySelector(".nav .center ul");
const btnBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-x");

const showList = () => {
	ulList.classList.toggle("hide");
	iconX.classList.toggle("hide");
	btnBars.classList.toggle("hide");
	rotateArrow();
};

navbarBtnBars.addEventListener("click", showList);
navbarBtnX.addEventListener("click", showList);
