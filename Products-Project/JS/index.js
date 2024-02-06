//Selecting Dom Elements
const Products = document.querySelectorAll(".flexcontainer div div");
const searchBtn = document.getElementById("search-btn");
const searchBtn2 = document.querySelector(".sci2");
const search = document.getElementById("search");
const search2 = document.querySelector(".scin2");
const tip = document.getElementById("tip");
const tip2 = document.getElementById("tip2");
const searchcontainer = document.getElementsByClassName("search-container");
const searchcontainer1 = document.getElementById("sc1");
const searchcontainer2 = document.getElementById("sc2");
const techbutton = document.getElementById("tech");
const allbutton = document.getElementById("all");
const healthbutton = document.getElementById("health");
const clothingbutton = document.getElementById("clothing");
let Gendma = document.getElementById("Gendma").checked;
let Gendmt = document.getElementById("Gendmt").checked;
let Gendmc = document.getElementById("Gendmc").checked;
let Gendmh = document.getElementById("Gendmh").checked;
//Variables
const buttons = [allbutton, techbutton, clothingbutton, healthbutton];
let i = 0;
let j = 0;
let message1 = "Find Your Product here . .";
let message2 = "Find Your Price here . .";
let typeSpeed1 = 100;
let typeSpeed2 = 100;
window.addEventListener("load", () => {
  allbutton.classList.add("Allbutton");
  Gendma = true;
});
// Clicking Category Buttons Has Been Debugged
document.addEventListener("click", () => {
  if (
    sc1.classList.contains("Otherbutton") ||
    sc1.classList.contains("Allbutton")
  ) {
    sc1.classList.remove("Otherbutton");
    sc1.classList.remove("Allbutton");
  }
});
//SearchNameProducts
searchBtn.addEventListener("click", () => {
  search.style.width = "80%";
  search.style.paddingLeft = "100px";
  search.style.cursor = "text";
  search.focus();
  typeWriter1();
});
search.addEventListener("keyup", (event) => {
  tip.style.visibility = "visible";
  tip.style.opacity = 1;
  searchProdcutnameHandler(event);
  setInterval(() => {
    tip.style.opacity = 0;
  }, 4000);
});
//SearchPriceProducts
searchBtn2.addEventListener("mouseenter", () => {
  search2.style.width = "100%";
  search2.style.paddingLeft = "100px";
  search2.style.cursor = "text";
  search2.focus();
  typeWriter2();
});
searchBtn2.addEventListener("click", (event) => {
  searchPriceHandler(event);
});
search2.addEventListener("keyup", () => {
  tip2.style.visibility = "visible";
  tip2.style.opacity = 1;
  setInterval(() => {
    tip2.style.opacity = 0;
  }, 4000);
});
//Category Buttons
allbutton.addEventListener("click", (event) => {
  Products.forEach((product) => {
    product.style.display = "block";
    product.parentElement.style.display = "block";
    Gendma = true;
  });
  radiohovering(event);
});
techbutton.addEventListener("click", (event) => {
  Gendmt = true;
  Products.forEach((product) => {
    const proparentclass = product.parentElement.className;
    if (proparentclass == "Techproducts") {
      product.style.display = "block";
      product.parentElement.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
  radiohovering(event);
});
clothingbutton.addEventListener("click", (event) => {
  Gendmc = true;
  Products.forEach((product) => {
    const proparentclass = product.parentElement.className;
    if (proparentclass == "Clothesproducts") {
      product.style.display = "block";
      product.parentElement.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
  radiohovering(event);
});
healthbutton.addEventListener("click", (event) => {
  Products.forEach((product) => {
    Gendmh = true;
    const proparentclass = product.parentElement.className;
    if (proparentclass == "Healthproducts") {
      product.style.display = "block";
      product.parentElement.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
  radiohovering(event);
});
//SmoothScrolling , When Click is happening on navbar Buttons
document.querySelectorAll(".lox").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
//openning search input f
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
//Logic of searching input f
function searchProdcutnameHandler(event) {
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
function searchPriceHandler(event) {
  const UserInput = +event.target.nextElementSibling.value;
  console.dir(UserInput);
  Products.forEach((product) => {
    const productprice = +product.children[2].innerText.split(" ")[0];
    if (isNaN(UserInput)) {
      product.style.display = "none";
    } else if (productprice === UserInput) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
//Logic Of selecting just one category button
const radiohovering = (ClickedDetail) => {
  if (Gendma) {
    buttons.forEach((button) => {
      button.classList.remove("Otherbutton");
    });
    allbutton.classList.add("Allbutton");
  }
  if (ClickedDetail.target.offsetParent.classList.contains("MOB")) {
    allbutton.classList.add("Allbutton");
  } else {
    buttons.forEach((button) => {
      button.classList.remove("Allbutton", "Otherbutton");
    });
    ClickedDetail.target.offsetParent.classList.add("Otherbutton");
  }
};
