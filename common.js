function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "none") ? "block" : "none";
    
    var hamburger = document.getElementsByClassName("hamburger")[0];
    hamburger.classList.toggle("open");
  }
