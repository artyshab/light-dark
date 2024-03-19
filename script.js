
document.querySelector(".slider-button").addEventListener("click",()=>{
    document.querySelector(".slider").classList.toggle("active");
});


let togglers = document.querySelectorAll(".card");
let textContents = document.querySelectorAll(".paragraph");

togglers.forEach((toggler, index) => {
    toggler.addEventListener("click", () => {
        textContents[index].classList.toggle("paragraph--show");
    });
});