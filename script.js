// =========================================================
// PRODUCTION LIVE METRICS: UPDATED REVANTH'S BUSINESS LINE
// =========================================================
const WHATSAPP_NUMBER = "919949141598"; // Country code tracking injected with your phone line directly

function redirectToWhatsApp(customText) {
    const encodedText = encodeURIComponent(customText);
    window.open(`https://wa.me/919949141598`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {

    // 1. ANCHOR ROUTING LINKS DISPATCHERS
    document.getElementById('nav-contact-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        redirectToWhatsApp("Hi Revanth, I visited the official website and want to connect with Yoga Kshema Events team regarding a function query.");
    });

    document.getElementById('hero-cta-btn')?.addEventListener('click', () => {
        redirectToWhatsApp("Hi Revanth, I am inquiring about available execution booking dates for an upcoming grand family celebration event.");
    });

    // 2. TRANSPARENT PACKAGES TIER TRIGGER CONTROLLERS
    document.querySelectorAll('.pkg-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const tier = e.target.getAttribute('data-package');
            redirectToWhatsApp(`Hi Revanth, I am highly interested in reviewing details and receiving a formal quote for your *Yoga Kshema ${tier} Package* plan.`);
        });
    });

    // 3. CAROUSEL MOTION INTEGRATION ROTATOR
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.getElementById('next-slide');
    const prevBtn = document.getElementById('prev-slide');
    let currentIdx = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        
        if (index >= slides.length) currentIdx = 0;
        else if (index < 0) currentIdx = slides.length - 1;
        else currentIdx = index;
        
        slides[currentIdx].classList.add('active');
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            showSlide(currentIdx + 1);
        }, 5000); // Swaps frame vectors exactly every 5 seconds loop
    }

    nextBtn?.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        showSlide(currentIdx + 1);
        startAutoSlide();
    });

    prevBtn?.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        showSlide(currentIdx - 1);
        startAutoSlide();
    });

    if(slides.length > 0) {
        startAutoSlide();
    }
});
