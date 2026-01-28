document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Navigation Logic ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if(navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            if(icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });


    // --- 2. Intersection Observer for Scroll Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { root: null, threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));


    // --- 3. Number Counter Animation ---
    const statsSection = document.querySelector('.stats-bar');
    const counters = document.querySelectorAll('.stat-item h3');
    let hasStarted = false;

    const statsObserver = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
            hasStarted = true;
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; 
                const increment = target / (duration / 16); 
                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current) + (target === 100 ? '%' : '+');
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target + (target === 100 ? '%' : '+');
                    }
                };
                updateCounter();
            });
        }
    }, { threshold: 0.5 });

    if(statsSection) {
        statsObserver.observe(statsSection);
    }


    // --- 4. 2D SLIDER LOGIC ---
    const track = document.getElementById('slidesTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');
    const slides = document.querySelectorAll('.slide');
    
    // Only run slider logic if elements exist
    if(track && prevBtn && nextBtn && slides.length > 0) {
        let currentIndex = 0;
        const totalSlides = slides.length;
        let autoPlayInterval;

        // Initialize Dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if(index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateSlider() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                if(index === currentIndex) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
            resetAutoPlay();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
            resetAutoPlay();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
            resetAutoPlay();
        }

        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
        }

        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }

        // Event Listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Pause on hover
        const sliderContainer = document.querySelector('.about-slider-container');
        sliderContainer.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        sliderContainer.addEventListener('mouseleave', startAutoPlay);

        // Start Auto-play
        startAutoPlay();
    }

});
