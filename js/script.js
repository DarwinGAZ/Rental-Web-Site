const menu = document.querySelector(".menu");
const hamburguer = document.querySelector(".hamburguer");
const link = document.querySelectorAll(".link");

hamburguer.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
        menu.classList.add("active");
        hamburguer.innerHTML = "X";
    } else {
        menu.classList.remove("active");
        hamburguer.innerHTML = "&#9776;";
    }
});

link.forEach((item) => {
    item.addEventListener("click", () => {
        hamburguer.innerHTML = "&#9776;";
        menu.classList.remove("active");
    });
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

let listingArticle = document
    .querySelectorAll(".featured-listing--article.hidden")
    .forEach((item) => {
        const button = document.querySelector(".load-more-btn");

        button.addEventListener("click", () => {
            button.classList.add("hidden");
            item.classList.remove("hidden");
        });
    });
