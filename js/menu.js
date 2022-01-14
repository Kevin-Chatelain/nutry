document.querySelector(".eclair").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("menu_show");
    this.classList.toggle("animation");
})

document.querySelector('.close_cross').addEventListener('click', function() {
    document.querySelector(".menu").classList.toggle("menu_show");
})

// document.querySelector(".animation").addEventListener("click", function(){
//     this.classList.remove("animation");
//     this.classList.add("animationback");
// })