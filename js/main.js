let cartButton = document.querySelector("#cart-button");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);

close.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-open");
}

new WOW().init(); 