


const navbarScrollY = 60;
const navbar = document.querySelector(".kucit-navbar");

window.addEventListener("scroll", function() 
{
    // navbar modules
    if (navbar !== null)
    {
        navbar.classList.toggle("toggled", window.scrollY > navbarScrollY);
    }
});