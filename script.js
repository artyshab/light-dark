


document.querySelector(".slider-button").addEventListener("click",()=>{
    document.querySelector(".slider").classList.toggle("active");
});


let toggler = document.querySelector(".card");
let textContent = document.querySelector(".paragraph");
let closer = document.querySelector("p");

toggler.addEventListener("click", () => {
    textContent.classList.toggle("paragraph--show");
});