document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.addEventListener("touchstart", () => {
            product.style.transform = "scale(1.05)";
            product.style.boxShadow = "0 0 10px lime";
        });
        product.addEventListener("touchend", () => {
            product.style.transform = "scale(1)";
            product.style.boxShadow = "none";
        });
    });
});
