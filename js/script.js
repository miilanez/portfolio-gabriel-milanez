// Efeitos de Navegação ao rolar o "scroll" na NavBar

windows.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});