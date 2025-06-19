 // Counter animation for stats
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = counter.textContent;
                const isPercentage = target.includes('%');
                const isPlus = target.includes('+');
                const numericValue = parseInt(target.replace(/[^\d]/g, ''));
                
                let count = 0;
                const increment = numericValue / 100;
                
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= numericValue) {
                        count = numericValue;
                        clearInterval(timer);
                    }
                    
                    let displayValue = Math.floor(count);
                    if (isPercentage) {
                        displayValue += '%';
                    } else if (isPlus) {
                        displayValue = displayValue >= 1000 ? 
                            (displayValue / 1000).toFixed(1) + 'K+' : 
                            displayValue + '+';
                    }
                    
                    counter.textContent = displayValue;
                }, 50);
            });
        }

        // Trigger counter animation when stats section is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });

        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            observer.observe(statsSection);
        }
