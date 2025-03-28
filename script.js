document.addEventListener("DOMContentLoaded", function () {
    const ctaButtons = document.querySelectorAll(".cta-button");

    ctaButtons.forEach(button => {
        button.addEventListener("mouseover", function () {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseout", function () {
            button.style.transform = "scale(1)";
        });
    });
       const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! We'll get back to you soon.");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const flipCard = document.querySelector(".flip-card");

    flipCard.addEventListener("click", function () {
        flipCard.classList.toggle("flipped");
    });
}); 
document.querySelectorAll(".social-nav li").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.transform = "rotate(10deg) scale(1.2)";
    });

    item.addEventListener("mouseout", () => {
        item.style.transform = "rotate(0deg) scale(1)";
    });
});