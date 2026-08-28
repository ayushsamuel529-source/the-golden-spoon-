
  // Sidebar Toggle
  function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
  }

  // SliderD
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    if (!slides.length) return;

    slides.forEach(slide => {
      slide.classList.remove("active");
      slide.classList.remove("anim-fade", "anim-slide-left", "anim-zoom", "anim-rotate");
    });

    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    const active = slides[currentSlide];
    active.classList.add("active");

    const anim = active.dataset.anim || "fade";
    active.classList.add("anim-" + anim);
  }

  function nextSlide() { showSlide(currentSlide + 1); }
  function prevSlide() { showSlide(currentSlide - 1); }

  // autoplay
  setInterval(nextSlide, 3000);

  // arrows inline onclick call ke liye
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
