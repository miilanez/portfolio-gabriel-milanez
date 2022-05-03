// Estilo da NavBar Sticky

let nav = document.querySelector("nav");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

// Estilo do Menu Hamburguer

let menuBtn = document.querySelectorAll(".menu-btn");
for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", (event) => {
        console.log(event.target);
        event.target.classList.toggle("active");
    });
}

// Responsividade da NavBar

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".menu-btn",
    ".nav-links",
    ".nav-links li",
);
mobileNavbar.init();