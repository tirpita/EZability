<!-- SCRIPT FOR RESPONSIVE MOBILE MENU -->

var menu = document.getElementById("nav-component");
    function responsiveMenu() {
         if (menu.className === "nav-menu") {
              menu.className += " responsive";
         } else {
              menu.className = "nav-menu";
         }
    }	
menu.addEventListener("click", responsiveMenu);
