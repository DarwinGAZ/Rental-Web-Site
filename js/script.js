const menu = document.querySelector(".menu");

let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
        menu.classList.add("active");
        hamburguer.innerHTML = "X";
    } else {
        menu.classList.remove("active");
        hamburguer.innerHTML = "&#9776;";
    }
});

let buttonSearch = document.querySelectorAll(".tab").forEach((item) => {
    item.addEventListener("click", (e) => {
        document.querySelector(".tab.active").classList.remove("active");
        e.target.classList.add("active");
    });
});

let heartButton = document.querySelectorAll(".heart-button").forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            item.innerHTML = '<i class="fa-solid fa-heart"></i>';
        } else {
            item.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }
    });
});
