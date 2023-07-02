const target = document.getElementById('target');
const typewriter = new Typewriter(target, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(1000)
    .typeString('Elcan Eyvazli')
    .pauseFor(300)
    .deleteChars(20)
    .typeString('Frontend Developer')
    .pauseFor(300)
    .deleteChars(20)
    .start();

let swiperSliderSimpleA = new Swiper('.slider-simple-a.swiper-container', {
    navigation: {
        nextEl: '.swiper-container.slider-simple-a .slider-next',
        prevEl: '.swiper-container.slider-simple-a .slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 20,
    slidesPerView: 'auto',


    centeredSlides: true,
    speed: 600,
});


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


const recrContents = document.querySelectorAll(".recr-content");

function handleClick() {
  recrContents.forEach((element) => {
    element.classList.remove("active");
  });

  this.classList.add("active");
}

recrContents.forEach((recrContent) => {
  recrContent.addEventListener("click", handleClick);
});


$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: false
});
$(document).ready(function () {
    $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active");
        $(this).toggleClass("active");
    });
});


const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contactNoInput = document.getElementById("contactNo");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submitButton");
const successPopup = document.getElementById("successPopup");
const closePopup = document.getElementsByClassName("closePopup")[0];

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("contactNoError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        nameInput.classList.add("error-input");
        nameInput.focus();
        return;
    }

    if (emailInput.value.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required";
        emailInput.classList.add("error-input");
        emailInput.focus();
        return;
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        emailInput.classList.add("error-input");
        emailInput.focus();
        return;
    }

    if (contactNoInput.value.trim() === "") {
        document.getElementById("contactNoError").textContent = "Contact No is required";
        contactNoInput.classList.add("error-input");
        contactNoInput.focus();
        return;
    }

    if (messageInput.value.trim() === "") {
        document.getElementById("messageError").textContent = "Message is required";
        messageInput.classList.add("error-input");
        messageInput.focus();
        return;
    }

    successPopup.style.display = "block";
});

closePopup.addEventListener("click", function () {
    successPopup.style.display = "none";
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav");
    const offset = 500;

    if (window.scrollY >= offset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

window.addEventListener("scroll", function () {
    var scrollToTopButton = document.querySelector(".scroll-to-top");
    if (window.scrollY > 200) {
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
});

document.querySelector(".scroll-to-top").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const home = document.getElementById("home");

home.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const skills = document.getElementById("skills");

skills.addEventListener("click", function () {
    window.scrollTo({
        top: 500,
        behavior: "smooth"
    });
});

const projects = document.getElementById("project");

projects.addEventListener("click", function () {
    window.scrollTo({
        top: 900,
        behavior: "smooth"
    });
});

const faq = document.getElementById("faq");

faq.addEventListener("click", function () {
    window.scrollTo({
        top: 1300,
        behavior: "smooth"
    });
});

const testimonials = document.getElementById("testimonials");

testimonials.addEventListener("click", function () {
    window.scrollTo({
        top: 1900,
        behavior: "smooth"
    });
});

const contact = document.getElementById("contact");

contact.addEventListener("click", function () {
    window.scrollTo({
        top: 2500,
        behavior: "smooth"
    });
});