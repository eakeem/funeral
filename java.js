









 let currentIndex = 0;
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;

    function showSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    // Auto-play every 5 seconds
    setInterval(nextSlide, 5000);
