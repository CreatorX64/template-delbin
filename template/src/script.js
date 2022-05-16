import Swiper, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

//#region @Loading screen - Show & hide loading animation

// Show & Hide loading screen. The loading screen is basically an absolutely
// positioned <div> element which inludes an SVG loading animation

const elemLoadingScreen = document.querySelector(".loading-screen");
// Once our webpage loads, hide the loading screen
window.addEventListener("load", () => {
  // Give at least 500ms for loading spinner to show in order to prevent annoying flashing
  setTimeout(() => {
    // Remove the loading screen
    elemLoadingScreen.remove();
    // Enable scrolling once page is loaded
    document.body.classList.toggle("overflow-y-hidden");
    document.documentElement.classList.toggle("overflow-y-hidden");
  }, 500);
});

//#endregion

//#region @Navigation - Smooth scrolling & mobile nav logic

const links = document.querySelectorAll("a");

// Smooth scrolling

links.forEach((link) => {
  const href = link.getAttribute("href");

  if (href?.startsWith("#")) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// Mobile nav logic

const toggleMobileNavState = () => {
  const mobileNav = document.querySelector(".mobile-nav");
  const hamburger = document.querySelector(".hamburger");

  // This is only required when mobile nav is opened the first time, that's why
  // we don't toggle it but just remove it
  mobileNav.classList.remove("invisible");

  mobileNav.classList.toggle("translate-x-full");
  mobileNav.classList.toggle("translate-x-0");
  mobileNav.classList.toggle("pointer-events-none");
  mobileNav.classList.toggle("pointer-events-auto");

  hamburger.classList.toggle("stroke-current");
  hamburger.classList.toggle("stroke-brand-50");

  document.body.classList.toggle("overflow-y-hidden");
  document.documentElement.classList.toggle("overflow-y-hidden");
};

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

//#endregion

//#region @Featured in - Swiper logic

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

//#endregion

//#region @How it works - Tabbed component logic

let activeStep = "0";
const stepElems = document.querySelectorAll("li[data-step]");
const tabElems = document.querySelectorAll("div[data-tab]");
const btnNextElems = document.querySelectorAll(".btn-next");

const updateSteps = () => {
  stepElems.forEach((stepElem) => {
    stepElem.classList.remove("font-bold");
    stepElem.classList.remove("text-brand-600");
    stepElem.classList.add("text-gray-400");

    if (stepElem.dataset.step === activeStep) {
      stepElem.classList.add("font-bold");
      stepElem.classList.add("text-brand-600");
      stepElem.classList.remove("text-gray-400");
      stepElem.classList.remove("hover:text-brand-400");
    } else {
      stepElem.classList.add("hover:text-brand-400");
    }
  });
};

const updateTabs = () => {
  tabElems.forEach((tabElem) => {
    tabElem.classList.add("hidden");

    if (tabElem.dataset.tab === activeStep) {
      tabElem.classList.remove("hidden");
    }
  });
};

// Setup & configure the tabbed group in "How it works" section.
updateSteps();
updateTabs();

stepElems.forEach((stepElem) => {
  stepElem.addEventListener("click", (event) => {
    activeStep = event.currentTarget.dataset.step;
    updateSteps();
    updateTabs();
  });
});

btnNextElems.forEach((btnNext) => {
  btnNext.addEventListener("click", () => {
    activeStep = ((Number(activeStep) + 1) % 4).toString();
    updateSteps();
    updateTabs();
  });
});

//#endregion
