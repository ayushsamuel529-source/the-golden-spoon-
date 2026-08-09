document.addEventListener("DOMContentLoaded", function () {
    const about = document.getElementById("about");
    const image = about.querySelector(".about-image");
    const aboutText = about.querySelector(".about-text");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                image.style.animation = "none";
                void image.offsetWidth;
                image.style.animation = "imageReveal 1s ease forwards";

                aboutText.classList.add("about-text-visible");
            } else {
                image.style.animation = "none";
                image.style.opacity = "0";
                image.style.transform = "translateX(-120px)";
                image.style.filter = "blur(12px)";

                aboutText.classList.remove("about-text-visible");
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(about);
});