document.addEventListener("DOMContentLoaded", function () {
    // 🎵 Background Music Controls
    const music = document.getElementById("background-music");
    const muteButton = document.getElementById("mute-button");

    function enableAudioPlayback() {
        if (music.paused) {
            music.play().catch(error => console.log("Autoplay blocked:", error));
        }
    }

    document.body.addEventListener("click", enableAudioPlayback, { once: true });

    if (muteButton) {
        muteButton.addEventListener("click", function () {
            music.muted = !music.muted;
            muteButton.textContent = music.muted ? "🔇" : "🔊";
        });
    }

    // 🏞️ Fully Automatic Event Image Slider
    const slides = document.querySelectorAll(".slide"); // Adjust selector based on your HTML
    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    if (slides.length > 0) {
        showSlide(slideIndex); // Show the first slide
        setInterval(nextSlide, 3000); // Auto-loop every 3 seconds
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // 🎵 Background Music Controls
    const music = document.getElementById("background-music");
    const muteButton = document.getElementById("mute-button");

    function enableAudioPlayback() {
        if (music.paused) {
            music.play().catch(error => console.log("Autoplay blocked:", error));
        }
    }

    document.body.addEventListener("click", enableAudioPlayback, { once: true });

    if (muteButton) {
        muteButton.addEventListener("click", function () {
            music.muted = !music.muted;
            muteButton.textContent = music.muted ? "🔇" : "🔊";
        });
    }

    // 🏞️ Fully Automatic Event Image Slider
    const slides = document.querySelectorAll(".slide"); // Adjust selector based on your HTML
    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    if (slides.length > 0) {
        showSlide(slideIndex); // Show the first slide
        setInterval(nextSlide, 3000); // Auto-loop every 3 seconds
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // 🎵 Background Music Controls
    const music = document.getElementById("background-music");
    const muteButton = document.getElementById("mute-button");

    function enableAudioPlayback() {
        if (music.paused) {
            music.play().catch(error => console.log("Autoplay blocked:", error));
        }
    }

    document.body.addEventListener("click", enableAudioPlayback, { once: true });

    if (muteButton) {
        muteButton.addEventListener("click", function () {
            music.muted = !music.muted;
            muteButton.textContent = music.muted ? "🔇" : "🔊";
        });
    }

    // 🏞️ Fully Automatic Event Image Slider
    const slides = document.querySelectorAll(".slide"); // Adjust selector based on your HTML
    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    if (slides.length > 0) {
        showSlide(slideIndex); // Show the first slide
        setInterval(nextSlide, 3000); // Auto-loop every 3 seconds
    }
});
