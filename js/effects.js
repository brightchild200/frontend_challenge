

// Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        });



        // Parallax effect for showcase video
        window.addEventListener('scroll', function() {
            const parallaxVideo = document.querySelector('.parallax-video');
            if (parallaxVideo) {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                parallaxVideo.style.transform = `translateY(${parallax}px)`;
            }
        });