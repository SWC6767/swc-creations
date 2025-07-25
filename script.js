document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("mousemove", e => {
            product.style.transform = "scale(1.05)";
        });
        product.addEventListener("mouseleave", () => {
            product.style.transform = "scale(1)";
        });
    });
});
