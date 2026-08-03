document.addEventListener("DOMContentLoaded", function () {

    const about = document.getElementById("about");

    const observer = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            const image = document.querySelector(".about-image");
            const heading = document.querySelector(".about-text h1");
            const paragraphs = document.querySelectorAll(".about-text p");

            if (entry.isIntersecting) {

                // Reset animation
                image.style.animation = "none";
                heading.style.animation = "none";

                paragraphs.forEach(function(p) {
                    p.style.animation = "none";
                });

                // Force browser reflow
                void image.offsetWidth;
                void heading.offsetWidth;

                // Start animation again
                image.style.animation = "imageReveal 1.5s ease forwards";

                heading.style.animation =
"handwriting 4s cubic-bezier(0.4,0,0.2,1) forwards";

                paragraphs.forEach(function(p, index) {

                    void p.offsetWidth;

                    p.style.animation = "paraReveal 1s ease forwards";
                    p.style.animationDelay = (0.4 + index * 0.5) + "s";

                });

            } else {

                // Reset to initial state when section leaves viewport
                image.style.animation = "none";
                image.style.opacity = "0";
                image.style.transform = "translateX(-120px)";
                image.style.filter = "blur(12px)";

                heading.style.animation = "none";
                heading.style.opacity = "0";
                heading.style.width = "0";

                paragraphs.forEach(function(p) {
                    p.style.animation = "none";
                    p.style.opacity = "0";
                    p.style.transform = "translateY(25px)";
                });

            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(about);

});