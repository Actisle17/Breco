        // Scroll animations
        const fadeInElements = document.querySelectorAll('.fade-in');
        const slideUpElements = document.querySelectorAll('.slide-up');
        
        const observerOptions = {
            threshold: 0.1
        };
        
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeInObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        const slideUpObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    slideUpObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        fadeInElements.forEach(el => fadeInObserver.observe(el));
        slideUpElements.forEach(el => slideUpObserver.observe(el));
        
        // Image slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        // Change slide every 5 seconds
        setInterval(nextSlide, 5000);
        
        // Navbar scroll effect and section highlight
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            const logo = document.querySelector('.logo');
            const navLinks = document.querySelectorAll('.nav-link');
            
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Highlight active section in nav
            const fromTop = window.scrollY + 100;
            
            navLinks.forEach(link => {
                const section = document.querySelector(link.getAttribute('href'));
                if (
                    section.offsetTop <= fromTop &&
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });
        
        // Mobile menu toggle (placeholder - would need more implementation)
        const mobileMenuButton = document.querySelector('.md\\:hidden');
        mobileMenuButton.addEventListener('click', function() {
            alert('Mobile menu would open here in a full implementation');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
