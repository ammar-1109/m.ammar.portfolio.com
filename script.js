const header = document.querySelector('header');
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        const darkModeIcon = darkModeToggle.querySelector('i');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const moduleCards = document.querySelectorAll('.module-card');
        const contactForm = document.getElementById('contactForm');
        const darkModeTransition = document.querySelector('.darkmode-transition');
        
        // Sticky Header
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
                header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            }
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking a link
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
        
        // Mobile Menu Toggle
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Dark Mode Toggle
        darkModeToggle.addEventListener('click', () => {
            // Add transition effect
            darkModeTransition.classList.add('active');
            
            setTimeout(() => {
                document.body.classList.toggle('dark-mode');
                darkModeIcon.className = document.body.classList.contains('dark-mode') ? 
                    'fas fa-sun' : 'fas fa-moon';
                    
                darkModeTransition.classList.remove('active');
            }, 500);
        });
        
        // Module Cards Toggle
        moduleCards.forEach(card => {
            card.addEventListener('click', () => {
                const description = card.querySelector('.module-description');
                description.classList.toggle('active');
            });
        });
        
        // Contact Form Validation
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Here you would typically send the form data to a server
                alert('Message sent successfully! May the Force be with you.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
        
        // Create Stars Animation
        function createStars() {
            const stars = document.querySelector('.stars');
            const count = 100;
            
            for (let i = 0; i < count; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                const size = Math.random() * 3;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                const duration = 3 + Math.random() * 10;
                star.style.animationDuration = `${duration}s`;
                star.style.animationDelay = `${Math.random() * 10}s`;
                
                stars.appendChild(star);
            }
        }
        
        // Call function to create stars
        createStars();
        
        // Lightsaber animation on hover
        moduleCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const lightsaber = card.querySelector('.lightsaber');
                lightsaber.style.width = '80%';
            });
            
            card.addEventListener('mouseleave', () => {
                const lightsaber = card.querySelector('.lightsaber');
                lightsaber.style.width = '0';
            });
        });

        document.getElementById("downloadBtn").onclick = function() {
            let fileUrl = "https://drive.google.com/uc?export=download&id=1LCSnEprQWBMWLyUaAhK5VHl1MS8Nc035";
            let link = document.createElement("a");
            link.href = fileUrl;
            link.download = "document.pdf"; // This sets a default filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
