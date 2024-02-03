const searchBtn = document.getElementById("search-btn");
const searchBtn2 = document.querySelector(".sci2");
const search = document.getElementById("search");
const search2 = document.querySelector(".scin2");
const tip = document.getElementById("tip");
const tip2 = document.getElementById("tip2");
const searchcontainer = document.getElementsByClassName("search-container");
const searchcontainer2 = document.getElementById("sc2");
let i = 0;
let j = 0;
let message1 = "Find Your Product here . .";
let message2 = "Find Your Price here . .";
let typeSpeed1 = 100;
let typeSpeed2 = 100;
searchBtn.addEventListener("click", () => {
  search.style.width = "58%";
  search.style.paddingLeft = "100px";
  search.style.cursor = "text";
  search.focus();
  typeWriter1();
});
searchBtn2.addEventListener("click", () => {
  search2.style.width = "100%";
  search2.style.paddingLeft = "100px";
  search2.style.cursor = "text";
  search2.focus();
  typeWriter2();
});
search.addEventListener("keydown", () => {
  tip.style.visibility = "visible";
  tip.style.opacity = 1;
  setInterval(() => {
    tip.style.opacity = 0;
  }, 4000);
});

search2.addEventListener("keydown", () => {
  tip2.style.visibility = "visible";
  tip2.style.opacity = 1;
  setInterval(() => {
    tip2.style.opacity = 0;
  }, 4000);
});
function typeWriter1() {
  if (i < message1.length) {
    msg = search.getAttribute("placeholder") + message1.charAt(i);
    search.setAttribute("placeholder", msg);
    i++;
    setTimeout(typeWriter1, typeSpeed1);
  }
}
function typeWriter2() {
  if (j < message2.length) {
    msg = search2.getAttribute("placeholder") + message2.charAt(j);
    search2.setAttribute("placeholder", msg);
    j++;
    setTimeout(typeWriter2, typeSpeed2);
  }
}
