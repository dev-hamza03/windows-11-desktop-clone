let taskBar = document.querySelector(".task-bar");
let menu = document.querySelector(".menu");

let rightClickMenu = document.querySelector(".right-click-menu")


taskBar.addEventListener("click", () => {

    if(menu.style.bottom === "-102%") {
        menu.style.bottom = 8 + "%";
    }

    else {
        menu.style.bottom = "-102%";
    }

});

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    const menuWidth = rightClickMenu.offsetWidth;
    const menuHeight = rightClickMenu.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let posX = e.pageX;
    let posY = e.pageY;

    // Prevent overflow on right side
    if (posX + menuWidth > screenWidth) {
        posX = screenWidth - menuWidth - 25;
    }

    // Prevent overflow on bottom side
    if (posY + menuHeight > screenHeight) {
        posY = screenHeight - menuHeight - 25;
    }

    rightClickMenu.style.left = posX + "px";
    rightClickMenu.style.top = posY + "px";
    rightClickMenu.style.display = "block";
});

document.addEventListener("click", () => {
  rightClickMenu.style.display = "none";
});