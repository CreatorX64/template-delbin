import Swiper, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

// Swiper autoplay configuration.

new Swiper(".my-swiper", {
  modules: [Autoplay],
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});

// Setup & config the tabbed group in "How it works" section.

let activeStep = "1";
const stepElems = document.querySelectorAll("li[data-step]");
const tabElems = document.querySelectorAll("div[data-tab]");

updateSteps();
updateTabs();

stepElems.forEach((stepElem) => {
  stepElem.addEventListener("click", (event) => {
    activeStep = event.currentTarget.dataset.step;
    updateSteps();
    updateTabs();
  });
});

function updateSteps() {
  stepElems.forEach((stepElem) => {
    stepElem.classList.remove("font-bold");
    stepElem.classList.remove("text-brand-600");
    stepElem.classList.add("text-gray-400");

    if (stepElem.dataset.step === activeStep) {
      stepElem.classList.add("font-bold");
      stepElem.classList.add("text-brand-600");
      stepElem.classList.remove("text-gray-400");
    }
  });
}

function updateTabs() {
  tabElems.forEach((tabElem) => {
    tabElem.classList.add("hidden");

    if (tabElem.dataset.tab === activeStep) {
      tabElem.classList.remove("hidden");
    }
  });
}

// Smooth scrolling

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const href = link.getAttribute("href");

  if (href?.startsWith("#")) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// Hamburger menu

document.querySelector(".hamburger")?.addEventListener("click", () => {
  document.querySelector("#body").scrollIntoView();
  toggleMobileNavState();
});

links.forEach((link) => {
  if (link.closest(".mobile-nav")) {
    link.addEventListener("click", () => {
      toggleMobileNavState();
      return true;
    });
  }
});

function toggleMobileNavState() {
  const mobileNav = document.querySelector(".mobile-nav");
  const hamburger = document.querySelector(".hamburger");

  mobileNav.classList.toggle("left-0");
  mobileNav.classList.toggle("left-full");

  hamburger.classList.toggle("stroke-current");
  hamburger.classList.toggle("stroke-brand-50");

  document.body.classList.toggle("overflow-y-hidden");
}
