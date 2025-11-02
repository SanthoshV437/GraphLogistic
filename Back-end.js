const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".blog__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".blog__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
});

const container = document.querySelector(".bubble__container");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = Math.random() * 90 + "%";
  bubble.style.top = Math.random() * 80 + "%";
  container.appendChild(bubble);

  bubble.addEventListener("click", () => {
    bubble.remove();
  });

  setTimeout(() => bubble.remove(), 4000);
}

setInterval(createBubble, 800);


document.querySelectorAll(".read-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const readBox = button.previousElementSibling;
    readBox.classList.toggle("expanded");

    if (readBox.classList.contains("expanded")) {
      button.textContent = "Read Less";
    } else {
      button.textContent = "Read More";
    }
  });
});

document.getElementById('whatsapp-btn').addEventListener('click', function () {
  var whatsapp_link = "https://wa.me/ 7411034104 "; 
  window.open(whatsapp_link, '_blank');
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Toggle menu open/close
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("open");
});

// Auto close menu when clicking any link
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.classList.remove("open");
  });
});


