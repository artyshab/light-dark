let toggler = document.querySelector(".toggle");
let navigationContent=document.querySelector(".navigation-content");
let closer=document.querySelector(".x-close");



toggler.addEventListener("click",()=>{
    navigationContent.classList.add("navigation-content--show");
})
closer.addEventListener("click",()=>{
    navigationContent.classList.remove("navigation-content--show");

})


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


document.querySelector(".slider-button").addEventListener("click",()=>{
    document.body.classList.toggle("dark");
})







