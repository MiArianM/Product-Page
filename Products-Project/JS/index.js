const Products = document.querySelectorAll(".flexcontainer div div");
const searchBtn = document.getElementById("search-btn");
const searchBtn2 = document.querySelector(".sci2");
const search = document.getElementById("search");
const search2 = document.querySelector(".scin2");
const tip = document.getElementById("tip");
const tip2 = document.getElementById("tip2");
const searchcontainer = document.getElementsByClassName("search-container");
const searchcontainer2 = document.getElementById("sc2");
const techbutton = document.getElementById("tech");
const allbutton = document.getElementById("all");
const healthbutton = document.getElementById("health");
const clothingbutton = document.getElementById("clothing");
let i = 0;
let j = 0;
let message1 = "Find Your Product here . .";
let message2 = "Find Your Price here . .";
let typeSpeed1 = 100;
let typeSpeed2 = 100;
searchBtn.addEventListener("click", () => {
  search.style.width = "80%";
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
search.addEventListener("keyup", (event) => {
  tip.style.visibility = "visible";
  tip.style.opacity = 1;
  searchHandler(event);
  setInterval(() => {
    tip.style.opacity = 0;
  }, 4000);
});
search2.addEventListener("keyup", () => {
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
function searchHandler(event) {
  const UserInput = event.target.value.toLowerCase().trim();
  Products.forEach((product) => {
    const productname = product.children[1].innerText.toLowerCase();
    if (productname.includes(UserInput)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
allbutton.addEventListener("click", () => {
  Products.forEach((product) => {
    product.style.display = "block";
    product.parentElement.style.display = "block";
  });
});
techbutton.addEventListener("click", () => {
  Products.forEach((product) => {
    const proparentclass = product.parentElement.className;
    if (proparentclass == "Techproducts") {
      product.style.display = "block";
      product.parentElement.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
});
clothingbutton.addEventListener("click", () => {
  Products.forEach((product) => {
    const proparentclass = product.parentElement.className;
    if (proparentclass == "Clothesproducts") {
      product.style.display = "block";
      product.parentElement.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
});
healthbutton.addEventListener("click", () => {
  Products.forEach((product) => {
    const proparentclass = product.parentElement.className;
    if (proparentclass == "Healthproducts") {
      product.style.display = "block";
      product.parentElement.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
});
